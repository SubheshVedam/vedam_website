import PlacementsPage from "./PlacementsPage";
import { placementConfig } from "./Placementsconfig";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export default function Page() {
    return (
        <>
            <BreadcrumbSchema />
            <PlacementsPage config={placementConfig} />
        </>
    );
}
