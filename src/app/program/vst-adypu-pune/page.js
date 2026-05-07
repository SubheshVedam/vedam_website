import ProgramPage from "../ProgramPage";
import { puneConfig } from "../ProgramConfigs";

export const metadata = {
    title: "Program & Fees - VST ADYPU Pune | Vedam School of Technology",
    description:
        "Explore the VST ADYPU Pune Computer Science and AI program, fee structure, hostel fees, scholarships, financing options, and campus details.",
    keywords: [
        "VST Pune program and fees",
        "Vedam ADYPU Pune program fees",
        "VST ADYPU Pune BTech fees",
        "Vedam Pune BTech Computer Science AI",
        "BTech Computer Science and AI Pune",
        "AI engineering college Pune fees",
        "Computer Science AI college Pune",
        "ADYPU Pune BTech AI program",
        "Vedam Pune fee structure",
        "Vedam Pune hostel fees",
        "VST Pune scholarships",
        "VST Pune financing options",
        "BTech AI course fees Pune",
        "Vedam School of Technology Pune",
        "Ajeenkya DY Patil University Vedam",
    ],
    openGraph: {
        title: "Program & Fees - VST ADYPU Pune",
        description:
            "Review the VST ADYPU Pune CS & AI program, fees, hostel options, scholarships, financing, and campus details.",
        url: "https://www.vedam.org/program/vst-adypu-pune",
        siteName: "Vedam School of Technology",
        type: "website",
        images: [
            {
                url: "/img/Vedam_Final_Logo_White.webp",
                width: 1200,
                height: 630,
                alt: "Program & Fees - VST ADYPU Pune",
            },
        ],
    },
};

export default function PuneProgramPage() {
    return <ProgramPage config={puneConfig} />;
}
