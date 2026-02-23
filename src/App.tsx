/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cloud, 
  FileText, 
  Send, 
  Shield, 
  Network, 
  Database, 
  Cpu, 
  BrainCircuit, 
  Lock, 
  Layers, 
  AlertTriangle, 
  Target, 
  Users, 
  Rocket,
  ChevronRight,
  Loader2,
  CheckCircle2,
  Quote,
  DollarSign,
  Activity
} from 'lucide-react';
import mermaid from 'mermaid';
import { analyzeTranscript } from './services/geminiService';
import { cn } from './lib/utils';

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  securityLevel: 'loose',
});

const Mermaid = ({ chart }: { chart: string }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const renderChart = async () => {
      if (ref.current && chart) {
        try {
          ref.current.removeAttribute('data-processed');
          await mermaid.run({
            nodes: [ref.current],
          });
        } catch (err) {
          console.error('Mermaid render error:', err);
        }
      }
    };
    renderChart();
  }, [chart]);

  return (
    <div className="mermaid bg-white p-4 rounded-xl overflow-x-auto min-h-[200px] flex items-center justify-center" ref={ref}>
      {chart}
    </div>
  );
};

interface AnalysisResult {
  client_snapshot: {
    organization_type: string;
    technical_maturity_level: string;
    top_priorities: string[];
    constraints: string[];
    risk_factors: string[];
    detected_pains: string[];
    detected_goals: string[];
  };
  core_drivers: string[];
  top_recommendations: {
    solution_name: string;
    architecture_layer: string;
    business_value: string;
    technical_reason: string;
    transcript_reference: string;
    confidence_score: number;
    pricing_model: string;
    estimated_monthly_cost: string;
    cost_breakdown: string[];
    why_it_fits: string;
    complementary_solutions: string[];
  }[];
  matched_use_cases: {
    scenario_name: string;
    format: string;
    situation: string;
    problem_or_task: string;
    action: string;
    result: string;
    industry_relevance: string;
  }[];
  diagrams: {
    use_case_diagram: string;
    tech_architecture_diagram: string;
  };
  recommended_pilot: {
    name: string;
    why_this_pilot: string;
    high_level_architecture: string[];
    measurable_success_metrics: string[];
  };
  implementation_phases: {
    phase_name: string;
    focus: string;
    expected_outcome: string;
  }[];
  next_steps: {
    demo_direction: string;
    follow_up_focus: string;
    validation_questions: string[];
  };
  executive_summary: string;
}

const LAYER_ICONS: Record<string, React.ReactNode> = {
  Foundation: <Layers className="w-5 h-5" />,
  Identity: <Lock className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Security: <Shield className="w-5 h-5" />,
  Storage: <Database className="w-5 h-5" />,
  Compute: <Cpu className="w-5 h-5" />,
  AI: <BrainCircuit className="w-5 h-5" />,
};

const SAMPLE_TRANSCRIPT = `Architect: Thanks for joining today. I understand your team is looking to modernize the core claims processing system. Can you walk me through the current state?
CTO: Right now, we're on-prem. It's a monolithic Java app running on aging hardware. We're seeing 15-minute downtime windows every Tuesday during deployments.
Architect: That's significant. What's the business impact?
VP Ops: It's costing us about $50k per hour in lost productivity for our adjusters. We need to get to a 99.99% availability target.
Architect: Understood. How are you handling identity and security today?
Security Lead: It's all LDAP. We want to move to a Zero Trust model but the board is worried about the cost of a full overhaul.
Architect: What about data?
Data Engineer: We have 40TB of claims data in a legacy SQL Server. It's slow. We want to run some ML models for fraud detection but the database can't handle the analytical load.
Architect: So, the goals are: high availability, Zero Trust security, and an AI-ready data platform. Any constraints?
CTO: We have a hard deadline of 6 months for the pilot because our data center lease is up. And we need to keep monthly OpEx under $20k for the initial phase.`;

export default function App() {
  const [transcript, setTranscript] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadSample = () => setTranscript(SAMPLE_TRANSCRIPT);

  const handleAnalyze = async () => {
    if (!transcript.trim()) return;
    
    setIsAnalyzing(true);
    setError(null);
    try {
      const data = await analyzeTranscript(transcript);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('Failed to analyze transcript. Please check your API key and try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F4] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="border-b border-black/5 bg-white sticky top-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center shadow-lg shadow-red-500/20">
              <span className="text-white font-black text-xl">!</span>
            </div>
            <div>
              <h1 className="font-black tracking-tighter text-2xl leading-none">
                SPIKED<span className="text-red-600">AI</span>
              </h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40 mt-1">
                Cognitive Intelligence for Cloud Architect Recommendation Simulator
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/20 px-3 py-1 border border-black/5 rounded-full">Enterprise Edition v1.0</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Input Section */}
          <div className="lg:col-span-5 space-y-8">
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-black/40">
                  <FileText className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Input Transcript</span>
                </div>
                <button 
                  onClick={loadSample}
                  className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors"
                >
                  Load Sample Transcript
                </button>
              </div>
              <div className="relative group">
                <textarea
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  placeholder="Paste the enterprise discovery call transcript here..."
                  className="w-full h-[600px] bg-white border border-black/10 rounded-2xl p-6 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none shadow-sm group-hover:border-black/20"
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !transcript.trim()}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all shadow-lg",
                      isAnalyzing || !transcript.trim() 
                        ? "bg-black/10 text-black/40 cursor-not-allowed" 
                        : "bg-black text-white hover:bg-black/90 active:scale-95"
                    )}
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Generate Strategy
                      </>
                    )}
                  </button>
                </div>
              </div>
              {error && (
                <p className="text-red-500 text-xs font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                  {error}
                </p>
              )}
            </section>
          </div>

          {/* Output Section */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!result && !isAnalyzing ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 border-2 border-dashed border-black/5 rounded-3xl"
                >
                  <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-black/20" />
                  </div>
                  <div className="space-y-2 max-w-sm">
                    <h3 className="font-semibold text-lg">Ready for Analysis</h3>
                    <p className="text-sm text-black/50 leading-relaxed">
                      Paste a discovery call transcript to generate an executive-ready cloud modernization strategy.
                    </p>
                  </div>
                </motion.div>
              ) : isAnalyzing ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-8"
                >
                  <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-black/5 rounded-lg w-1/3" />
                    <div className="h-32 bg-black/5 rounded-2xl w-full" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-40 bg-black/5 rounded-2xl" />
                      <div className="h-40 bg-black/5 rounded-2xl" />
                    </div>
                    <div className="h-64 bg-black/5 rounded-2xl w-full" />
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12 pb-20"
                >
                  {/* Executive Summary */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-2 text-black/40">
                      <Target className="w-4 h-4" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Executive Strategy</span>
                    </div>
                    <div className="bg-white border-l-4 border-black rounded-r-3xl p-8 shadow-sm">
                      <p className="text-xl font-serif italic text-black/80 leading-relaxed">
                        "{result?.executive_summary}"
                      </p>
                    </div>
                  </section>

                  {/* Immediate Next Steps & Validation */}
                  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black text-white rounded-3xl p-8 shadow-xl space-y-6">
                      <div className="flex items-center gap-2 text-white/40">
                        <Rocket className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-widest">Immediate Actions</span>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Demo Direction</p>
                          <p className="text-sm text-white/90 leading-relaxed font-medium">{result?.next_steps.demo_direction}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Follow-up Focus</p>
                          <p className="text-sm text-white/90 leading-relaxed font-medium">{result?.next_steps.follow_up_focus}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm space-y-6">
                      <div className="flex items-center gap-2 text-black/40">
                        <Target className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-widest">Validation Checklist</span>
                      </div>
                      <div className="space-y-3">
                        {result?.next_steps.validation_questions.map((q, i) => (
                          <div key={i} className="flex gap-3 text-sm group">
                            <div className="w-5 h-5 rounded border border-black/10 flex items-center justify-center shrink-0 group-hover:border-black transition-colors">
                              <span className="text-[10px] font-bold">?</span>
                            </div>
                            <span className="text-black/70 italic leading-tight">{q}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm space-y-6">
                      <div className="flex items-center gap-2 text-black/40">
                        <Users className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-widest">Client Snapshot</span>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Organization Type</p>
                            <p className="text-sm font-medium">{result?.client_snapshot.organization_type}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Maturity Level</p>
                            <p className="text-sm font-medium">{result?.client_snapshot.technical_maturity_level}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Core Drivers</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {result?.core_drivers.map((driver, i) => (
                              <span key={i} className="px-2 py-1 bg-black/5 rounded text-[10px] font-medium">{driver}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Detected Goals</p>
                          <div className="space-y-1 mt-2">
                            {result?.client_snapshot.detected_goals.map((goal, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-black/70">
                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                {goal}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm space-y-6">
                      <div className="flex items-center gap-2 text-black/40">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-widest">Pains & Constraints</span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Detected Pains</p>
                          <div className="space-y-2">
                            {result?.client_snapshot.detected_pains.map((pain, i) => (
                              <div key={i} className="flex gap-3 text-sm">
                                <span className="text-red-500 font-bold">•</span>
                                <span className="text-black/70">{pain}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Constraints & Risks</p>
                          <div className="space-y-2">
                            {result?.client_snapshot.risk_factors.map((risk, i) => (
                              <div key={i} className="flex gap-3 text-sm">
                                <span className="text-amber-500 font-bold">•</span>
                                <span className="text-black/70">{risk}</span>
                              </div>
                            ))}
                            {result?.client_snapshot.constraints.map((constraint, i) => (
                              <div key={i} className="flex gap-3 text-sm">
                                <span className="text-amber-500 font-bold">•</span>
                                <span className="text-black/70">{constraint}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Top Recommendations */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-2 text-black/40">
                      <Layers className="w-4 h-4" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Top Recommended Solutions</span>
                    </div>
                    <div className="space-y-4">
                      {result?.top_recommendations.map((rec, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm hover:border-black/20 transition-all group"
                        >
                          <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                              {LAYER_ICONS[rec.architecture_layer] || <ChevronRight className="w-5 h-5" />}
                            </div>
                            <div className="flex-1 space-y-6">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">{rec.architecture_layer}</h4>
                                  <p className="font-semibold text-lg">{rec.solution_name}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Confidence Score</p>
                                  <p className="text-sm font-mono font-bold text-emerald-600">{(rec.confidence_score * 100).toFixed(0)}%</p>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/30">
                                      <Target className="w-3 h-3" />
                                      Why it fits
                                    </div>
                                    <p className="text-xs text-black/70 leading-relaxed">
                                      {rec.why_it_fits}
                                    </p>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/30">
                                      <Quote className="w-3 h-3" />
                                      Transcript Rationale
                                    </div>
                                    <p className="text-xs italic text-black/50 leading-relaxed">
                                      "{rec.transcript_reference}"
                                    </p>
                                  </div>
                                  <div className="space-y-3 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                                        <DollarSign className="w-3 h-3" />
                                        AWS Financial Estimate
                                      </div>
                                      <span className="text-xs font-bold text-emerald-700">{rec.estimated_monthly_cost}</span>
                                    </div>
                                    <div className="space-y-1.5">
                                      <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600/50">Cost Breakdown</p>
                                      <ul className="space-y-1">
                                        {rec.cost_breakdown.map((item, idx) => (
                                          <li key={idx} className="text-[10px] text-emerald-800/70 flex items-start gap-2">
                                            <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1 shrink-0" />
                                            {item}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="pt-2 border-t border-emerald-100">
                                      <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600/50">Model</p>
                                      <p className="text-[10px] font-semibold text-emerald-800">{rec.pricing_model}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/30">
                                      <CheckCircle2 className="w-3 h-3" />
                                      Business Value
                                    </div>
                                    <p className="text-xs font-medium text-black/70 leading-relaxed">
                                      {rec.business_value}
                                    </p>
                                  </div>
                                  <div className="space-y-2">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-black/30">Cross-sell Opportunities</p>
                                    <div className="flex flex-wrap gap-1.5">
                                      {rec.complementary_solutions.map((sol, idx) => (
                                        <span key={idx} className="text-[10px] bg-black/5 text-black/60 px-2 py-1 rounded-md border border-black/5 font-medium">{sol}</span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-4 border-t border-black/5">
                                <p className="text-[9px] font-bold uppercase tracking-widest text-black/30 mb-1">Technical Reason</p>
                                <p className="text-xs text-black/60">{rec.technical_reason}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Diagrams */}
                  <section className="space-y-8">
                    <div className="flex items-center gap-2 text-black/40">
                      <Activity className="w-4 h-4" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Architectural Visualizations</span>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                      <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-black/40">
                          <Users className="w-4 h-4" />
                          <span className="text-[11px] font-bold uppercase tracking-widest">Use Case Diagram</span>
                        </div>
                        <Mermaid chart={result?.diagrams.use_case_diagram || ''} />
                      </div>
                      <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-black/40">
                          <Network className="w-4 h-4" />
                          <span className="text-[11px] font-bold uppercase tracking-widest">System Tech Architecture</span>
                        </div>
                        <Mermaid chart={result?.diagrams.tech_architecture_diagram || ''} />
                      </div>
                    </div>
                  </section>

                  {/* Matched Use Cases */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-2 text-black/40">
                      <FileText className="w-4 h-4" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Matched Use Cases ({result?.matched_use_cases[0]?.format} Format)</span>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      {result?.matched_use_cases.map((uc, i) => (
                        <div key={i} className="bg-white border border-black/5 rounded-3xl p-8 shadow-sm space-y-6">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold">{uc.scenario_name}</h3>
                            <span className="px-3 py-1 bg-black text-white text-[10px] font-bold rounded-full uppercase tracking-widest">{uc.format}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="space-y-2">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Situation</p>
                              <p className="text-xs text-black/70 leading-relaxed">{uc.situation}</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">{uc.format === 'STAR' ? 'Task' : 'Problem'}</p>
                              <p className="text-xs text-black/70 leading-relaxed">{uc.problem_or_task}</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Action</p>
                              <p className="text-xs text-black/70 leading-relaxed">{uc.action}</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Result</p>
                              <p className="text-xs text-black/70 leading-relaxed font-semibold">{uc.result}</p>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-black/5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Industry Relevance</p>
                            <p className="text-xs text-black/50 italic">{uc.industry_relevance}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Implementation Phases */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-2 text-black/40">
                      <Target className="w-4 h-4" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Implementation Roadmap</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {result?.implementation_phases.map((phase, i) => (
                        <div key={i} className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Phase {i + 1}</h4>
                          <h5 className="font-bold text-sm mb-3">{phase.phase_name}</h5>
                          <div className="space-y-3">
                            <div>
                              <p className="text-[9px] font-bold uppercase tracking-widest text-black/30">Focus</p>
                              <p className="text-xs text-black/70">{phase.focus}</p>
                            </div>
                            <div>
                              <p className="text-[9px] font-bold uppercase tracking-widest text-black/30">Outcome</p>
                              <p className="text-xs text-black/70">{phase.expected_outcome}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Pilot Recommendation */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-2 text-black/40">
                      <Rocket className="w-4 h-4" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Recommended Pilot</span>
                    </div>
                    <div className="bg-black text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                      <div className="relative z-10 space-y-8">
                        <div className="space-y-2">
                          <h3 className="text-3xl font-bold tracking-tight">{result?.recommended_pilot.name}</h3>
                          <p className="text-white/60 text-lg">{result?.recommended_pilot.why_this_pilot}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-4">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Architecture Reference</h4>
                            <ul className="space-y-3">
                              {result?.recommended_pilot.high_level_architecture.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Success Metrics</h4>
                            <ul className="space-y-3">
                              {result?.recommended_pilot.measurable_success_metrics.map((metric, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                  {metric}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
