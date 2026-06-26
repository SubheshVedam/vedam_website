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
        videoId: "_ovyl2ZkLdQ",
        videoThumbnail: "/img/placement/placement_page_landing.png",
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
            heading: "Our Placement Partners",
            logos: [
                { src: "/img/placement/partners/amazon.webp", alt: "Amazon" },
                { src: "/img/placement/partners/razorpay.webp", alt: "Razorpay" },
                { src: "/img/placement/partners/meta.webp", alt: "Meta" },
                { src: "/img/placement/partners/paytm.webp", alt: "Paytm" },
                { src: "/img/placement/partners/delhivery.webp", alt: "Delhivery" },
                { src: "/img/placement/partners/intuit.webp", alt: "Intuit" },
                { src: "/img/placement/partners/walmart.webp", alt: "Walmart" },
                { src: "/img/placement/partners/paypal.webp", alt: "Paypal" },
                { src: "/img/placement/partners/hcl.webp", alt: "HCL" },
                { src: "/img/placement/partners/airtel.webp", alt: "Airtel" },
                { src: "/img/placement/partners/atlassian.webp", alt: "Atlassian" },
                { src: "/img/placement/partners/kpmg.webp", alt: "KPMG" },
                { src: "/img/placement/partners/jpmc.webp", alt: "JPMC" },
                { src: "/img/placement/partners/flipkart.webp", alt: "Flipkart" },
                { src: "/img/placement/partners/delloite.webp", alt: "Delloite" },
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
        heading: "Student Testimonials",
        items: [
            {
                name: "Divya Chopra",
                role: "Software Engineer II",
                company: "Google",
                heading: "Divya Chopra - Software Engineer II, Google",
                companyLogo: "/img/placement/logos/google.webp",
                photo: "/img/placement/testimonials/divya.webp",
                quote:
                    `"I loved the way this coding course was structured. He started with the basics and then gradually built on our knowledge. This was made it easy to learn and retain the information. I also appreciate the fact that he provided us with plenty of practice exercises."`,
            },
            {
                name: "Pranjal Sharma",
                role: "SDE I",
                company: "Amazon",
                heading: "Pranjal Sharma - SDE I, Amazon",
                companyLogo: "/img/placement/logos/amazon.webp",
                photo: "/img/placement/testimonials/pranjall.webp",
                quote:
                    `"I wasted countless hours on DSA resources before landing under the guidance of a mentor. He is an experienced teacher and one who makes learning a delightful experience. Really mind-blowing. I wish the team all the best."`,
            },
            {
                name: "Jaivin Phogat",
                role: "SDE",
                company: "Directi",
                heading: "Jaivin Phogat - SDE",
                companyLogo: "/img/placement/logos/dpworld.webp",
                photo: "/img/placement/testimonials/jaivin.webp",
                quote:
                    `"I am really grateful that I had the opportunity to explore DSA with mentor. His methodology and guidance were exceptional. The course started from if else and at last we were solving really Hard Leetcode Problems. Had a lot of learning with fun."`,
            },
        ],
    },

    // ── OUTCOMES at VEDAM ────────────────────────────────────────────────────
    outcomesInVedam: {
        heading: "Outcomes at Vedam",
        videos: [
            {
                id: "outcome-video-arsh-goel",
                title: "Arsh Goel - Outcomes at Vedam",
                videoUrl: "https://youtu.be/dla4BQFjp-U?si=dEJ6LOEkufOAxhtr",
            },
            {
                id: "outcome-video-1",
                title: "Outcomes at Vedam - Video 1",
                videoUrl: "https://youtu.be/y90EQxzF6kU?si=Hzr97vGcV5TyAMt0",
            },
            {
                id: "outcome-video-2",
                title: "Outcomes at Vedam - Video 2",
                videoUrl: "https://youtu.be/kbHPAsAfZUM?si=L6x2AXMsMZa0qc6t",
            },
            {
                id: "outcome-video-3",
                title: "Outcomes at Vedam - Video 3",
                videoUrl: "https://youtu.be/Kuc4AjiKxKo?si=rZuSlmscSvEsKm6S",
            },
        ],
    },

    // ── GLOBAL OUTCOMES ───────────────────────────────────────────────────────
    globalOutcomes: {
        heading: "Global Outcomes - Where Builders Turn into Global Talent",
        subheading: "",
        // Pre-designed combined banner
        cards: [
            {
                desktop: "/img/placement/global_outcome_PP.webp",
                mobile: "/img/placement/global_outcome_PP.webp",
                heading: "LFX Mentorship and HackerOne Global Outcomes",
                alt: "Global outcomes featuring LFX mentorship stipends and HackerOne bug bounty earnings",
            },
        ],
    },

    // ── INTERNSHIPS IN FIRST YEAR ─────────────────────────────────────────────
    internships: {
        heading: "Internships in First Year",
        subheading: "Real students. Real results. First year.",
        // 6 pre-designed cards, desktop + mobile variant each
        items: [
            { desktop: "/img/placement/intern6.webp", mobile: "/img/placement/intern1_mob.webp", heading: "Shubham Barik, intern at dues innovation", alt: "Shubham Barik — AI Engineer Intern" },
            { desktop: "/img/placement/intern2.webp", mobile: "/img/placement/intern2_mob.webp", heading: "Shivanch Ojha, intern at Finzie", alt: "Shivansh Ojha — Technical Program Intern" },
            { desktop: "/img/placement/intern1.webp", mobile: "/img/placement/intern3_mob.webp", heading: "Sharav Yadav, intern at Say labs", alt: "Sharav Yadav — Web Development Intern" },
            { desktop: "/img/placement/intern4.webp", mobile: "/img/placement/intern4_mob.webp", heading: "Ketan Bhamre, intern at Tantra AI Tech", alt: "Ketan Bhamre — Web Development Intern" },
            { desktop: "/img/placement/intern3.webp", mobile: "/img/placement/intern5_mob.webp", heading: "Sirwagya Shekhar, Intern at Herenow AI Labs", alt: "Sirwagya Shekhar — Full Stack Intern" },
            { desktop: "/img/placement/intern7.webp", mobile: "/img/placement/intern7_mob.webp", heading: "Khushi Yadav, Intern at Alchemist AI", alt: "Khushi Yadav — Growth & Partnerships Intern" },
        ],
    },
};
