import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Sprout,
    Tractor,
    CloudRain,
    Wheat,
    Sun,
    ChevronRight
} from 'lucide-react';

export default function AgricultureLanding() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f1117] text-slate-200 flex flex-col">

            {/* ── Top Navigation Bar ── */}
            <header className="border-b border-slate-800 bg-[#0f1117]/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="text-sm font-medium">Back to Sectors</span>
                    </button>
                    <div className="font-semibold text-slate-100 flex items-center gap-2">
                        <span className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-md">
                            <Sprout size={18} />
                        </span>
                        Agriculture Module
                    </div>
                </div>
            </header>

            {/* ── Main Landing Content ── */}
            <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">

                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-3xl w-full text-center relative z-10">

                    {/* Header */}
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Cultivate Certainty in an<br />
                        <span className="text-emerald-400">Uncertain Climate.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Design robust crop portfolios, manage weather risks, and maximize expected yields through advanced stochastic optimization.
                    </p>

                    {/* Icon Grid */}
                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        <div className="flex flex-col items-center gap-3 opacity-80">
                            <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50 text-emerald-400">
                                <Wheat size={32} />
                            </div>
                            <span className="text-sm font-medium text-slate-400">Crop Planning</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 opacity-80 animate-pulse-slow delay-100">
                            <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50 text-blue-400">
                                <CloudRain size={32} />
                            </div>
                            <span className="text-sm font-medium text-slate-400">Weather Scenarios</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 opacity-80">
                            <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50 text-amber-400">
                                <Sun size={32} />
                            </div>
                            <span className="text-sm font-medium text-slate-400">Yield Volatility</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 opacity-80">
                            <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50 text-emerald-500">
                                <Tractor size={32} />
                            </div>
                            <span className="text-sm font-medium text-slate-400">Resource Limits</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => navigate('/agriculture/app')}
                        className="group relative inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 round transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.7)] font-semibold text-lg hover:-translate-y-1"
                    >
                        Start Optimization
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                </div>
            </main>

        </div>
    );
}
