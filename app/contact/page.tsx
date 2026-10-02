"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Digital Marketing",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const servicesList = [
    "Digital Marketing",
    "Information Technology",
    "Brand Management & Branding",
    "Franchise Consultancy",
    "Restaurant Set-Up Consultancy",
    "General Business Growth Consulting",
  ];

  return (
    <div className="flex flex-col min-h-screen pt-16 sm:pt-20 overflow-x-hidden w-full max-w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-white py-16 sm:py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Contact <span className="text-blue-600">VIZ Digital</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have a question about our consulting solutions? Reach out to our team in Zirakpur, Punjab to discuss your business vision.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10">
            {/* Left Contact Information Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50/90 rounded-3xl p-8 border border-slate-200/80 shadow-soft space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Contact Details
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Connect directly through phone, email, or WhatsApp. We respond promptly during business hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Phone
                      </p>
                      <a
                        href="tel:9876687109"
                        className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                      >
                        98766 87109
                      </a>
                      <p className="text-xs text-slate-500">
                        Click to call directly
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:vizdigitalofficial@gmail.com"
                        className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-all block"
                      >
                        vizdigitalofficial@gmail.com
                      </a>
                      <p className="text-xs text-slate-500">
                        Official business inquiries
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-base font-bold text-slate-900">
                        Zirakpur, Punjab
                      </p>
                      <p className="text-xs text-slate-500">
                        India
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Consulting Hours
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        Monday – Saturday
                      </p>
                      <p className="text-xs text-slate-500">
                        9:30 AM – 6:30 PM (IST)
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Button */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/919876687109?text=Hello%20VIZ%20Digital,%20I%20would%20like%20to%20inquire%20about%20your%20consulting%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all shadow-md text-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat With Us on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you for contacting VIZ Digital. Our consulting team in Zirakpur will review your inquiry and get back to you shortly.
                    </p>
                    <div className="pt-4">
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            service: "Digital Marketing",
                            message: "",
                          });
                        }}
                        variant="outline"
                        className="rounded-xl px-6"
                      >
                        Send Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-slate-900">
                        Send Us a Message
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Fill out the details below and we will schedule your consultation.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your Name"
                          className="h-12 rounded-xl bg-slate-50/70 border-slate-200 focus:bg-white text-sm"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="e.g. 9876543210"
                          className="h-12 rounded-xl bg-slate-50/70 border-slate-200 focus:bg-white text-sm"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="h-12 rounded-xl bg-slate-50/70 border-slate-200 focus:bg-white text-sm"
                      />
                    </div>

                    {/* Service of Interest */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Service of Interest *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full h-12 rounded-xl bg-slate-50/70 border border-slate-200 px-4 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Your Message / Project Goals *
                      </label>
                      <Textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your brand, current challenges, or expansion goals..."
                        className="rounded-xl bg-slate-50/70 border-slate-200 focus:bg-white text-sm resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Office Location Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                Location
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Our Base in Zirakpur, Punjab
              </h2>
              <p className="text-slate-600 text-sm">
                Strategically positioned in the Chandigarh tricity region to serve businesses locally and across India.
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft h-[380px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54944.37213813968!2d76.79383679124445!3d30.64253139366431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe4596395b057%3A0xf63980a312d4d8ef!2sZirakpur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="VIZ Digital Location Map - Zirakpur, Punjab"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
