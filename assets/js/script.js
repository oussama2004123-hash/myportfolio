/**
 * Portfolio Website - Main JavaScript
 * Handles animations, language switching, navigation, and form submission
 */

// ============================================
// Language Translations
// ============================================

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            work: "Work",
            contact: "Contact",
            hire: "Hire Me"
        },
        hero: {
            headline: "Are you looking for a stunning website that looks great on any device?",
            para1: "I am a professional web developer and create fully responsive elegant designs. My aim is to provide quality work and always wanted to satisfy my clients with my beautiful designs.",
            viewWork: "View Work",
            contact: "Contact Me"
        },
        about: {
            title: "About Me",
            text: "I'm a front-end developer specializing in creating high-converting digital experiences. With expertise in modern web technologies and conversion optimization, I help businesses transform their online presence into measurable results."
        },
        services: {
            title: "Services",
            landing: {
                title: "Landing Pages",
                text: "High-converting landing pages designed to maximize conversions and drive business growth."
            },
            cpa: {
                title: "CPA Funnels",
                text: "Optimized funnel designs that guide users through the customer journey and increase ROI."
            },
            gaming: {
                title: "Gaming Websites",
                text: "Immersive gaming websites with engaging interfaces and seamless user experiences."
            },
            performance: {
                title: "Performance Optimization",
                text: "Speed optimization and technical improvements for better user experience and SEO."
            }
        },
        myworks: {
            title: "My Works"
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Let's work together",
            description: "Have a project in mind? Contact me directly:",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                submit: "Send Message"
            }
        },
        whatsapp: {
            title: "Let's Start Your Project!",
            message: "Click to discuss your project on WhatsApp",
            notification: "New",
            notificationTitle: "New Message Available!",
            notificationMessage: "Click here to discuss your project on WhatsApp"
        }
    },
    ar: {
        nav: {
            home: "الرئيسية",
            about: "من أنا",
            services: "الخدمات",
            work: "أعمالي",
            contact: "اتصل بي",
            hire: "وظفني"
        },
        hero: {
            headline: "هل تبحث عن موقع ويب رائع يبدو رائعًا على أي جهاز؟",
            para1: "أنا مطور ويب محترف وأنشئ تصاميم أنيقة متجاوبة بالكامل. هدفي هو تقديم عمل عالي الجودة وكنت أرغب دائمًا في إرضاء عملائي بتصاميمي الجميلة.",
            viewWork: "عرض الأعمال",
            contact: "اتصل بي"
        },
        about: {
            title: "من أنا",
            text: "أنا مطور واجهة أمامية متخصص في إنشاء تجارب رقمية عالية التحويل. مع الخبرة في تقنيات الويب الحديثة وتحسين التحويل، أساعد الشركات على تحويل وجودها عبر الإنترنت إلى نتائج قابلة للقياس."
        },
        services: {
            title: "الخدمات",
            landing: {
                title: "صفحات الهبوط",
                text: "صفحات هبوط عالية التحويل مصممة لتعظيم التحويلات ودفع نمو الأعمال."
            },
            cpa: {
                title: "قنوات CPA",
                text: "تصاميم قنوات محسّنة توجه المستخدمين عبر رحلة العميل وتزيد عائد الاستثمار."
            },
            gaming: {
                title: "مواقع الألعاب",
                text: "مواقع ألعاب غامرة بواجهات جذابة وتجارب مستخدم سلسة."
            },
            performance: {
                title: "تحسين الأداء",
                text: "تحسين السرعة والتحسينات التقنية لتجربة مستخدم أفضل وتحسين محركات البحث."
            }
        },
        myworks: {
            title: "أعمالي"
        },
        contact: {
            title: "تواصل معي",
            subtitle: "دعنا نعمل معًا",
            description: "هل لديك مشروع في الاعتبار؟ اتصل بي مباشرة:",
            form: {
                name: "الاسم",
                email: "البريد الإلكتروني",
                message: "الرسالة",
                submit: "إرسال الرسالة"
            }
        },
        whatsapp: {
            title: "لنبدأ مشروعك!",
            message: "انقر لمناقشة مشروعك على واتساب",
            notification: "جديد",
            notificationTitle: "رسالة جديدة متاحة!",
            notificationMessage: "انقر هنا لمناقشة مشروعك على واتساب"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            work: "Travaux",
            contact: "Contact",
            hire: "Engagez-moi"
        },
        hero: {
            headline: "Cherchez-vous un site web magnifique qui a l'air parfait sur n'importe quel appareil ?",
            para1: "Je suis un développeur web professionnel et je crée des designs élégants entièrement responsives. Mon objectif est de fournir un travail de qualité et j'ai toujours voulu satisfaire mes clients avec mes beaux designs.",
            viewWork: "Voir les travaux",
            contact: "Contactez-moi"
        },
        about: {
            title: "À propos de moi",
            text: "Je suis un développeur front-end spécialisé dans la création d'expériences numériques à fort taux de conversion. Avec une expertise en technologies web modernes et en optimisation de conversion, j'aide les entreprises à transformer leur présence en ligne en résultats mesurables."
        },
        services: {
            title: "Services",
            landing: {
                title: "Pages de destination",
                text: "Pages de destination à fort taux de conversion conçues pour maximiser les conversions et stimuler la croissance de l'entreprise."
            },
            cpa: {
                title: "Entonnoirs CPA",
                text: "Conceptions d'entonnoirs optimisées qui guident les utilisateurs à travers le parcours client et augmentent le ROI."
            },
            gaming: {
                title: "Sites de jeux",
                text: "Sites de jeux immersifs avec des interfaces engageantes et des expériences utilisateur fluides."
            },
            performance: {
                title: "Optimisation des performances",
                text: "Optimisation de la vitesse et améliorations techniques pour une meilleure expérience utilisateur et SEO."
            }
        },
        myworks: {
            title: "Mes travaux"
        },
        contact: {
            title: "Contactez-moi",
            subtitle: "Travaillons ensemble",
            description: "Vous avez un projet en tête ? Contactez-moi directement :",
            form: {
                name: "Nom",
                email: "Email",
                message: "Message",
                submit: "Envoyer le message"
            }
        },
        whatsapp: {
            title: "Commençons votre projet!",
            message: "Cliquez pour discuter de votre projet sur WhatsApp",
            notification: "Nouveau",
            notificationTitle: "Nouveau message disponible!",
            notificationMessage: "Cliquez ici pour discuter de votre projet sur WhatsApp"
        }
    }
};

// ============================================
// Language Management
// ============================================

let currentLang = localStorage.getItem('language') || 'en';

/**
 * Set the language and update all translated elements
 * @param {string} lang - Language code (en, ar, fr)
 */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Set RTL for Arabic
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (let k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on page load
setLanguage(currentLang);

// Language button click handlers
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// ============================================
// Mobile Navigation
// ============================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        mobileMenuBtn.textContent = mobileNav.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        });
    });
}

// ============================================
// Scroll Animations
// ============================================

/**
 * Intersection Observer for scroll animations
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once visible for performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe skill items, service cards, and work items for staggered animations
document.querySelectorAll('.skill-item, .service-card, .work-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});

// ============================================
// Header Scroll Effect
// ============================================

const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// WhatsApp Button - Show After 2 Scrolls
// ============================================

let scrollCount = 0;
let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
let scrollThreshold = 30; // Minimum pixels scrolled to count as a scroll event
let scrollTimeout = null;
let hasShownWhatsApp = false;

/**
 * Track scroll events and show WhatsApp button after 2 scrolls
 */
function handleWhatsAppScroll() {
    if (hasShownWhatsApp) return; // Already shown, no need to track
    
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDifference = Math.abs(currentScrollPosition - lastScrollPosition);
    
    // Only count as a scroll if user scrolled more than threshold
    if (scrollDifference > scrollThreshold) {
        // Clear any existing timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        // Set a timeout to count this as a scroll event
        // This prevents counting rapid small movements as multiple scrolls
        scrollTimeout = setTimeout(() => {
            scrollCount++;
            lastScrollPosition = currentScrollPosition;
            
            // Debug removed for production
            
            // Show WhatsApp button after 2 scroll events
            if (scrollCount >= 2 && !hasShownWhatsApp) {
                hasShownWhatsApp = true;
                const whatsappButton = document.querySelector('.whatsapp-float');
                if (whatsappButton && !whatsappButton.classList.contains('show')) {
                    whatsappButton.classList.add('show');
                    
                    // Play message sound when WhatsApp button appears
                    playSound('message');
                    
                    // Show side notification
                    setTimeout(() => {
                        showWhatsAppScreenNotification();
                    }, 500);
                    
                    // Hide WhatsApp button after 5 seconds
                    setTimeout(() => {
                        hideWhatsAppButton();
                    }, 5000);
                }
            }
        }, 200); // Wait 200ms to ensure scroll has settled
    }
}

// Track scroll events separately from header scroll
let isWhatsAppScrolling = false;
window.addEventListener('scroll', () => {
    // Unlock audio on first scroll (user interaction)
    unlockAudio();
    audioContextUnlocked = true;
    
    if (!isWhatsAppScrolling && !hasShownWhatsApp) {
        window.requestAnimationFrame(() => {
            handleWhatsAppScroll();
            isWhatsAppScrolling = false;
        });
        isWhatsAppScrolling = true;
    }
}, { passive: true });

// Also unlock audio on any user interaction
document.addEventListener('click', () => {
    unlockAudio();
    audioContextUnlocked = true;
}, { once: true });
document.addEventListener('touchstart', () => {
    unlockAudio();
    audioContextUnlocked = true;
}, { once: true });
document.addEventListener('keydown', () => {
    unlockAudio();
    audioContextUnlocked = true;
}, { once: true });

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Contact Form Submission
// ============================================

const contactForm = document.getElementById('contactForm');
const API_URL = window.location.origin; // Use same origin for API calls

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Form validation
        if (!name || !email || !message) {
            const errorMsg = currentLang === 'ar' 
                ? 'يرجى ملء جميع الحقول'
                : currentLang === 'fr'
                ? 'Veuillez remplir tous les champs'
                : 'Please fill in all fields';
            showNotification(errorMsg, 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            const errorMsg = currentLang === 'ar' 
                ? 'يرجى إدخال بريد إلكتروني صحيح'
                : currentLang === 'fr'
                ? 'Veuillez entrer une adresse e-mail valide'
                : 'Please enter a valid email address';
            showNotification(errorMsg, 'error');
            return;
        }
        
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = currentLang === 'ar' 
            ? 'جاري الإرسال...'
            : currentLang === 'fr'
            ? 'Envoi en cours...'
            : 'Sending...';
        
        try {
            // Send data to backend
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message })
            });
            
            const data = await response.json();
            
            if (response.ok && data.success) {
                // Success message
                const successMsg = currentLang === 'ar' 
                    ? `شكرًا ${name}! تم إرسال رسالتك بنجاح. سأعود إليك قريبًا.`
                    : currentLang === 'fr'
                    ? `Merci ${name}! Votre message a été envoyé avec succès. Je vous répondrai bientôt.`
                    : `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`;
                
                showNotification(successMsg, 'success');
                
                // Reset form
                contactForm.reset();
            } else {
                // Error from server
                const errorMsg = data.message || (currentLang === 'ar' 
                    ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
                    : currentLang === 'fr'
                    ? 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.'
                    : 'An error occurred while sending the message. Please try again.');
                
                showNotification(errorMsg, 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMsg = currentLang === 'ar' 
                ? 'فشل الاتصال بالخادم. يرجى المحاولة مرة أخرى لاحقًا.'
                : currentLang === 'fr'
                ? 'Échec de la connexion au serveur. Veuillez réessayer plus tard.'
                : 'Failed to connect to server. Please try again later.';
            
            showNotification(errorMsg, 'error');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// ============================================
// Notification System
// ============================================

/**
 * Show a notification message to the user
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 */
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#00ff99' : '#ff4444'};
        color: ${type === 'success' ? '#0f1115' : '#ffffff'};
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
    `;
    
    // Add animation keyframes if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ============================================
// Footer Year
// ============================================

const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// ============================================
// Performance Optimization
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Entrance Animations
// ============================================

/**
 * Initialize entrance animations when page loads
 */
function initEntranceAnimations() {
    // Hero image - pop-in animation
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        setTimeout(() => {
            heroImage.classList.add('animate');
        }, 100);
    }
    
    // Hero heading - slide in from left with blur
    const heroHeading = document.querySelector('.hero h1');
    if (heroHeading) {
        setTimeout(() => {
            heroHeading.classList.add('animate');
        }, 300);
    }
    
    // Hero paragraph - typing animation
    const heroParagraph = document.querySelector('.hero p');
    if (heroParagraph) {
        // Get text after translations are applied
        const originalText = heroParagraph.textContent.trim();
        heroParagraph.textContent = '';
        heroParagraph.classList.add('typing');
        
        setTimeout(() => {
            typeText(heroParagraph, originalText, 20, () => {
                heroParagraph.classList.add('complete');
                // Show social icons one by one after typing completes
                showSocialIconsOneByOne();
            });
        }, 1200);
    }
    
    // Hero buttons - fade in up (appear after social icons)
    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
        setTimeout(() => {
            heroButtons.classList.add('fadeInUp');
        }, 4000);
    }
    
    // Logo animation - pop in
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'scale(0.5)';
        setTimeout(() => {
            logo.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            logo.style.opacity = '1';
            logo.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Work items - pop in animation
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 400 + (index * 150));
    });
    
    // Service cards - slide in from bottom
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
    
    // Skill items - fade in with stagger
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 600 + (index * 50));
    });
}

// ============================================
// WhatsApp Tooltip Auto-Show
// ============================================

/**
 * Show WhatsApp tooltip on hover (only after button is visible)
 */
function initWhatsAppTooltip() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    const tooltip = document.querySelector('.whatsapp-tooltip');
    
    if (whatsappButton && tooltip) {
        // Show tooltip on hover (only when button is visible)
        whatsappButton.addEventListener('mouseenter', () => {
            if (whatsappButton.classList.contains('show')) {
                tooltip.classList.add('show');
            }
        });
        
        whatsappButton.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!whatsappButton.matches(':hover')) {
                    tooltip.classList.remove('show');
                }
            }, 100);
        });
    }
}

// ============================================
// WhatsApp Screen Notification
// ============================================

/**
 * Show the professional WhatsApp notification beside the button
 */
function showWhatsAppScreenNotification() {
    const notification = document.getElementById('whatsappSideNotification');
    const whatsappButton = document.querySelector('.whatsapp-float');
    
    if (!notification || !whatsappButton) {
        console.log('WhatsApp notification or button not found');
        return;
    }
    
    if (!whatsappButton.classList.contains('show')) {
        console.log('WhatsApp button not shown yet');
        return;
    }
    
    // Update translations
    const messageElement = notification.querySelector('.side-notification-message');
    
    if (messageElement) {
        const messageKey = messageElement.getAttribute('data-translate');
        
        if (messageKey) {
            const keys = messageKey.split('.');
            let translation = translations[currentLang];
            for (let k of keys) {
                if (translation && translation[k]) {
                    translation = translation[k];
                } else {
                    translation = null;
                    break;
                }
            }
            if (translation) messageElement.textContent = translation;
        }
    }
    
    // The notification will show automatically via CSS when .whatsapp-float.show is active
    // Auto-hide after 5 seconds
    setTimeout(() => {
        closeWhatsAppSideNotification();
    }, 5000);
}

/**
 * Close the WhatsApp side notification
 */
function closeWhatsAppSideNotification() {
    const notification = document.getElementById('whatsappSideNotification');
    if (notification) {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(20px) scale(0.9)';
        notification.style.visibility = 'hidden';
        notification.style.pointerEvents = 'none';
        
        setTimeout(() => {
            if (currentLang === 'ar') {
                notification.style.transform = 'translateX(-20px) scale(0.9)';
            }
        }, 500);
    }
}

/**
 * Hide the WhatsApp button after 5 seconds
 */
function hideWhatsAppButton() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    const notification = document.getElementById('whatsappSideNotification');
    
    if (whatsappButton && whatsappButton.classList.contains('show')) {
        // Hide notification first
        if (notification) {
            closeWhatsAppSideNotification();
        }
        
        // Hide button with fade out animation
        whatsappButton.style.transition = 'opacity 0.5s ease, transform 0.5s ease, visibility 0.5s ease';
        whatsappButton.style.opacity = '0';
        whatsappButton.style.transform = 'scale(0.8) rotate(180deg)';
        whatsappButton.style.visibility = 'hidden';
        whatsappButton.style.pointerEvents = 'none';
        
        // Remove show class after animation
        setTimeout(() => {
            whatsappButton.classList.remove('show');
        }, 500);
    }
}

// Make functions globally available
window.closeWhatsAppSideNotification = closeWhatsAppSideNotification;
window.hideWhatsAppButton = hideWhatsAppButton;

// ============================================
// Sound Effects
// ============================================

// Preload audio files
let typingAudio = null;
let messageAudio = null;
let soundsLoaded = false;
let audioContextUnlocked = false;

/**
 * Unlock audio context (required for autoplay in modern browsers)
 */
function unlockAudio() {
    if (audioContextUnlocked) return;
    
    // Try multiple methods to unlock audio
    try {
        // Method 1: Create a silent audio and play it
        const unlockAudio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=');
        unlockAudio.volume = 0.01;
        unlockAudio.play().then(() => {
            audioContextUnlocked = true;
            unlockAudio.pause();
        }).catch(() => {
            // Try alternative method
            audioContextUnlocked = true; // Assume unlocked after user interaction
        });
    } catch (e) {
        audioContextUnlocked = true;
    }
}

/**
 * Initialize and preload all sound effects
 */
function initSounds() {
    try {
        // Unlock audio context first
        unlockAudio();
        
        // Preload typing sound - try multiple paths
        typingAudio = new Audio('sounds/typing.mp3.mp4');
        typingAudio.volume = 0.4;
        typingAudio.loop = true;
        typingAudio.preload = 'auto';
        
        typingAudio.addEventListener('error', () => {
            // Try alternative path if first fails
            typingAudio.src = './sounds/typing.mp3.mp4';
        });
        
        typingAudio.load().catch(() => {
            // Silently fail - sounds are optional
        });
        
        // Preload message sound
        messageAudio = new Audio('sounds/message.mp3.mpeg');
        messageAudio.volume = 0.6;
        messageAudio.preload = 'auto';
        
        messageAudio.addEventListener('error', () => {
            // Try alternative path if first fails
            messageAudio.src = './sounds/message.mp3.mpeg';
        });
        
        messageAudio.load().catch(() => {
            // Silently fail - sounds are optional
        });
        
        soundsLoaded = true;
    } catch (error) {
        // Silently fail - sounds are optional, don't break the page
        console.log('Sounds initialization skipped:', error);
        soundsLoaded = true; // Set to true anyway so page continues
    }
}

/**
 * Play a sound effect
 * @param {string} soundType - Type of sound: 'typing', 'icon', or 'message'
 */
function playSound(soundType) {
    try {
        // Always unlock audio first
        unlockAudio();
        audioContextUnlocked = true; // Mark as unlocked after first attempt
        
        switch(soundType) {
            case 'typing':
                if (typingAudio && typingAudio.readyState >= 2) {
                    // Use preloaded audio
                    typingAudio.currentTime = 0;
                    const typingPlay = typingAudio.play();
                    if (typingPlay !== undefined) {
                        typingPlay.catch(err => {
                            console.log('Typing sound error, trying fallback:', err);
                            // Fallback: create new instance
                            const fallback = new Audio('sounds/typing.mp3.mp4');
                            fallback.volume = 0.4;
                            fallback.loop = true;
                            fallback.play().catch(() => {});
                        });
                    }
                } else {
                    // Create new instance
                    const audio = new Audio('sounds/typing.mp3.mp4');
                    audio.volume = 0.4;
                    audio.loop = true;
                    const playPromise = audio.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            // Try alternative path
                            audio.src = './sounds/typing.mp3.mp4';
                            audio.play().catch(() => {});
                        });
                    }
                }
                break;
            case 'icon':
                // Always create new instance for overlapping sounds
                const iconSound = new Audio('sounds/iconspopup.mp3.mpeg');
                iconSound.volume = 0.5;
                const iconPlay = iconSound.play();
                if (iconPlay !== undefined) {
                    iconPlay.catch(() => {
                        // Try alternative path
                        iconSound.src = './sounds/iconspopup.mp3.mpeg';
                        iconSound.play().catch(() => {
                            // Try one more time after delay
                            setTimeout(() => {
                                iconSound.play().catch(() => {});
                            }, 100);
                        });
                    });
                }
                break;
            case 'message':
                if (messageAudio && messageAudio.readyState >= 2) {
                    // Use preloaded audio
                    messageAudio.currentTime = 0;
                    const messagePlay = messageAudio.play();
                    if (messagePlay !== undefined) {
                        messagePlay.catch(err => {
                            console.log('Message sound error, trying fallback:', err);
                            // Fallback: create new instance
                            const fallback = new Audio('sounds/message.mp3.mpeg');
                            fallback.volume = 0.6;
                            fallback.play().catch(() => {});
                        });
                    }
                } else {
                    // Create new instance
                    const audio = new Audio('sounds/message.mp3.mpeg');
                    audio.volume = 0.6;
                    const playPromise = audio.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            // Try alternative path
                            audio.src = './sounds/message.mp3.mpeg';
                            audio.play().catch(() => {});
                        });
                    }
                }
                break;
        }
    } catch (error) {
        console.log('Sound playback error:', error);
    }
}

/**
 * Stop typing sound
 */
function stopTypingSound() {
    if (typingAudio) {
        typingAudio.pause();
        typingAudio.currentTime = 0;
    }
}

// ============================================
// Typing Animation Function
// ============================================

/**
 * Type text character by character
 * @param {HTMLElement} element - Element to type into
 * @param {string} text - Text to type
 * @param {number} speed - Delay between characters in ms
 * @param {Function} callback - Callback when typing completes
 */
function typeText(element, text, speed = 50, callback = null) {
    let index = 0;
    
    // Play typing sound in a loop
    playSound('typing');
    
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent = text.substring(0, index + 1);
            index++;
        } else {
            clearInterval(typingInterval);
            
            // Stop typing sound when done
            stopTypingSound();
            
            if (callback) {
                callback();
            }
        }
    }, speed);
}

// ============================================
// Social Icons Animation
// ============================================

/**
 * Show social media icons one by one with pop animation
 */
function showSocialIconsOneByOne() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    if (socialIcons.length > 0) {
        // Initially hide all icons
        socialIcons.forEach((icon, index) => {
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0)';
            icon.style.visibility = 'hidden';
            
            // Show each icon one by one with pop animation
            setTimeout(() => {
                icon.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                icon.style.opacity = '1';
                icon.style.transform = 'scale(1)';
                icon.style.visibility = 'visible';
                
                // Play pop sound for each icon
                playSound('icon');
            }, index * 150); // 150ms delay between each icon
        });
    }
}

// ============================================
// Initialize on DOM Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Add visible class to hero section immediately
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.classList.add('visible');
        }
        
        // Initialize sounds (non-blocking, won't break page if it fails)
        try {
            initSounds();
        } catch (err) {
            console.log('Sound initialization skipped');
        }
        
        // Initialize entrance animations (after translations are applied)
        setTimeout(() => {
            initEntranceAnimations();
        }, 100);
        
        // Initialize WhatsApp tooltip
        initWhatsAppTooltip();
        
        // Initialize scroll position for WhatsApp button tracking
        lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Initialize all components
        console.log('Portfolio website initialized');
    } catch (error) {
        console.error('Error during initialization:', error);
        // Ensure page still works even if initialization fails
    }
});
