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
  Activity,
  Glasses,
  Calendar,
  Link2,
  Flag,
  UserCheck,
  Table,
  Briefcase,
  Settings,
  Key,
  X,
  ExternalLink
} from 'lucide-react';
import mermaid from 'mermaid';
import { analyzeTranscript } from './services/geminiService';
import { cn } from './lib/utils';
import ProposalHub from './components/ProposalHub';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
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
    <div className="mermaid bg-zinc-950/80 border border-zinc-800 p-6 rounded-2xl overflow-x-auto min-h-[220px] flex items-center justify-center shadow-inner relative group/mermaid" ref={ref}>
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
    stakeholder_mapping: {
      role: string;
      primary_concerns: string[];
      influence_level: string;
    }[];
  };
  core_drivers: string[];
  top_recommendations: {
    solution_name: string;
    architecture_layer: string;
    business_value: string;
    technical_reason: string;
    transcript_reference: string;
    confidence_score: number;
    why_it_fits: string;
    complementary_solutions: string[];
    aws_config: {
      service_name: string;
      configuration: string;
      pricing_model: string;
      estimated_monthly_cost: string;
      cost_breakdown: string[];
    };
    azure_config: {
      service_name: string;
      configuration: string;
      pricing_model: string;
      estimated_monthly_cost: string;
      cost_breakdown: string[];
    };
    gcp_config: {
      service_name: string;
      configuration: string;
      pricing_model: string;
      estimated_monthly_cost: string;
      cost_breakdown: string[];
    };
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
    duration: string;
    expected_outcome: string;
    milestones: string[];
    dependencies: string[];
  }[];
  next_steps: {
    demo_direction: string;
    follow_up_focus: string;
    validation_questions: string[];
  };
  cloud_maturity_trend: {
    security: { current: number; target: number; explanation: string };
    scalability: { current: number; target: number; explanation: string };
    cost_optimization: { current: number; target: number; explanation: string };
    performance: { current: number; target: number; explanation: string };
  };
  provider_comparison: {
    aws_suitability: string;
    azure_suitability: string;
    gcp_suitability: string;
    final_verdict: string;
    recommended_winner: 'AWS' | 'Azure' | 'GCP';
  };
  executive_summary: string;
  proposal_hub: {
    proposal_quality_score: number;
    win_probability_score: number;
    ai_recommendations: string[];
    follow_up_actions: string[];
    next_meeting_prep: {
      objectives: string[];
      suggested_agenda: string[];
      answers_to_objections: string[];
    };
    competitor_analysis: {
      competitor_name: string;
      weaknesses: string;
      our_strengths: string;
      battle_card: string;
    }[];
    recommended_solutions: {
      ai_executive_summary: string;
      business_value_prop: string;
      competitive_advantages: string[];
      roi_highlights: string[];
      risk_mitigations: string[];
      strategic_alignment_score: number;
    };
    use_case_section: {
      resolved_problem_statement: string;
      expected_business_outcomes: string[];
      success_criteria: string[];
      kpi_mapping: string[];
      use_case_maturity_assessment: string;
    };
    technical_architecture_section: {
      cloud_deployment_recommendations: string;
      security_architecture: string;
      integration_mapping: string[];
      scalability_analysis: string;
      infra_sizing_recommendations: string[];
    };
    investment_and_pricing: {
      capex_vs_opex: string;
      subscription_model_recommendations: string;
      cost_optimization_suggestions: string[];
      multiyear_pricing_forecast: {
        year1: string;
        year3: string;
        year5: string;
      };
      budget_fit_score: number;
      payment_milestone_planning: string[];
    };
    tco_analysis: {
      tco_1yr: string;
      tco_3yr: string;
      tco_5yr: string;
      infrastructure_costs: string;
      licensing_costs: string;
      maintenance_costs: string;
      support_costs: string;
      savings_analysis: string;
    };
    client_references: {
      customer_name: string;
      industry: string;
      story_summary: string;
      before_after_impact: string;
      reference_matching_score: number;
      testimonial_quote: string;
    }[];
    meddic: {
      metrics: {
        revenue_impact_estimate: string;
        cost_savings_calc: string;
        productivity_metrics: string;
        roi_percent: number;
        kpi_benefit_summary: string[];
      };
      economic_buyer: {
        stakeholder_id: string;
        influence_score: number;
        budget_ownership: string;
        executive_engagement_recs: string[];
      };
      decision_criteria: {
        functional_reqs: string[];
        technical_reqs: string[];
        compliance_reqs: string[];
        priority_ranking: string[];
      };
      decision_process: {
        procurement_stage: string;
        approval_workflow: string[];
        timeline_prediction: string;
        risk_assessment: string;
      };
      pain_points: {
        extracted_pains: {
          pain: string;
          severity_score: number;
          business_impact: string;
          recommended_solution_map: string;
        }[];
      };
      champion: {
        champion_engagement_score: number;
        internal_influence_mapping: string;
        relationship_strength_indicator: string;
        action_recommendations: string[];
      };
    };
  };
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
  const [tableSortBy, setTableSortBy] = useState<'layer' | 'aws' | 'azure' | 'gcp'>('layer');
  const [highlightCloud, setHighlightCloud] = useState<'AWS' | 'Azure' | 'GCP' | null>(null);
  const [recCardProvider, setRecCardProvider] = useState<Record<number, 'AWS' | 'Azure' | 'GCP'>>({});
  const [activeTab, setActiveTab] = useState<'blueprint' | 'proposal'>('blueprint');

  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [userApiKey, setUserApiKey] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('gemini_api_key') || '';
    }
    return '';
  });

  const loadSample = () => setTranscript(SAMPLE_TRANSCRIPT);

  const handleSaveApiKey = (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gemini_api_key', key.trim());
    }
    setUserApiKey(key.trim());
  };

  const handleClearApiKey = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('gemini_api_key');
    }
    setUserApiKey('');
  };

  const handleAnalyze = async () => {
    if (!transcript.trim()) return;
    
    setIsAnalyzing(true);
    setError(null);
    try {
      const data = await analyzeTranscript(transcript);
      setResult(data);
    } catch (err: any) {
      console.error(err);
      if (err?.message === "API_KEY_MISSING") {
        setError('Gemini API key is required. Please set up your GEMINI_API_KEY environment variable, or configure a custom API Key via the settings.');
      } else {
        setError(err instanceof Error ? err.message : 'Failed to analyze transcript. Please check your API key and try again.');
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 font-sans selection:bg-indigo-500/40 selection:text-white relative overflow-x-hidden pb-20">
      
      {/* Absolute Radial Glow Highlights */}
      <div className="absolute top-[-100px] left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[400px] right-[-100px] w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[200px] left-[-100px] w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Floating Header */}
      <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-zinc-950/70 backdrop-blur-xl border border-zinc-800/80 rounded-2xl md:rounded-3xl shadow-2xl py-3.5 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 rounded-xl flex flex-col items-center justify-center shadow-lg shadow-indigo-500/20 relative overflow-hidden group py-0.5">
              <Cloud className="text-white w-4 h-4 relative z-10" />
              <Glasses className="text-white w-3 h-2.5 relative z-10 -mt-0.5" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h1 className="font-display font-bold tracking-tight text-lg md:text-xl leading-none flex items-center gap-1.5">
                <span className="text-zinc-100">Mr. Cloud Architect</span>
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent uppercase font-black text-xs md:text-sm tracking-wider px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded-md">PRO-AI</span>
              </h1>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-500 mt-1">
                Enterprise Multi-Cloud Discovery & Alignment Engine
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden sm:inline-block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full">
              Enterprise Suite v1.1
            </span>
            <button
              onClick={() => setShowApiKeyModal(true)}
              className="group flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider cursor-pointer select-none transition-all duration-200"
            >
              <Settings className="w-3.5 h-3.5 text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
              <span>{userApiKey ? "Key Safe" : "API Config"}</span>
              {userApiKey && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Section */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Title / Info card */}
            <section className="bg-zinc-950/55 backdrop-blur-md border border-zinc-900 rounded-2xl p-6 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-2 text-zinc-400 select-none">
                <Cloud className="w-4 h-4 text-indigo-400 animate-pulse" />
                <span className="text-[10px] font-display font-medium uppercase tracking-widest text-zinc-400">Multi-Cloud Strategist</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Provide an executive discovery transcript. Our model simultaneously maps solutions, parameters, and estimated monthly costs side-by-side across <span className="text-zinc-200 font-semibold">AWS, Azure, and GCP</span>.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2 text-zinc-400 select-none">
                  <FileText className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-display font-medium uppercase tracking-widest">Input Transcript</span>
                </div>
                <button 
                  onClick={loadSample}
                  className="text-[10px] font-display font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors bg-indigo-500/10 hover:bg-indigo-500/15 border border-indigo-500/20 px-3 py-1 rounded-md"
                >
                  Load Sample Code
                </button>
              </div>
              
              {/* Transcript IDE Console Textarea style */}
              <div className="relative group border border-zinc-900 hover:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 bg-zinc-950/80 shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-900 bg-zinc-900/30">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-600 font-semibold lowercase">discovery_log.txt</span>
                </div>
                <textarea
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  placeholder="Paste the enterprise discovery call transcript here..."
                  className="w-full h-[520px] bg-transparent p-5 text-sm font-mono leading-relaxed text-zinc-300 placeholder-zinc-600 focus:outline-none transition-all resize-none"
                />
                
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => handleAnalyze()}
                    disabled={isAnalyzing || !transcript.trim()}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-all shadow-xl",
                      isAnalyzing || !transcript.trim() 
                        ? "bg-zinc-900/50 text-zinc-600 border border-zinc-800 cursor-not-allowed shadow-none" 
                        : "bg-gradient-to-r from-indigo-500 via-purple-600 to-sky-500 hover:from-indigo-400 hover:to-sky-400 text-white hover:shadow-indigo-500/20 active:scale-[0.98]"
                    )}
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Generating Architecture...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Generate Strategy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-xs font-semibold bg-red-950/35 p-4 rounded-xl border border-red-900/50 space-y-3">
                  <p className="leading-relaxed">{error}</p>
                  <div className="flex flex-wrap gap-2 pt-1 select-none">
                    <button
                      type="button"
                      onClick={() => setShowApiKeyModal(true)}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 border border-indigo-500/25 rounded-lg text-[10px] uppercase font-bold tracking-wider text-white transition-colors cursor-pointer"
                    >
                      Configure Custom Key
                    </button>
                    <a
                      href="https://aistudio.google.com/apikey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-[10px] uppercase font-bold tracking-wider text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1"
                    >
                      Get Free Key <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Output Section */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {!result && !isAnalyzing ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-24 border border-zinc-900 rounded-3xl bg-zinc-950/20 backdrop-blur-sm select-none"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-full flex items-center justify-center animate-pulse">
                    <Target className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="space-y-2 max-w-sm px-4">
                    <h3 className="font-display font-semibold text-lg text-zinc-100">Ready for Intelligence Deep-Dive</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Paste a discovery call transcript in the workspace terminal to trigger the cognitive modernization planner.
                    </p>
                  </div>
                </motion.div>
              ) : isAnalyzing ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-8"
                >
                  <div className="animate-pulse space-y-6">
                    <div className="h-7 bg-zinc-905 bg-zinc-900 border border-zinc-800/50 rounded-lg w-1/4" />
                    <div className="h-32 bg-zinc-900 border border-zinc-800/50 rounded-2xl w-full" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-44 bg-zinc-900 border border-zinc-800/50 rounded-2xl" />
                      <div className="h-44 bg-zinc-900 border border-zinc-800/50 rounded-2xl" />
                    </div>
                    <div className="h-64 bg-zinc-900 border border-zinc-800/50 rounded-2xl w-full" />
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 pb-20"
                >
                  {/* Tab Switcher */}
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-2 flex-wrap gap-4">
                    <div className="flex items-center gap-1.5 p-1 bg-zinc-950 border border-zinc-900 rounded-2xl">
                      <button
                        onClick={() => setActiveTab('blueprint')}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer",
                          activeTab === 'blueprint' 
                            ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/25 shadow-lg"
                            : "text-zinc-400 hover:text-zinc-200"
                        )}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        Architectural Blueprint
                      </button>
                      <button
                        onClick={() => setActiveTab('proposal')}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer",
                          activeTab === 'proposal'
                            ? "bg-cyan-600/20 text-cyan-400 border border-cyan-500/20 shadow-lg"
                            : "text-zinc-400 hover:text-zinc-200"
                        )}
                      >
                        <Briefcase className="w-3.5 h-3.5" />
                        Enterprise Proposal Hub
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 select-none">
                      <span>Proposal Status:</span>
                      <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full uppercase">Ready</span>
                    </div>
                  </div>

                  {activeTab === 'blueprint' ? (
                    <>
                      {/* Executive Summary */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-500 select-none">
                      <Target className="w-4 h-4 text-indigo-400" />
                      <span className="text-[10px] font-display font-medium uppercase tracking-widest">Executive Strategy Dispatch</span>
                    </div>
                    <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-600" />
                      <div className="absolute top-4 right-6 text-zinc-800/55 text-6xl font-serif select-none pointer-events-none">“</div>
                      <p className="text-lg font-serif italic text-zinc-200 leading-relaxed pr-6 relative z-10">
                        {result?.executive_summary}
                      </p>
                    </div>
                  </section>

                  {/* Immediate Next Steps & Validation */}
                  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-zinc-950 via-[#100f14] to-zinc-950 border border-zinc-900 rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl" />
                      <div className="flex items-center gap-2 text-indigo-400 select-none">
                        <Rocket className="w-4 h-4 text-indigo-400" />
                        <span className="text-[10px] font-display font-medium uppercase tracking-widest text-zinc-400">Immediate Actions</span>
                      </div>
                      <div className="space-y-5">
                        <div className="space-y-1.5">
                          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Suggested Demo Vector</p>
                          <p className="text-xs text-zinc-300 leading-relaxed font-semibold">{result?.next_steps.demo_direction}</p>
                        </div>
                        <div className="space-y-1.5 pt-3 border-t border-zinc-900">
                          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Immediate Follow-up Focus</p>
                          <p className="text-xs text-zinc-300 leading-relaxed font-semibold">{result?.next_steps.follow_up_focus}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-8 shadow-xl space-y-6">
                      <div className="flex items-center gap-2 text-zinc-400 select-none">
                        <Target className="w-4 h-4 text-purple-400" />
                        <span className="text-[10px] font-display font-medium uppercase tracking-widest">Alignment Checklist</span>
                      </div>
                      <div className="space-y-4">
                        {result?.next_steps.validation_questions.map((q, i) => (
                          <div key={i} className="flex gap-3 text-xs group">
                            <div className="w-5 h-5 rounded-lg border border-zinc-800 bg-zinc-900/30 flex items-center justify-center shrink-0 group-hover:border-indigo-500 transition-colors">
                              <span className="text-[9px] font-bold text-indigo-400 font-mono">?</span>
                            </div>
                            <span className="text-zinc-350 italic leading-snug">{q}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  
                  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-8 shadow-xl space-y-6">
                      <div className="flex items-center gap-2 text-zinc-400 select-none">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] font-display font-medium uppercase tracking-widest">Client Snapshot</span>
                      </div>
                      <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Organization Type</p>
                            <p className="text-xs font-semibold text-zinc-250 mt-1">{result?.client_snapshot.organization_type}</p>
                          </div>
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Maturity Scale</p>
                            <p className="text-xs font-semibold text-zinc-250 mt-1">{result?.client_snapshot.technical_maturity_level}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Strategic Core Drivers</p>
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {result?.core_drivers.map((driver, i) => (
                              <span key={i} className="px-2.5 py-1 bg-zinc-900 border border-zinc-805 border-zinc-800 rounded-lg text-[9px] font-mono text-indigo-300 font-bold leading-none select-none">{driver}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Detected Milestones & Goals</p>
                          <div className="space-y-2 mt-2.5">
                            {result?.client_snapshot.detected_goals.map((goal, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-semibold leading-normal">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                <span>{goal}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-8 shadow-xl space-y-6">
                      <div className="flex items-center gap-2 text-zinc-400 select-none">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        <span className="text-[10px] font-display font-medium uppercase tracking-widest">Frictions & Limits</span>
                      </div>
                      <div className="space-y-5">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Detected Friction Pairs</p>
                          <div className="space-y-2">
                            {result?.client_snapshot.detected_pains.map((pain, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-semibold">
                                <span className="flex w-1.5 h-1.5 rounded-full bg-red-500/80 mt-1.5 shrink-0" />
                                <span className="leading-normal">{pain}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-zinc-900">
                          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Technical Constraints & Risks</p>
                          <div className="space-y-2">
                            {result?.client_snapshot.risk_factors.map((risk, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-normal">
                                <span className="flex w-1.5 h-1.5 rounded-full bg-amber-500/80 mt-1.5 shrink-0" />
                                <span>{risk}</span>
                              </div>
                            ))}
                            {result?.client_snapshot.constraints.map((constraint, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-normal">
                                <span className="flex w-1.5 h-1.5 rounded-full bg-amber-500/80 mt-1.5 shrink-0" />
                                <span>{constraint}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Stakeholder Mapping Sub-section */}
                  {result?.client_snapshot.stakeholder_mapping && result.client_snapshot.stakeholder_mapping.length > 0 && (
                    <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-8 shadow-xl space-y-6">
                      <div className="flex items-center gap-2 text-zinc-400 select-none">
                        <UserCheck className="w-4 h-4 text-indigo-400" />
                        <span className="text-[10px] font-display font-medium uppercase tracking-widest">Stakeholder Concerns & Decisions Mapping</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {result.client_snapshot.stakeholder_mapping.map((sh, idx) => {
                          const isHigh = sh.influence_level?.toLowerCase() === 'high';
                          const isMedium = sh.influence_level?.toLowerCase() === 'medium';
                          
                          return (
                            <div key={idx} className="border border-zinc-900 rounded-2xl p-5 hover:border-indigo-500/30 bg-zinc-950/40 flex flex-col justify-between transition-all duration-300 group/sh">
                              <div className="space-y-3">
                                <div className="flex items-center justify-between gap-2 border-b border-zinc-900 pb-2">
                                  <h4 className="font-extrabold text-xs text-zinc-100 group-hover/sh:text-indigo-400 transition-colors line-clamp-1">{sh.role}</h4>
                                  <span className={cn(
                                    "text-[8px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full shrink-0",
                                    isHigh && "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
                                    isMedium && "bg-amber-500/10 text-amber-400 border border-amber-500/20",
                                    !isHigh && !isMedium && "bg-zinc-800 text-zinc-400"
                                  )}>
                                    {sh.influence_level}
                                  </span>
                                </div>
                                <div className="space-y-2">
                                  <span className="text-[8px] font-extrabold uppercase tracking-widest text-zinc-500">Concerns</span>
                                  <ul className="space-y-1.5">
                                    {sh.primary_concerns.map((concern, cIdx) => (
                                      <li key={cIdx} className="text-xs text-zinc-400 leading-normal flex items-start gap-1.5">
                                        <div className="w-1 h-1 bg-indigo-500/60 rounded-full mt-1.5 shrink-0" />
                                        <span>{concern}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* Cloud Maturity Trend */}
                  {result?.cloud_maturity_trend && (
                    <section className="space-y-6 animate-fade-in text-zinc-300">
                      <div className="flex items-center gap-2 text-zinc-500 select-none">
                        <Activity className="w-4 h-4 text-indigo-400" />
                        <span className="text-[10px] font-display font-medium uppercase tracking-widest">Architecture Maturity Trend Projection</span>
                      </div>

                      <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
                          
                          {/* Radar Chart SVG Visualizer Column */}
                          <div className="lg:col-span-4 flex flex-col items-center justify-center bg-zinc-950/80 rounded-2xl p-6 border border-zinc-900 select-none shadow-inner">
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#a1a1aa] mb-4 text-center">Score Profile Visualizer</h4>
                            
                            <div className="relative w-full max-w-[280px] aspect-square">
                              <svg viewBox="0 0 320 320" className="w-full h-full overflow-visible">
                                <defs>
                                  {/* Radial grid glows */}
                                  <radialGradient id="targetGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                  </radialGradient>
                                  <radialGradient id="currentGlow" cx="50%" cy="50%" r="40%">
                                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                                  </radialGradient>
                                </defs>

                                {/* Concentric Diamond Grid */}
                                {[1, 2, 3, 4, 5].map((level) => {
                                  const points = [
                                    { x: 160, y: 160 - level * 24 },
                                    { x: 160 + level * 24, y: 160 },
                                    { x: 160, y: 160 + level * 24 },
                                    { x: 160 - level * 24, y: 160 }
                                  ].map(p => `${p.x},${p.y}`).join(' ');
                                  
                                  return (
                                    <g key={level}>
                                      <polygon
                                        points={points}
                                        fill="none"
                                        stroke="rgba(63, 63, 70, 0.45)"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 2"
                                      />
                                      <text
                                        x={164}
                                        y={160 - level * 24 + 4}
                                        className="text-[9px] font-mono font-bold fill-zinc-600"
                                      >
                                        {level}
                                      </text>
                                    </g>
                                  );
                                })}

                                {/* Axis lines */}
                                <line x1={160} y1={28} x2={160} y2={292} stroke="rgba(63, 63, 70, 0.45)" strokeWidth="1" />
                                <line x1={28} y1={160} x2={292} y2={160} stroke="rgba(63, 63, 70, 0.45)" strokeWidth="1" />

                                {/* Axis Labels with bold design */}
                                <text x={160} y={18} textAnchor="middle" className="text-[10px] font-extrabold uppercase tracking-wider fill-zinc-500">Security</text>
                                <text x={298} y={163} textAnchor="start" className="text-[10px] font-extrabold uppercase tracking-wider fill-zinc-500">Scalability</text>
                                <text x={160} y={312} textAnchor="middle" className="text-[10px] font-extrabold uppercase tracking-wider fill-zinc-500">Cost Opt.</text>
                                <text x={22} y={163} textAnchor="end" className="text-[10px] font-extrabold uppercase tracking-wider fill-zinc-500">Perf.</text>

                                {/* Polygons & Vertex Draw */}
                                {(() => {
                                  const getCoordinates = (val: number, direction: 'up' | 'right' | 'down' | 'left') => {
                                    const cx = 160;
                                    const cy = 160;
                                    const scale = 24;
                                    switch (direction) {
                                      case 'up': return { x: cx, y: cy - val * scale };
                                      case 'right': return { x: cx + val * scale, y: cy };
                                      case 'down': return { x: cx, y: cy + val * scale };
                                      case 'left': return { x: cx - val * scale, y: cy };
                                    }
                                  };

                                  const trend = result.cloud_maturity_trend;
                                  const currentCoords = [
                                    getCoordinates(trend.security.current, 'up'),
                                    getCoordinates(trend.scalability.current, 'right'),
                                    getCoordinates(trend.cost_optimization.current, 'down'),
                                    getCoordinates(trend.performance.current, 'left'),
                                  ];
                                  const targetCoords = [
                                    getCoordinates(trend.security.target, 'up'),
                                    getCoordinates(trend.scalability.target, 'right'),
                                    getCoordinates(trend.cost_optimization.target, 'down'),
                                    getCoordinates(trend.performance.target, 'left'),
                                  ];

                                  const currentPoints = currentCoords.map(c => `${c.x},${c.y}`).join(' ');
                                  const targetPoints = targetCoords.map(c => `${c.x},${c.y}`).join(' ');

                                  return (
                                    <>
                                      {/* Target state polygon */}
                                      <polygon
                                        points={targetPoints}
                                        fill="rgba(99, 102, 241, 0.12)"
                                        stroke="#6366f1"
                                        strokeWidth="2.5"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500"
                                      />
                                      {/* Current state polygon */}
                                      <polygon
                                        points={currentPoints}
                                        fill="rgba(239, 68, 68, 0.12)"
                                        stroke="#ef4444"
                                        strokeWidth="2.5"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500"
                                      />

                                      {/* Target point vertices */}
                                      {targetCoords.map((coord, idx) => (
                                        <circle
                                          key={`t-${idx}`}
                                          cx={coord.x}
                                          cy={coord.y}
                                          r="4.5"
                                          fill="#6366f1"
                                          stroke="#09090b"
                                          strokeWidth="1.5"
                                          className="filter drop-shadow-sm select-none"
                                        />
                                      ))}

                                      {/* Current point vertices */}
                                      {currentCoords.map((coord, idx) => (
                                        <circle
                                          key={`c-${idx}`}
                                          cx={coord.x}
                                          cy={coord.y}
                                          r="4"
                                          fill="#ef4444"
                                          stroke="#09090b"
                                          strokeWidth="1.5"
                                          className="filter drop-shadow-sm select-none"
                                        />
                                      ))}
                                    </>
                                  );
                                })()}
                              </svg>
                            </div>

                            {/* Legend view */}
                            <div className="flex gap-5 mt-5 text-[9px] font-mono font-bold uppercase tracking-widest relative z-10 select-none">
                              <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 bg-red-500/20 border border-red-500/50 rounded" />
                                <span className="text-zinc-400">Current Base</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 bg-indigo-500/20 border border-indigo-500/50 rounded" />
                                <span className="text-zinc-400">Target State</span>
                              </div>
                            </div>
                          </div>

                          {/* Comparative Analysis & Explanations Panel */}
                          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {(() => {
                              const trend = result.cloud_maturity_trend;
                              const items = [
                                { key: 'security', label: 'Security & Zero Trust', icon: <Lock className="w-3.5 h-3.5 text-red-400 shrink-0" />, data: trend.security },
                                { key: 'scalability', label: 'Elastic Scalability', icon: <Layers className="w-3.5 h-3.5 text-indigo-400 shrink-0" />, data: trend.scalability },
                                { key: 'cost_optimization', label: 'Cost Optimization', icon: <DollarSign className="w-3.5 h-3.5 text-amber-400 shrink-0" />, data: trend.cost_optimization },
                                { key: 'performance', label: 'Compute & Delivery Perf', icon: <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />, data: trend.performance },
                              ];

                              return items.map((item, idx) => {
                                const delta = Math.max(0, item.data.target - item.data.current);
                                
                                return (
                                  <div key={idx} className="border border-zinc-900 rounded-2xl p-5 hover:border-zinc-800 transition-all bg-zinc-950/40 flex flex-col justify-between group/delta">
                                    <div className="space-y-3">
                                      {/* Header of card with badges */}
                                      <div className="flex items-center justify-between gap-2 border-b border-zinc-900 pb-2">
                                        <div className="flex items-center gap-2">
                                          {item.icon}
                                          <h4 className="font-extrabold text-[11px] text-zinc-150 group-hover/delta:text-indigo-400 transition-colors select-none">{item.label}</h4>
                                        </div>
                                        <div className="flex items-center gap-1 shrink-0 select-none">
                                          <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">{item.data.current.toFixed(1)}</span>
                                          <span className="text-zinc-650 font-bold">&rarr;</span>
                                          <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">{item.data.target.toFixed(1)}</span>
                                        </div>
                                      </div>
                                      <p className="text-xs text-zinc-400 leading-normal">{item.data.explanation}</p>
                                    </div>

                                    {/* Score Growth delta progress indicator */}
                                    <div className="mt-4 space-y-1.5">
                                      <div className="flex justify-between items-center text-[8px] font-bold text-zinc-500 uppercase tracking-widest select-none">
                                        <span>Projection Growth</span>
                                        <span className="text-indigo-400 font-extrabold font-mono">+{delta.toFixed(1)} Delta</span>
                                      </div>
                                      <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden flex select-none">
                                        {/* Current rating percent baseline out of 5 */}
                                        <div className="bg-red-500 transition-all duration-500" style={{ width: `${item.data.current * 20}%` }} />
                                        {/* Target growth delta gap */}
                                        <div className="bg-indigo-500 border-l border-zinc-950/40 transition-all duration-500" style={{ width: `${delta * 20}%` }} />
                                      </div>
                                    </div>
                                  </div>
                                );
                              });
                            })()}
                          </div>

                        </div>
                      </div>
                    </section>
                  )}

                  {/* Cloud Provider Suitability & Comparative Verdict */}
                  {result?.provider_comparison && (
                    <section className="space-y-4 animate-fade-in text-[#f4f4f5]">
                      <div className="flex items-center gap-2 text-zinc-500 select-none">
                        <Cloud className="w-4 h-4 text-indigo-400 animate-pulse" />
                        <span className="text-[10px] font-display font-medium uppercase tracking-widest">Multi-Cloud Comparative Suitability</span>
                      </div>

                      <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
                        {/* 3 Columns for suitability */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                          
                          {/* AWS Column */}
                          <div className="relative border border-orange-500/10 rounded-2xl p-6 bg-zinc-950/40 hover:border-orange-500/25 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group/aws">
                            <div>
                              <div className="absolute top-4 right-4 text-[8px] font-mono font-bold uppercase text-orange-400 bg-orange-500/15 border border-orange-500/20 px-2 py-0.5 rounded-full select-none">AWS</div>
                              <div className="flex items-center gap-2.5 border-b border-zinc-900 pb-3">
                                <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center font-black text-xs select-none shadow-md shadow-orange-100">amzn</div>
                                <h4 className="font-extrabold text-xs text-zinc-200 group-hover/aws:text-orange-400 transition-colors">Amazon Web Services</h4>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mt-4">{result.provider_comparison.aws_suitability}</p>
                            </div>
                          </div>

                          {/* Azure Column */}
                          <div className="relative border border-blue-500/10 rounded-2xl p-6 bg-zinc-950/40 hover:border-blue-500/25 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group/azure">
                            <div>
                              <div className="absolute top-4 right-4 text-[8px] font-mono font-bold uppercase text-blue-400 bg-blue-500/15 border border-blue-500/20 px-2 py-0.5 rounded-full select-none">Azure</div>
                              <div className="flex items-center gap-2.5 border-b border-zinc-900 pb-3">
                                <div className="w-7 h-7 rounded-lg bg-blue-500 text-white flex items-center justify-center font-black text-xs select-none shadow-md shadow-blue-100">msft</div>
                                <h4 className="font-extrabold text-xs text-zinc-200 group-hover/azure:text-blue-400 transition-colors">Microsoft Azure</h4>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mt-4">{result.provider_comparison.azure_suitability}</p>
                            </div>
                          </div>

                          {/* GCP Column */}
                          <div className="relative border border-cyan-500/10 rounded-2xl p-6 bg-zinc-950/40 hover:border-cyan-500/25 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group/gcp">
                            <div>
                              <div className="absolute top-4 right-4 text-[8px] font-mono font-bold uppercase text-cyan-400 bg-cyan-500/15 border border-cyan-500/20 px-2 py-0.5 rounded-full select-none">GCP</div>
                              <div className="flex items-center gap-2.5 border-b border-zinc-900 pb-3">
                                <div className="w-7 h-7 rounded-lg bg-cyan-500 text-white flex items-center justify-center font-black text-xs select-none shadow-md shadow-cyan-100">goog</div>
                                <h4 className="font-extrabold text-xs text-zinc-200 group-hover/gcp:text-cyan-400 transition-colors">Google Cloud Platform</h4>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mt-4">{result.provider_comparison.gcp_suitability}</p>
                            </div>
                          </div>

                        </div>

                        {/* Ultimate Winner spotlight */}
                        <div className="bg-gradient-to-br from-indigo-950 via-zinc-950 to-slate-950 text-white rounded-2xl p-6 md:p-8 relative overflow-hidden select-none border border-zinc-900">
                          <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl opacity-40" />
                          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl opacity-30" />

                          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="space-y-2.5 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-[8px] font-mono font-bold uppercase text-indigo-300 bg-indigo-500/15 border border-indigo-500/20 px-3 py-1 rounded-full tracking-widest leading-none">
                                  🏆 Ultimate Suitability Winner
                                </span>
                              </div>
                              <h3 className="text-xl md:text-2xl font-display font-medium text-white flex items-center gap-2">
                                Absolute Best Fit: <span className="text-indigo-400 font-bold">{result.provider_comparison.recommended_winner}</span>
                              </h3>
                              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                                {result.provider_comparison.final_verdict}
                              </p>
                            </div>
                            
                            <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
                              <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 text-center backdrop-blur-xs">
                                <span className="text-indigo-400 text-[8px] font-mono font-bold uppercase tracking-widest block mb-1">Architecture Configured</span>
                                <span className="text-xs text-zinc-300 font-semibold leading-normal">
                                  Mapped cleanly to {result.provider_comparison.recommended_winner} native resources.
                                </span>
                              </div>
                              <div className="text-[9px] font-mono text-zinc-500 self-center md:self-end">
                                Verified strategic model fit
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Interactive Multi-Cloud Side-by-Side Comparison Table */}
                  {result?.top_recommendations && (
                    <section className="space-y-6 animate-fade-in text-zinc-350">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-display font-medium uppercase tracking-widest">
                          <Table className="w-4 h-4 text-indigo-400 animate-pulse" />
                          <span className="text-[10px] font-display font-medium uppercase tracking-widest">Multi-Cloud Pricing & Service Comparison</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold bg-zinc-950 border border-zinc-900 rounded-full p-1 select-none">
                          <span className="px-2 text-[9px] text-zinc-500 font-bold uppercase">Focus Column:</span>
                          {(['None', 'AWS', 'Azure', 'GCP'] as const).map((prov) => {
                            const isSelected = (prov === 'None' && highlightCloud === null) || highlightCloud === prov;
                            return (
                              <button
                                key={prov}
                                onClick={() => setHighlightCloud(prov === 'None' ? null : prov)}
                                className={cn(
                                  "px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all",
                                  isSelected 
                                    ? "bg-indigo-600 text-white shadow-sm" 
                                    : "text-zinc-500 hover:text-zinc-300"
                                )}
                              >
                                {prov}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
                        {/* Summary Header Cards comparing TOTAL estimate costs */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* AWS Total Card */}
                          {(() => {
                            const awsTotal = result.top_recommendations.reduce((acc, rec) => {
                              const match = rec.aws_config?.estimated_monthly_cost?.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                              return acc + (match ? parseFloat(match[0]) : 0);
                            }, 0);
                            const isCheaper = awsTotal <= Math.min(
                              result.top_recommendations.reduce((acc, x) => {
                                const m = x.azure_config?.estimated_monthly_cost?.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                                return acc + (m ? parseFloat(m[0]) : 0);
                              }, 0),
                              result.top_recommendations.reduce((acc, x) => {
                                const m = x.gcp_config?.estimated_monthly_cost?.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                                return acc + (m ? parseFloat(m[0]) : 0);
                              }, 0)
                            );
                            return (
                              <div className={cn(
                                "border rounded-2xl p-5 transition-all relative overflow-hidden",
                                isCheaper ? "bg-orange-500/10 border-orange-500/30 shadow-lg" : "border-zinc-900 bg-zinc-950/35"
                              )}>
                                <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[8px] font-black px-2 py-0.5 rounded uppercase">AWS</div>
                                <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest block">Total AWS OpEx</span>
                                <span className="text-2xl font-black text-zinc-100 block mt-1">${awsTotal.toFixed(2)}<span className="text-xs text-zinc-500 font-semibold">/mo</span></span>
                                {isCheaper && <span className="text-[9px] text-emerald-400 font-semibold mt-2 inline-flex items-center gap-1 select-none">✨ Cost Leader</span>}
                              </div>
                            );
                          })()}

                          {/* Azure Total Card */}
                          {(() => {
                            const azureTotal = result.top_recommendations.reduce((acc, rec) => {
                              const match = rec.azure_config?.estimated_monthly_cost?.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                              return acc + (match ? parseFloat(match[0]) : 0);
                            }, 0);
                            const isCheaper = azureTotal <= Math.min(
                              result.top_recommendations.reduce((acc, x) => {
                                const m = x.aws_config?.estimated_monthly_cost?.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                                return acc + (m ? parseFloat(m[0]) : 0);
                              }, 0),
                              result.top_recommendations.reduce((acc, x) => {
                                const m = x.gcp_config?.estimated_monthly_cost?.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                                return acc + (m ? parseFloat(m[0]) : 0);
                              }, 0)
                            );
                            return (
                              <div className={cn(
                                "border rounded-2xl p-5 transition-all relative overflow-hidden",
                                isCheaper ? "bg-blue-500/10 border-blue-500/30 shadow-lg" : "border-zinc-900 bg-zinc-950/35"
                              )}>
                                <div className="absolute top-4 right-4 bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[8px] font-black px-2 py-0.5 rounded uppercase">Azure</div>
                                <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest block">Total Azure OpEx</span>
                                <span className="text-2xl font-black text-zinc-100 block mt-1">${azureTotal.toFixed(2)}<span className="text-xs text-zinc-500 font-semibold">/mo</span></span>
                                {isCheaper && <span className="text-[9px] text-emerald-400 font-semibold mt-2 inline-flex items-center gap-1 select-none">✨ Cost Leader</span>}
                              </div>
                            );
                          })()}

                          {/* GCP Total Card */}
                          {(() => {
                            const gcpTotal = result.top_recommendations.reduce((acc, rec) => {
                              const match = rec.gcp_config?.estimated_monthly_cost?.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                              return acc + (match ? parseFloat(match[0]) : 0);
                            }, 0);
                            const isCheaper = gcpTotal <= Math.min(
                              result.top_recommendations.reduce((acc, x) => {
                                const m = x.aws_config?.estimated_monthly_cost?.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                                return acc + (m ? parseFloat(m[0]) : 0);
                              }, 0),
                              result.top_recommendations.reduce((acc, x) => {
                                const m = x.azure_config?.estimated_monthly_cost?.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                                return acc + (m ? parseFloat(m[0]) : 0);
                              }, 0)
                            );
                            return (
                              <div className={cn(
                                "border rounded-2xl p-5 transition-all relative overflow-hidden",
                                isCheaper ? "bg-cyan-500/10 border-cyan-500/30 shadow-lg" : "border-zinc-900 bg-zinc-950/35"
                              )}>
                                <div className="absolute top-4 right-4 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[8px] font-black px-2 py-0.5 rounded uppercase">GCP</div>
                                <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest block">Total GCP OpEx</span>
                                <span className="text-2xl font-black text-zinc-100 block mt-1">${gcpTotal.toFixed(2)}<span className="text-xs text-zinc-500 font-semibold">/mo</span></span>
                                {isCheaper && <span className="text-[9px] text-emerald-400 font-semibold mt-2 inline-flex items-center gap-1 select-none">✨ Cost Leader</span>}
                              </div>
                            );
                          })()}
                        </div>

                        {/* Interactive Table Grid */}
                        <div className="overflow-x-auto border border-zinc-900 rounded-2xl bg-zinc-950/20 select-none">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-[#121214] text-[9.5px] font-mono font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-900">
                                <th className="p-4 pl-6 cursor-pointer hover:bg-zinc-905 hover:bg-zinc-900/60 transition-colors" onClick={() => setTableSortBy('layer')}>
                                  Architecture Layer {tableSortBy === 'layer' && '👇'}
                                </th>
                                <th className={cn("p-4 pl-4 cursor-pointer transition-colors", highlightCloud === 'AWS' ? "bg-orange-500/10 text-orange-400 border-x border-orange-500/10" : "hover:bg-zinc-900/60")} onClick={() => setTableSortBy('aws')}>
                                  AWS Native {tableSortBy === 'aws' && '👇'}
                                </th>
                                <th className={cn("p-4 pl-4 cursor-pointer transition-colors", highlightCloud === 'Azure' ? "bg-blue-500/10 text-blue-400 border-x border-blue-500/10" : "hover:bg-zinc-900/60")} onClick={() => setTableSortBy('azure')}>
                                  Azure Equivalent {tableSortBy === 'azure' && '👇'}
                                </th>
                                <th className={cn("p-4 pl-4 cursor-pointer transition-colors", highlightCloud === 'GCP' ? "bg-cyan-500/10 text-cyan-400 border-x border-cyan-500/10" : "hover:bg-zinc-900/60")} onClick={() => setTableSortBy('gcp')}>
                                  GCP Equivalent {tableSortBy === 'gcp' && '👇'}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-900 text-xs text-zinc-300">
                              {(() => {
                                const sortedRecs = [...result.top_recommendations].sort((a, b) => {
                                  if (tableSortBy === 'layer') {
                                    return a.architecture_layer.localeCompare(b.architecture_layer);
                                  }
                                  const parseVal = (str: string | undefined) => {
                                    if (!str) return 0;
                                    const match = str.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
                                    return match ? parseFloat(match[0]) : 0;
                                  };
                                  if (tableSortBy === 'aws') {
                                    return parseVal(b.aws_config?.estimated_monthly_cost) - parseVal(a.aws_config?.estimated_monthly_cost);
                                  }
                                  if (tableSortBy === 'azure') {
                                    return parseVal(b.azure_config?.estimated_monthly_cost) - parseVal(a.azure_config?.estimated_monthly_cost);
                                  }
                                  if (tableSortBy === 'gcp') {
                                    return parseVal(b.gcp_config?.estimated_monthly_cost) - parseVal(a.gcp_config?.estimated_monthly_cost);
                                  }
                                  return 0;
                                });

                                return sortedRecs.map((rec, idx) => (
                                  <tr key={idx} className="hover:bg-zinc-900/20 transition-colors font-medium">
                                    <td className="p-4 pl-6">
                                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-indigo-400 block mb-0.5">{rec.architecture_layer}</span>
                                      <span className="font-bold text-zinc-100 block text-xs">{rec.solution_name}</span>
                                    </td>
                                    
                                    {/* AWS Column */}
                                    <td className={cn("p-4 pl-4 transition-all", highlightCloud === 'AWS' && "bg-orange-500/5 border-x border-orange-500/5")}>
                                      <span className="font-extrabold text-zinc-100 block text-xs">{rec.aws_config?.service_name}</span>
                                      <span className="text-[10px] text-zinc-400 block leading-tight mt-0.5">{rec.aws_config?.configuration}</span>
                                      <div className="flex items-center gap-1.5 mt-1.5">
                                        <span className="text-[9px] font-mono font-bold text-orange-400 bg-orange-500/15 border border-orange-500/20 px-1.5 py-0.5 rounded leading-none">
                                          {rec.aws_config?.estimated_monthly_cost}
                                        </span>
                                        <span className="text-[8px] font-mono text-zinc-500 uppercase truncate max-w-[80px]" title={rec.aws_config?.pricing_model}>{rec.aws_config?.pricing_model}</span>
                                      </div>
                                    </td>

                                    {/* Azure Column */}
                                    <td className={cn("p-4 pl-4 transition-all", highlightCloud === 'Azure' && "bg-blue-500/5 border-x border-blue-500/5")}>
                                      <span className="font-extrabold text-zinc-100 block text-xs">{rec.azure_config?.service_name}</span>
                                      <span className="text-[10px] text-zinc-400 block leading-tight mt-0.5">{rec.azure_config?.configuration}</span>
                                      <div className="flex items-center gap-1.5 mt-1.5">
                                        <span className="text-[9px] font-mono font-bold text-blue-400 bg-blue-500/15 border border-blue-500/20 px-1.5 py-0.5 rounded leading-none">
                                          {rec.azure_config?.estimated_monthly_cost}
                                        </span>
                                        <span className="text-[8px] font-mono text-zinc-500 uppercase truncate max-w-[80px]" title={rec.azure_config?.pricing_model}>{rec.azure_config?.pricing_model}</span>
                                      </div>
                                    </td>

                                    {/* GCP Column */}
                                    <td className={cn("p-4 pl-4 transition-all", highlightCloud === 'GCP' && "bg-cyan-500/5 border-x border-cyan-500/5")}>
                                      <span className="font-extrabold text-zinc-100 block text-xs">{rec.gcp_config?.service_name}</span>
                                      <span className="text-[10px] text-zinc-400 block leading-tight mt-0.5">{rec.gcp_config?.configuration}</span>
                                      <div className="flex items-center gap-1.5 mt-1.5">
                                        <span className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-500/15 border border-cyan-500/20 px-1.5 py-0.5 rounded leading-none">
                                          {rec.gcp_config?.estimated_monthly_cost}
                                        </span>
                                        <span className="text-[8px] font-mono text-zinc-500 uppercase truncate max-w-[80px]" title={rec.gcp_config?.pricing_model}>{rec.gcp_config?.pricing_model}</span>
                                      </div>
                                    </td>
                                  </tr>
                                ));
                              })()}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Top Recommendations */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-500 select-none">
                      <Layers className="w-4 h-4 text-indigo-400" />
                      <span className="text-[10px] font-display font-medium uppercase tracking-widest">Architectural Solution Deep-Dives</span>
                    </div>
                    <div className="space-y-4">
                      {result?.top_recommendations.map((rec, i) => {
                        const localTab = recCardProvider[i] || 'AWS';
                        const config = localTab === 'AWS' ? rec.aws_config : localTab === 'Azure' ? rec.azure_config : rec.gcp_config;

                        return (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl hover:border-zinc-805 hover:border-zinc-800 transition-all duration-300 group"
                          >
                            <div className="flex items-start gap-6">
                              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300 shadow-md">
                                {LAYER_ICONS[rec.architecture_layer] || <ChevronRight className="w-5 h-5" />}
                              </div>
                              <div className="flex-1 space-y-5">
                                <div className="flex items-start justify-between flex-wrap gap-4 border-b border-zinc-900 pb-3">
                                  <div>
                                    <h4 className="text-[9px] font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full inline-block mb-1.5">{rec.architecture_layer} Layer</h4>
                                    <p className="font-extrabold text-lg md:text-xl text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300">{rec.solution_name}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-[8px] font-mono font-bold uppercase tracking-wider text-zinc-500 mb-1">Architect Fit Match</p>
                                    <p className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-lg inline-block">{(rec.confidence_score * 100).toFixed(0)}% Match</p>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div className="space-y-4">
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                                        <Target className="w-3.5 h-3.5 text-indigo-400" />
                                        Why it fits
                                      </div>
                                      <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                                        {rec.why_it_fits}
                                      </p>
                                    </div>
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                                        <Quote className="w-3.5 h-3.5 text-emerald-400" />
                                        Transcript Rationale
                                      </div>
                                      <p className="text-xs italic text-zinc-400 font-mono leading-relaxed bg-zinc-950 border border-zinc-900 p-3 rounded-xl">
                                        "{rec.transcript_reference}"
                                      </p>
                                    </div>

                                    {/* Local tab with sub-configuration comparison info */}
                                    <div className="space-y-3 p-4 bg-[#0f0f11] rounded-2xl border border-zinc-900">
                                      <div className="flex items-center justify-between border-b border-zinc-900 pb-2 flex-wrap gap-2">
                                        <div className="text-[8.5px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                                          Compare Specifications
                                        </div>
                                        <div className="flex gap-1">
                                          {(['AWS', 'Azure', 'GCP'] as const).map((prov) => {
                                            const isActive = localTab === prov;
                                            return (
                                              <button
                                                key={prov}
                                                onClick={() => setRecCardProvider(prev => ({ ...prev, [i]: prov }))}
                                                className={cn(
                                                  "px-2.5 py-1 rounded-lg text-[8.5px] font-mono font-bold uppercase tracking-wider transition-all",
                                                  isActive 
                                                    ? prov === 'AWS' ? "bg-orange-600/20 text-orange-400 border border-orange-500/45 shadow-sm"
                                                      : prov === 'Azure' ? "bg-blue-600/20 text-blue-400 border border-blue-500/45 shadow-sm"
                                                      : "bg-cyan-600/20 text-cyan-400 border border-cyan-500/45 shadow-sm"
                                                    : "text-zinc-500 hover:text-zinc-300 bg-zinc-950 border border-zinc-900"
                                                )}
                                              >
                                                {prov}
                                              </button>
                                            );
                                          })}
                                        </div>
                                      </div>

                                      {config && (
                                        <div className="space-y-3">
                                          <div className="flex items-center justify-between">
                                            <div>
                                              <span className="text-[8px] font-mono font-bold text-zinc-500 block uppercase">Native Service</span>
                                              <span className="text-xs font-bold text-zinc-200 block mt-0.5">{config.service_name}</span>
                                            </div>
                                            <div className="text-right">
                                              <span className="text-[8px] font-mono font-bold text-zinc-500 block uppercase">Estimate Cost</span>
                                              <span className={cn(
                                                "text-xs font-black px-2 py-0.5 rounded block mt-0.5 font-mono",
                                                localTab === 'AWS' 
                                                  ? "text-orange-400 bg-orange-550/10 bg-orange-500/10 border border-orange-500/20" 
                                                  : localTab === 'Azure' 
                                                    ? "text-blue-400 bg-blue-550/10 bg-blue-500/10 border border-blue-500/20" 
                                                    : "text-cyan-400 bg-cyan-550/10 bg-cyan-500/10 border border-cyan-500/20"
                                              )}>{config.estimated_monthly_cost}</span>
                                            </div>
                                          </div>

                                          <div className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-2.5">
                                            <span className="text-[8px] font-mono font-bold text-zinc-500 block uppercase mb-1">Configuration Sizing Spec</span>
                                            <span className="text-[10px] text-zinc-300 leading-normal font-sans font-medium">{config.configuration}</span>
                                          </div>

                                          <div className="space-y-1.5">
                                            <p className="text-[8.5px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Cost Breakdown Detail</p>
                                            <ul className="space-y-1">
                                              {config.cost_breakdown.map((item: string, idx: number) => (
                                                <li key={idx} className="text-[10px] text-zinc-400 flex items-start gap-2">
                                                  <div className={cn(
                                                    "w-1 h-1 rounded-full mt-1.5 shrink-0",
                                                    localTab === 'AWS' ? "bg-orange-400" : localTab === 'Azure' ? "bg-blue-400" : "bg-cyan-400"
                                                  )} />
                                                  {item}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>

                                          <div className="pt-2 border-t border-zinc-900 flex justify-between items-center text-[9.5px] font-semibold text-zinc-500 font-mono">
                                            <p className="uppercase text-[8px] font-bold text-zinc-500">Pricing Mode Model</p>
                                            <p className="text-zinc-305 text-zinc-300 font-extrabold uppercase">{config.pricing_model}</p>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                        Business Value Focus
                                      </div>
                                      <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                                        {rec.business_value}
                                      </p>
                                    </div>
                                    <div className="space-y-2">
                                      <p className="text-[9px] font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full inline-block leading-none select-none">Cross-sell Options</p>
                                      <div className="flex flex-wrap gap-1.5">
                                        {rec.complementary_solutions.map((sol, idx) => (
                                          <span key={idx} className="text-[10px] bg-zinc-900 text-zinc-300 px-2.5 py-1 rounded-xl border border-zinc-800/80 font-bold select-none">{sol}</span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pt-4 border-t border-zinc-900">
                                  <p className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1.5">Architecture Technical Reason</p>
                                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">{rec.technical_reason}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </section>

                  {/* Diagrams */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-500 select-none">
                      <Activity className="w-4 h-4 text-indigo-400" />
                      <span className="text-[10px] font-display font-medium uppercase tracking-widest">Architectural Visualizations</span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl space-y-4">
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Users className="w-4 h-4 text-indigo-400" />
                          <span className="text-[10px] font-mono uppercase tracking-widest">Use Case Diagram</span>
                        </div>
                        <Mermaid chart={result?.diagrams.use_case_diagram || ''} />
                      </div>
                      <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl space-y-4">
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Network className="w-4 h-4 text-indigo-400" />
                          <span className="text-[10px] font-mono uppercase tracking-widest">System Tech Architecture</span>
                        </div>
                        <Mermaid chart={result?.diagrams.tech_architecture_diagram || ''} />
                      </div>
                    </div>
                  </section>

                  {/* Matched Use Cases */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-500 select-none">
                      <FileText className="w-4 h-4 text-indigo-400" />
                      <span className="text-[10px] font-display font-medium uppercase tracking-widest">Matched Use Cases ({result?.matched_use_cases[0]?.format} Format)</span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {result?.matched_use_cases.map((uc, i) => (
                        <div key={i} className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
                          <div className="flex items-center justify-between border-b border-zinc-900 pb-3 flex-wrap gap-2">
                            <h3 className="text-base font-bold text-zinc-100">{uc.scenario_name}</h3>
                            <span className="px-2.5 py-0.5 bg-indigo-650 text-white text-[8.5px] font-mono font-bold rounded-full uppercase tracking-wider">{uc.format}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="space-y-2">
                              <p className="text-[8px] font-mono uppercase tracking-wider text-zinc-500">Situation</p>
                              <p className="text-xs text-zinc-450 text-zinc-400 leading-relaxed font-normal">{uc.situation}</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-[8px] font-mono uppercase tracking-wider text-zinc-500">{uc.format === 'STAR' ? 'Task' : 'Problem'}</p>
                              <p className="text-xs text-zinc-450 text-zinc-400 leading-relaxed font-normal">{uc.problem_or_task}</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-[8px] font-mono uppercase tracking-wider text-zinc-500">Action</p>
                              <p className="text-xs text-zinc-350 text-zinc-300 leading-relaxed font-semibold">{uc.action}</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-[8px] font-mono uppercase tracking-wider text-zinc-500">Result</p>
                              <p className="text-xs text-emerald-400 leading-relaxed font-semibold font-mono">{uc.result}</p>
                            </div>
                          </div>
                          <div className="pt-3 border-t border-zinc-900">
                            <p className="text-[8px] font-mono uppercase tracking-wider text-zinc-500 mb-0.5">Industry Relevance</p>
                            <p className="text-[11px] text-zinc-400 italic font-medium leading-normal">{uc.industry_relevance}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Implementation Timeline Roadmap */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-500 select-none">
                      <Target className="w-4 h-4 text-indigo-400" />
                      <span className="text-[10px] font-display font-medium uppercase tracking-widest">Implementation Timeline Roadmap</span>
                    </div>

                    <div className="relative pl-4 border-l border-zinc-900 ml-3 space-y-6 py-2">
                      {result?.implementation_phases.map((phase, i) => (
                        <div key={i} className="relative group/timeline">
                          {/* Timeline node badge/dot */}
                          <div className="absolute -left-[28px] top-1.5 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-mono font-bold shadow-md shadow-indigo-900/30 ring-4 ring-zinc-950 group-hover/timeline:scale-110 transition-transform">
                            {i + 1}
                          </div>

                          <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl hover:border-zinc-800 transition-all duration-300">
                            {/* Phase Title & Duration */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-900">
                              <div>
                                <span className="text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded">Phase {i + 1}</span>
                                <h3 className="text-base font-extrabold text-zinc-100 mt-1.5">{phase.phase_name}</h3>
                              </div>
                              <div className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono font-bold text-zinc-400 select-none">
                                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                                <span>{phase.duration}</span>
                              </div>
                            </div>

                            {/* Phase Content Details */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5">
                              {/* Focus & Value */}
                              <div className="md:col-span-5 space-y-4">
                                <div className="space-y-1">
                                  <h4 className="text-[8px] font-mono font-bold uppercase tracking-widest text-zinc-500">Core Focus</h4>
                                  <p className="text-xs text-zinc-300 leading-relaxed font-bold">{phase.focus}</p>
                                </div>
                                <div className="space-y-1">
                                  <h4 className="text-[8px] font-mono font-bold uppercase tracking-widest text-zinc-500">Expected Outcome</h4>
                                  <p className="text-xs text-zinc-400 leading-relaxed">{phase.expected_outcome}</p>
                                </div>
                              </div>

                              {/* Milestones (Checklist) */}
                              <div className="md:col-span-4 space-y-3 font-medium">
                                <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
                                  <Flag className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Key Milestones
                                </span>
                                <ul className="space-y-2">
                                  {phase.milestones.map((milestone, mIdx) => (
                                    <li key={mIdx} className="flex items-start gap-2 text-xs text-zinc-400 leading-tight">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                      <span>{milestone}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Dependency Tracker */}
                              <div className="md:col-span-3 space-y-3 font-medium">
                                <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
                                  <Link2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Dependencies
                                </span>
                                {phase.dependencies && phase.dependencies.length > 0 ? (
                                  <div className="space-y-1.5">
                                    {phase.dependencies.map((dep, dIdx) => (
                                      <div key={dIdx} className="p-2.5 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[10.5px] text-amber-400 leading-normal flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                                        <span className="flex-1">{dep}</span>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="p-2.5 bg-sky-500/5 border border-sky-500/15 rounded-xl text-[10.5px] text-sky-400 italic leading-normal">
                                    No immediate upstream dependencies.
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Pilot Recommendation */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-500 select-none">
                      <Rocket className="w-4 h-4 text-indigo-400" />
                      <span className="text-[10px] font-display font-medium uppercase tracking-widest">Recommended Pilot</span>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-950 via-zinc-950 to-slate-950 text-white rounded-3xl p-10 border border-zinc-900 shadow-2xl relative overflow-hidden select-none">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-30 animate-pulse" />
                      <div className="relative z-10 space-y-8">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-display font-medium text-white">{result?.recommended_pilot.name}</h3>
                          <p className="text-zinc-300 text-sm leading-relaxed">{result?.recommended_pilot.why_this_pilot}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-3">
                            <h4 className="text-[8px] font-mono font-bold uppercase tracking-widest text-zinc-550 text-zinc-500">Architecture Reference</h4>
                            <ul className="space-y-2.5">
                              {result?.recommended_pilot.high_level_architecture.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-xs text-zinc-350 text-zinc-300 font-medium">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-[8px] font-mono font-bold uppercase tracking-widest text-zinc-550 text-zinc-500">Success Metrics</h4>
                            <ul className="space-y-2.5">
                              {result?.recommended_pilot.measurable_success_metrics.map((metric, i) => (
                                <li key={i} className="flex items-center gap-3 text-xs text-zinc-350 text-zinc-300 font-semibold">
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
                    </>
                  ) : (
                    <ProposalHub proposalHubData={result?.proposal_hub} transcript={transcript} recommendedWinner={result?.provider_comparison?.recommended_winner} />
                  )}

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* API Key Modal Overlay */}
      <AnimatePresence>
        {showApiKeyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowApiKeyModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-md bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6 z-10 overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-indigo-600/10 border border-indigo-500/20 rounded-xl">
                    <Key className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight text-white">Gemini API Key</h3>
                    <p className="text-[10px] text-zinc-500 font-mono">Custom API configuration</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowApiKeyModal(false)}
                  className="p-1.5 hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  When deploying to <span className="font-semibold text-zinc-250 text-zinc-300">Vercel</span>, static builds embed variables at build time. To make this app immediately functional on your live URL, paste your Gemini API key below, or configure a Vercel build variable named <code className="text-indigo-400 font-mono text-[10px] bg-indigo-500/5 border border-indigo-500/15 px-1 py-0.5 rounded">GEMINI_API_KEY</code>.
                </p>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                    Your Gemini API Key
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={userApiKey}
                      onChange={(e) => handleSaveApiKey(e.target.value)}
                      placeholder="AIzaSy..."
                      className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3 text-xs text-zinc-100 placeholder-zinc-800 font-mono focus:outline-none focus:border-indigo-500/50 transition-all shadow-inner"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9px] font-mono text-zinc-500">
                      {userApiKey ? "✓ Saved to local storage" : "No custom key entered (uses build-time fallback)"}
                    </span>
                    {userApiKey && (
                      <button
                        type="button"
                        onClick={handleClearApiKey}
                        className="text-[9px] font-mono font-bold uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                      >
                        Clear Custom Key
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-900 pt-5 flex items-center justify-between text-[11px] gap-4">
                <a
                  href="https://aistudio.google.com/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1 font-bold"
                >
                  Request a free key <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setShowApiKeyModal(false)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
