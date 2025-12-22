# Book Cover Images

This directory contains book cover images for the UX Book Recommendations page (`/books`).

## Current Status

**Total Books**: 33  
**Cover Images Available**: 32  
**Missing Images**: 1 (`designing-interfaces.jpg`)

## Image Management

### Automated Download

Book cover images are automatically downloaded using the `download-book-covers.js` script:

```bash
npm run download-covers
```

The script uses the [bookcover.longitood.com API](https://github.com/w3slley/bookcover-api) which fetches images from Goodreads. It includes multiple fallback strategies:
1. Original title + first author
2. Original title + second author (if multiple authors)
3. Cleaned title (without subtitle) + cleaned author
4. Cleaned title only

### Manual Addition

If an image cannot be found via the API, you can manually add it:

1. Download the book cover image from:
   - Amazon product pages
   - Book publisher websites
   - Library databases
   - Stock photo sites with book cover templates

2. Save it to this directory with the exact filename specified in `data/books.json`

3. Ensure you have the right to use the image for your website

## Image Specifications

- **Format**: JPG or PNG
- **Recommended size**: 300x400px (3:4 aspect ratio)
- **Max file size**: 200KB per image (recommended)
- **Naming**: Use lowercase with hyphens (e.g., `dont-make-me-think.jpg`)

## Current Book Covers

All 33 books with their cover image filenames:

1. `dont-make-me-think.jpg` - Don't Make Me Think by Steve Krug ✓
2. `design-of-everyday-things.jpg` - The Design of Everyday Things by Don Norman ✓
3. `about-face.jpg` - About Face by Alan Cooper et al. ✓
4. `lean-ux.jpg` - Lean UX by Jeff Gothelf & Josh Seiden ✓
5. `elements-of-user-experience.jpg` - The Elements of User Experience by Jesse James Garrett ✓
6. `hooked.jpg` - Hooked by Nir Eyal ✓
7. `measuring-user-experience.jpg` - Measuring the User Experience by William Albert & Thomas Tullis ✓
8. `sprint.jpg` - Sprint by Jake Knapp et al. ✓
9. `user-experience-team-of-one.jpg` - The User Experience Team of One by Leah Buley ✓
10. `universal-principles-of-design.jpg` - Universal Principles of Design by William Lidwell et al. ✓
11. `laws-of-ux.jpg` - Laws of UX by Jon Yablonski ✓
12. `just-enough-research.jpg` - Just Enough Research by Erika Hall ✓
13. `interviewing-users.jpg` - Interviewing Users by Steve Portigal ✓
14. `mental-models.jpg` - Mental Models by Indi Young ✓
15. `rocket-surgery-made-easy.jpg` - Rocket Surgery Made Easy by Steve Krug ✓
16. `designing-with-the-mind-in-mind.jpg` - Designing with the Mind in Mind by Jeff Johnson ✓
17. `orchestrating-experiences.jpg` - Orchestrating Experiences by Chris Risdon & Patrick Quattlebaum ✓
18. `user-story-mapping.jpg` - User Story Mapping by Jeff Patton ✓
19. `paper-prototyping.jpg` - Paper Prototyping by Carolyn Snyder ✓
20. `designing-for-emotion.jpg` - Designing for Emotion by Aarron Walter ✓
21. `collaborative-ux-design.jpg` - Collaborative UX Design by Toni Steimle & Dieter Wallach ✓
22. `ux-for-beginners.jpg` - UX for Beginners by Joel Marsh ✓
23. `user-friendly.jpg` - User Friendly by Cliff Kuang & Robert Fabricant ✓
24. `refactoring-ui.jpg` - Refactoring UI by Adam Wathan & Steve Schoger ✓
25. `100-things-every-designer.jpg` - 100 Things Every Designer Needs to Know about People by Susan M. Weinschenk ✓
26. `design-is-a-job.jpg` - Design Is a Job by Mike Monteiro ✓
27. `designing-interfaces.jpg` - Designing Interfaces by Jennifer Tidwell ✗ (missing)
28. `observing-the-user-experience.jpg` - Observing the User Experience by Elizabeth Goodman et al. ✓
29. `think-like-a-ux-researcher.jpg` - Think Like a UX Researcher by David Travis & Philip Hodgson ✓
30. `doorbells-danger-dead-batteries.jpg` - Doorbells, Danger, and Dead Batteries by Steve Portigal ✓
31. `validating-product-ideas.jpg` - Validating Product Ideas by Tomer Sharon ✓
32. `remote-research.jpg` - Remote Research by Nate Bolt & Tony Tulathimutte ✓
33. `designing-for-the-digital-age.jpg` - Designing for the Digital Age by Kim Goodwin ✓

## Git Configuration

**Important**: The `public` directory is NOT ignored in `.gitignore` to ensure book cover images are committed to the repository and deployed to the live server.

## Troubleshooting

### Images not showing on live server
- Ensure images are committed to Git: `git status public/images/books/`
- Check that `.gitignore` doesn't exclude `public/` directory
- Verify image paths in `data/books.json` match actual filenames

### Download script fails
- Check internet connection
- Verify API is accessible: `curl https://bookcover.longitood.com/bookcover?book_title=Test&author_name=Test`
- Try manual download for specific books
- Check console output for specific error messages

### Missing images
- Use the download script with `npm run download-covers`
- For books not found by API, manually download and add to this directory
- Update `data/books.json` if filename differs from expected
