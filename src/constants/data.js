import { AIYear1 } from "@/components/home/AIFirstCurriculum/AIYear1";
import { AIYear2 } from "@/components/home/AIFirstCurriculum/AIYear2";
import { AIYear3 } from "@/components/home/AIFirstCurriculum/AIYear3";
import { AIYear4 } from "@/components/home/AIFirstCurriculum/AIYear4";
import AI1 from "@/components/life/ScrollComponent/AI1";
import Robotics2 from "@/components/life/ScrollComponent/Robotics2";
import Drone3 from "@/components/life/ScrollComponent/Drone3";
import Vc4 from "@/components/life/ScrollComponent/Vc4";
import Project5 from "@/components/life/ScrollComponent/Project5";
import Image from "next/image";

export const testimonialData = [
  {
    image: "/img/testimonials/sarthak.webp",
    text: `"I can't praise Subhesh's DSA course enough. His unique teaching approach and comprehensive content gave me the edge to crack Google Warsaw. His dedication and support were truly invaluable. I would definitely recommend this course."`,
    name: "Sarthak Bhatia",
    designation: "SWE 3, Google",
    companyLogo: "/img/companies/google.webp",
  },
  {
    image: "/img/testimonials/pranjal.webp",
    text: `"I wasted countless hours on DSA resources before landing under the guidance of Subhesh sir. He is an experienced teacher and one who makes learning a delightful experience. Really mind-blowing. I wish the team all the best"`,
    name: "Pranjal Sharma",
    designation: "SDE 1, Amazon",
    companyLogo: "/img/companies/amazon.webp",
  },
  {
    image: "/img/testimonials/kunal.webp",
    text: `"The course transformed my career with its comprehensive curriculum and expert instructors. The hands-on projects offered practical experience, boosting my confidence and job prospects. If you're serious about coding, Nishant and Subhesh are a top-notch choice."`,
    name: "Kunal Trivedi",
    designation: "Software Engineer, Bosch",
    companyLogo: "/img/companies/Bosch_Logo.png",
  },
  {
    image: "/img/testimonials/harshit.webp",
    text: `"The curriculum is comprehensive, instructor is experienced, and in-depth learning helped me gain confidence. I started as a beginner and cracked multiple offers ultimately. Nishant and Subhesh make a great team. Kudos to them for taking this initiative"`,
    name: "Harshit Trehan",
    designation: "SDE 2, Atlassian",
    companyLogo: "/img/companies/Atlassian-Logo.png",
  },
  {
    image: "/img/testimonials/divya.webp",
    text: `"I loved the way this coding course was structured. He started with the basics and then gradually built on our knowledge. This made it easy to learn and retain the information. I also appreciate the fact that he provided us with plenty of practice exercises."`,
    name: "Divya Chopra",
    designation: "SWE 2, Google",
    companyLogo: "/img/companies/google.webp",
  },
  {
    image: "/img/testimonials/jaivin.webp",
    text: `"I am really grateful that I had the opportunity to explore DSA with Subhesh sir. His methodology and guidance were exceptional. The course started from if else and at last we were solving really Hard Leetcode Problems. Had a lot of learning with fun."`,
    name: "Jaivin Phogaat",
    designation: "SDE, DP World",
    companyLogo: "/img/companies/dp_world.webp",
  },
];

export const expertsData = [
  {
    imageUrl: "/img/experts/amanpreet.jpeg",
    name: "Amanpreet Singh",
    logo: "/img/companies/google.webp",
    designation: "Software Engineer",
    info: "NSIT, Ex Mentor Graphics & OYO",
    rating: 4.9,
    linkedIn:
      "https://www.linkedin.com/in/amanpreet-singh-b79598a3/?originalSubdomain=in",
  },
  {
    imageUrl: "/img/experts/Manivannan.png",
    name: "Manivannan",
    logo: "/img/companies/microsoft-logo.png",
    designation: "Senior Software Engineer",
    info: "13+ Years of Experience, Amazon Interview Panel Member",
    rating: 4.9,
    linkedIn: "https://www.linkedin.com/in/manivannan21/",
  },

  {
    imageUrl: "/img/experts/ekta.jpeg",
    name: "Ekta Shah",
    logo: "/img/companies/msci_logo.png",
    designation: "Data Scientist ",
    info: "Board Member-Board of Studies at NMIMS, Visiting Faculty at MU",
    rating: 4.9,
    linkedIn: "https://www.linkedin.com/in/ekta-shah30/",
  },
  {
    imageUrl: "/img/experts/gauravdawra.jpeg",
    name: "Gaurav Dawra",
    logo: "/img/companies/microsoft-logo.png",
    designation: "Software Engineer",
    info: "ICPC World Finalist 2022-23, 6 Star on Code Chef",
    rating: 4.2,
    linkedIn: "https://www.linkedin.com/in/gaurav-dawra-a2a935200/",
  },

  {
    imageUrl: "/img/experts/bradford.jpeg",
    name: "Bradford Tuckfield",
    logo: "/img/companies/wharton_logo.webp",
    designation: "PhD",
    info: "Founder, Author and Instructor ; Ex American Express and Accenture",
    rating: 4.9,
    linkedIn: "https://www.linkedin.com/in/bradford-tuckfield-80565b25/",
  },
  {
    imageUrl: "/img/experts/nischay.jpeg",
    name: "Nishchay Agrawal",
    logo: "/img/companies/walmart.webp",
    designation: "Data Scientist",
    info: "University Gold Medalist, Ex Meesho",
    rating: 4.9,
    linkedIn: "https://www.linkedin.com/in/nishchay-agrawal-157404170/",
  },
  {
    imageUrl: "/img/experts/basant.jpeg",
    name: "Basant Rawat",
    logo: "/img/companies/Angel_One_Logo.png",
    designation: "SDE 2",
    info: "Mentored over 20,000 Minutes, Ex Hexaware",
    rating: 4.9,
    linkedIn: "https://www.linkedin.com/in/basant-rawat/",
  },
];
export const instructorData = [
  {
    imageUrl: "/img/instructors/Subhesh_Instructor.png",
    name: "Subhesh Kumar",
    logo: "/img/instructors/google.webp",
    designation: "6 yrs+ teaching experience",
    info: "Ex-Google",
    college: "B.Tech. from DTU (formely DCE)",
    linkedIn: "https://in.linkedin.com/in/subhu9",
    isGoogle: true
  },
  {
    imageUrl: "/img/instructors/Aman_Instructor.png",
    name: "Aman Kumar",
    logo: "/img/instructors/Microsoft_Logo.png",
    designation: "SDE at Apple",
    info: "Ex-Microsoft",
    college: "B.Tech. from DTU (formely DCE)",
    linkedIn: "https://www.linkedin.com/in/aman5898/",
    facultyType: "Visiting Faculty"
  },
  {
    imageUrl: "/img/instructors/Pankaj_Instructor.png",
    name: "Pankaj Kumar",
    logo: "/img/instructors/birdeye.png",
    designation: "Backend Lead at Vedam",
    info: "Ex-Birdeye",
    college: "B.Tech. from GD University",
    linkedIn:
      "https://www.linkedin.com/in/gargpk",
  },
  {
    imageUrl: "/img/instructors/Prasanna_Instructor.png",
    name: "Prasanna Swain",
    logo: "/img/instructors/dtu.png",
    designation: "Frontend Lead at Vedam",
    info: "BTech - DTU",
    college: "B.Tech. from DTU (formely DCE)",
    linkedIn: "https://www.linkedin.com/in/prasanna-swain/",
  },
  {
    imageUrl: "/img/instructors/Jasbir_Instructor.png",
    name: "Jasbir Singh",
    logo: "/img/instructors/Cars24_Logo.jpeg",
    designation: "5 yrs+ Teaching experience",
    info: "Tech Lead",
    college: "B.Tech. from DTU (formely DCE)",
    linkedIn: "https://www.linkedin.com/in/jazzy96/",
    facultyType: "Visiting Faculty"
  }
];
export const detailsData = [
  {
    image: "/img/whyvedam/first.webp",
    bgImage: "/img/whyvedam/whyvedam1.png",
    title: "Only top 5% get through",
    description:
      "Merit based selection to attract the top talent. Learn with and co-create best codes.",
  },
  {
    image: "/img/whyvedam/second.webp",
    bgImage: "/img/whyvedam/whyvedam2.png",
    title: "Code From Day 1",
    description:
      "From Day 1, you'll be writing real code, building projects, and solving industry-relevant problems.",
  },
  {
    image: "/img/whyvedam/fourth.webp",
    bgImage: "/img/whyvedam/whyvedam3.png",
    title: "AI First Curriculum",
    description:
      "Our AI-First Curriculum is designed to equip students with the skills, tools, and mindset needed to thrive in an AI-powered world.",
  },
  {
    image: "/img/whyvedam/third.webp",
    bgImage: "/img/whyvedam/whyvedam4.png",
    title: "Top Instructors",
    description:
      "At Vedam, you’ll learn from the best minds in tech—engineers, researchers, and industry leaders from Google, Microsoft, Amazon, and top startups.",
  },
  {
    image: "/img/whyvedam/fifth.webp",
    bgImage: "/img/whyvedam/whyvedam5.png",
    title: "Personal Macbook ",
    description:
      "It's your key to a hands-on, immersive and collaborative learning experience in Computer Science and AI. ",
    isFeatured: true,
  },
];

export const navLinks = [
  { label: "Home", path: "/home" },
  { label: "Admission & Fees", path: "/admission" },
  { label: "Life @ Vedam", path: "/life", img: "/img/Group 1261155759.svg" },
  { label: "FAQs", path: "/faqs" },
  { label: "About Us", path: "/about" },
  { label: "Register Now", path: "https://apply.vedam.org/" }, //Don't reorder register
  { label: "Login", path: "https://apply.vedam.org/" }, //Don't reorder login
];

export const homeScreenData = {
  hero: {
    background_video: "/vid/videoBg.mp4",
    title: "Learn Tech by Building\u00A0It",
    subtitle:
      "Vedam's 4-year UG OnCampus program prepares you for startups, innovation, and leadership with industry driven coursework and hands-on projects.",
  },
  fromEducationToEntrance: {
    title: "",
    subtitle: "Our Placement Network",
    imagesGrid: [
      {
        id: 0,
        imageUrl: "/img/companies/adobe.webp",
      },
      {
        id: 1,
        imageUrl: "/img/companies/microsoft-logo.png",
      },
      {
        id: 2,
        imageUrl: "/img/companies/google.webp",
      },
      {
        id: 3,
        imageUrl: "/img/companies/meta.webp",
      },
      {
        id: 4,
        imageUrl: "/img/companies/amazon.webp",
      },
      {
        id: 5,
        imageUrl: "/img/companies/paypal.webp",
      },
      {
        id: 6,
        imageUrl: "/img/companies/walmart.webp",
      },
      {
        id: 7,
        imageUrl: "/img/companies/razorpay.webp",
      },
      {
        id: 8,
        imageUrl: "/img/companies/paytm.webp",
      },
      {
        id: 9,
        imageUrl: "/img/companies/flipkart.webp",
      },
      {
        id: 10,
        imageUrl: "/img/companies/Intuit_Logo.png",
      },
      {
        id: 11,
        imageUrl: "/img/companies/Amex_Logo.png",
      },
      {
        id: 12,
        imageUrl: "/img/companies/phonepe.webp",
      },
      {
        id: 13,
        imageUrl: "/img/companies/Goldman_Sachs.png",
      },
      {
        id: 14,
        imageUrl: "/img/companies/Sprinklr_Logo.png",
      },
      {
        id: 15,
        imageUrl: "/img/companies/Bosch_Logo.png",
      },
      {
        id: 16,
        imageUrl: "/img/companies/Atlassian-Logo.png",
      },
      {
        id: 17,
        imageUrl: "/img/companies/Airtel-Logo.png",
      },
      {
        id: 18,
        imageUrl: "/img/companies/delhivery_logo.png",
      },
      {
        id: 19,
        imageUrl: "/img/companies/HCL image.png",
      },
      {
        id: 20,
        imageUrl: "/img/companies/KPMG-logo (1).png",
      },
      {
        id: 21,
        imageUrl: "/img/companies/Deloitte.png",
      },
      {
        id: 22,
        imageUrl: "/img/companies/jpmc-logo.png",
      },
      {
        id: 23,
        imageUrl: "/img/companies/Samsung_Logo_(RGB).png",
      },
      {
        id: 24,
        imageUrl: "/img/companies/zivame-logo-2019.png",
      },
      {
        id: 25,
        imageUrl: "/img/companies/atoms-logo-dark@3x-fb135d29.webp",
      },
    ],
    bottomText:
      "*Placement network of SET Education's parent organization and past success record of Vedam founding team ",
  },
  inCollaborationWith: {
    title: "We are launching",
    subtitle: "In Collaboration with",
    leftSideImage: "/img/college.webp",
    rightSideText1: "Ajeenkya DY Patil University",
    data: [
      {
        id: 0,
        image: "/img/branch.webp",
        text: "B.Tech in Computer Science Engineering (AI) - UGC Approved",
      },
      {
        id: 1,
        image: "/img/location.webp",
        text: "Pune, Maharashtra",
      },
    ],
    buttonText: "Download Brochure",
    buttonIcon: "/img/brochure.webp",
  },
  inCollaborationWith2: {
    subtitle: "In Collaboration with",
    data: [
      {
        id: 0,
        image: "/image/inCollaborationWith/img1.png",
        text: "Ajeenkya DY Patil University, Pune",
      },
      {
        id: 1,
        image: "/image/inCollaborationWith/img2.png",
        text: "Ajinkya DY Patil University, Pune",
      }
    ]
  },
  techTeam: {
    title: "",
    subtitle: "Tech Minds behind Vedam",
    image: "/img/tech_team.jpeg",
    // image: "/img/tech_team.webp",
  },
  investorWhoTrustUs: {
    subtitle: "Investors who trust us",
    data: [
      { id: 0, img: "/img/investors/alteria.webp" },
      { id: 1, img: "/img/investors/saama.webp" },
      { id: 2, img: "/img/investors/westbridge.webp" },
      { id: 3, img: "/img/investors/prime.webp" },
      { id: 4, img: "/img/investors/alteria.webp" },
      { id: 5, img: "/img/investors/saama.webp" },
      { id: 6, img: "/img/investors/westbridge.webp" },
      { id: 7, img: "/img/investors/prime.webp" },
    ],
  },
  whyVedam: {
    title: "",
    subtitle: "Why Vedam",
  },
  vedamVs: {
    subtitle: "Vedam vs Traditional CS Education",
    leftSideData: {
      headerText: "",
      textArray: [
        { id: 0, text: "Curriculum" },
        { id: 1, text: "Learning & Assignments" },
        { id: 2, text: "Global Exposures" },
        { id: 3, text: "Instructors & Mentors" },
        { id: 4, text: "Internships" },
        { id: 5, text: "Placements" },
        { id: 6, text: "Entrepreneurship" },
      ],
    },
    middleSideData: {
      headerText: "Vedam Advantage",
      textArray: [
        {
          id: 0,
          icon: "/img/vedamvs/middle/first.webp",
          text: "Coding from Day 1, Prepares for Jobs of 2029",
        },
        {
          id: 1,
          icon: "/img/vedamvs/middle/second.webp",
          text: "Learn through writing over 100,000 lines of code",
        },
        {
          id: 2,
          icon: "/img/vedamvs/middle/third.webp",
          text: "Preparation for Global competitions like GSoC and Tech conferences",
        },
        {
          id: 3,
          icon: "/img/vedamvs/middle/fourth.webp",
          text: "Practitioners from top tech companies like Microsoft & Google",
        },
        {
          id: 4,
          icon: "/img/vedamvs/middle/fifth.webp",
          text: "6 months internship with a tech product company",
        },
        {
          id: 5,
          icon: "/img/vedamvs/middle/fourth.webp",
          text: "Placement ready for top tech companies",
        },
        {
          id: 6,
          icon: "/img/vedamvs/middle/first.webp",
          text: "Seed funding upto one crore",
        },
      ],
    },
    rightSideData: {
      headerText: "Traditional Education",
      textArray: [
        { id: 0, icon: "/img/vedamvs/right/first.webp", text: "Outdated" },
        {
          id: 1,
          icon: "/img/vedamvs/right/second.webp",
          text: "Theoritical approach",
        },
        {
          id: 2,
          icon: "/img/vedamvs/right/first.webp",
          text: "No such exposure",
        },
        {
          id: 3,
          icon: "/img/vedamvs/right/first.webp",
          text: "Lack industry exposure",
        },
        {
          id: 4,
          icon: "/img/vedamvs/right/first.webp",
          text: "Minimal support",
        },
        {
          id: 5,
          icon: "/img/vedamvs/right/first.webp",
          text: "Non employable",
        },
        {
          id: 6,
          icon: "/img/vedamvs/right/first.webp",
          text: "Lack startup support",
        },
      ],
    },
  },
  FeeStructure: {
    subtitle: "Fee Structure",
    headerLeftTitle: "Vedam School of Technology Fee Structure",
    headerRightLocation: `ADYPU, Pune`,
    leftSideYearTable: [
      {
        id: "0",
        year1: "Year 1",
        semester: "Semester 1",
        amount1: "1,31,250",
        amount2: "1,37,500",
        total: "2,68,750",
      },
      {
        id: "1",
        year1: "",
        semester: "Semester 2",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "2",
        year1: "Year 2",
        semester: "Semester 3",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "3",
        year1: "",
        semester: "Semester 4",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "4",
        year1: "Year 3",
        semester: "Semester 5",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "5",
        year1: "",
        semester: "Semester 6",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "6",
        year1: "Year 4",
        semester: "Semester 7",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "7",
        year1: "",
        semester: "Semester 8",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "8",
        year1: "Total Course Fees",
        semester: "",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "18,00,000",
      },
    ],
    leftSideYearTableMobile: [
      {
        id: "0",
        year1: "Semester 1",
        semester: "Semester 1",
        amount1: "1,31,250",
        amount2: "1,37,500",
        total: "2,68,750",
      },
      {
        id: "1",
        year1: "Semester 2",
        semester: "Semester 2",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "2",
        year1: "Semester 3",
        semester: "Semester 3",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "3",
        year1: "Semester 4",
        semester: "Semester 4",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "4",
        year1: "Semester 5",
        semester: "Semester 5",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "5",
        year1: "Semester 6",
        semester: "Semester 6",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "6",
        year1: "Semester 7",
        semester: "Semester 7",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
      {
        id: "7",
        year1: "Semester 8",
        semester: "Semester 8",
        amount1: "1,31,250",
        amount2: "87,500",
        total: "2,18,750",
      },
    ],
    // totalPriceText: [
    //     {
    //       id: "Total Cost",
    //       total: "₹4.16 lack"
    //     }
    // ],

    rightSideText: [
      {
        id: 1,
        text: "Seat blocking fee of INR 50,000 will be adjusted against the 1st semester fee",
      },
      {
        id: 2,
        text: "The fees mentioned in the table is the Course fees, This is exclusive of Hostel & Mess fees",
      },
      {
        id: 3,
        text: "Hostel and mess services are available on the ADYPU campus, subject to availability and offered on a first-come, first-served basis",
      },
      // {
      //   id: 4,
      //   text: "*Download the complete details of hostel rooms and charges ",
      // },
    ],
  },
  instructor: {
    title: "",
    subtitle: "Our Instructors",
  },
  learnFrom: {
    title: "",
    subtitle: "Meet your Mentors",
  },
  whatPeople: {
    subtitle: "What people say about us",
  },
  Recognitionawards: {
    subtitle: "Recognition & Awards",
  },
  aiFirst: {
    title: "",
    subtitle: "AI First Curriculum",
    data: [
      { id: 1, title: "Year 1", subtitle: "Foundation", content: <AIYear1 /> },
      {
        id: 2,
        title: "Year 2",
        subtitle: "Full Stack Mastery",
        content: <AIYear2 />,
      },
      {
        id: 3,
        title: "Year 3",
        subtitle: "AI Expertise",
        content: <AIYear3 />,
      },
      {
        id: 4,
        title: "Year 4",
        subtitle: "Specialised AI Tracks",
        content: <AIYear4 />,
      },
    ],
  },
  year1: {
    title: "Programming Foundation",
    subtitle:
      "Learn the basics for AI and Programming by building from year\u00A01",
    secondTitle: "Skills & Technologies",
    secondArray: [
      "HTML",
      "CSS",
      "Javascript",
      "Python",
      "DSA",
      "Maths for CS",
      "Probability and Statistics",
      "Soft skills",
    ],
    Outcomes: "Outcomes",
    outcomeArray: [
      {
        id: 0,
        text: "Build Hotstar like Feed with Search & Categories",
        icon: "/img/outcomes/year1.jpg",
      },
      {
        id: 1,
        text: "Build a database like IMDb for storage & ratings",
        icon: "/img/outcomes/year1_2.jpg",
      },
      {
        id: 2,
        text: "Participate in TechCrunch & Hackathons",
        icon: "/img/outcomes/year1_3.jpg",
      },
    ],
  },
  year2: {
    title: "Full Stack Mastery",
    subtitle:
      "You can learn everything needed to build a fully functional web application and launch it successfully.",
    secondTitle: "Skills & Technologies",
    secondArray: [
      "Advanced DSA",
      "Theory of Computation",
      "Full Stack",
      "System Design",
      "Java",
      "ML",
      "DBMS",
      "Operating System",
      "Soft skills",
    ],
    Outcomes: "Outcomes",
    outcomeArray: [
      {
        id: 0,
        text: "Develop an end to end Job Portal like LinkedIn",
        icon: "/img/outcomes/year2_1.jpg",
      },
      {
        id: 1,
        text: "Build a Real-Time Chat platform like WhatsApp",
        icon: "/img/outcomes/year2_2.jpg",
      },
      {
        id: 2,
        text: "Participate in competitions like SIH, GSoC, & ICPC",
        icon: "/img/outcomes/year2_3.jpg",
      },
    ],
  },
  year3: {
    title: "AI Expertise & Industry Internship",
    subtitle: "Build AI based applications ; Intern with top tech companies",
    secondTitle: "Skills & Technologies",
    secondArray: [
      "Compiler Design",
      "Computer Networks",
      "Deep Learning",
      "Foundation in Blockchain",
      "Foundation in Robotics",
      "Foundation in DevOps",
      "Entrepreneurship skills",
    ],
    Outcomes: "Outcomes",
    outcomeArray: [
      {
        id: 0,
        text: "Build a Movie Recommendation System",
        icon: "/img/outcomes/year3_1.jpg",
      },
      {
        id: 1,
        text: "Create a Google Doc-like documentation Platform",
        icon: "/img/outcomes/year3_2.jpg",
      },
      {
        id: 2,
        text: "Go for Industry Internship- Formal Experience",
        icon: "/img/outcomes/year3_3.jpg",
      },
    ],
  },
  year4: {
    title: "Jobs of 2029 - Specialised Tracks",
    subtitle:
      "Master your journey with Specialisation tracks that will be in-demand jobs of the time!",
    secondTitle: "Skills & Technologies",
    secondArray: [
      "Advanced Robotics",
      "Advanced Blockchain",
      "NLP",
      "Computer Architechture",
      "Advanced DevOps",
      "AI Ethics",
    ],
    Outcomes: "Outcomes",
    outcomeArray: [
      {
        id: 0,
        text: "Build a Cryptocurrency Wallet like Coinbase",
        icon: "/img/outcomes/year4_1.jpg",
      },
      {
        id: 1,
        text: "Build a robot that detects and avoids obstacles.",
        icon: "/img/outcomes/year4_2.jpg",
      },
      {
        id: 2,
        text: "Prepare for Placements in top Tech Companies",
        icon: "/img/outcomes/year4_3.jpg",
      },
    ],
  },
  intheHeadlines: {
    title: "In The Headlines",
    subtitle: "In The Headlines",
    data: [
      {
        id: 1,
        image: "/img/inTheNews/vedam_in_the_news_5.jpeg",
        alt: "News Article 1",
        link: "https://timesofindia.indiatimes.com/spotlight/leading-ai-focused-computer-science-programme-in-india-inside-vedams-4-year-computer-science-undergraduate-program/articleshow/121819349.cms",
      },
      {
        id: 2,
        image: "/img/inTheNews/vedam_in_the_news_2.webp",
        alt: "News Article 2",
        link: "https://www.edtechreview.in/news/vedam-school-of-technology-aims-to-transform-computer-science-education-in-india/",
      },
      {
        id: 3,
        image: "/img/inTheNews/vedam_in_the_news_3.webp",
        alt: "News Article 3",
        link: "https://educationmatters.in/2025/02/vedam-school-of-technology-set-to-revolutionize-computer-science-education-in-india/",
      },
      {
        id: 4,
        image: "/img/inTheNews/vedam_in_the_news_4.webp",
        alt: "News Article 4",
        link: "https://government.economictimes.indiatimes.com/news/education/vedam-school-of-technology-acquires-algoprep-to-build-indias-first-ai-native-tech-curriculum/120303273?utm_source=latest_news&utm_medium=homepage",
      },
      {
        id: 5,
        image: "/img/inTheNews/vedam_in_the_news_5.jpeg",
        alt: "News Article 5",
        link: "https://timesofindia.indiatimes.com/spotlight/leading-ai-focused-computer-science-programme-in-india-inside-vedams-4-year-computer-science-undergraduate-program/articleshow/121819349.cms",
      },
      {
        id: 6,
        image: "/img/inTheNews/vedam_in_the_news_2.webp",
        alt: "News Article 6",
        link: "https://www.edtechreview.in/news/vedam-school-of-technology-aims-to-transform-computer-science-education-in-india/",
      },
      {
        id: 7,
        image: "/img/inTheNews/vedam_in_the_news_3.webp",
        alt: "News Article 7",
        link: "https://educationmatters.in/2025/02/vedam-school-of-technology-set-to-revolutionize-computer-science-education-in-india/",
      },
      {
        id: 8,
        image: "/img/inTheNews/vedam_in_the_news_4.webp",
        alt: "News Article 8",
        link: "https://government.economictimes.indiatimes.com/news/education/vedam-school-of-technology-acquires-algoprep-to-build-indias-first-ai-native-tech-curriculum/120303273?utm_source=latest_news&utm_medium=homepage",
      },
    ],
  },
};

export const admissionScreenData = {
  hero: {
    background_video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    title: "Top 5% will make it\nto the Vedam batch.",
    subtitle: "Apply Now for 2026 admission",
  },
  admissionAndFees: {
    subtitle: "Admission & Fees",
    description:
      "We look forward to welcoming students who value a talented peer group. Only the top 5% will make it to the Vedam batch. The group study and peer to peer learning increases greatly in such a batch.",
    applyNow: "Apply Now for 2026 admission",
    eligibilityStrong: "Eligibility Criteria: ",
    eligibilityText:
      "2025, 2026 12th student with PCM (>50% in PCM & 12th boards Overall)",
  },
  keyDates: {
    subtitle: "Key Dates",
    headerText: "July Intake Dates",
    firstArray: [
      "VSAT Test",
      "Last Date to Apply",
      "VSAT Result",
      "Personal Interview",
      "Final Offer",
    ],
    secondArray: [
      "23rd December",
      "22nd December",
      "Within 2 Days of the Exam",
      "Within 5 Days of the Exam",
      "Within 15 Days of the Exam, If selected",
    ],
  },
  admissionProcess: {
    subtitle: "Admission Process",
    leftSideArray: [
      { id: 0, text: "Apply Online" },
      { id: 1, text: "Appear for Test" },
      { id: 2, text: "Personal Interview" },
      { id: 3, text: "Results" },
      { id: 4, text: "Block Your seat" },
    ],
    rightSideArray: [
      {
        id: 0,
        step: "Step 1",
        title: "Apply Online",
        subtitle:
          "Complete your profile and reserve your slot for the Vedam Scholastic Aptitude Test (VSAT).",
        subtitle1: "Last to apply for Early Intake 1 is 22nd December",
        showButton: true,
      },
      {
        id: 1,
        step: "Step 2",
        title: "Take the VSAT",
        subtitle:
          "It is an entrance test conducted online.",
        subtitle1: "The next VSAT is on 23rd December",
        showButton: false,
      },
      {
        id: 2,
        step: "Step 3",
        title: "Appear for Personal Interview",
        subtitle:
          "This will be conducted online by industry experts to understand more about you and your critical thinking skills.",
        showButton: false,
      },
      {
        id: 3,
        step: "Step 4",
        title: "Recieve your Admission Results",
        subtitle:
          "Result shall be announced in 10 days time of your interview, along with scholarships, in case you are eligible for any.",
        showButton: false,
      },
      {
        id: 4,
        step: "Step 5",
        title: "Block your seat",
        subtitle:
          "If selected, you will need to block your seat within a stipulated period of time.",
        showButton: false,
        infoText:
          "Seat Blocking fees of INR 50,000 will be adjusted against the 1st semester fee ",
      },
    ],
  },
  facilityAndAmenities: {
    subtitle: "Facilities & Amenities",
    image: "/img/Auditorium_ADYPU.jpg",
    imageArray: [
      { id: 0, imageUrl: "/img/amenities/Amenities_1.jpeg" },
      { id: 1, imageUrl: "/img/amenities/Amenities_2.jpeg" },
      { id: 2, imageUrl: "/img/amenities/Amenities_3.jpeg" },
      { id: 3, imageUrl: "/img/amenities/Amenities_4.jpeg" },
      { id: 4, imageUrl: "/img/amenities/Amenities_7.jpeg" },
    ],
  },
  feeStructure: {
    subtitle: "Fee Structure",
  },
  scholarshipProgram: {
    subtitle: "Scholarship Program",
    description:
      "Empowering students with the resources to compete in the new age program. Upto 100% scholarships are available",
    data: [
      {
        image: "/img/scholarship/first.webp",
        bgImage: "/img/scholarship/img1.jpeg",
        title: "Merit Based Scholarship (Upto 100%)",
        description:
          "Recognizes academic excellence, unique talent and leadership potential.",
      },
      {
        image: "/img/scholarship/second.webp",
        bgImage: "/img/scholarship/img2.jpeg",
        title: "Women in Tech Scholarship (Upto 20%)",
        description:
          "Empowering and supporting women in tech for growth and success.",
      },
      {
        image: "/img/scholarship/third.webp",
        bgImage: "/img/scholarship/img3.jpeg",
        title: "Need Based Scholarship (Upto 30%)",
        description:
          "Focused on specific fields of study or demonstrating financial needs.",
      },
    ],
  },
  financingOption: {
    subtitle: "Financing Options",
    description:
      "Easy EMI available through our financing partners, subject to meeting financial eligibility criteria. The following financial partners can provide loans for up to 95% of the programme fees to the admitted students.",
  },
};

export const VST_FinancingOptions = {
  subtitleMain: "Financing Option",
  descriptionMain: `At Vedam School of Technology, we understand that flexibility and convenience in fee
payments are important to our students and their families. To make this process easier
and more accessible, we have partnered with recognized financial companies.`,
  body: {
    card1: {
      subtitle: `Loan at Zero Cost EMI`,
      description: `You can pay your annual course fee in monthly installments with no interest, no
processing fee, and no hidden charges.
We've partnered trusted fintech company working with over 2,500 institutions, to
offer this option.`,
    },
    card2: {
      subtitle: `Education Loan from a Bank`,
      description: `You can also access education loans through our trusted banking partners, making
it easier for you to finance your education with flexible repayment options and
competitive interest rates.`,
    },
  },
  financingPartners: "Our Financing Partners",
};

export const lifeAtVedam = {
  hero: {
    background_video: "",
    title: "Life@VST",
    subtitle: "Make memories, learn, grow, and cherish every moment joyfully",
  },
  clubsAtVst: [
    {
      leftSideTitle: "Clubs at VST",
      description:
        "Join our Cultural Club to celebrate diversity through music, dance, drama, and festivals. Engage in events that bring creativity to life!",
      rightSideText: "Cultural Club",
      rightSideText2: "Open Source club",
      image: "/img/clubsatVedam/Cultural_club.jpeg",
    },
    {
      leftSideTitle: "Clubs at VST",
      description:
        "Stay active and competitive in our Sports Club! Participate in various sports, tournaments, and activities to enhance teamwork and skills.",
      rightSideText: "Sports Club",
      rightSideText2: "Gaming Hub",
      image: "/img/clubsatVedam/Sports_Club_N.jpeg",
    },
    {
      leftSideTitle: "Clubs at VST",
      description:
        "Join our ESports Club and compete in gaming tournaments, enhance strategic thinking, and connect with passionate gamers.",
      rightSideText: "ESports Club",
      rightSideText2: "Data Science",
      image: "/img/clubsatVedam/Esports_Club_N.jpeg",
    },
    {
      leftSideTitle: "Clubs at VST",
      description:
        "Contribute to open-source projects, collaborate with developers, and gain real-world coding experience in our Open Source Club.",
      rightSideText: "Open Source Club",
      rightSideText2: "Creative Hub",
      image: "/img/clubsatVedam/open_source.jpeg",
    },
    {
      leftSideTitle: "Clubs at VST",
      description:
        "Sharpen your problem-solving skills with our Competitive Coding Club! Participate in coding challenges, and algorithmic competitions.",
      rightSideText: "Competitive Coding Club",
      rightSideText2: "Creative Hub",
      image: "/img/clubsatVedam/Competitive_Club_N.jpeg",
    },
    {
      leftSideTitle: "Clubs at VST",
      description:
        "Join our Entrepreneurship Club to learn how to turn ideas into successful ventures and change the future!",
      rightSideText: "Entrepreneurship Club",
      rightSideText2: "Creative Hub",
      image: "/img/clubsatVedam/Entrepreneurship_Club_N.jpeg",
    },
  ],
  vedamLab: {
    subtitle: "Vedam Innovation Lab",
    linearGradientText: "Vedam Innovation Lab",
    description:
      "Vedam Innovation Lab is a cutting-edge incubator driving innovation in AR/VR, AI & ML, IoT, Robotics, and Drones. It Empowers creators, fostering breakthroughs, and shaping the future of technology through research and collaboration.",
  },
  edgeAtVedam: {
    subtitle: "Edge at Vedam",
    data: [
      {
        id: 0,
        image: "/img/innovation_lab/edgen1.jpg",
        title: "Shadow a CTO",
        subtitle:
          "Spend a day at leading tech StartUps and know a day in the life of tech leaders and software engineers.",
      },
      {
        id: 1,
        image: "/img/innovation_lab/edgen2.jpg",
        title: "Global Exposure",
        subtitle:
          "Travel and participate in global tech conferences, hackathons and international coding competitions.",
      },
      {
        id: 2,
        image: "/img/edgeAtVedam/third.webp",
        title: "Vedam Venture Fund",
        subtitle:
          "Get seed funding up to Rs. 1 Crore for your tech startup that solve awesome problems of the future.",
      },
    ],
  },
  // Vedam Innovation Lab Scroll Component
  aiFirst: {
    title: "",
    subtitle: "",
    data: [
      { id: 1, title: "AI Zone", subtitle: "", content: <AI1 /> },
      {
        id: 2,
        title: "Robo Station",
        subtitle: "",
        content: <Robotics2 />,
      },
      {
        id: 3,
        title: "Drone Dock",
        subtitle: "",
        content: <Drone3 />,
      },
      {
        id: 4,
        title: "Fund Linkage",
        subtitle: "",
        content: <Vc4 />,
      },
      {
        id: 5,
        title: "Projects you Build",
        subtitle: "",
        content: <Project5 />,
      },
    ],
  },
  AI: {
    title: "AI Zone",
    subtitle:
      "High-performance Mac Studios + Vision Pro for your AI & XR experiments.",
    icon1: "/img/innovation_lab/scroll_component/laptop.png",
    icon2: "/img/innovation_lab/scroll_component/vr.png",
  },
  Robotics: {
    title: "Robo Station",
    subtitle:
      "Hands-on 3D printers, Arduino/Raspberry Pi kits & robotics arms.",
    icon1: "/img/innovation_lab/scroll_component/Robotics.png",
    icon2: "/img/innovation_lab/scroll_component/Robotics2.png",
  },
  Drone: {
    title: "Drone Dock",
    subtitle:
      "Full-scale drone simulators, 3D-printing integration & visual tracking.",
    icon1: "/img/innovation_lab/scroll_component/Drone.png",
    icon2: "/img/innovation_lab/scroll_component/vr.png",
  },
  Vc: {
    title: "Fund Linkage",
    subtitle: "Get upto 1 Cr of Funding.",
    icon1: "/img/innovation_lab/scroll_component/Vc.png",
    icon2: "/img/innovation_lab/scroll_component/vr.png",
  },
  Projects: {
    title: "Projects",
    subtitle:
      "Build AI models, smart devices, AR/VR tools, drones, and startup-ready prototypes.",
    icon1: "/img/innovation_lab/scroll_component/Drone.png",
    icon2: "/img/innovation_lab/scroll_component/vr.png",
  },
  clubsatVedam: {
    subtitle: "Clubs at VST",
    data: [
      {
        bgImage: "/img/clubsatVedam/Sports_Club_N.jpeg",
        title: "Sports Club",
        description:
          "Stay active and competitive in our Sports Club! Participate in various sports, tournaments, and activities to enhance teamwork and skills.",
      },
      {
        bgImage: "/img/clubsatVedam/Entrepreneurship_Club_N.jpeg",
        title: "Entrepreneurship Club",
        description:
          "Join our Entrepreneurship Club to learn how to turn ideas into successful ventures and change the future!",
      },
      {
        bgImage: "/img/clubsatVedam/Competitive_Club_N.jpeg",
        title: "Competitive Coding Club",
        description:
          "Sharpen your problem-solving skills with our Competitive Coding Club! Participate in coding challenges, and algorithmic competitions.",
      },
      {
        bgImage: "/img/clubsatVedam/Cultural_club.jpeg",
        title: "Cultural Club",
        description:
          "Join our Cultural Club to celebrate diversity through music, dance, drama, and festivals.",
      },
      {
        bgImage: "/img/clubsatVedam/open_source.jpeg",
        title: "Open Source Club",
        description:
          "Contribute to open-source projects, collaborate with developers, and gain real-world coding experience in our Open Source Club.",
      },
      {
        bgImage: "/img/clubsatVedam/Esports_Club_N.jpeg",
        title: "ESports Club",
        description:
          "Join our ESports Club and compete in gaming tournaments, enhance strategic thinking, and connect with passionate gamers.",
      },
    ],
  },
};

export const faqsScreenData = [
  {
    title: "General FAQ",
    questions: [
      {
        id: 0,
        title: "How do I apply to the Program",
        description:
          "You can go to apply.vedam.org to access the official application portal and complete the application form to start the testing process.",
      },
      {
        id: 1,
        title: "Is this a full time program?",
        description:
          "Yes, Vedam School of Technology offers a full-time undergraduate program focused on Computer Science and AI. There is no option of Correspondence or Online course.",
      },
      {
        id: 2,
        title:
          "Will I be able to pursue further education or take competitive exams later?",
        description:
          "Yes, students will be eligible to pursue a master's degree. The 4-year UG Programme in CS and AI will ensure our students get access to the latest curriculum, hands-on experience, Internship to achieve success in Computer Science within India and abroad.",
      },
      {
        id: 3,
        title:
          "What kind of degree am I going to get after completing 4 years at Vedam?",
        description:
          "After completing four years at Vedam School of Technology, you will receive a Bachelor of Technology (B.Tech) in Computer Science and Artificial Intelligence from our partner university and an Industry recognized certification from Vedam School of Technology.",
      },
    ],
  },
  {
    title: "Eligibility",
    questions: [
      {
        id: 10,
        title: "What is the eligibility criteria?",
        description:
          "All the students who appeared for 12th exam in 2025, 2026 with PCM (>50% in PCM & 12th boards Overall) are eligible.",
      },
      {
        id: 11,
        title: "My Board results are not out yet, Can I still Apply to VST?",
        description:
          "Yes, you can still apply to Vedam School of Technology (VST) even if your board exam results are not out yet. If you meet the eligibility criteria after your results are declared, your admission will be confirmed.",
      },
      {
        id: 12,
        title:
          "I am in the first year of my Btech, Am I eligible to join this program?",
        description:
          "Yes, if you are currently in the first year of your B.Tech program, you are eligible to join the Vedam School of Technology program. However, please note that you would need to take admission in the first Semester or Year 1 of the four-year Undergraduate program as the credits earned in your current B.Tech program may not be transferable to the Vedam school of technology.",
      },
      {
        id: 13,
        title: "I did my 12th in 2023 or before, Am I eligible to apply?",
        description:
          "You should have completed your 12th grade education in 2024 or 2025 with more than 50% Marks in PCM and 12th board overall. If you meet these requirements, we invite you to join us and embark on an exciting journey toward a future in technology.",
      },
      // Add more questions as needed
    ],
  },
  {
    title: "Selection Process",
    questions: [
      {
        id: 20,
        title: "What is the admission and Selection process?",
        description:
          "The admission and selection process at Vedam School of Technology is designed to identify students with strong problem-solving abilities, technical aptitude, and a passion for innovation.\nThe process begins with the Vedam Scholastic Aptitude Test (VSAT), which evaluates a candidate’s proficiency in mathematics, logical reasoning, and learnability. Shortlisted candidates then proceed to a Personal Interview (PI) conducted online via Google Meet or Zoom, where their problem-solving skills, Communication and motivation for joining the program are assessed.\nFor a detailed overview of the admission criteria, selection stages, and important deadlines, please visit our official admissions page: https://vedam.org/admission",
      },
      {
        id: 21,
        title: "How Many attempts can I give?",
        description:
          "At Vedam School of Technology, candidates can attempt the Vedam Scholastic Aptitude Test (VSAT) up to two times to improve their scores.",
      },
      {
        id: 25,
        title:
          "If a student takes the VSAT twice, is the better score considered?",
        description:
          "Students can take the VSAT twice, but it's not a best-of-two. A second attempt is treated as a new application, requiring the full selection process again, with evaluation relative to others in that round. Scholarships from earlier rounds won't carry forward.",
      },
      {
        id: 22,
        title: "Is VSAT an online exam? Is it proctored?",
        description:
          "Yes, VSAT (Vedam Scholastic Aptitude Test) is an online exam that can be taken from the comfort of your home. Yes, It is a proctored exam.",
      },
      {
        id: 23,
        title: "Can I take VSAT from my Phone?",
        description:
          "No, you cannot take the VSAT (Vedam Scholastic Aptitude Test) on a phone. VSAT is a proctored online exam that requires a laptop or desktop with a webcam and microphone",
      },
      {
        id: 24,
        title:
          "If I clear VSAT, Personal Interview is going to be online or offline?",
        description:
          "If you successfully clear the Vedam Scholastic Aptitude Test (VSAT), the next step in the admission process will be the Personal Interview (PI). The interview will be conducted online via platforms such as Google Meet or Zoom, ensuring accessibility and convenience for all candidates. This allows you to attend the interview from anywhere while maintaining a seamless and professional evaluation process.",
      },
    ],
  },

  {
    title: "Program",
    questions: [
      {
        id: 30,
        title: "What curriculum will all be covered in this Undergrad program?",
        description:
          "Our undergraduate program is designed to provide a comprehensive and industry-aligned curriculum that equips students with cutting-edge knowledge in computer science and artificial intelligence. The coursework covers core programming concepts, data structures & algorithms, software development, machine learning, deep learning, cloud computing, cybersecurity, blockchain, and much more. Additionally, students gain hands-on experience through real-world projects, hackathons, and industry collaborations to ensure they are job-ready. To explore the detailed curriculum and learn more about the subjects covered, please visit our official page: https://vedam.org/home",
      },
      {
        id: 31,
        title: "Who will be the faculty of the course?",
        description:
          "At Vedam School of Technology, the faculty comprises industry experts, renowned academicians, and experienced engineers from top tech companies.",
      },
      {
        id: 32,
        title: "What happens if I dont get Internship in 3rd and 4th Year?",
        description:
          "At Vedam School of Technology, landing an internship is as easy as debugging your first Hello, World!—as long as you put in the effort. With 1000+ career partners, opportunities are plenty. But in the rare case you don’t get an internship, don’t panic—we won’t leave you hanging. Instead, you’ll work on a real-world tech project with industry mentors, gaining hands-on experience (and probably a few all-nighters). Either way, you’ll come out job-ready, and who knows—you might just build the next big thing.",
      },
      {
        id: 33,
        title: "What happens if I dont get a Job after 4 years at Vedam?",
        description:
          "At Vedam School of Technology, we are committed to ensuring that every student secures strong career opportunities. With a network of 1000+ hiring partners, we provide extensive placement support, industry connections, and hands-on training to enhance employability. Our program includes rigorous technical and career development sessions, personalized mentorship, and direct access to job opportunities across various industries. Even after graduation, students benefit from a thriving alumni network and ongoing career guidance. In case of challenges, our dedicated placement team offers resume reviews, interview preparation, and strategic job search support to help every graduate find the right opportunity.",
      },
    ],
  },

  {
    title: "Scholarship and Financing",
    questions: [
      {
        id: 40,
        title: "What is the fees structure of the program?",
        description:
          "The total Course fee for our comprehensive 4-year program is ₹18 Lakhs (Excluding hostel and mess fee), covering a curriculum designed to equip students with cutting-edge knowledge and industry-relevant skills. To explore a detailed breakdown of the fee structure and available financing options, please visit our official admissions page: https://vedam.org/admission",
      },
      {
        id: 41,
        title:
          "What financing options are available for paying the college fees?",
        description:
          "We offer multiple financing options to make college fees more accessible, including education loans from IDFC, Yes Bank, HDFC, RBL, and Propelled. Each option comes with different terms and benefits to suit your needs. Once you are selected, our team will guide you through the process and provide exact details to help you choose the best financing plan.",
      },
      {
        id: 42,
        title: "What kind of scholarships I can get?",
        description:
          "We offer three types of scholarships to support students: Merit-Based Scholarships for high achievers, Women in Tech Scholarships to encourage women in technology, and Need-Based Scholarships for those requiring financial assistance. Once selected, our team will guide you through the eligibility criteria and application process.",
      },
      {
        id: 43,
        title: "Are the Scholarship applicable on the Hostel fees as well?",
        description:
          "The Scholarship is applicable on tution fees(18 Lakhs) only. Hostel and mess fee are not included in Scholarship.",
      },
      {
        id: 44,
        title:
          "What are the eligibility criteria to renew my scholarship at Vedam School of Technology for the next academic year?",
        description:
          "Scholarships, if any, shall be released in four equal parts at the start of each academic year and are renewed annually, provided students maintain a minimum of 75% attendance, achieve academic scores above 75% (or an equivalent CGPA), and clear all dues on time. The scholarship is independent of mess and hostel fees and does not provide coverage for them.",
      },
    ],
  },
];

export const teamVedamScreenData = {
  subtitle: "Team Vedam",
  description:
    "Vedam School of Technology is an initiative by entrepreneurs - Piyush Nangru, Ashish Munjal and Ankur Jain. They come with an experience of running a Series C funded higher education company for the past 6 years that has already skilled more than 10,000 students through its education for the masses approach.",

  data: [
    {
      id: 0,
      name: "Piyush Nangru",
      imageUrl: "/img/teamVedam/pitush_nangru.webp",
      designation: "Co-Founder",
      description:
        "With a passion for startups, Piyush is currently the Co-Founder at Vedam. Piyush joined Crownit as a founding member and headed the marketing and business development aspect of the business. An engineer from NSIT and an MBA from IMT Ghaziabad, Piyush started his venture in the Cultural Tourism space",
    },
    {
      id: 1,
      name: "Ashish Munjal",
      imageUrl: "/img/teamVedam/ashish_munjal.webp",
      designation: "Co-Founder",
      description:
        "With a great appetite for startups, Ashish is currently the Co-Founder at Vedam. Earlier, he was the Co-Founder at Crownit where he headed Consumer and Business growth. An MBA from IMT Ghaziabad and a certified CFA, Ashish has diverse experience in various roles with Bank of America and handled Sales and Operations at Knowlarity.",
    },
    {
      id: 2,
      name: "Ankur Jain",
      imageUrl: "/img/teamVedam/ankur_jain.webp",
      designation: "Co-Founder",
      description:
        "Ankur’s exposure to the education industry makes him an ideal fit for taking charge of Vedam’s growth and expansion. More than 15 years of demonstrated expertise in Sales, Marketing and Business Development, he has previously worked with Amazon, Airtel and YourStory and is the founder of HostelFund",
    },
  ],
};
