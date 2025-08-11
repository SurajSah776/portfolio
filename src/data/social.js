// Social media links and contact information
export const socialLinks = [
    {
        name: "Gmail",
        url: "mailto:surajkumarsah2060@gmail.com",
        icon: "📧",
        color: "text-red-500",
        hoverColor: "hover:text-red-600",
        bgColor: "bg-red-50",
        primary: true,
        type: "email"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/suraj-kumar-sah",
        icon: "💼",
        color: "text-blue-600",
        hoverColor: "hover:text-blue-700",
        bgColor: "bg-blue-50",
        primary: true,
        type: "professional"
    },
    {
        name: "GitHub",
        url: "https://github.com/SurajSah776",
        icon: "🐱",
        color: "text-gray-800",
        hoverColor: "hover:text-gray-900",
        bgColor: "bg-gray-50",
        primary: true,
        type: "professional"
    },
    {
        name: "Facebook",
        url: "https://facebook.com/surajsah776",
        icon: "📘",
        color: "text-blue-500",
        hoverColor: "hover:text-blue-600",
        bgColor: "bg-blue-50",
        primary: false,
        type: "social"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/surajsah776",
        icon: "📷",
        color: "text-pink-500",
        hoverColor: "hover:text-pink-600",
        bgColor: "bg-pink-50",
        primary: false,
        type: "social"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/SurajSah776",
        icon: "🐦",
        color: "text-blue-400",
        hoverColor: "hover:text-blue-500",
        bgColor: "bg-blue-50",
        primary: false,
        type: "social"
    },
    {
        name: "Threads",
        url: "https://threads.net/@surajsah776",
        icon: "🧵",
        color: "text-gray-700",
        hoverColor: "hover:text-gray-800",
        bgColor: "bg-gray-50",
        primary: false,
        type: "social"
    }
];

// Primary contact methods for professional use
export const primaryContacts = socialLinks.filter(link => link.primary);

// Social media links for personal branding
export const socialMediaLinks = socialLinks.filter(link => link.type === "social");

// Professional networking links
export const professionalLinks = socialLinks.filter(link => link.type === "professional");

// Contact information
export const contactInfo = {
    email: "surajkumarsah2060@gmail.com",
    phone: "+91-XXXXXXXXXX", // Replace with actual phone number
    location: "India",
    availability: "Currently accepting new projects for Q2 2025",
    responseTime: "Within 24 hours",
    timezone: "IST (UTC+5:30)"
};

// Professional services contact preferences
export const serviceContactPreferences = {
    preferredContact: "email",
    consultationBooking: "mailto:surajkumarsah2060@gmail.com?subject=Consultation Booking",
    projectInquiry: "mailto:surajkumarsah2060@gmail.com?subject=Project Inquiry",
    emergencyContact: "+91-XXXXXXXXXX" // Replace with actual emergency contact
};