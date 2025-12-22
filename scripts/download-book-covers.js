const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')

const booksData = require('../data/books.json')
const outputDir = path.join(__dirname, '../public/images/books')

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Mapping of book IDs to filenames
const bookFileMap = {
  'b01': 'dont-make-me-think.jpg',
  'b02': 'design-of-everyday-things.jpg',
  'b03': 'about-face.jpg',
  'b04': 'lean-ux.jpg',
  'b05': 'elements-of-user-experience.jpg',
  'b06': 'hooked.jpg',
  'b07': 'measuring-user-experience.jpg',
  'b08': 'sprint.jpg',
  'b09': 'user-experience-team-of-one.jpg',
  'b10': 'universal-principles-of-design.jpg',
  'b11': 'laws-of-ux.jpg',
  'b12': 'just-enough-research.jpg',
  'b13': 'interviewing-users.jpg',
  'b14': 'mental-models.jpg',
  'b15': 'rocket-surgery-made-easy.jpg',
  'b16': 'designing-with-the-mind-in-mind.jpg',
  'b17': 'orchestrating-experiences.jpg',
  'b18': 'user-story-mapping.jpg',
  'b19': 'paper-prototyping.jpg',
  'b20': 'designing-for-emotion.jpg',
  'b21': 'collaborative-ux-design.jpg',
  'b22': 'ux-for-beginners.jpg',
  'b23': 'user-friendly.jpg',
  'b24': 'refactoring-ui.jpg',
  'b25': '100-things-every-designer.jpg',
  'b26': 'design-is-a-job.jpg',
  'b27': 'designing-interfaces.jpg',
  'b28': 'observing-the-user-experience.jpg',
  'b29': 'think-like-a-ux-researcher.jpg',
  'b30': 'doorbells-danger-dead-batteries.jpg',
  'b31': 'validating-product-ideas.jpg',
  'b32': 'remote-research.jpg',
  'b33': 'designing-for-the-digital-age.jpg'
}

// Bookcover API endpoint
const BOOKCOVER_API = 'https://bookcover.longitood.com/bookcover'

// Helper function to clean author name (take first author if multiple)
function cleanAuthorName(authorName) {
  // If multiple authors, take the first one
  const firstAuthor = authorName.split(',')[0].trim()
  // Remove "et al." or similar suffixes
  return firstAuthor.replace(/\s+et\s+al\.?/i, '').trim()
}

// Helper function to clean book title (remove subtitle after colon)
function cleanBookTitle(bookTitle) {
  // Remove subtitle after colon if present
  return bookTitle.split(':')[0].trim()
}

function fetchBookCoverUrl(bookTitle, authorName, originalTitle = null, originalAuthor = null) {
  return new Promise((resolve, reject) => {
    const encodedTitle = encodeURIComponent(bookTitle)
    const encodedAuthor = encodeURIComponent(authorName)
    const url = `${BOOKCOVER_API}?book_title=${encodedTitle}&author_name=${encodedAuthor}`
    
    https.get(url, (response) => {
      let data = ''
      
      response.on('data', (chunk) => {
        data += chunk
      })
      
      response.on('end', () => {
        if (response.statusCode === 200) {
          try {
            const json = JSON.parse(data)
            if (json.url) {
              resolve(json.url)
            } else {
              reject(new Error('No URL in API response'))
            }
          } catch (error) {
            reject(new Error(`Failed to parse API response: ${error.message}`))
          }
        } else if (response.statusCode === 404) {
          reject(new Error('Book cover not found'))
        } else {
          reject(new Error(`API error: ${response.statusCode} ${response.statusMessage}`))
        }
      })
    }).on('error', (error) => {
      reject(error)
    })
  })
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    const filename = path.basename(filepath)
    
    console.log(`  Downloading image from: ${url.substring(0, 60)}...`)
    
    const file = fs.createWriteStream(filepath)
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close()
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath)
        }
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject)
      }
      
      if (response.statusCode !== 200) {
        file.close()
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath)
        }
        reject(new Error(`Failed to download: ${response.statusCode} ${response.statusMessage}`))
        return
      }
      
      response.pipe(file)
      
      file.on('finish', () => {
        file.close()
        const stats = fs.statSync(filepath)
        console.log(`  ✓ Downloaded ${filename} (${(stats.size / 1024).toFixed(2)} KB)`)
        resolve()
      })
    }).on('error', (err) => {
      file.close()
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath)
      }
      reject(err)
    })
  })
}

async function downloadAllCovers() {
  console.log('Starting download of book covers using bookcover.longitood.com API...\n')
  
  const books = booksData.books
  let successCount = 0
  let failCount = 0
  
  for (const book of books) {
    const filename = bookFileMap[book.id]
    if (!filename) {
      console.warn(`⚠ No filename mapping for book ${book.id}: ${book.title}`)
      continue
    }
    
    const filepath = path.join(outputDir, filename)
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`⊘ Skipping ${filename} (already exists)`)
      continue
    }
    
    console.log(`\n📚 ${book.title} by ${book.author}`)
    
    try {
      // Try with original title and author first
      let coverUrl = null
      let lastError = null
      
      // Strategy 1: Original title and cleaned author (first author only)
      try {
        const cleanedAuthor = cleanAuthorName(book.author)
        coverUrl = await fetchBookCoverUrl(book.title, cleanedAuthor)
        console.log(`  ✓ Found cover URL (original title, cleaned author)`)
      } catch (error) {
        lastError = error
        // Strategy 1b: Try with second author if multiple authors
        if (book.author.includes(',')) {
          try {
            const authors = book.author.split(',').map(a => a.trim())
            if (authors.length > 1) {
              coverUrl = await fetchBookCoverUrl(book.title, authors[1])
              console.log(`  ✓ Found cover URL (original title, second author)`)
            } else {
              throw error
            }
          } catch (error1b) {
            lastError = error1b
            // Strategy 2: Cleaned title (no subtitle) and cleaned author
            try {
              const cleanedTitle = cleanBookTitle(book.title)
              const cleanedAuthor = cleanAuthorName(book.author)
              coverUrl = await fetchBookCoverUrl(cleanedTitle, cleanedAuthor)
              console.log(`  ✓ Found cover URL (cleaned title, cleaned author)`)
            } catch (error2) {
              lastError = error2
              // Strategy 2b: Cleaned title with second author
              if (book.author.includes(',')) {
                try {
                  const authors = book.author.split(',').map(a => a.trim())
                  const cleanedTitle = cleanBookTitle(book.title)
                  if (authors.length > 1) {
                    coverUrl = await fetchBookCoverUrl(cleanedTitle, authors[1])
                    console.log(`  ✓ Found cover URL (cleaned title, second author)`)
                  } else {
                    throw error2
                  }
                } catch (error2b) {
                  lastError = error2b
                  // Strategy 3: Just cleaned title, no author
                  try {
                    const cleanedTitle = cleanBookTitle(book.title)
                    coverUrl = await fetchBookCoverUrl(cleanedTitle, '')
                    console.log(`  ✓ Found cover URL (cleaned title only)`)
                  } catch (error3) {
                    lastError = error3
                    throw lastError
                  }
                }
              } else {
                // Strategy 3: Just cleaned title, no author
                try {
                  const cleanedTitle = cleanBookTitle(book.title)
                  coverUrl = await fetchBookCoverUrl(cleanedTitle, '')
                  console.log(`  ✓ Found cover URL (cleaned title only)`)
                } catch (error3) {
                  lastError = error3
                  throw lastError
                }
              }
            }
          }
        } else {
          // Strategy 2: Cleaned title (no subtitle) and cleaned author
          try {
            const cleanedTitle = cleanBookTitle(book.title)
            const cleanedAuthor = cleanAuthorName(book.author)
            coverUrl = await fetchBookCoverUrl(cleanedTitle, cleanedAuthor)
            console.log(`  ✓ Found cover URL (cleaned title, cleaned author)`)
          } catch (error2) {
            lastError = error2
            // Strategy 3: Just cleaned title, no author
            try {
              const cleanedTitle = cleanBookTitle(book.title)
              coverUrl = await fetchBookCoverUrl(cleanedTitle, '')
              console.log(`  ✓ Found cover URL (cleaned title only)`)
            } catch (error3) {
              lastError = error3
              throw lastError
            }
          }
        }
      }
      
      // Download the image
      await downloadImage(coverUrl, filepath)
      successCount++
      
      // Small delay to be respectful to the API
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`  ✗ Failed: ${error.message}`)
      failCount++
    }
  }
  
  console.log('\n' + '='.repeat(50))
  console.log(`✓ Download complete!`)
  console.log(`  Success: ${successCount}`)
  console.log(`  Failed: ${failCount}`)
  console.log(`\nImages saved to: ${outputDir}`)
}

// Run the script
downloadAllCovers().catch((error) => {
  console.error('Error:', error)
  process.exit(1)
})
