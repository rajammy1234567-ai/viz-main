import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Cpu,
  Sparkles,
  Store,
  UtensilsCrossed,
  CheckCircle2,
  ArrowRight,
  Check,
  ChevronRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  Compass,
  Bot,
  Brain,
  Boxes,
  Wrench,
  Clock,
  GraduationCap,
  Award,
  Zap,
} from "lucide-react";
import { SpotlightCard, ShinyText, BlurText } from "@/components/animations";
import { ConsultingProcess } from "@/components/sections/ConsultingProcess";

export const metadata = {
  title: "Services & Masterclasses | Digital Marketing, AI Classes & Robotics Labs | VIZ Digital",
  description:
    "Explore VIZ Digital's solutions: High-performance Digital Marketing, Artificial Intelligence Classes, Hands-on Robotics Labs with hardware kits, IT Consulting, Brand Management, Franchise & Restaurant Consulting in Zirakpur, Punjab.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 sm:pt-20 overflow-x-hidden w-full max-w-full">
      {/* Services Hero Header */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-white py-16 sm:py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              <ShinyText
                text="VIZ Growth & Academy Services"
                color="#1d4ed8"
                shineColor="#f97316"
                speed={3}
                className="text-xs font-bold tracking-wider uppercase"
              />
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              <BlurText
                text="Digital Marketing, Business &"
                delay={60}
                className="text-slate-900 inline-block mr-2"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                AI & Robotics Masterclasses
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Tailored growth solutions for businesses and future-ready hands-on tech classes with take-home hardware kits and real agency projects in Zirakpur, Punjab.
            </p>

            {/* Quick jump anchor links - All Services Equally Highlighted */}
            <div className="pt-6 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {[
                { name: "Digital Marketing", href: "#digital-marketing", icon: TrendingUp },
                { name: "Restaurant Set-Up", href: "#restaurant-setup", icon: UtensilsCrossed },
                { name: "Franchise Consultancy", href: "#franchise-consultancy", icon: Store },
                { name: "Brand Management", href: "#brand-management", icon: Sparkles },
                { name: "Information Technology", href: "#information-technology", icon: Cpu },
                { name: "AI Masterclasses", href: "#ai-classes", icon: Brain },
                { name: "Robotics & Hardware Lab", href: "#robotics-classes", icon: Bot },
              ].map((service) => {
                const Icon = service.icon;
                return (
                  <a
                    key={service.name}
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 shadow-xs transition-all"
                  >
                    <Icon className="w-3.5 h-3.5 text-blue-600" />
                    <span>{service.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 1: Digital Marketing */}
      <section id="digital-marketing" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  Service 01 • Marketing
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Digital Marketing
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Strategic marketing solutions that strengthen online visibility, build customer engagement, and support business growth.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We look at digital marketing through a commercial lens. Rather than vanity metrics, we craft campaigns and digital presence channels that drive brand awareness, qualified customer conversations, and lasting enterprise value.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Search Engine Visibility & Organic Reach Strategy",
                    "Targeted Customer Acquisition & Performance Campaigns",
                    "Content Alignment with Brand Positioning",
                    "Multi-Channel Engagement & Funnel Optimization",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="rounded-xl px-6 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md">
                      Discuss Digital Marketing
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <SpotlightCard
                  spotlightColor="rgba(37, 99, 235, 0.09)"
                  className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:border-blue-400 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-200">
                    <Image
                      src="/images/services/digital-marketing.jpg"
                      alt="Digital Marketing Operations & Live Funnels"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-blue-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      <span>4.8x Avg ROAS</span>
                    </div>
                    <div className="absolute bottom-3 left-3 text-xs font-semibold text-white/95 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      Performance Marketing Operations
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        Visibility That Generates Real Value
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Designed for businesses and emerging brands seeking predictable, measurable digital visibility that turns impressions into long-term commercial relationships.
                    </p>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 font-medium space-y-1">
                      <p className="font-bold text-slate-900">Customized Campaign Architecture</p>
                      <p className="text-[11px] text-slate-500">Shaped around your specific market, audience profile, and customer footfall targets.</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: Artificial Intelligence (AI) Classes */}
      <section id="ai-classes" className="py-20 bg-gradient-to-b from-slate-900 via-[#0c152e] to-slate-900 text-white border-b border-slate-800 scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                  Service 02 • Artificial Intelligence & GenAI
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Artificial Intelligence (AI) Classes & Masterclasses
                </h2>
                <p className="text-lg text-purple-200 leading-relaxed font-semibold">
                  “From Prompt Engineering & Generative AI to Applied Machine Learning with Python.”
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Artificial Intelligence is rewriting modern business and technology. VIZ Tech Academy provides 100% practical, project-driven AI training in Zirakpur, Punjab. Learn to automate workflows, build custom AI agents, generate viral creative assets, and develop machine learning models with industry mentors.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Master ChatGPT-4o, Claude 3.5 Sonnet, Midjourney v6 & DeepSeek",
                    "Advanced Prompt Engineering (Chain-of-Thought, Zero-Shot, Few-Shot)",
                    "Applied Machine Learning with Python: NumPy, Pandas, Scikit-learn & PyTorch",
                    "Build Custom AI Agents, Chatbots & Automated Marketing Workflows",
                    "Hands-on Capstone Projects & Verified Industry Certification",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20inquire%20about%20the%20AI%20Classes%20and%20book%20a%20Free%20Demo%20Class."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-xl px-6 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-purple-600/25 text-xs sm:text-sm flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Book Free AI Demo Class</span>
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" className="rounded-xl px-6 py-5 border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-slate-800 text-xs sm:text-sm font-semibold">
                      View Batch Timings & Fees
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-900/90 rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl relative backdrop-blur-md">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                    <Image
                      src="/images/services/ai-classes.jpg"
                      alt="Artificial Intelligence Masterclass Lab"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-purple-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      <span>Hands-on AI Lab</span>
                    </div>
                    <div className="absolute bottom-3 left-3 text-xs font-semibold text-white/95 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      GenAI & Prompt Engineering Masterclass
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shrink-0">
                        <Brain className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        Future-Proof Your Career & Business
                      </h3>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Designed for students, business owners, digital marketers, and developers looking to harness AI to achieve 10x output and land high-growth tech opportunities.
                    </p>
                    <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300 font-medium">
                      <p className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-purple-400" />
                        Flexible Weekend & Evening Batches
                      </p>
                      <p className="flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                        Offline Physical Lab in Zirakpur + Online
                      </p>
                      <p className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        Recognized Completion Certificate Included
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3: Robotics & STEM Labs */}
      <section id="robotics-classes" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <SpotlightCard
                  spotlightColor="rgba(6, 182, 212, 0.12)"
                  className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:border-cyan-400 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-200">
                    <Image
                      src="/images/services/robotics-classes.jpg"
                      alt="Hands-on Robotics Hardware Lab"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-cyan-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      <span>⚡ Hardware Kit Included</span>
                    </div>
                    <div className="absolute bottom-3 left-3 text-xs font-semibold text-white/95 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      Physical Arduino & Autonomous Rovers
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md shrink-0">
                        <Bot className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        Real Circuitry & Autonomous Hardware
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Every student receives their own take-home electronics kit (Arduino, sensors, motor drivers, Bluetooth, and breadboards) to build real working robots.
                    </p>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 font-medium space-y-1">
                      <p className="font-bold text-slate-900">Practical STEM Innovation Lab</p>
                      <p className="text-[11px] text-slate-500">Located at Motiaz Royal Business Park, Zirakpur. Equipped with test arenas and hardware benches.</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                  Service 03 • Robotics & Hardware Labs
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Hands-on Robotics & STEM Innovation Labs
                </h2>
                <p className="text-lg text-cyan-800 leading-relaxed font-semibold">
                  “Physical Hardware Kits. Real Microcontrollers. Autonomous Machines.”
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We believe true engineering cannot be learned from a textbook alone. In our hands-on Robotics Labs, students solder, wire, program, and test autonomous robots. Programs tailored for school students (ages 8-15), young creators, and engineering graduates in Punjab.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Complete Take-Home Arduino Uno & ESP32 Hardware Kit provided",
                    "Build Obstacle-Avoiding Robots, Line-Followers & Bluetooth RC Cars",
                    "Sensor Interfacing: Ultrasonic, Infrared, Gyroscope & OLED Displays",
                    "Smart Home IoT: Control physical devices over Wi-Fi with custom mobile apps",
                    "Advanced Drone Tech, Raspberry Pi GPIO & ROS (Robot Operating System)",
                    "End-of-Course Robot Hackathon with Medals & STEM Certification",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20enroll%20in%20the%20Robotics%20Lab%20and%20receive%20the%20take-home%20hardware%20kit."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-xl px-6 py-5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold shadow-md text-xs sm:text-sm flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Book Free Robotics Demo</span>
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" className="rounded-xl px-6 py-5 border-slate-300 text-slate-800 hover:bg-slate-50 text-xs sm:text-sm font-semibold">
                      Check Kit Details & Schedule
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4: Information Technology */}
      <section id="information-technology" className="py-20 bg-slate-50/60 border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <SpotlightCard
                  spotlightColor="rgba(79, 70, 229, 0.09)"
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:border-indigo-400 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/services/information-technology.jpg"
                      alt="Modern Cloud POS & IT Systems"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-indigo-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      <span>Enterprise Tech Stack</span>
                    </div>
                    <div className="absolute bottom-3 left-3 text-xs font-semibold text-white/95 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      Cloud POS & Multi-Outlet Live Sync
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        Scalable Digital Infrastructure
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Selecting and adopting the right technology tools prevents costly rework. We assist you in matching modern digital architecture to current operational needs and future scale.
                    </p>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-medium space-y-1">
                      <p className="font-semibold text-slate-800">Operational Agility</p>
                      <p className="text-[11px] text-slate-500">Integrate modern systems that streamline business operations and customer touchpoints.</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  Service 04 • Technology
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Information Technology
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Technology consulting to help businesses choose digital infrastructure, applications, and solutions for efficient operations and long-term scalability.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We connect modern technology with business strategy. From selecting core software platforms to guiding custom digital application ecosystems, VIZ Digital provides independent, business-focused tech advisory.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Digital Infrastructure Evaluation & Systems Architecture",
                    "Business Applications & CRM / ERP Selection",
                    "Process Automation & Workflow Efficiency",
                    "Technology Roadmap for Scalable Expansion",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="rounded-xl px-6 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md">
                      Consult on IT Infrastructure
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 5: Brand Management & Branding */}
      <section id="brand-management" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
                  Service 05 • Branding & Experience
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                  Brand Management & Branding
                </h2>
                <p className="text-xl font-bold text-purple-700">
                  “We build brands that people remember.”
                </p>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  Branding is more than a logo. It includes the complete customer experience, from brand strategy and identity to promotion, launches, activations, and ongoing management.
                </p>
              </div>
              <div className="lg:col-span-5 relative w-full">
                <div className="relative h-56 sm:h-64 w-full rounded-3xl overflow-hidden border border-purple-200 shadow-xl group bg-purple-50">
                  <Image
                    src="/images/services/brand-management.jpg"
                    alt="Luxury Brand Identity & Packaging Studio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-purple-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Luxury Visual Identity
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white/95 bg-black/60 backdrop-blur-md p-2 rounded-xl">
                    Packaging Design & Brand Architecture
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist of Brand Services */}
            <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Our Brand Management Capabilities Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Brand strategy and positioning",
                  "Logo, visual identity, brand guidelines, communication style, and marketing assets",
                  "Brand promotion and marketing campaigns",
                  "Influencer and public figure collaborations",
                  "Celebrity collaborations, appearances, and store launches",
                  "Store launches, events, and brand activations",
                  "Ongoing brand management across digital and physical customer touchpoints",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Brand Closing Line Quote */}
              <div className="mt-8 p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200/70 text-center">
                <p className="text-lg sm:text-xl font-bold text-purple-950">
                  “We don’t just build brands. We create experiences around them.”
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <Button className="rounded-xl px-7 py-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md">
                  Discuss Brand Strategy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 6: Franchise Consultancy */}
      <section id="franchise-consultancy" className="py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  Service 06 • Franchise Expansion
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                  Franchise Consultancy & Scaling
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  VIZ Digital provides end-to-end franchise consultancy and management, helping brands build franchise networks and convert opportunities into operational outlets.
                </p>
                <div className="p-4 bg-white rounded-2xl border border-amber-200 text-amber-900 text-sm font-semibold">
                  End-to-End Journey: Support from the first franchise enquiry through agreement, outlet setup, opening, and operational launch.
                </div>
              </div>
              <div className="lg:col-span-5 relative w-full">
                <div className="relative h-56 sm:h-64 w-full rounded-3xl overflow-hidden border border-amber-200 shadow-xl group bg-amber-50">
                  <Image
                    src="/images/services/franchise-consultancy.jpg"
                    alt="Franchise Store Layouts & Multi-Outlet Scaling"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-amber-700/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Multi-City Scaling
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white/95 bg-black/60 backdrop-blur-md p-2 rounded-xl">
                    Store Layouts & Investor Deal Closures
                  </div>
                </div>
              </div>
            </div>

            {/* Franchise Modules Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Franchise Lead Generation", desc: "Targeted campaigns attracting verified investor inquiries." },
                { title: "Lead Management & Follow-ups", desc: "Structured screening, qualification, and relationship nurturing." },
                { title: "Franchise Sales Management", desc: "Pipeline management, negotiation handling, and prospect alignment." },
                { title: "Presentation & Commercial Support", desc: "Tailored pitch decks, ROI modeling, and commercial deal discussions." },
                { title: "Agreement & Closure Coordination", desc: "Legal framework adherence and franchise agreement execution." },
                { title: "Location Evaluation & Finalisation", desc: "Footfall assessment, demographic analysis, and lease review." },
                { title: "Outlet Setup & Launch Coordination", desc: "Timeline management for on-time physical execution." },
                { title: "Branding, Interiors & Vendors", desc: "Turnkey coordination for interiors, equipment, and suppliers." },
                { title: "Startup & Operations Support", desc: "Pre-opening training, operational manuals, and opening day assistance." },
              ].map((module, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-2 hover:border-amber-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                    0{i + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{module.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/contact">
                <Button className="rounded-xl px-7 py-5 bg-amber-700 hover:bg-amber-800 text-white font-semibold shadow-md">
                  Explore Franchise Expansion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 7: Restaurant Set-Up Consultancy */}
      <section id="restaurant-setup" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
                  Service 07 • Hospitality & F&B
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                  Restaurant Set-Up Consultancy
                </h2>
                <p className="text-2xl font-bold text-orange-600">
                  “From Concept to Opening Day.”
                </p>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  Launching a restaurant takes the right concept, location, layout, kitchen, team, systems, and operational planning.
                </p>
              </div>
              <div className="lg:col-span-5 relative w-full">
                <div className="relative h-56 sm:h-64 w-full rounded-3xl overflow-hidden border border-orange-200 shadow-xl group bg-orange-50">
                  <Image
                    src="/images/services/restaurant-setup.jpg"
                    alt="Turnkey Commercial Kitchen & Dining Ambience"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-orange-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Turnkey Kitchen & Dining
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white/95 bg-black/60 backdrop-blur-md p-2 rounded-xl">
                    Commercial Equipment & Chef Trials
                  </div>
                </div>
              </div>
            </div>

            {/* Complete 13 Restaurant Modules */}
            <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Turnkey Restaurant Setup Checklist:
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Restaurant concept development",
                  "Business and operational planning",
                  "Location finalisation and site evaluation",
                  "Restaurant layout and space planning",
                  "Interior planning and design coordination",
                  "Kitchen layout and equipment planning",
                  "Menu design and menu engineering",
                  "Chef and staff hiring",
                  "Vendor and supplier coordination",
                  "SOPs and operational planning",
                  "Staff training and pre-opening preparation",
                  "Branding and restaurant identity",
                  "Pre-opening, launch, and post-launch operational guidance",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Restaurant Closing Quote */}
              <div className="mt-8 p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200/70 text-center">
                <p className="text-lg sm:text-xl font-bold text-orange-950">
                  “We help transform an empty space into a professionally planned, market-ready restaurant.”
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <Button className="rounded-xl px-7 py-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-md">
                  Plan Your Restaurant Launch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Consulting Process Roadmap */}
      <ConsultingProcess />

      {/* Bottom Consultation Strip */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Need a Custom Consulting Package?
            </h2>
            <p className="text-slate-600 text-base">
              Whether you are an entrepreneur launching a single concept or a brand building a multi-outlet network, VIZ Digital creates tailored consulting roadmaps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="rounded-xl px-8 py-6 font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  Schedule a Consultation
                </Button>
              </Link>
              <a
                href="tel:9876687109"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm shadow-xs"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call 98766 87109</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
