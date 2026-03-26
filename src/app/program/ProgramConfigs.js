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
            { num: "10,000+", label: "Registered Startups across NCR" },
            { num: "#1", label: "Tech hub of North India" },
        ],
        statsRight: [
            { num: "Top 5", label: "Leading AI hub in Asia" },
            { num: "600+", label: "MNC’s & Fortune 500’s" },
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
        // Gurugram uses the legacy single-roomTypes shape
        hostelFees: "",
        hostelPlaceholder: "",
    },

    financing: {
        description: "At Vedam School of Technology, we understand that flexibility and convenience in fee payments are important to our students and their families. To make this process easier and more accessible, we have partnered with recognized financial companies.",
        zeroEmi: {
            title: "Loan at Zero Cost EMI",
            description: "You can pay your annual course fee in monthly installments with no interest, no processing fee, and no hidden charges. We've partnered trusted fintech company working with over 2,500 institutions, to offer this option",
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
        mobile: "/img/student1.png",
        desktop: "/img/student.png"
    },
};


// ─────────────────────────────────────────────────────────────────────────────
// PUNE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const puneConfig = {
    hero: {
        bgImage: "/img/program/hero-bg.png",
        partnerLogo: "/img/program/adypu.png",
        title: "UG Program in Computer Science & Artificial Intelligence",
        subtitle: "Bachelor of Technology Degree by ADYPU, Pune",
        applyUrl: "https://apply.vedam.org",
        brochureUrl: "/brochure",
    },

    statsBar: {
        tiles: [
            { title: "4 Years", body: "Full-time residential, CS(AI) B.Tech Degree by ADYPU", highlight: false },
            { title: "Partner Campus", body: "Ajeenkya DY Patil University - DY Patil Knowledge City, Pune", highlight: true },
            { title: "Eligibility", body: "2025, 2026 12th student with PCM (>50% in PCM & 12th boards Overall)", highlight: false },
        ],
        footnote: "*Admissions open for 2026 intake. Only top 5% applicants are selected.",
    },

    citySection: {
        heading: "Why Pune?",
        description: "Pune is where engineering talent gets built. Home to one of India's largest concentrations of manufacturing, IT and deep tech companies - the city gives engineering students something most campuses can't: proximity to real industry.",
        statsLeft: [
            { num: "50000+", label: "MNCs & Enterprises" },
            { num: "#2", label: "Largest IT hub in Maharashtra" },
        ],
        statsRight: [
            { num: "3200+", label: "Oxford of the East" },
            { num: "#1", label: "India's education capital" },
        ],
        img1: "/img/program/whypune1.png",
        img2: "/img/program/whypune2.png",
        img3: "/img/program/whypune3.png",
        img4: "/img/program/whypune4.png",
    },

    campusSection: {
        description: "Campus in the Heart of Pune's Innovation Ecosystem Vedam sits on a lush, 100-acre campus at Ajeenkya DY Patil University, Lohegaon — just 6 kilometres from Pune International Airport. It's a self-contained ecosystem of education, infrastructure, and community, in India's most liveable city.",
        images: [
            "/img/program/campus1.webp",
            "/img/program/campus2.webp",
            "/img/program/campus3.webp",
            "/img/program/campus4.webp",
            "/img/program/campus5.webp",
            "/img/program/campus6.webp",
        ],
    },

    accreditations: {
        description: "Your degree isn't just a certificate — it's a nationally recognised credential backed by India's top regulatory bodies, independent quality assessors, and international ranking frameworks.",
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
                    { label: "Seat Block Fee", value: "₹50,000" },
                    { label: "Security Deposit (Refundable)", value: "₹30,000" },
                    { label: "Upskilling Fee", value: "₹71,250" },
                    { label: "Sub Total", value: "₹1,51,250", isSubTotal: true },
                    { label: "Tuition Fee", value: "₹1,50,000" },
                ],
                total: "₹3,01,250",
            },
            ...["2", "3", "4", "5", "6", "7", "8"].map((n) => ({
                sem: `Semester ${n}`,
                rows: [
                    { label: "Upskilling Fee", value: "₹71,250" },
                    { label: "Sub Total", value: "₹71,250", isSubTotal: true },
                    { label: "Tuition Fee", value: "₹1,50,000" },
                ],
                total: "₹2,21,250",
            })),
        ],
        feeData: {
            headers: ["Fees Component", "Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8", "Total"],
            rows: [
                { label: "Seat Block Fee", values: ["50,000", "–", "–", "–", "–", "–", "–", "–", "50,000"] },
                { label: "Refundable Security Deposit", values: ["30,000", "–", "–", "–", "–", "–", "–", "–", "30,000"] },
                { label: "Upskilling Fee", values: ["71,250", "71,250", "71,250", "71,250", "71,250", "71,250", "71,250", "71,250", "5,70,000"] },
                { label: "Sub Total", values: ["1,51,250", "71,250", "71,250", "71,250", "71,250", "71,250", "71,250", "71,250", "6,50,000"], isSubTotal: true },
                { label: "Tuition Fee", values: ["1,50,000", "1,50,000", "1,50,000", "1,50,000", "1,50,000", "1,50,000", "1,50,000", "1,50,000", "12,00,000"] },
            ],
            totals: ["3,01,250", "2,21,250", "2,21,250", "2,21,250", "2,21,250", "2,21,250", "2,21,250", "2,21,250", "18,50,000"],
        },
        feeNotes: [
            "Apple Macbook is included in the above course fee.",
            "The fees mentioned in the table is the Course fees. This is exclusive of Hostel & Mess fees.",
            "Hostel and mess services are available on the ADYPU campus, subject to availability and offered on a first-come, first-served basis.",
            "Additional fees payable directly to the University, over and above the course fee: one-time Application Fee (₹1,500), Registration Fee (₹5,000), Uniform Fee (₹5,000), Sports Activity Fee (₹5,000), and Examination Fee (₹3,000 per semester).",
        ],
        totalCourseFee: "₹18,50,000",
        // Pune uses the new hostelTypes shape (Out of Campus + In Campus)
        hostelFees: {
            hostelTypes: [
                {
                    type: "outCampus",
                    label: "Out of Campus",
                    title: "YourSpace Hostel [Out of Campus]",
                    roomTypes: [
                        {
                            type: "3 Sharing Room",
                            rows: [
                                { label: "Hostel Fee per Semester\n[Accommodation + Mess + Laundry Charges]", value: "₹1,12,000/-" },
                                { label: "Hostel Fee per Year\n[Accommodation + Mess + Laundry Charges]", value: "₹2,24,000/-" },
                                { label: "Security Deposit (Refundable)", value: "₹10,000/-" },
                                { label: "Room Features", value: "Attached Washroom, AC, high speed WiFi" },
                                { label: "Applicable for", value: "Boys and Girls" },
                                { label: "NOTE", value: "Electricity to be charged on actuals" },
                            ],
                        },
                    ],
                    notes: [
                        "There will be a free transportation service provided to Vedam students in the morning and evening for traveling between hostel and university.",
                        "Students need to pay 1 semester fee to book a bed.",
                        "Hostel fee is non refundable. Students will be charged for the entire year, even if one plans to vacate mid-year.",
                        "Fee are applicable for the academic year 2025 - 26 and may increase by 7 - 10% annually from the second year onwards due to inflation adjustment.",
                        "You can find more details about YourSpace Hostel for Vedam Students here.",
                        "Should you wish to book, please contact Vedam team at connect@vedam.org.",
                    ],
                },
                {
                    type: "inCampus",
                    label: "In Campus",
                    title: "ADYPU Hostel [In Campus]",
                    roomTypes: [
                        {
                            type: "4 Sharing Room",
                            rows: [
                                { label: "Accommodation Cost per Year", value: "₹90,000/-" },
                                { label: "Mess Charges per Month", value: "₹5,500/-" },
                                { label: "Laundry Charges per Year", value: "₹6,000/-" },
                                { label: "Hostel Fee per Year\n[Accommodation + Mess + Laundry Charges]", value: "₹1,62,000/-" },
                                { label: "Security Deposit (Refundable)", value: "₹10,000/-" },
                                { label: "Room Features", value: "Common Washroom, Non AC" },
                                { label: "Applicable for", value: "Boys & Girls" },
                                { label: "NOTE", value: "Electricity to be charged on actuals" },
                            ],
                        },
                        {
                            type: "3 Sharing Room",
                            rows: [
                                { label: "Accommodation Cost per Year", value: "₹1,10,000/-" },
                                { label: "Mess Charges per Month", value: "₹5,500/-" },
                                { label: "Laundry Charges per Year", value: "₹6,000/-" },
                                { label: "Hostel Fee per Year\n[Accommodation + Mess + Laundry Charges]", value: "₹1,82,000/-" },
                                { label: "Security Deposit (Refundable)", value: "₹20,000/-" },
                                { label: "Room Features", value: "Common Washroom, Non AC" },
                                { label: "Applicable for", value: "Boys & Girls" },
                                { label: "NOTE", value: "Electricity to be charged on actuals" },
                            ],
                        },
                        {
                            type: "5 Sharing Room",
                            rows: [
                                { label: "Accommodation Cost per Year", value: "₹1,50,000/-" },
                                { label: "Mess Charges per Month", value: "₹5,500/-" },
                                { label: "Laundry Charges per Year", value: "₹6,000/-" },
                                { label: "Hostel Fee per Year\n[Accommodation + Mess + Laundry Charges]", value: "₹2,22,000/-" },
                                { label: "Security Deposit (Refundable)", value: "₹20,000/-" },
                                { label: "Room Features", value: "Attached Washroom, AC" },
                                { label: "Applicable for", value: "Boys only" },
                                { label: "NOTE", value: "Electricity to be charged on actuals" },
                            ],
                        },
                    ],
                    notes: [
                        "Students need to pay accommodation cost for the entire year to book a bed. Mess and laundry charges will have to be paid at the time of moving in.",
                        "There are very few beds left in ADYPU hostel for girls, which are getting allocated on a first cum first basis.",
                        "There are no more beds left in the ADYPU hostel for boys.",
                        "Hostel accommodation fee is non refundable. Students will be charged for the entire year, even if one plans to vacate mid-year.",
                        "Fee are applicable for the academic year 2025 - 26 and may increase by 7 - 10% annually from the second year onwards due to inflation adjustment.",
                        "Should you wish to book, please contact Vedam team at connect@vedam.org to check availability and proceed accordingly.",
                    ],
                },
            ],
        },
        hostelPlaceholder: "",
    },

    financing: {
        description: "At Vedam School of Technology, we understand that flexibility and convenience in fee payments are important to our students and their families. To make this process easier and more accessible, we have partnered with recognized financial companies.",
        zeroEmi: {
            title: "Loan at Zero Cost EMI",
            description: "You can pay your annual course fee in monthly installments with no interest, no processing fee, and no hidden charges. We've partnered trusted fintech company working with over 2,500 institutions, to offer this option",
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
                    { label: "Max Loan Amount", value: "Upto 100% of tuition fees" },
                    { label: "Moratorium Period", value: "4 years" },
                    { label: "Tenure", value: "10 years" },
                    { label: "Processing Charges", value: "1% (incl. GST)" },
                    { label: "Tax Benefits Section 80E", value: "Available" },
                ],
            },
            jodo: {
                rows: [
                    { label: "Loan Type", value: "Normal (Unsecured)" },
                    { label: "Interest Rate % (Monthly)", value: "0.66%" },
                    { label: "Max Loan Amount", value: "Upto 100% of total Course fees" },
                    { label: "Tenure", value: "11 months" },
                    { label: "Processing Charges", value: "1% (incl. GST)" },
                    { label: "Downpayment", value: "1st EMI" },
                    { label: "Remaining EMIs", value: "10 EMI" },
                ],
            },
        },
    },

    cta: {
        mobile: "/img/student1.png",
        desktop: "/img/student.png"
    },
};