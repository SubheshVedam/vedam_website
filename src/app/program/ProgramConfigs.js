// ─────────────────────────────────────────────────────────────────────────────
// GURUGRAM CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const createGurugramInCampusHostelRoomType = ({
    type,
    hostelFeePerYear,
    registrationFee,
    securityDeposit,
    paymentMode,
    roomFeatures,
    applicableFor,
    note,
}) => ({
    type,
    rows: [
        { label: "Hostel Fee per Year (Accommodation + Mess)", value: hostelFeePerYear },
        { label: "Registration Fee (Non-Refundable)", value: registrationFee },
        { label: "Security Deposit (Refundable)", value: securityDeposit },
        { label: "Payment Mode", value: paymentMode },
        { label: "Room Features", value: roomFeatures },
        { label: "Applicable for", value: applicableFor },
        { label: "Note", value: note },
    ],
});

export const gurugramConfig = {
    hero: {
        bgImage: "/img/program/hero-bg-ggn.webp",
        bgAlt: "Sushant University Gurugram partnered with Vedam School of Technology",
        partnerLogo: "/img/program/sushant.webp",
        partnerLogoAlt: "Sushant University logo",
        title: "UG Program in Computer Science & Artificial Intelligence",
        subtitle: "Bachelor of Technology Degree by Sushant University, Gurugram",
        applyUrl: "https://apply.vedam.org",
        brochureUrl: "https://drive.google.com/file/d/1WzTusTfoSeYszGtlWtgRdNEZ9ta9EZpJ/view?usp=drive_link",
        accreditationPill: [
            { src: "/img/program/ugc-logo.svg", alt: "UGC", label: "UGC Recognised", width: { xs: "16px", md: "24px" } },
            { src: "/img/program/nirf-logo.webp", alt: "NIRF", label: "NIRF Ranked" },
            { src: "/img/program/naac-logo.webp", alt: "NAAC", label: "NAAC Accredited" },
        ],
    },

    statsBar: {
        tiles: [
            { title: "4 Years", body: "B.Tech in CS with specialisation in AI by Sushant University", highlight: false },
            { title: "Partner Campus", body: "Sushant University — Gurugram, Delhi NCR", highlight: true },
            { title: "Eligibility", body: "2025, 2026 12th student with PCM (>50% in PCM & 12th boards Overall)", highlight: false },
        ],
        footnote: "*Admissions open for 2026 intake. Only top 5% applicants are selected.",
    },

    citySection: {
        heading: "Why Gurugram?",
        description: "Gurugram is where India's corporate world lives. From Fortune 500 headquarters to global tech giants, the city puts you at the centre of India's biggest economy.",
        descriptionFontWeight: { xs: 400, md: 400 },
        statsLeft: [
            { num: "10,000+", label: "Registered Startups across NCR" },
            { num: "#1", label: "Tech hub of North India" },
        ],
        statsRight: [
            { num: "Top 5", label: "Leading AI hub in Asia" },
            { num: "600+", label: "MNC’s & Fortune 500’s" },
        ],
        img1: "/img/program/gurugram-1.webp",
        img2: "/img/program/gurugram-2.webp",
        img3: "/img/program/gurugram-3.webp",
        img4: "/img/program/gurugram-4.webp",
        imageAlts: [
            "Gurugram corporate hub",
            "Gurugram city campus surroundings",
            "Gurugram startup and technology district",
            "Gurugram Delhi NCR business hub",
        ],
    },

    videoSection: {
        title: "Hear It from the Hon'ble Vice Chancellor",
        thumbnailSrc: "/img/campuses/message_from_vc_gurugram.webp",
        thumbnailAlt: "Message from the VC for VST Gurugram",
        embedUrl: "https://www.youtube.com/embed/eIJ2w6i4bC0",
    },

    campusVideoSection: {
        title: "Your Future Tech Campus for Next 4 Years",
        thumbnailSrc: "https://img.youtube.com/vi/D5kIwMeysTU/maxresdefault.jpg",
        thumbnailAlt: "Sushant University 3D renders video",
        embedUrl: "https://www.youtube.com/embed/D5kIwMeysTU",
    },

    campusSection: {
        description: "Sushant University's Gurugram campus is located minutes away from Cyber City, Golf Course Road, and the NCR startup corridor. The campus combines modern academic infrastructure with proximity to India's fastest-growing district.",
        images: [
            "/img/program/campus-2.webp",
            "/img/program/campus-1.webp",
            "/img/program/campus-3.webp",
            "/img/program/campus-4.webp",
            "/img/program/campus-5.webp",
            "/img/program/campus-6.webp",
        ],
        imageAlts: [
            "Sushant University entrance",
            "Sushant University campus",
            "Sushant University auditorium",
            "Sushant University sports ground",
            "Sushant University campus building",
            "Sushant University tennis court",
        ],
    },

    accreditations: {
        description: "Your degree isn't just a certificate — it's a nationally recognised credential backed by India's top regulatory bodies, independent quality assessors, and international ranking frameworks.",
        logos: [
            { src: "/img/program/naac-logo.webp", alt: "NAAC", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/nirf-logo.webp", alt: "NIRF", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/haryana-emblem.svg", alt: "Haryana", height: { xs: "40px", md: "80px" }, width: { xs: "40px", md: "80px" } },
            { src: "/img/program/aiu.webp", alt: "AIU", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/ugc.webp", alt: "UGC", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
        ],
    },

    scholarships: {
        description: "Talent shouldn't wait on finances. Vedam rewards merit, achievement, and potential — with scholarships that make the best education accessible to the best students.",
        items: [
            { title: "Merit Based Scholarship", percent: "Upto 100%", desc: "Recognizes academic excellence, unique talent and leadership potential.", img: "/img/program/scholarship-merit.webp" },
            { title: "Women in Tech Scholarship", percent: "Upto 20%", desc: "Empowering and supporting women in tech for growth and success.", img: "/img/program/scholarship-women.webp" },
            { title: "Need Based Scholarship", percent: "Upto 30%", desc: "Focused on specific fields of study or demonstrating financial needs.", img: "/img/program/scholarship-need.webp" },
        ],
    },

    fees: {
        semesterFees: [
            {
                sem: "Sem 1",
                rows: [
                    { label: "Seat Block Fees", value: "₹50,000" },
                    { label: "Security Deposit (Refundable)", value: "₹30,000" },
                    { label: "Upskilling Fee", value: "₹84,813" },
                    { label: "Tuition Fee", value: "₹1,00,000" },
                ],
                total: "₹2,64,813",
            },
            ...["2", "3", "4", "5", "6", "7", "8"].map((n) => ({
                sem: `Sem ${n}`,
                rows: [
                    { label: "Upskilling Fee", value: n === "8" ? "–" : "₹84,813" },
                    { label: "Tuition Fee", value: n === "8" ? "–" : "₹1,34,500" },
                ],
                total: n === "8" ? "–" : "₹2,19,313",
            })),
        ],
        feeData: {
            headers: ["Fees Component", "Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8", "Total"],
            rows: [
                { label: "Seat Block Fees", values: ["₹50,000", "–", "–", "–", "–", "–", "–", "–", "₹50,000"] },
                { label: "Security Deposit (Refundable)", values: ["₹30,000", "–", "–", "–", "–", "–", "–", "–", "₹30,000"] },
                { label: "Upskilling Fee", values: ["₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹84,813", "₹6,78,500"] },
                { label: "Tuition Fee", values: ["₹1,00,000", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹10,41,500"] },
            ],
            totals: ["₹2,64,813", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹18,00,000"],
        },
        feeNotes: [
            "Apple Macbook is included in the above course fee.",
            "The fees mentioned in the table is the Course fees. This is exclusive of Hostel & Mess fees.",
            "Hostel and mess services are available on the Sushant University campus, subject to availability and offered on a first-come, first-served basis.",
            "The following are additional fees payable directly to the University, over and above the course fee. These include One-time component of Admission Fee (₹45,000) and Application Fee (₹1,500); the Examination Fee is ₹4,000 per semester.",
        ],
        totalCourseFee: "₹18,00,000",
        hostelFees: {
            hostelTypes: [
                {
                    type: "inCampus",
                    label: "In Campus",
                    title: "Sushant University Hostel",
                    roomTypes: [
                        createGurugramInCampusHostelRoomType({
                            type: "Premium Room",
                            hostelFeePerYear: "₹1,95,000 (Triple Sharing) or 2,60,000 (Double sharing)",
                            registrationFee: "₹5,000",
                            securityDeposit: "₹15,000",
                            paymentMode: "Annual; one time payment",
                            roomFeatures: "Premium furniture and finishings: Bed with Storage, Almirah, Study Table & Chair, Bedside Table, Window AC, Attached Washroom with Geyser",
                            applicableFor: "Boys & Girls",
                            note: "Electricity to be charged at slabs => 0–300 units Included, 301–500 units at ₹10/unit, Above 500 units at ₹15/unit",
                        }),
                        createGurugramInCampusHostelRoomType({
                            type: "Deluxe Room (with balcony)",
                            hostelFeePerYear: "₹1,65,000 (Triple Sharing) or ₹2,10,000 (Double sharing) or ₹3,85,000 (Single)",
                            registrationFee: "₹5,000",
                            securityDeposit: "₹15,000",
                            paymentMode: "Annual; one time payment",
                            roomFeatures: "Bed with Storage, Almirah, Study Table & Chair, Bedside Table, Window AC, Attached Washroom with Geyser",
                            applicableFor: "Boys & Girls",
                            note: "Electricity to be charged at slabs => 0–300 units Included, 301–500 units at ₹10/unit, Above 500 units at ₹15/unit",
                        }),
                        createGurugramInCampusHostelRoomType({
                            type: "Deluxe Room (without balcony)",
                            hostelFeePerYear: "₹1,45,000 (Triple Sharing) or ₹1,90,000 (Double sharing) or ₹3,65,000 (Single sharing)",
                            registrationFee: "₹5,000",
                            securityDeposit: "₹15,000",
                            paymentMode: "Annual; one time payment",
                            roomFeatures: "Bed with Storage, Almirah, Study Table & Chair, Bedside Table, Window AC, Attached Washroom with Geyser",
                            applicableFor: "Only Boys",
                            note: "Electricity to be charged at slabs => 0–300 units Included, 301–500 units at ₹10/unit, Above 500 units at ₹15/unit",
                        }),
                    ],
                    notes: [
                        [
                            "Fees:",
                            "a. Covers 10 months.",
                            "b. Hostel must be vacated during June and July. No stay is allowed during this period, even on a pro-rata basis.",
                        ].join("\n"),
                        "Dining: 4 meals daily, including breakfast, lunch, snacks, and dinner.",
                        [
                            "Services:",
                            "a. Cleaning: Daily, with extra cleaning available if needed.",
                            "b. Laundry: Paid external service at approximately Rs 17 per cloth with ironing.",
                        ].join("\n"),
                        [
                            "Additional Information:",
                            "a. Power Backup: 24x7 continuous availability.",
                            "b. WiFi: Available on all floors with approximately 50 Mbps speed.",
                            "c. Security: 24x7 guards, CCTV surveillance, and warden presence.",
                            "d. Distance: Approximately 200 meters from the academic block.",
                        ].join("\n"),
                    ],
                },
            ],
        },
        hostelPlaceholder: "",
    },

    financing: {
        description: "At Vedam School of Technology, we understand that flexibility and convenience in fee payments are important to our students and their families. To make this process easier and more accessible, we have partnered with recognized financial companies.",
        zeroEmi: {
            title: "Loan at Low Cost EMI",
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
        mobile: "/img/student1.webp",
        desktop: "/img/student.webp",
        alt: "Vedam's first year students, global outcomes",
    },
};


// ─────────────────────────────────────────────────────────────────────────────
// PUNE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const createPuneHostelRoomType = ({
    type,
    hostelFeePerYear,
    securityDeposit,
    roomFeatures,
    applicableFor,
    note = [
        "Electricity to be charged on actuals.",
    ].join("\n"),
}) => ({
    type,
    rows: [
        { label: "Hostel Fee per Year (Accommodation + Mess + Laundry Charges)", value: hostelFeePerYear },
        { label: "Security Deposit (Refundable)", value: securityDeposit },
        { label: "Room Features", value: roomFeatures },
        { label: "Applicable for", value: applicableFor },
        { label: "Note", value: note },
    ],
});

const createPuneOutCampusHostelRoomType = ({
    type,
    hostelFeePerYear,
    securityDeposit,
    paymentTerms,
    roomFeatures,
    note = [
        "Electricity to be charged at 18/- per unit",
    ].join("\n"),
}) => ({
    type,
    rows: [
        { label: "Hostel Fee per Year (Accommodation + Mess + Laundry Charges)", value: hostelFeePerYear },
        { label: "Security Deposit (Refundable)", value: securityDeposit },
        { label: "Payment Terms", value: paymentTerms },
        { label: "Room Features", value: roomFeatures },
        { label: "Note", value: note },
    ],
});

export const puneConfig = {
    hero: {
        bgImage: "/img/program/hero-bg-pune.webp",
        bgAlt: "ADYPU Pune partnered with Vedam School of Technology",
        partnerLogo: "/img/program/adypu.webp",
        partnerLogoAlt: "ADYPU logo",
        title: "UG Program in Computer Science & Artificial Intelligence",
        subtitle: "Bachelor of Technology Degree by ADYPU, Pune",
        applyUrl: "https://apply.vedam.org",
        brochureUrl: "https://drive.google.com/file/d/1j04UERHtvzVG0i9r0A8EY5s0dnAT_DT-/view?usp=drive_link",
        accreditationPill: [
            { src: "/img/program/ugc-logo.svg", alt: "UGC", label: "UGC Recognised", width: { xs: "16px", md: "24px" } },
            { src: "/img/program/nirf-logo.webp", alt: "NIRF", label: "NIRF Ranked" },
            { src: "/img/program/naac-logo.webp", alt: "NAAC", label: "NAAC Accredited" },
        ],
    },

    statsBar: {
        tiles: [
            { title: "4 Years", body: "B.Tech in CS with Specialisation in AI by Ajeenkya DY Patil University", highlight: false },
            { title: "Partner Campus", body: "Ajeenkya DY Patil University - DY Patil Knowledge City, Pune", highlight: true },
            { title: "Eligibility", body: "2025, 2026 12th student with PCM (>50% in PCM & 12th boards Overall)", highlight: false },
        ],
        footnote: "*Admissions open for 2026 intake. Only top 5% applicants are selected.",
    },

    citySection: {
        heading: "Why Pune?",
        description: "Pune is where engineering talent gets built. Home to one of India's largest concentrations of manufacturing, IT and deep tech companies - the city gives engineering students something most campuses can't: proximity to real industry.",
        descriptionFontWeight: { xs: 400, md: 400 },
        statsLeft: [
            { num: "50000+", label: "MNCs & Enterprises" },
            { num: "#2", label: "Largest IT hub in Maharashtra" },
        ],
        statsRight: [
            { num: "3200+", label: "Registered Startups" },
            { num: "Oxford of East ", label: "India's Education Capital" },
        ],
        img1: "/img/program/whypune1.webp",
        img2: "/img/program/whypune2.webp",
        img3: "/img/program/whypune3.webp",
        img4: "/img/program/whypune4.webp",
    },

    campusSection: {
        subheading: "Campus in the Heart of Pune's Innovation Ecosystem",
        description: "Vedam sits on a lush, 100-acre campus at Ajeenkya DY Patil University, Lohegaon — just 6 kilometres from Pune International Airport. It's a self-contained ecosystem of education, infrastructure, and community, in India's most liveable city.",
        images: [
            "/img/program/campus1.webp",
            "/img/program/campus2.webp",
            "/img/program/campus3.webp",
            "/img/program/campus4.webp",
            "/img/program/campus5.webp",
            "/img/program/campus6.webp",
        ],
        imageAlts: [
            "ADYPU hostel",
            "ADYPU campus",
            "ADYPU mac lab",
            "ADYPU library",
            "ADYPU sports ground",
            "ADYPU campus building",
        ],
    },

    accreditations: {
        description: "Your degree isn't just a certificate — it's a nationally recognised credential backed by India's top regulatory bodies, independent quality assessors, and international ranking frameworks.",
        logos: [
            { src: "/img/program/naac-logo.webp", alt: "NAAC", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/nirf-logo.webp", alt: "NIRF", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/mh-logo.webp", alt: "GOVT OF MAHARASHTRA", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/aiu.webp", alt: "AIU", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/nba.webp", alt: "NBA", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
            { src: "/img/program/ugc.webp", alt: "UGC", height: { xs: "30px", md: "80px" }, width: { xs: "auto", md: "auto" } },
        ],
    },

    scholarships: {
        description: "We believe every deserving student should have access to world-class education. ADYPU and Vedam jointly offer scholarships that recognise talent, support diversity, and remove financial barriers.",
        items: [
            { title: "Merit Based Scholarship", percent: "Up to 100%", desc: "Recognizes academic excellence, unique talent and leadership potential.", img: "/img/program/scholarship-merit.webp" },
            { title: "Women in Tech Scholarship", percent: "Upto 20%", desc: "Empowering and supporting women in tech for growth and success.", img: "/img/program/scholarship-women.webp" },
            { title: "Need Based Scholarship", percent: "Upto 30%", desc: "Focused on specific fields of study or demonstrating financial needs.", img: "/img/program/scholarship-need.webp" },
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
                    title: " Union Living [Only for Boys]",
                    roomTypes: [
                        createPuneOutCampusHostelRoomType({
                            type: "4 Sharing Room",
                            hostelFeePerYear: "₹1,85,000/-",
                            paymentTerms: "1st Installment: ₹1,10,000 (To be paid at the time of hostel booking) and 2nd Installment: ₹75,000 (To be paid by 30th November 2026)",
                            securityDeposit: "₹15,000/-",
                            roomFeatures: "AC, Attached Washroom with Geyser, 100 MBPS Wifi, 1 Bed with Storage, 1 Mattress, 1 Wardrobe, 1 Study Table & Chair",
                        }),
                        createPuneOutCampusHostelRoomType({
                            type: "3 Sharing Room",
                            hostelFeePerYear: "₹1,99,500/-",
                            paymentTerms: "1st Installment: ₹1,20,000 (To be paid at the time of hostel booking) and 2nd Installment: ₹79,500 (To be paid by 30th November 2026)",
                            securityDeposit: "₹15,000/-",
                            roomFeatures: "AC, Attached Washroom with Geyser, 100 MBPS Wifi, 1 Bed with Storage, 1 Mattress, 1 Wardrobe, 1 Study Table & Chair",
                        }),
                        createPuneOutCampusHostelRoomType({
                            type: "2 Sharing Room",
                            hostelFeePerYear: "₹2,20,000/-",
                            paymentTerms: "1st Installment: ₹1,35,000 (To be paid at the time of hostel booking) and 2nd Installment: ₹85,000 (To be paid by 30th November 2026)",
                            securityDeposit: "₹15,000/-",
                            roomFeatures: "AC, Attached Washroom with Geyser, 100 MBPS Wifi, 1 Bed with Storage, 1 Mattress, 1 Wardrobe, 1 Study Table & Chair",
                        }),
                    ],
                    notes: [
                        "The property is Union Living, Lohegaon, which is less than 1 KM away from ADYPU, Pune.",
                        [
                            "The following are included in the Mess and Laundry fees:",
                            "a. 4 Meals daily, 7 days a week: Breakfast, Lunch, Snacks & Dinner",
                            "b. Laundry [56 garments per month per student (Wash + Iron)]",
                        ].join("\n"),
                        "The deposit carries an exit fee of ₹4,000/- per student per academic session, which shall be deducted from the student’s security deposit at the time of checkout, along with any other charges or penalties applicable.",
                        "The security deposit must be topped up promptly if it is drawn down due to damages (beyond regular wear and tear), fines, or any other recoverable amounts. The deposit must be maintained at ₹15,000/- at all times.",
                        "Students cannot opt out of hostels in the middle of an academic year. Academic year covers 11 months (15th July 2026 – 14th June 2027). Knowing this, if students want to discontinue in middle of academic year, full year fee will be chargeable.",
                        [
                            "Housekeeping:",
                            "a. Room Cleaning: Alternate day (every other day) per room.",
                            "b. Common Areas: Daily cleaning and maintenance of all corridors, lobbies, staircases, and shared spaces.",
                            "c. Garbage Disposal: Daily collection and disposal from all floors.",
                            "d. Linen (bed sheets, pillow covers, blankets, towels) is not provided by Union Living. Students are expected to arrange their own linen.",
                        ].join("\n"),
                        "Common Amenities: Common Pantry, Water Dispensers, Washing Machines, Study Zone, Gaming Zone, Canteen, Gymnasium.",
                        "CCTV surveillance covering all common areas, entry/exit points, corridors, and terrace.",
                        "Medical Aid: Doctor available on call (charges as per actuals).",
                        "Biometric / access-controlled entry.",
                    ],
                    notesAction: {
                        label: "Download Brochure",
                        href: "https://drive.google.com/file/d/1j9Y-Mvz4-JT6RipuZ-RCbvtrEtI2d62b/view?usp=sharing",
                    },
                },
                {
                    type: "inCampus",
                    label: "In Campus",
                    title: "ADYPU Hostel",
                    roomTypes: [
                        createPuneHostelRoomType({
                            type: "4 Sharing Room (Standard)",
                            hostelFeePerYear: "₹1,83,000/-",
                            securityDeposit: "₹10,000/-",
                            roomFeatures: "Common Washroom, Non AC, 1 Bed, 1 Side Drawer, 1 mattress, 1 Chair, 1 Study Table, 1 Cupboard",
                            applicableFor: "Boys & Girls",
                        }),
                        createPuneHostelRoomType({
                            type: "3 Sharing Room (Premium)",
                            hostelFeePerYear: "₹2,08,000/-",
                            securityDeposit: "₹20,000/-",
                            roomFeatures: "Common Washroom, Non AC, 1 Bed, 1 Side Drawer, 1 mattress, 1 Chair, 1 Study Table, 1 Cupboard",
                            applicableFor: "Boys & Girls",
                        }),
                        createPuneHostelRoomType({
                            type: "4 Sharing Room (Premium AC)",
                            hostelFeePerYear: "₹2,58,000/-",
                            securityDeposit: "₹20,000/-",
                            roomFeatures: "Attached Washroom, AC, 1 Bed, 1 Side Drawer, 1 mattress, 1 Chair, 1 Study Table, 1 Cupboard",
                            applicableFor: "Boys & Girls",
                        }),
                        createPuneHostelRoomType({
                            type: "4 Sharing Room (Supreme)",
                            hostelFeePerYear: "₹2,93,000/-",
                            securityDeposit: "₹20,000/-",
                            roomFeatures: "Attached Washroom, 1 Bed, 1 Side Drawer, 1 mattress,1 Chair, 1 Study Table, 1 Cupboard, TV, Oven, AC, Refrigerator",
                            applicableFor: "Boys Only",
                        }),
                    ],
                    notes: [],
                },
            ],
        },
        hostelPlaceholder: "",
    },

    financing: {
        description: "At Vedam School of Technology, we understand that flexibility and convenience in fee payments are important to our students and their families. To make this process easier and more accessible, we have partnered with recognized financial companies.",
        zeroEmi: {
            title: "Loan at Zero Cost EMI",
            headingComponent: "h3",
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
        mobile: "/img/student1.webp",
        desktop: "/img/student.webp",
        alt: "Vedam's first-year students, global outcomes",
    },
};
