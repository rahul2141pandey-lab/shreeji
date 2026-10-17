/**
 * =========================================================================
 * SHREEJI WEB STUDIO - BUSINESS CONFIGURATION
 * =========================================================================
 * Easily edit contact numbers, email addresses, social media links,
 * and project information.
 */

const STUDIO_CONFIG = {
  // Brand Identity
  brandName: "Shreeji Web Studio",
  tagline: "Your Vision. Our Digital Craft.",
  startingPrice: "₹2,999",

  // Business Contact Info (Placeholders - easily replace with your real numbers)
  whatsappNumber: "+919780553941",
  whatsappDisplay: "+91 97805 53941",
  email: "shreeji.trends.india@gmail.com",
  locationDisplay: "Gujarat & Across India (Remote & On-site Available)",
  workingHours: "Mon - Sat: 9:30 AM – 7:30 PM IST",

  // WhatsApp Pre-filled Messages
  whatsappMessages: {
    general: "Hi Shreeji Web Studio, I’m interested in getting a website for my business. I’d like to discuss my project.",
    businessWebsite: "Hi Shreeji Web Studio, I want to discuss a Business Website for my company. Please share more details.",
    landingPage: "Hi Shreeji Web Studio, I am looking to build a high-converting Landing Page for my service/campaign.",
    websiteRedesign: "Hi Shreeji Web Studio, I want to redesign my existing website with a modern look and better mobile experience.",
    aiDigitalSolutions: "Hi Shreeji Web Studio, I want to explore AI & Digital automation solutions for my business.",
    starterPlan: "Hi Shreeji Web Studio, I’m interested in the STARTER Package (₹2,999). Let’s get started!",
    businessPlan: "Hi Shreeji Web Studio, I’m interested in the BUSINESS Package (₹4,999). Let’s discuss the details.",
    customPlan: "Hi Shreeji Web Studio, I have custom website requirements. Let's schedule a project discussion."
  },

  // Social Media Link Placeholders
  socials: {
    instagram: "https://instagram.com/shreejiwebstudio",
    facebook: "https://facebook.com/shreejiwebstudio",
    linkedin: "https://linkedin.com/company/shreejiwebstudio",
    youtube: "https://youtube.com/@shreejiwebstudio"
  },

  // Selected Work Projects (Matching Reference Screenshot)
  selectedProjects: [
    {
      id: "url-shortener",
      title: "URL Shortener Website",
      category: "Web Development",
      shortDesc: "A clean web-based URL shortening project.",
      previewImg: "assets/project-url-shortener.svg",
      sampleUrl: "swiftlink.io"
    },
    {
      id: "krishi-mitra",
      title: "Krishi Mitra",
      category: "AI / Web Development",
      shortDesc: "An agriculture-focused digital project combining web technology and AI.",
      previewImg: "assets/project-krishi-mitra.svg",
      sampleUrl: "krishimitra.ai"
    },
    {
      id: "business-demo",
      title: "Business Website Demo",
      category: "Web Development",
      shortDesc: "A professional website concept created for local business outreach.",
      previewImg: "assets/project-business-demo.svg",
      sampleUrl: "eliteconsulting.com"
    }
  ]
};

// Export to window object for access across scripts
if (typeof window !== "undefined") {
  window.STUDIO_CONFIG = STUDIO_CONFIG;
}
