import { AIYear1 } from "@/components/home/AIFirstCurriculum/AIYear1";
import { AIYear2 } from "@/components/home/AIFirstCurriculum/AIYear2";
import { AIYear3 } from "@/components/home/AIFirstCurriculum/AIYear3";
import { AIYear4 } from "@/components/home/AIFirstCurriculum/AIYear4";

export const testimonialData = [
  {
    image: "/img/linkedInIcon.png",
    text: "I wasted countless hours on DSA resources before landing under the guidance of Subhesh sir. He is an experienced teacher and one who makes learning a delightful experience. Really mind-blowing. I wish the team Algoprep all the best.",
    name: "Pranjal Sharma",
    designation: "Software Development Engineer 1, Amazon",
  },
  {
    image: "/img/linkedInIcon.png",
    text: "The guidance and resources provided by Algoprep were instrumental in helping me crack my dream job. Highly recommended!",
    name: "John Doe",
    designation: "Frontend Developer, Google",
  },
  {
    image: "/img/linkedInIcon.png",
    text: "Algoprep's structured approach and expert mentors helped me improve my problem-solving skills significantly. Thank you!",
    name: "Jane Smith",
    designation: "Data Scientist, Microsoft",
  },
  {
    image: "/img/linkedInIcon.png",
    text: "I was struggling with coding interviews, but Algoprep's mock interviews and feedback boosted my confidence. Great platform!",
    name: "Alex Brown",
    designation: "Backend Developer, Facebook",
  },
];

export const expertsData = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg", // Example image URL
    name: "John Doe",
    logo: "/next.svg",
    designation: "Software Engineer",
    info: "Specializes in front-end development and UI/UX design.Specializes in front-end development and UI/UX design.",
    rating: 4.5,
    linkedIn: "/img/linkedInIcon.png",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
    name: "Jane Smith",
    logo: "/next.svg",
    designation: "Data Scientist",
    info: "Expert in machine learning and data analysis.",
    rating: 3.7,
    linkedIn: "/img/linkedInIcon.png",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
    name: "Alice Johnson",
    logo: "/next.svg",
    designation: "DevOps Engineer",
    info: "Focuses on CI/CD pipelines and cloud infrastructure.",
    rating: 4.2,
    linkedIn: "/img/linkedInIcon.png",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
    name: "Bob Brown",
    logo: "/next.svg",
    designation: "Backend Developer",
    info: "Experienced in building scalable APIs and databases.",
    rating: 4.9,
    linkedIn: "/img/linkedInIcon.png",
  },
];
export const detailsData = [
  {
    image: "/img/whyvedam/first.webp",
    title: "Code From Day 1",
    description:
      "From Day 1, you'll be writing real code, building projects, and solving industry-relevant problems.",
  },
  {
    image: "/img/whyvedam/second.webp",
    title: "AI First Curriculum",
    description:
      "Our AI-First Curriculum is designed to equip students with the skills, tools, and mindset needed to thrive in an AI-powered world.",
  },
  {
    image: "/img/whyvedam/third.webp",
    title: "Mentorships",
    description:
      "Get personalized career guidance from experienced professionals.",
  },
  {
    image: "/img/whyvedam/fourth.webp",
    title: "Top Instructors",
    description:
      "At Vedam, you’ll learn from the best minds in tech—engineers, researchers, and industry leaders from Google, Microsoft, Amazon, and top startups. Our faculty doesn’t just teach theory; they bring real-world experience into the classroom.",
  },
  {
    image: "/img/whyvedam/fifth.webp",
    title: "Personal Macbook Pro ",
    description:
      "It's your key to a hands-on, immersive and collaborative learning experience in Computer Science and AI.",
    isFeatured: true,
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Admission & Fees", path: "/admission" },
  { label: "Life @ Vedam", path: "/services" },
  { label: "FAQs", path: "/contact" },
  { label: "Login", path: "/login" },
  { label: "Register Now", path: "/register" },
];

export const homeScreenData = {
  hero: {
    background_video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    title: "More Than a Degree\nBuild Innovate & Lead",
    subtitle:
      "Vedam's 4-year BTech program prepares you for startups, innovation, and leadership with industry driven coursework and hands-on projects.",
  },
  fromEducationToEntrance: {
    title: "From education to entrance",
    subtitle: "Our Students at Top companies",
    imagesGrid: [
      {
        id: 0,
        imageUrl: "/img/companies/adobe.webp",
      },
      {
        id: 1,
        imageUrl: "/img/companies/flipkart.webp",
      },
      {
        id: 2,
        imageUrl: "/img/companies/phonepe.webp",
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
        imageUrl: "/img/companies/google.webp",
      },
    ],
    bottomText:
      "*outcome through companies whom the founders built before Vedam ",
  },
  inCollaborationWith: {
    title: "We are launching",
    subtitle: "In Collaboration with",
    leftSideImage: "/img/college.webp",
    rightSideText1: "Ajinkya DY Patil University",
    data: [
      {
        id: 0,
        image: "/img/branch.webp",
        text: "B.Tech in Computer Science (AI)",
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
  techTeam: {
    title: "Brilliant Mind who works",
    subtitle: "Tech team behind Vedam",
    image: "/img/tech_team.webp",
  },
  investorWhoTrustUs: {
    subtitle: "Investor who trust us",
    data: [
      { id: 0, img: "/img/digital_capital.webp" },
      { id: 1, img: "/img/saama.webp" },
      { id: 2, img: "/img/westbridge.webp" },
      { id: 3, img: "/img/companies/adobe.webp" },
      { id: 4, img: "/img/companies/flipkart.webp" },
      { id: 5, img: "/img/companies/phonepe.webp" },
      { id: 6, img: "/img/companies/meta.webp" },
      { id: 7, img: "/img/companies/amazon.webp" },
      { id: 8, img: "/img/companies/paypal.webp" },
      { id: 9, img: "/img/companies/paypal.webp" },
      { id: 10, img: "/img/companies/walmart.webp" },
      { id: 11, img: "/img/companies/razorpay.webp" },
    ],
  },
  whyVedam: {
    title: "It is a edge for you",
    subtitle: "Why Vedam",
  },
  vedamVs: {
    subtitle: "Vedam vs Traditional CS Education",
    leftSideData: {
      headerText: "",
      textArray: [
        { id: 0, text: "Learning & Assignments" },
        { id: 1, text: "Curriculum" },
        { id: 2, text: "Global Exposures" },
        { id: 3, text: "Mentors" },
        { id: 4, text: "Employability" },
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
          text: "Learn through building real world projects",
        },
        {
          id: 2,
          icon: "/img/vedamvs/middle/third.webp",
          text: "Prepration for Global competitions like GSoC and Tech confrences",
        },
        {
          id: 3,
          icon: "/img/vedamvs/middle/fourth.webp",
          text: "Personal 1:1 dedicated support",
        },
        {
          id: 4,
          icon: "/img/vedamvs/middle/fifth.webp",
          text: "Placement ready for top tech companies",
        },
      ],
    },
    rightSideData: {
      headerText: "Traditional Education",
      textArray: [
        { id: 0, icon: "/img/vedamvs/right/first.webp", text: "outdated" },
        {
          id: 1,
          icon: "/img/vedamvs/right/second.webp",
          text: "theoritical approach",
        },
        {
          id: 2,
          icon: "/img/vedamvs/right/first.webp",
          text: "Lack industry exposure",
        },
        {
          id: 3,
          icon: "/img/vedamvs/right/first.webp",
          text: "no dedicated support",
        },
        {
          id: 4,
          icon: "/img/vedamvs/right/first.webp",
          text: "require training",
        },
      ],
    },
  },
  FeeStructure: {
    subtitle: "Fee Structure",
    headerLeftTitle: "Semester wise break-up of course fee",
    headerRightLocation: `ADY, Pune`,
    leftSideYearTable: [
      { id: "0", year1: "Year 1", amount1: "268,750", amount2: "218,750" },
      { id: "1", year1: "Year 2", amount1: "218,750", amount2: "218,750" },
      { id: "2", year1: "Year 3", amount1: "218,750", amount2: "218,750" },
      { id: "3", year1: "Year 4", amount1: "218,750", amount2: "218,750" },
    ],
    rightSideText: [
      {
        id: 1,
        text: "Seat blocking fee of INR 50,000 will be adjusted against the 1st semester fee",
      },
      {
        id: 2,
        text: "The total fee mentioned above includes both the tuition fee and the upskilling fee.",
      },
      {
        id: 3,
        text: "Hostel and mess services are available on the ADYPU campus, subject to availability and offered on a first-come, first-served basis.",
      },
    ],
  },
  learnFrom: {
    title: "The people who build for world",
    subtitle: "Learn from MAANG Experts",
  },
  whatPeople: {
    subtitle: "What people says about us",
  },
  aiFirst: {
    title: "Future proof learning",
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
    subtitle: "Learn the basics for AI and Programming by building from year 1",
    secondTitle: "Skills & Technologies",
    secondArray: [
      "JavaScript",
      "Python",
      "JAVA",
      "Unlearning & Learning how to Learn",
      "Soft skill",
      "Probability & Statistics",
      "UNIX",
    ],
    Outcomes: "Outcomes",
    outcomeArray: [
      {
        id: 0,
        text: "Building Hotstar like Feed with Search and Categories",
        icon: "/img/outcomes/first.webp",
      },
      {
        id: 1,
        text: "Build a Portfolio Website like GitHub Pages",
        icon: "/img/outcomes/second.webp",
      },
      {
        id: 2,
        text: "Develop an Online Resume Builder like Canva",
        icon: "/img/outcomes/third.webp",
      },
    ],
  },
};

export const admissionScreenData = {
  hero: {
    background_video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    title: "Top 5% will make it\nto the Vedam batch.",
    subtitle: "Apply Now for 2025 admission",
  },
  admissionAndFees: {
    subtitle: "Admission & Fees",
    description:
      "We look forward to welcoming students who value a talented peer group. Only the top 5% will make it to the Vedam batch. The group study and peer to peer learning increases greatly in such a batch.",
    applyNow: "Apply Now for 2025 admission",
    eligibilityStrong: "Eligibility Criteria: ",
    eligibilityText:
      "2024, 2025 12th student with PCM (>50% in PCM & 12th boards Overall)",
  },
  keyDates: {
    subtitle: "Key Dates",
  },
  admissionProcess: {
    subtitle: "Admission Process",
  },
  facilityAndAmenities: {
    subtitle: "Facilities & Amenities",
  },
  feeStructure: {
    subtitle: "Fee Structure",
  },
  scholarshipProgram: {
    subtitle: "Scholarship Program",
  },
  financingOption: {
    subtitle: "Financing Options",
  },
};
