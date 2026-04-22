import { Contact } from "@/components/sections/Contact";
import { LocationSection } from "@/components/sections/Location";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Contact />
            <LocationSection />
        </div>
    );
}
