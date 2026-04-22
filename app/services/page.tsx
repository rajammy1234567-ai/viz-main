import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Services />
            <Contact />
        </div>
    );
}
