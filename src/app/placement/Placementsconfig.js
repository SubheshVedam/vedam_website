// ─────────────────────────────────────────────────────────────────────────────
// placement & OUTCOMES PAGE CONFIG
// All assets live in /img/placement/
// ─────────────────────────────────────────────────────────────────────────────

export const placementConfig = {

    // ── HERO ──────────────────────────────────────────────────────────────────
    hero: {
        bgDesktop: "/img/placement/hero_bg.webp",
        bgMobile: "/img/placement/hero_bg_mob.webp",
        title: "Your Tech Journey,",
        titleHighlight: "Powered by Vedam",
        subtitle: "Proven Placement & Tech Expertise for Global Outcomes",
    },

    // ── PLACEMENT EXPERTISE ───────────────────────────────────────────────────
    placementExpertise: {
        heading: "Proven Placement Expertise",
        description:
            "Vedam is built on 7+ years of career-focused education, with a placement infrastructure proven at scale. The ecosystem behind Vedam is tested, refined, and proven.",
        stats: [
            { num: "7+ Years", label: "Experience in career-focused education" },
            { num: "20,000+", label: "Student outcomes delivered" },
            { num: "1,000+", label: "Hiring partners" },
        ],
        imageDesktop: "/img/placement/placement_expertise.webp",
        imageMobile: "/img/placement/placement_expertise_mob.webp",
        partners: {
            heading: "Placement Partners",
            logos: [
                { src: "/img/placement/partners/amazon.webp", alt: "Amazon" },
                { src: "/img/placement/partners/razorpay.webp", alt: "Razorpay" },
                { src: "/img/placement/partners/meta.webp", alt: "Meta" },
                { src: "/img/placement/partners/paytm.webp", alt: "Paytm" },
                { src: "/img/placement/partners/delhivery.webp", alt: "Delhivery" },
                { src: "/img/placement/partners/intuit.webp", alt: "Intuit" },
            ],
        },
    },

    // ── TECH EXPERTISE ────────────────────────────────────────────────────────
    techExpertise: {
        heading: "Proven Tech Expertise",
        description:
            "Vedam's learning is driven by MAANG engineers who have trained more than 5000 students to get into top tech companies like Google, Microsoft, and Amazon.",
        stats: [
            { num: "5,000+", label: "Students mentored by our tech experts" },
            { num: "10+ MAANG", label: "Engineers mentoring at Vedam" },
            { num: "Student Placed", label: "At Top Tech companies likes Google, Amazon, Atlassian and more" },
        ],
    },

    // ── TESTIMONIALS ──────────────────────────────────────────────────────────
    testimonials: {
        heading: "Testimonials",
        items: [
            {
                name: "Divya Chopra",
                role: "Software Engineer II",
                company: "Google",
                companyLogo: "/img/placement/logos/google.webp",
                photo: "/img/placement/testimonials/divya.webp",
                quote:
                    `"I loved the way this coding course was structured. He started with the basics and then gradually built on our knowledge. This was made it easy to learn and retain the information. I also appreciate the fact that he provided us with plenty of practice exercises."`,
            },
            {
                name: "Pranjal Sharma",
                role: "SDE I",
                company: "Amazon",
                companyLogo: "/img/placement/logos/amazon.webp",
                photo: "/img/placement/testimonials/pranjal.webp",
                quote:
                    `"I wasted countless hours on DSA resources before landing under the guidance of a mentor. He is an experienced teacher and one who makes learning a delightful experience. Really mind-blowing. I wish the team all the best."`,
            },
            {
                name: "Harshit Trehan",
                role: "Software Developer",
                company: "Atlassian",
                companyLogo: "/img/placement/logos/atlassian.webp",
                photo: "/img/placement/testimonials/harshit.webp",
                quote:
                    `"The curriculum is comprehensive, instructor is experienced, and in-depth learning helped me gain confidence. I started as a beginner and cracked multiple offers ultimately, mentor make a great team. Kudos to the mentor for taking this initiative."`,
            },
            {
                name: "Jaivin Phogat",
                role: "SDE",
                company: "Directi",
                companyLogo: "/img/placement/logos/dpworld.webp",
                photo: "/img/placement/testimonials/jaivin.webp",
                quote:
                    `"I am really grateful that I had the opportunity to explore DSA with mentor. His methodology and guidance were exceptional. The course started from if else and at last we were solving really Hard Leetcode Problems. Had a lot of learning with fun."`,
            },
        ],
    },

    // ── GLOBAL OUTCOMES ───────────────────────────────────────────────────────
    globalOutcomes: {
        heading: "Global Outcomes",
        subheading: "Where builders turn into Global Talent",
        // Two side-by-side cards — each is a pre-designed image
        cards: [
            {
                desktop: "/img/placement/outcome1.webp",
                mobile: "/img/placement/outcome1_mob.webp",
                alt: "LFX Mentorship — Krishiv Mahajan ₹2.73 Lakh Stipend",
            },
            {
                desktop: "/img/placement/outcome2.webp",
                mobile: "/img/placement/outcome2_mob.webp",
                alt: "HackerOne — Muhammad Sharief ₹4.59 Lakh Bug Bounties",
            },
        ],
    },

    // ── INTERNSHIPS IN FIRST YEAR ─────────────────────────────────────────────
    internships: {
        heading: "Internships in First Year",
        subheading: "Real students. Real results. First year.",
        // 7 pre-designed cards, desktop + mobile variant each
        items: [
            { desktop: "/img/placement/intern6.webp", mobile: "/img/placement/intern1_mob.webp", alt: "Shubham Barik — AI Engineer Intern" },
            { desktop: "/img/placement/intern2.webp", mobile: "/img/placement/intern2_mob.webp", alt: "Shivansh Ojha — Technical Program Intern" },
            { desktop: "/img/placement/intern1.webp", mobile: "/img/placement/intern3_mob.webp", alt: "Sharav Yadav — Web Development Intern" },
            { desktop: "/img/placement/intern4.webp", mobile: "/img/placement/intern4_mob.webp", alt: "Ketan Bhamre — Web Development Intern" },
            { desktop: "/img/placement/intern3.webp", mobile: "/img/placement/intern5_mob.webp", alt: "Sirwagya Shekhar — Full Stack Intern" },
            { desktop: "/img/placement/intern5.webp", mobile: "/img/placement/intern6_mob.webp", alt: "Akash Anand — DevOps Intern" },
            { desktop: "/img/placement/intern7.webp", mobile: "/img/placement/intern7_mob.webp", alt: "Khushi Yadav — Growth & Partnerships Intern" },
        ],
    },
};