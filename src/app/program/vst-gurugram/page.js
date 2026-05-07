import ProgramPage from "../ProgramPage";
import { gurugramConfig } from "../ProgramConfigs";

export const metadata = {
    title: "Program & Fees - VST Gurugram | Vedam School of Technology",
    description:
        "Explore the VST Gurugram Computer Science and AI program, fee structure, hostel details, scholarships, financing options, and campus information.",
    keywords: [
        "VST Gurugram program and fees",
        "Vedam Gurugram program fees",
        "VST Gurugram BTech fees",
        "Vedam Gurugram BTech Computer Science AI",
        "BTech Computer Science and AI Gurugram",
        "AI engineering college Gurugram fees",
        "Computer Science AI college Gurugram",
        "Sushant University BTech AI program",
        "Vedam Gurugram fee structure",
        "Vedam Gurugram hostel fees",
        "VST Gurugram scholarships",
        "VST Gurugram financing options",
        "BTech AI course fees Gurugram",
        "Vedam School of Technology Gurugram",
        "Sushant University Vedam",
        "CS AI college Delhi NCR",
        "AI engineering college Delhi NCR",
    ],
    openGraph: {
        title: "Program & Fees - VST Gurugram",
        description:
            "Review the VST Gurugram CS & AI program, fees, hostel details, scholarships, financing, and campus information.",
        url: "https://www.vedam.org/program/vst-gurugram",
        siteName: "Vedam School of Technology",
        type: "website",
        images: [
            {
                url: "/img/Vedam_Final_Logo_White.webp",
                width: 1200,
                height: 630,
                alt: "Program & Fees - VST Gurugram",
            },
        ],
    },
};

export default function GurugramProgramPage() {
    return <ProgramPage config={gurugramConfig} />;
}
