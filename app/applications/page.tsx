
import React from "react";
import {
  Download,
  Smartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";

const Application = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white flex items-center justify-center px-6 py-20">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-80 h-80 bg-emerald-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-5xl w-full rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14 shadow-2xl">

        {/* Hero Section */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-6">
            🤖 AI Powered • Official EcoScrap App
          </div>

          <div className="w-28 h-28 mx-auto rounded-[32px] bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.35)] mb-8">
            <span className="text-5xl">♻️</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-emerald-300 via-cyan-300 to-white bg-clip-text text-transparent mb-6">
            Download <br />
            EcoScrap app
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            Experience the future of smart recycling with EcoScrap AI.
            Identify scrap materials using Artificial Intelligence,
            manage your recycling workflow efficiently, and contribute
            towards a cleaner and greener future.
          </p>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-6 mb-14">

          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent p-7 hover:-translate-y-2 transition duration-300">

            <Zap className="w-11 h-11 text-emerald-400 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              AI Detection
            </h3>

            <p className="text-gray-400">
              Instantly recognize and classify scrap materials using
              advanced AI technology.
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-transparent p-7 hover:-translate-y-2 transition duration-300">

            <ShieldCheck className="w-11 h-11 text-cyan-400 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Secure & Reliable
            </h3>

            <p className="text-gray-400">
              Built with strong security and reliable performance for
              safe and seamless usage.
            </p>

          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-transparent p-7 hover:-translate-y-2 transition duration-300">

            <Smartphone className="w-11 h-11 text-purple-400 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Android Optimized
            </h3>

            <p className="text-gray-400">
              Smooth experience across most Android smartphones with
              fast and responsive performance.
            </p>

          </div>

        </div>

        {/* Branding */}

        <div className="border-t border-white/10 pt-10 text-center mb-12">

          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            EcoScrap AI
          </h2>

          <p className="text-gray-500 mt-3">
            Smart Recycling • Artificial Intelligence • Sustainable Future
          </p>

        </div>

        {/* Download */}

        <div className="text-center">

          <a
            href="/eco-scrap.apk"
            download
            className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white text-lg font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(16,185,129,0.35)] hover:shadow-[0_0_70px_rgba(34,211,238,0.45)]"
          >
            <Download className="w-6 h-6" />
            Download EcoScrap APK
          </a>

          <p className="text-gray-500 text-sm mt-6">
            Latest Version 1.0.0 • APK Size 25 MB • Official Release
          </p>

        </div>

      </div>

    </div>
  );
};

export default Application;

