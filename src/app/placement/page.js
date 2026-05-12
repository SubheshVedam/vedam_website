import PlacementsPage from "./PlacementsPage";
import { placementConfig } from "./Placementsconfig";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = {
    title: "Vedam School of Technology — BTech in CS & AI | New Age College",
    description:
        "Looking for a new age college for BTech in CS or AI? Vedam School of Technology offers MAANG-mentored programs with proven placements at Amazon, Google & Meta.",
    openGraph: {
        title: "Vedam School of Technology — BTech in CS & AI | New Age College",
        description:
            "Looking for a new age college for BTech in CS or AI? Vedam School of Technology offers MAANG-mentored programs with proven placements at Amazon, Google & Meta.",
        url: "https://www.vedam.org/placement",
        siteName: "Vedam School of Technology",
        type: "website",
        images: [
            {
                url: "/img/placement/hero_bg.webp",
                width: 1200,
                height: 630,
                alt: "Your Tech Journey, Powered by Vedam",
            },
        ],
    },
};

export default function Page() {
    return (
        <>
            <BreadcrumbSchema />
            <PlacementsPage config={placementConfig} />
        </>
    );
}
