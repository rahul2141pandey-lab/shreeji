# Shreeji Web Studio — Official Website

> **Your Vision. Our Digital Craft.**

A premium, modern, conversion-focused business website built for **Shreeji Web Studio**, a professional website development and digital solutions studio helping local businesses, coaching institutes, startups, service providers, and personal brands build trust and generate customer enquiries.

---

## 🎨 Visual Identity & Design System

- **Palette**: Ivory / Crisp White (`#FAF9F5`, `#FFFFFF`), Deep Charcoal (`#121316`, `#1A1D24`), and Metallic Gold Accents (`#C5A059`, `#D4AF37`, subtle gradients).
- **Typography**: Google Fonts pairing of **Manrope** (bold, modern geometric headings) and **Inter** (ultra-legible UI and body text).
- **Micro-Interactions**: Floating device/feature badges, sleek browser mockup, interactive process timeline, single-open accessible FAQ accordions, and smart form pre-fills.
- **Motion & Accessibility**: Smooth fade-up animations powered by native `IntersectionObserver` with full `@media (prefers-reduced-motion: reduce)` respect.

---

## 📂 Project Structure

```
shreeji/
├── index.html            # Complete semantic, SEO-optimized single-page website
├── css/
│   └── style.css         # Custom responsive stylesheet (Ivory + Gold + Charcoal)
├── js/
│   ├── config.js         # Central business settings (WhatsApp, Email, Links, Demos)
│   └── main.js           # Client-side interactivity (Accordions, Modals, Form validation)
├── assets/
│   ├── profile.png       # Official brand logo & profile avatar image
│   ├── logo.png          # High-resolution original brand logo
│   ├── logo-transparent.png # Transparent logo variation
│   ├── favicon.svg       # Vector gold monogram icon
│   ├── hero-visual.svg   # Hero section graphics
│   └── project-*.svg     # Demo preview mockups
└── README.md             # Documentation & setup guide
```

---

## ⚙️ Quick Customization (`js/config.js`)

All contact details and copy are centralized in `js/config.js`:

```javascript
const STUDIO_CONFIG = {
  // Brand
  brandName: "Shreeji Web Studio",
  tagline: "Your Vision. Our Digital Craft.",
  startingPrice: "₹2,999",

  // Business Contact Info
  whatsappNumber: "+919780553941", 
  whatsappDisplay: "+91 97805 53941",
  email: "shreeji.trends.india@gmail.com",
  locationDisplay: "Gujarat & Across India (Remote & On-site Available)",
  workingHours: "Mon - Sat: 9:30 AM – 7:30 PM IST",

  // Pre-filled WhatsApp message templates
  whatsappMessages: {
    general: "Hi Shreeji Web Studio, I’m interested in getting a website for my business...",
    // ...
  },

  // Social Links
  socials: {
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourpage",
    linkedin: "https://linkedin.com/company/yourstudio",
    youtube: "https://youtube.com/@yourchannel"
  }
};
```

---

## 🚀 Running Locally

Because this project uses zero build steps and pure modern web standards, you can preview it immediately:

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer to open it in Chrome, Edge, Safari, or Firefox.

### Option 2: Python Local Server
Open PowerShell / Terminal in `f:\shreeji` and run:
```bash
python -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

---

## 🚢 Deployment Options

- **GitHub Pages**: Push this folder to a GitHub repository and enable GitHub Pages under repository settings (`main` branch / root).
- **Netlify / Vercel**: Drag and drop the `shreeji` folder into Netlify Drop or import the Git repo into Vercel with zero configuration required.
- **cPanel / Apache / Nginx**: Upload all files directly to your `public_html` directory.

---

## 🌟 Included Sections & Features

1. **Sticky Header & Responsive Navbar**: Shrinks with subtle glassmorphic blur on scroll, includes mobile drawer navigation.
2. **Hero Section**: Gold pill badge, conversion headline, dual action CTAs, trust badge ("Starting from ₹2,999"), and interactive browser mockup with floating feature badges.
3. **Quick Benefits Strip**: 4 core business pillars (Modern Design, Mobile First, Fast & Lightweight, Business Focused).
4. **About Section**: Honest studio introduction with 3 verified metrics (100% Responsive, 24/7 Presence, ₹2,999 Starting Price). Strictly no fake numbers or awards.
5. **Services ("What We Build")**: 4 distinct service cards with deliverables lists and direct booking buttons that pre-fill the enquiry form.
6. **Who We Help**: 6 persona cards for Local Businesses, Coaching Institutes, Startups, Personal Brands, Service Providers, and Small Businesses.
7. **Demo Concepts Showcase**: 4 realistic demo cards clearly labeled "Demo Concept" with an interactive preview modal detailing included features.
8. **Process ("From Idea to Online")**: 4-step progressive timeline with connected path on desktop and vertical stepper on mobile.
9. **Pricing**: STARTER (₹2,999), BUSINESS (₹4,999 "Most Popular"), and CUSTOM ("Let's Talk"), with clear scope guidelines and honest disclaimer.
10. **Why Choose Shreeji**: 6 cards highlighting clean architecture, speed, mobile focus, and conversion design.
11. **High-Impact Charcoal CTA**: Dark section with gold accents, "Start Your Project" and "WhatsApp Us" triggers.
12. **FAQ Accordion**: 6 collapsible questions with smooth transitions and ARIA accessibility.
13. **Contact Section & Multi-field Form**: Full enquiry form with client-side validation, direct email composition, and instant WhatsApp submission button.
14. **Floating WhatsApp Widget**: Bottom-right floating pulse button with pre-filled message.
15. **Dark Charcoal Footer**: Complete brand links, social channels, copyright 2026, and Privacy Policy / Terms modal dialogs.
