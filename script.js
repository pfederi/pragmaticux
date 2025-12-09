// Pragmatic UX Design - Interactive Elements
// Swiss Design inspired JavaScript with smooth animations

// Expandable Principles Functionality
function togglePrinciple(principleId) {
    const principleItem = document.querySelector(`[data-principle="${principleId}"]`);
    const details = principleItem.querySelector('.principle-details');
    const button = principleItem.querySelector('.expand-btn');
    const expandText = button.querySelector('.expand-text');
    
    if (details.classList.contains('expanded')) {
        // Collapse
        details.classList.remove('expanded');
        button.classList.remove('expanded');
        expandText.textContent = 'Learn More';
        
        // Scroll to top of card
        principleItem.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
        });
    } else {
        // Expand
        details.classList.add('expanded');
        button.classList.add('expanded');
        expandText.textContent = 'Show';
        
        // Close other expanded principles
        document.querySelectorAll('.principle-details.expanded').forEach(otherDetails => {
            if (otherDetails !== details) {
                const otherItem = otherDetails.closest('.principle-item');
                const otherButton = otherItem.querySelector('.expand-btn');
                const otherExpandText = otherButton.querySelector('.expand-text');
                
                otherDetails.classList.remove('expanded');
                otherButton.classList.remove('expanded');
                otherExpandText.textContent = 'Learn More';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.principle-card, .benefit-item, .process-step');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Principle cards hover effect enhancement
    const principleCards = document.querySelectorAll('.principle-card');
    principleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Hero title - no animation, just show immediately
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        heroTitle.style.opacity = '1';
    }

    // Load and render principles dynamically
    loadPrinciples();
    
    // Load decision tree
    loadDecisionTree();
    
    // Initialize scroll monitor for floating back button
    initScrollMonitor();
    
    // Button click effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-tertiary) 100%);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };
    
    createScrollProgress();
    
    // Performance optimization: Debounce scroll events
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    
    // Apply debouncing to scroll-heavy functions
    const debouncedScroll = debounce(() => {
        // Any heavy scroll operations can go here
    }, 10);
    
    window.addEventListener('scroll', debouncedScroll);
    
    // Accessibility: Focus management
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    // Keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Preload critical resources
    const preloadCriticalResources = () => {
        const criticalImages = document.querySelectorAll('img[data-preload]');
        criticalImages.forEach(img => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = img.src;
            document.head.appendChild(link);
        });
    };
    
    preloadCriticalResources();
});

// CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid #ff3333 !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);

// Load principles from JSON
async function loadPrinciples() {
    try {
        console.log('Loading principles...');
        const response = await fetch('./data/principles.json');
        const data = await response.json();
        console.log('Principles loaded:', data.principles.length, 'principles');
        principlesData = data.principles; // Store for decision tree
        renderPrinciples(data.principles);
        console.log('Principles rendered');
    } catch (error) {
        console.error('Error loading principles:', error);
    }
}

// Render principles HTML
function renderPrinciples(principles) {
    const principlesGrid = document.querySelector('.principles-grid');
    if (!principlesGrid) return;

    principlesGrid.innerHTML = '';

    principles.forEach(principle => {
        const principleHTML = createPrincipleHTML(principle);
        principlesGrid.appendChild(principleHTML);
    });
}

// Create HTML for a single principle
function createPrincipleHTML(principle) {
    const principleDiv = document.createElement('div');
    principleDiv.className = 'principle-item';
    principleDiv.setAttribute('data-principle', principle.id);

    let sectionsHTML = '';
    if (principle.examples && principle.examples.length > 0) {
        sectionsHTML = createExpandedSectionsHTML(principle);
        sectionsHTML = `
            <div class="principle-details">
                ${sectionsHTML}
            </div>
        `;
    }

    // Handle both old and new structure for number display
    const displayNumber = principle.order ? String(principle.order).padStart(2, '0') : principle.number;
    
    // Handle both old and new structure for description/narrative
    const description = principle.narrative || principle.description || [];

    principleDiv.innerHTML = `
        <div class="principle-icon">${displayNumber}</div>
        
        <div class="principle-main">
            <div class="principle-left-column">
                <h3>${principle.title}</h3>
                <p class="principle-summary">${principle.summary}</p>
            </div>
            
            <div class="principle-right-column">
                ${description.map(p => `<p>${p}</p>`).join('')}
            </div>
        </div>
        
        ${sectionsHTML}
        
        ${(principle.examples && principle.examples.length > 0) ? `
            <button class="expand-btn" onclick="togglePrinciple('${principle.id}')">
                <span class="expand-text">Learn More</span>
                <span class="expand-icon">+</span>
            </button>
        ` : ''}
    `;

    return principleDiv;
}

// Create HTML for expanded sections using new JSON structure
function createExpandedSectionsHTML(principle) {
    let sectionsHTML = '';

    // Examples section - now simple strings, parse title and description
    if (principle.examples && principle.examples.length > 0) {
        const exampleItems = principle.examples.map(example => {
            // Split on first colon to separate title from description
            const colonIndex = example.indexOf(':');
            if (colonIndex > 0) {
                const title = example.substring(0, colonIndex).trim();
                const description = example.substring(colonIndex + 1).trim();
                return `
                    <div class="example-item">
                        <h5>${title}</h5>
                        <p>${description}</p>
                    </div>
                `;
            } else {
                return `
                    <div class="example-item">
                        <p>${example}</p>
                    </div>
                `;
            }
        }).join('');

        sectionsHTML += `
            <div></div> <!-- Empty first column -->
            <div class="content-section examples-section">
                <div class="content-section-title">
                    <h4>Practical Examples:</h4>
                </div>
                <div class="content-section-content">
                    <div class="example-grid">
                        ${exampleItems}
                    </div>
                </div>
            </div>
        `;
    }

    // Why matters section (replaces benefits) - now in boxes with title/text parsing
    if (principle.why_matters && principle.why_matters.length > 0) {
        const whyMattersItems = principle.why_matters.map(item => {
            // Split on first " — " to separate title from description (same as examples)
            const dashIndex = item.indexOf(' — ');
            if (dashIndex > 0) {
                const title = item.substring(0, dashIndex).trim();
                const description = item.substring(dashIndex + 3).trim();
                return `
                    <div class="why-matters-item">
                        <h5>${title}</h5>
                        <p>${description}</p>
                    </div>
                `;
            } else {
                return `
                    <div class="why-matters-item">
                        <p>${item}</p>
                    </div>
                `;
            }
        }).join('');

        sectionsHTML += `
            <div></div> <!-- Empty first column -->
            <div class="content-section why-matters-section">
                <div class="content-section-title">
                    <h4>Why does this matter for Pragmatic UX Design?</h4>
                </div>
                <div class="content-section-content">
                    <div class="why-matters-grid">
                        ${whyMattersItems}
                    </div>
                </div>
            </div>
        `;
    }

    // Questions section (now "instead_of_asking") - now in boxes
    if (principle.instead_of_asking && principle.instead_of_asking.length > 0) {
        const questionItems = principle.instead_of_asking.map(question => {
            // For consistency, questions don't have titles, just content
            return `
                <div class="question-item">
                    <p>${question}</p>
                </div>
            `;
        }).join('');

        sectionsHTML += `
            <div></div> <!-- Empty first column -->
            <div class="content-section questions-section">
                <div class="content-section-title">
                    <h4>Key Questions to Ask:</h4>
                </div>
                <div class="content-section-content">
                    <div class="questions-grid">
                        ${questionItems}
                    </div>
                </div>
            </div>
        `;
    }

    return sectionsHTML;
}

// Decision Tree functionality
let decisionTreeData = null;
let principlesData = null;
let userAnswers = {};
let currentQuestionIndex = 0;

async function loadDecisionTree() {
    try {
        const response = await fetch('data/decision_tree.json');
        decisionTreeData = await response.json();
        
        // Wait for principles to be loaded before initializing
        if (principlesData) {
            initializeDecisionTree();
        } else {
            // Wait a bit and try again
            setTimeout(() => {
                if (principlesData) {
                    initializeDecisionTree();
                } else {
                    console.warn('Principles data not loaded yet, initializing anyway');
                    initializeDecisionTree();
                }
            }, 1000);
        }
    } catch (error) {
        console.error('Error loading decision tree:', error);
    }
}

function initializeDecisionTree() {
    userAnswers = {};
    currentQuestionIndex = 0;
    renderCurrentQuestion();
}

function renderCurrentQuestion() {
    const container = document.getElementById('decision-tree-content');
    if (!container || !decisionTreeData) return;

    const questions = decisionTreeData.questions;
    if (currentQuestionIndex >= questions.length) {
        evaluateAndShowResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    
    container.innerHTML = `
        <div class="decision-question">
            <div class="question-progress">
                <span class="progress-text">Question ${currentQuestionIndex + 1} of ${questions.length}</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${((currentQuestionIndex + 1) / questions.length) * 100}%"></div>
                </div>
            </div>
            <h4 class="question-text">${question.label}</h4>
            <div class="decision-options">
                ${question.options.map((option, index) => `
                    <button class="decision-option-btn" data-option-value="${option.value}" data-option-index="${index}">
                        ${option.label}
                    </button>
                `).join('')}
            </div>
            ${currentQuestionIndex > 0 ? '<button class="decision-back-btn">← Back</button>' : ''}
        </div>
    `;

    // Add event listeners to option buttons
    container.querySelectorAll('.decision-option-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const value = btn.getAttribute('data-option-value');
            userAnswers[question.id] = value;
            currentQuestionIndex++;
            renderCurrentQuestion();
        });
    });

    // Add back button functionality
    const backBtn = container.querySelector('.decision-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            currentQuestionIndex--;
            // Remove the answer for the current question
            const prevQuestion = questions[currentQuestionIndex];
            delete userAnswers[prevQuestion.id];
            renderCurrentQuestion();
        });
    }
}

function evaluateAndShowResults() {
    const matchingRules = [];
    
    // Find all matching rules
    decisionTreeData.rules.forEach(rule => {
        let matches = true;
        for (const [key, value] of Object.entries(rule.if)) {
            if (userAnswers[key] !== value) {
                matches = false;
                break;
            }
        }
        if (matches) {
            matchingRules.push(rule.then);
        }
    });

    // Combine results from all matching rules
    const combinedResults = {
        principles: [],
        methods: []
    };

    matchingRules.forEach(result => {
        if (result.principles) {
            combinedResults.principles.push(...result.principles);
        }
        if (result.methods) {
            combinedResults.methods.push(...result.methods);
        }
    });

    // Remove duplicates and limit results
    combinedResults.principles = [...new Set(combinedResults.principles)].slice(0, 3);
    combinedResults.methods = [...new Set(combinedResults.methods)].slice(0, 6);

    showResults(combinedResults);
}

function showResults(results) {
    const contentContainer = document.getElementById('decision-tree-content');
    const resultsContainer = document.getElementById('decision-tree-results');
    const principlesContainer = document.getElementById('recommended-principles');
    
    contentContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    let resultsHTML = '';

    // Show user's answers summary
    resultsHTML += `
        <div class="results-section">
            <h4 class="results-section-title">Your Situation</h4>
            <div class="answers-summary">
                ${generateAnswersSummary()}
            </div>
        </div>
    `;

    // Render Principles
    console.log('Results:', results);
    console.log('PrinciplesData:', principlesData);
    if (results.principles && results.principles.length > 0 && principlesData) {
        const recommendedPrinciples = principlesData.filter(p => results.principles.includes(p.id));
        console.log('Recommended principles:', recommendedPrinciples);
        resultsHTML += `
            <div class="results-section">
                <h4 class="results-section-title">Your Results</h4>
                <div class="principles-results">
                    ${recommendedPrinciples.map(principle => `
                        <div class="recommended-principle">
                            <div class="principle-recommendation">
                                <div class="principle-number">${principle.order.toString().padStart(2, '0')}</div>
                                <div class="principle-info">
                                    <h5>${principle.title}</h5>
                                    <p>${principle.summary}</p>
                                    <a href="#principles" class="principle-link" onclick="scrollToPrinciple('${principle.id}')">
                                        Learn more →
                                    </a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Render Methods
    if (results.methods && results.methods.length > 0) {
        resultsHTML += `
            <div class="results-section">
                <h4 class="results-section-title">Suggested Methods</h4>
                <div class="methods-results">
                    ${results.methods.map(method => `
                        <div class="method-item">
                            <span class="method-name">${method}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }


    principlesContainer.innerHTML = resultsHTML;
    
    // Add restart functionality
    const restartBtn = document.getElementById('restart-tree');
    restartBtn.onclick = () => {
        contentContainer.style.display = 'block';
        resultsContainer.style.display = 'none';
        initializeDecisionTree();
        
        // Scroll back to "Find Your Principles" section
        setTimeout(() => {
            const approachSection = document.getElementById('approach');
            if (approachSection) {
                approachSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
                });
            }
        }, 100);
    };
}

function scrollToPrinciple(principleId) {
    // First, find the principle element
    const principleElement = document.querySelector(`[data-principle="${principleId}"]`);
    if (!principleElement) return;
    
    // Close all other expanded principles first
    const allPrinciples = document.querySelectorAll('.principle-item.expanded');
    allPrinciples.forEach(item => {
        if (item !== principleElement) {
            const expandBtn = item.querySelector('.expand-btn');
            if (expandBtn) {
                expandBtn.click();
            }
        }
    });
    
    // Wait for other principles to close, then scroll to the target principle
    setTimeout(() => {
        principleElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
        });
        
        // Show the floating back button after scrolling
        setTimeout(() => {
            showFloatingBackButton();
        }, 500);
    }, 300);
}

function generateAnswersSummary() {
    if (!decisionTreeData || !userAnswers) return '';
    
    const questions = decisionTreeData.questions;
    const summaryItems = [];
    
    questions.forEach(question => {
        const userAnswer = userAnswers[question.id];
        if (userAnswer) {
            const selectedOption = question.options.find(opt => opt.value === userAnswer);
            if (selectedOption) {
                summaryItems.push(`
                    <div class="answer-item">
                        <span class="answer-question">${question.label}</span>
                        <span class="answer-value">${selectedOption.label}</span>
                    </div>
                `);
            }
        }
    });
    
    return summaryItems.join('');
}

// Floating Back Button functionality
function createFloatingBackButton() {
    // Check if button already exists
    if (document.getElementById('floating-back-btn')) return;
    
    const backBtn = document.createElement('button');
    backBtn.id = 'floating-back-btn';
    backBtn.className = 'floating-back-button hidden';
    backBtn.innerHTML = '↓ Back to Helper';
    backBtn.onclick = scrollBackToHelper;
    
    document.body.appendChild(backBtn);
}

function showFloatingBackButton() {
    createFloatingBackButton();
    const backBtn = document.getElementById('floating-back-btn');
    if (backBtn) {
        backBtn.classList.remove('hidden');
    }
}

function hideFloatingBackButton() {
    const backBtn = document.getElementById('floating-back-btn');
    if (backBtn) {
        backBtn.classList.add('hidden');
    }
}

function scrollBackToHelper() {
    const helperSection = document.getElementById('approach');
    if (helperSection) {
        helperSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
        });
        
        // Hide the button after scrolling back
        setTimeout(() => {
            hideFloatingBackButton();
        }, 500);
    }
}

// Monitor scroll position to show/hide floating button
function initScrollMonitor() {
    let ticking = false;
    
    function checkScrollPosition() {
        const helperSection = document.getElementById('approach');
        const principlesSection = document.getElementById('principles');
        
        if (!helperSection || !principlesSection) return;
        
        const helperRect = helperSection.getBoundingClientRect();
        const principlesRect = principlesSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Show button if we're in the principles section and helper is not visible
        const inPrinciplesSection = principlesRect.top < viewportHeight && principlesRect.bottom > 0;
        const helperVisible = helperRect.top < viewportHeight && helperRect.bottom > 0;
        
        if (inPrinciplesSection && !helperVisible) {
            // Only show if we came from the helper (check if results are visible)
            const resultsContainer = document.getElementById('decision-tree-results');
            if (resultsContainer && resultsContainer.style.display !== 'none') {
                showFloatingBackButton();
            }
        } else if (helperVisible) {
            hideFloatingBackButton();
        }
        
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(checkScrollPosition);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll);
}
