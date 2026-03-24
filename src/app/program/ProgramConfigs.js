// ─────────────────────────────────────────────────────────────────────────────
// GURUGRAM CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const gurugramConfig = {
    hero: {
        bgImage: "/img/program/hero-bg.png",
        partnerLogo: "/img/program/partner-logo.svg",
        title: "UG Program in Computer Science & Artificial Intelligence",
        subtitle: "Bachelor of Technology Degree by Sushant University, Gurugram",
        applyUrl: "https://apply.vedam.org",
        brochureUrl: "/brochure",
    },

    statsBar: {
        tiles: [
            { title: "4 Years", body: "Full-time residential program B.Tech Degree by Sushant University", highlight: false },
            { title: "Partner Campus", body: "Sushant University — Gurugram, Delhi NCR", highlight: true },
            { title: "Eligibility", body: "2025, 2026 12th student with PCM (>50% in PCM & 12th boards Overall)", highlight: false },
        ],
        footnote: "*Admissions open for 2026 intake. Only top 5% applicants are selected.",
    },

    citySection: {
        heading: "Why Gurugram?",
        description: "Gurugram is where India's corporate world lives. From Fortune 500 headquarters to global tech giants, the city puts you at the centre of India's biggest economy.",
        statsLeft: [
            { num: "10,000+", label: "Registered startups" },
            { num: "Top 5", label: "Leading AI hub in Asia" },
        ],
        statsRight: [
            { num: "800+", label: "MNC & Fortune 500's" },
            { num: "#1 in India", label: "Corporate Hub" },
        ],
        img1: "/img/program/gurugram-1.png",
        img2: "/img/program/gurugram-2.png",
        img3: "/img/program/gurugram-3.png",
        img4: "/img/program/gurugram-4.png",
    },

    campusSection: {
        description: "Sushant University's Gurugram campus is located minutes away from Cyber City, Golf Course Road, and the NCR startup corridor. The campus combines modern academic infrastructure with proximity to India's fastest-growing district.",
        images: [
            "/img/program/campus-2.png",
            "/img/program/campus-1.png",
            "/img/program/campus-3.png",
            "/img/program/campus-4.png",
            "/img/program/campus-5.png",
            "/img/program/campus-6.png",
        ],
    },

    accreditations: {
        description: "Your degree isn't just a certificate — it's a nationally recognised credential backed by India's top regulatory bodies, independent quality assessors, and international ranking frameworks.",
        logos: [
            { src: "/img/program/naac-logo.png", alt: "NAAC", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/nirf-logo.png", alt: "NIRF", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/haryana-emblem.svg", alt: "Haryana", height: { xs: "40px", md: "80px" }, width: { xs: "40px", md: "80px" } },
            { src: "/img/program/aicte-logo.png", alt: "AICTE", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
        ],
    },

    scholarships: {
        description: "Talent shouldn't wait on finances. Vedam rewards merit, achievement, and potential — with scholarships that make the best education accessible to the best students.",
        items: [
            { title: "Merit Based Scholarship", percent: "Upto 100%", desc: "Recognizes academic excellence, unique talent and leadership potential.", img: "/img/program/scholarship-merit.png" },
            { title: "Women in Tech Scholarship", percent: "Upto 20%", desc: "Empowering and supporting women in tech for growth and success.", img: "/img/program/scholarship-women.png" },
            { title: "Need Based Scholarship", percent: "Upto 30%", desc: "Focused on specific fields of study or demonstrating financial needs.", img: "/img/program/scholarship-need.png" },
        ],
    },

    fees: {
        semesterFees: [
            {
                sem: "Semester 1",
                rows: [
                    { label: "Seat Block Fees", value: "₹50,000" },
                    { label: "Security Deposit (Refundable)", value: "₹30,000" },
                    { label: "Upskilling Fee", value: "₹84,813" },
                    { label: "Tuition Fee", value: "₹1,00,000" },
                ],
                total: "₹2,64,813",
            },
            ...["2", "3", "4", "5", "6", "7", "8"].map((n) => ({
                sem: `Semester ${n}`,
                rows: [
                    { label: "Upskilling Fee", value: n === "8" ? "–" : "₹84,813" },
                    { label: "Tuition Fee", value: n === "8" ? "–" : "₹1,34,500" },
                ],
                total: n === "8" ? "–" : "₹2,19,313",
            })),
        ],
        feeData: {
            headers: ["Fees Component", "Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8", "Total"],
            rows: [
                { label: "Seat Block Fees", values: ["₹50,000", "–", "–", "–", "–", "–", "–", "–", "₹50,000"] },
                { label: "Security Deposit (Refundable)", values: ["₹30,000", "–", "–", "–", "–", "–", "–", "–", "₹30,000"] },
                { label: "Upskilling Fee", values: ["₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "–", "₹6,38,500"] },
                { label: "Tuition Fee", values: ["₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "–", "₹7,58,500"] },
            ],
            totals: ["₹2,64,813", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹18,00,000"],
        },
        feeNotes: [
            "Apple Macbook is included in the above course fee.",
            "The fees mentioned in the table is the Course fees. This is exclusive of Hostel & Mess fees.",
            "Hostel and mess services are available on the Sushant University campus, subject to availability and offered on a first-come, first-served basis.",
            "Additional fees payable directly to the University, over and above the course fee: one-time Application Fee (₹1,500), Registration Fee (₹5,000), Uniform Fee (₹5,000), Sports Activity Fee (₹5,000), and Examination Fee (₹3,000 per semester).",
        ],
        totalCourseFee: "₹18,00,000",
        hostelPlaceholder: "Hostel fee details coming soon. Please contact admissions for more information.",
    },

    financing: {
        description: "At Vedam School of Technology, we understand that flexibility and convenience in fee payments are important to our students and their families. To make this process easier and more accessible, we have partnered with recognized financial companies.",
        zeroEmi: {
            title: "Loan at Zero Cost EMI",
            description: "You can pay your annual course fee in monthly installments with no interest, no processing fee, and no hidden charges. We've partnered trusted fintech company working with over 2,500 institutions, to offer this option.",
        },
        bankLoan: {
            title: "Education Loan from a Bank",
            description: "You can also access education loans through our trusted banking partners, making it easier for you to finance your education with flexible repayment options and competitive interest rates.",
        },
        loanPartners: [
            { id: "propelled", label: "Propelled" },
            { id: "jodo", label: "Jodo Cred Plan" },
        ],
        loanData: {
            propelled: {
                rows: [
                    { label: "Loan Type", value: "Normal (Unsecured)" },
                    { label: "Interest Rate (%)", value: "13% – 15%" },
                    { label: "Max Loan Amount", value: "Upto 100% tuition fees" },
                    { label: "Moratorium Period", value: "4 years" },
                    { label: "Tenure", value: "10 years" },
                    { label: "Processing Charges", value: "1% (incl. GST)" },
                    { label: "Tax Benefits Section 8e", value: "Available" },
                ],
            },
            jodo: {
                rows: [
                    { label: "Loan Type", value: "Normal (Unsecured)" },
                    { label: "Interest Rate (%)", value: "13% – 15%" },
                    { label: "Max Loan Amount", value: "Upto 100% tuition fees" },
                    { label: "Moratorium Period", value: "4 years" },
                    { label: "Tenure", value: "10 years" },
                    { label: "Processing Charges", value: "1% (incl. GST)" },
                    { label: "Tax Benefits Section 8e", value: "Available" },
                ],
            },
        },
    },

    cta: {
        line1: "Be the Next",
        line2: "Gen Entrepreneur",
        applyUrl: "https://apply.vedam.org",
        students: [
            "/img/program/cta-student-1.png",
            "/img/program/cta-student-2.png",
            "/img/program/cta-student-3.png",
        ],
    },
};


// ─────────────────────────────────────────────────────────────────────────────
// PUNE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const puneConfig = {
    hero: {
        bgImage: "/img/program/hero-bg.png",
        partnerLogo: "/img/program/partner-logo.svg",
        title: "UG Program in Computer Science & Artificial Intelligence",
        subtitle: "Bachelor of Technology Degree by ADYPU, Pune",
        applyUrl: "https://apply.vedam.org",
        brochureUrl: "/brochure",
    },

    statsBar: {
        tiles: [
            { title: "4 Years", body: "Full-time residential program B.Tech Degree by ADYPU", highlight: false },
            { title: "Partner Campus", body: "ADYPU — Pune, Maharashtra", highlight: true },
            { title: "Eligibility", body: "2025, 2026 12th student with PCM (>50% in PCM & 12th boards Overall)", highlight: false },
        ],
        footnote: "*Admissions open for 2026 intake. Only top 5% applicants are selected.",
    },

    citySection: {
        heading: "Why Pune?",
        description: "Pune is India's fastest-growing tech and education hub. Home to global IT giants, thriving startups, and world-class engineering colleges, the city offers an unmatched environment for building a career in technology.",
        statsLeft: [
            { num: "5,000+", label: "Tech companies" },
            { num: "Top 3", label: "IT hub in India" },
        ],
        statsRight: [
            { num: "400+", label: "MNC offices" },
            { num: "#1 in India", label: "Education City" },
        ],
        img1: "/img/program/gurugram-1.png",
        img2: "/img/program/gurugram-2.png",
        img3: "/img/program/gurugram-3.png",
        img4: "/img/program/gurugram-4.png",
    },

    campusSection: {
        description: "ADYPU's Pune campus is set across a lush green landscape in the heart of Maharashtra's tech corridor. With state-of-the-art labs, innovation centres, and industry-ready infrastructure, the campus is designed to prepare students for the real world.",
        images: [
            "/img/program/campus-2.png",
            "/img/program/campus-1.png",
            "/img/program/campus-3.png",
            "/img/program/campus-4.png",
            "/img/program/campus-5.png",
            "/img/program/campus-6.png",
        ],
    },

    accreditations: {
        description: "Your ADYPU degree is backed by India's leading academic regulatory bodies and quality assessment frameworks — a credential that is recognised nationally and respected globally.",
        logos: [
            { src: "/img/program/naac-logo.png", alt: "NAAC", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/nirf-logo.png", alt: "NIRF", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/haryana-emblem.svg", alt: "Maharashtra", height: { xs: "40px", md: "80px" }, width: { xs: "40px", md: "80px" } },
            { src: "/img/program/aicte-logo.png", alt: "AICTE", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
        ],
    },

    scholarships: {
        description: "We believe every deserving student should have access to world-class education. ADYPU and Vedam jointly offer scholarships that recognise talent, support diversity, and remove financial barriers.",
        items: [
            { title: "Merit Based Scholarship", percent: "Upto 100%", desc: "Recognizes academic excellence, unique talent and leadership potential.", img: "/img/program/scholarship-merit.png" },
            { title: "Women in Tech Scholarship", percent: "Upto 20%", desc: "Empowering and supporting women in tech for growth and success.", img: "/img/program/scholarship-women.png" },
            { title: "Need Based Scholarship", percent: "Upto 30%", desc: "Focused on specific fields of study or demonstrating financial needs.", img: "/img/program/scholarship-need.png" },
        ],
    },

    fees: {
        semesterFees: [
            {
                sem: "Semester 1",
                rows: [
                    { label: "Seat Block Fees", value: "₹50,000" },
                    { label: "Security Deposit (Refundable)", value: "₹30,000" },
                    { label: "Upskilling Fee", value: "₹84,813" },
                    { label: "Tuition Fee", value: "₹1,00,000" },
                ],
                total: "₹2,64,813",
            },
            ...["2", "3", "4", "5", "6", "7", "8"].map((n) => ({
                sem: `Semester ${n}`,
                rows: [
                    { label: "Upskilling Fee", value: n === "8" ? "–" : "₹84,813" },
                    { label: "Tuition Fee", value: n === "8" ? "–" : "₹1,34,500" },
                ],
                total: n === "8" ? "–" : "₹2,19,313",
            })),
        ],
        feeData: {
            headers: ["Fees Component", "Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8", "Total"],
            rows: [
                { label: "Seat Block Fees", values: ["₹50,000", "–", "–", "–", "–", "–", "–", "–", "₹50,000"] },
                { label: "Security Deposit (Refundable)", values: ["₹30,000", "–", "–", "–", "–", "–", "–", "–", "₹30,000"] },
                { label: "Upskilling Fee", values: ["₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "–", "₹6,38,500"] },
                { label: "Tuition Fee", values: ["₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "–", "₹7,58,500"] },
            ],
            totals: ["₹2,64,813", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹18,00,000"],
        },
        feeNotes: [
            "Apple Macbook is included in the above course fee.",
            "The fees mentioned in the table is the Course fees. This is exclusive of Hostel & Mess fees.",
            "Hostel and mess services are available on the ADYPU campus, subject to availability and offered on a first-come, first-served basis.",
            "Additional fees payable directly to the University, over and above the course fee: one-time Application Fee (₹1,500), Registration Fee (₹5,000), Uniform Fee (₹5,000), Sports Activity Fee (₹5,000), and Examination Fee (₹3,000 per semester).",
        ],
        totalCourseFee: "₹18,00,000",
        hostelPlaceholder: "Hostel fee details coming soon. Please contact Pune admissions for more information.",
    },

    financing: {
        description: "At Vedam School of Technology, we work with leading financial institutions to make fee payments easy, flexible, and accessible for every student and family at our Pune campus.",
        zeroEmi: {
            title: "Loan at Zero Cost EMI",
            description: "Split your annual course fee into easy monthly installments — zero interest, zero processing fee, zero hidden charges. Available through our fintech partner serving 2,500+ institutions across India.",
        },
        bankLoan: {
            title: "Education Loan from a Bank",
            description: "Access competitive education loans through our Pune banking partners with flexible repayment schedules, moratorium periods, and tax benefits under Section 80E.",
        },
        loanPartners: [
            { id: "propelled", label: "Propelled" },
            { id: "jodo", label: "Jodo Cred Plan" },
        ],
        loanData: {
            propelled: {
                rows: [
                    { label: "Loan Type", value: "Normal (Unsecured)" },
                    { label: "Interest Rate (%)", value: "13% – 15%" },
                    { label: "Max Loan Amount", value: "Upto 100% tuition fees" },
                    { label: "Moratorium Period", value: "4 years" },
                    { label: "Tenure", value: "10 years" },
                    { label: "Processing Charges", value: "1% (incl. GST)" },
                    { label: "Tax Benefits Section 8e", value: "Available" },
                ],
            },
            jodo: {
                rows: [
                    { label: "Loan Type", value: "Normal (Unsecured)" },
                    { label: "Interest Rate (%)", value: "13% – 15%" },
                    { label: "Max Loan Amount", value: "Upto 100% tuition fees" },
                    { label: "Moratorium Period", value: "4 years" },
                    { label: "Tenure", value: "10 years" },
                    { label: "Processing Charges", value: "1% (incl. GST)" },
                    { label: "Tax Benefits Section 8e", value: "Available" },
                ],
            },
        },
    },

    cta: {
        line1: "Be the Next",
        line2: "Gen Entrepreneur",
        applyUrl: "https://apply.vedam.org",
        students: [
            "/img/program/cta-student-1.png",
            "/img/program/cta-student-2.png",
            "/img/program/cta-student-3.png",
        ],
    },
};