import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  TrendingUp, 
  Target, 
  DollarSign, 
  Briefcase, 
  ShieldCheck, 
  Activity, 
  CheckCircle, 
  Users, 
  HelpCircle, 
  HeartHandshake, 
  BookOpen, 
  Clock, 
  UserCheck, 
  Zap, 
  AlertTriangle,
  Lightbulb, 
  Mail, 
  Copy, 
  Check, 
  FileText,
  Search,
  MessageSquare,
  Shield,
  Layers,
  BarChart2,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface ProposalHubProps {
  proposalHubData?: any; // To allow progressive enhancement and robust fallbacks
  transcript?: string;
  recommendedWinner?: string;
}

export default function ProposalHub({ proposalHubData, transcript, recommendedWinner = 'AWS' }: ProposalHubProps) {
  // Use a fallback object in case proposalHubData is undefined (safeguard for legacy runs)
  const defaultData = {
    proposal_quality_score: 72,
    win_probability_score: 65,
    ai_recommendations: [
      "Explicitly map Identity & Access Management to Azure Active Directory (Entra ID) to address the compliance officer's LDAP security doubts.",
      "Propose AWS Savings Plans to mitigate the board's upfront OpEx cost variance anxiety.",
      "Introduce a 30-day sandbox pilot phase focusing solely on claims analytical workload to prove immediate latency reduction.",
      "Identify a dedicated Customer Success Engineer in the final contract draft to serve as a designated strategic handoff partner."
    ],
    follow_up_actions: [
      "Send a localized technical memorandum addressing cross-region data residency compliance constraints.",
      "Schedule a 30-minute alignment review with the VP of Operations to walk through the custom ROI and productivity scorecard.",
      "Formulate a direct sandbox proposal highlighting AWS Free Tier and POC credit allocations."
    ],
    next_meeting_prep: {
      objectives: [
        "Formally secure dry-run validation of the technical migration architecture from the Security Lead.",
        "Agree upon the definition of success and key performance indicators (KPIs) for the 30-day proof-of-concept phase.",
        "Obtain specific budget threshold confirmations from the VP of Operations."
      ],
      suggested_agenda: [
        "1. Welcome & Enterprise Architecture Mapping Highlights (10 mins)",
        "2. Detailed CAPEX vs. OPEX Multi-Year TCO Deep Dive (15 mins)",
        "3. Security Architecture & Zero Trust Compliance Review (15 mins)",
        "4. Client Reference Case Study Reviews & Alignments (10 mins)",
        "5. Q&A and Next Steps Handoff (10 mins)"
      ],
      answers_to_objections: [
        "Objection: 'The cloud migration overhead is too costly for our initial budget phase.' -> Response: Point directly to our 1-year TCO which saves 24% by leveraging right-sized serverless compute instances, alongside a multi-year onboarding pathway.",
        "Objection: 'We are worried about data residency during transit.' -> Response: Detail the end-to-end KMS customer-managed key encryption and localized single-tenant virtual private database network mappings.",
        "Objection: 'Our teams lack deep cloud operations training.' -> Response: Emphasize our dedicated training workshops, comprehensive reference architectures, and client reference documentation templates."
      ]
    },
    competitor_analysis: [
      {
        competitor_name: "On-Premises Continuation (Status Quo)",
        weaknesses: "Sustained high hardware replacement CAPEX, recurring Tuesday downtime, 15-minute claims processing lags, and zero readiness for analytical ML models.",
        our_strengths: "99.99% multi-region cloud availability, zero-downtime containerized deployments, and dynamic cloud data warehousing with native intelligence.",
        battle_card: "Empathetically contrast the true financial impact of status-quo system failures ($50k/hr downtime losses) against the predictable, elastic OpEx cloud model."
      },
      {
        competitor_name: "Legacy System Integrator (Monolithic Lift-and-Shift)",
        weaknesses: "Maintains outdated VM hosting structures without modern cloud-native elasticity, missing out on modern Serverless frameworks and high-fidelity ML benefits.",
        our_strengths: "Fully decoupled serverless architecture mapping that solves identity, analytics, and auto-scalability concurrently during Phase 1.",
        battle_card: "Proactive, secure, and modern design that minimizes resource idle times instead of repeating outdated infrastructure architectures under cloud licensing models."
      }
    ],
    recommended_solutions: {
      ai_executive_summary: "A robust, fully production-ready multi-cloud layout specifically designed to migrate legacy monoliths to a secure, decoupled, and cost-controlled cloud runtime.",
      business_value_prop: "Replaces high Tuesday deployment risks with continuous CI/CD delivery, shifting high-risk capital expenditure to a predictable operational cost with a solid 99.99% system availability.",
      competitive_advantages: [
        "Serverless execution logic that automatically scales down to zero when claim volume is idle.",
        "Isolated analytics warehouse that decouples demanding compliance queries from production database write pipelines."
      ],
      roi_highlights: [
        "Downtime mitigation instantly recovers lost productivity costs.",
        "Automated operational workflows increase claims handling velocities by up to 40%."
      ],
      risk_mitigations: [
        "Detailed phased blueprint minimizes legacy data center transition friction.",
        "Multi-cloud equivalents guarantee high flexibility and prevent single provider lock-in."
      ],
      strategic_alignment_score: 88
    },
    use_case_section: {
      resolved_problem_statement: "Transitioning a slow, high-maintenance monolithic application to a decoupled, durable environment.",
      expected_business_outcomes: [
        "Achieving 99.99% reliable operational availability.",
        "Introducing high-speed analytical engines capable of running high-performance fraud detection pipelines."
      ],
      success_criteria: [
        "Downtime windows completed under 3 seconds.",
        "Database response speeds for intensive workflows optimized below 200 milliseconds."
      ],
      kpi_mapping: [
        "Claims Handling Velocity (Target: +35% improvement)",
        "System Downtime Minutes per Quarter (Target: < 12 minutes)"
      ],
      use_case_maturity_assessment: "Targeting an upgrade from Maturity Level 1 (Static, High Resource Sizing Friction) to Level 4 (Elastic, Automated Operations, Real-time Visualizations)."
    },
    technical_architecture_section: {
      cloud_deployment_recommendations: "Hybrid staging model with automated database migration replication tasks syncing local files securely over encrypted network connections.",
      security_architecture: "Zero Trust access credentials, strict VPC network isolated boundaries, and fully automated data key rotation configurations.",
      integration_mapping: [
        "Direct connection routes to legacy LDAP directory catalogs.",
        "Secure microservice call mappings to downstream operational platforms."
      ],
      scalability_analysis: "Elastic autoscaling limits scaled up and optimized according to active request peaks, preventing single-node performance declines.",
      infra_sizing_recommendations: [
        "Production Compute: Decoupled container groups targeting 4vCPU and 16GB memory bounds with elastic scaling limits.",
        "Analytical Compute: Distributed analytics configurations sized to scale node counts on-demand."
      ]
    },
    investment_and_pricing: {
      capex_vs_opex: "Converts costly recurring local hardware refreshing cycles into a fully predictable operational pricing model that scales with active use.",
      subscription_model_recommendations: "Utilize committed compute saving plans over a 3-year term for core stable operations, maintaining on-demand serverless configurations for irregular bursts.",
      cost_optimization_suggestions: [
        "Establish proactive cloud budget alerts to isolate unexpected query loops.",
        "Set daily compute scaling shutdowns for isolated testing and staging sandboxes."
      ],
      multiyear_pricing_forecast: {
        year1: "$145,000 baseline infrastructure and migration setup overhead.",
        year3: "$98,000 annually with optimized resource sizing structures.",
        year5: "$82,500 stable continuous licensing and low operational maintenance costs."
      },
      budget_fit_score: 91,
      payment_milestone_planning: [
        "Milestone 1: 20% on completion of cloud development sandbox setup.",
        "Milestone 2: 40% on technical migration of core operational datasets.",
        "Milestone 3: 40% on validation of ultimate business production targets."
      ]
    },
    tco_analysis: {
      tco_1yr: "$165,000",
      tco_3yr: "$310,000",
      tco_5yr: "$440,000",
      infrastructure_costs: "$48,000 annual average base runtime budget.",
      licensing_costs: "$14,000 annual software utilities fees.",
      maintenance_costs: "$8,000 annual management oversight time allocation.",
      support_costs: "$4,500 enterprise help desk support packages.",
      savings_analysis: "Saves a projected $220,000 over 5 years compared to status-quo on-prem monolith support."
    },
    client_references: [
      {
        customer_name: "Apex Insurance Group",
        industry: "Insurance & Claims Management",
        story_summary: "Apex completed a modernization of their core claims suite, shifting to a multi-cloud network.",
        before_after_impact: "Claims processing latency dropped from 12 minutes to 14 seconds; Sunday deploy pauses eliminated.",
        reference_matching_score: 94,
        testimonial_quote: "The migration eliminated our deployment outages, restoring adjuster productivity levels immediately."
      },
      {
        customer_name: "Veritas Health Partners",
        industry: "Healthcare Claims Operations",
        story_summary: "Migrated legacy SQL Server analytical workflows to decoupled, serverless analytics systems.",
        before_after_impact: "Database querying responsiveness increased by 800% while reducing cloud operating budgets by 32%.",
        reference_matching_score: 89,
        testimonial_quote: "We can now process high-speed analytical reports securely with full Zero Trust standard credentials."
      }
    ],
    meddic: {
      metrics: {
        revenue_impact_estimate: "Saves an estimated $150,000 annually by preventing core workflow failures.",
        cost_savings_calc: "Reduces overall hardware overhead maintenance allocation budgets by 38% overall.",
        productivity_metrics: "Adjusters reclaim 5 lost operational hours per week due to zero Tuesday deployment freezes.",
        roi_percent: 214,
        kpi_benefit_summary: [
          "98% decrease in critical support ticket counts.",
          "Rapid batch claim analytics pipelines running in minutes instead of hours."
        ]
      },
      economic_buyer: {
        stakeholder_id: "VP of Operations & Chief Technology Officer",
        influence_score: 95,
        budget_ownership: "Holds ultimate discretionary spending approval for strategic technical migration solutions.",
        executive_engagement_recs: [
          "Present a high-level value metrics card focusing exclusively on multiyear operational savings.",
          "Arrange an upfront custom product demonstration showing successful recovery speeds."
        ]
      },
      decision_criteria: {
        functional_reqs: [
          "Zero operational interruption during high-volume weekdays.",
          "Native analytics capabilities mapping smoothly to ML requirements."
        ],
        technical_reqs: [
          "Uncompromising 99.99% multi-region cloud uptime targets.",
          "Seamless custom migration paths for legacy relational database schemas."
        ],
        compliance_reqs: [
          "End-to-end data encryption in transit and at rest.",
          "Zero Trust IAM role-based authorization boundaries."
        ],
        priority_ranking: [
          "1. Uptime Availability (Critical)",
          "2. Zero Trust Compliance (High)",
          "3. Analytics Readiness (Medium)"
        ]
      },
      decision_process: {
        procurement_stage: "Technical Review & Architecture Evaluation",
        approval_workflow: [
          "1. Technical and security review validation",
          "2. Operations ROI approval sign-off",
          "3. Enterprise legal risk audit review"
        ],
        timeline_prediction: "35 Days from sandbox demo to formal pilot signoff.",
        risk_assessment: "Risk rating: Low. Supported by phased parallel database migration blueprints."
      },
      pain_points: {
        extracted_pains: [
          {
            pain: "Tuesday deployment downtime windows cost $50,050/hr.",
            severity_score: 9,
            business_impact: "Heavy drop in customer claims satisfaction and adjuster operational blocks.",
            recommended_solution_map: "Decoupled hot-swappable container configurations with rolling zero-downtime releases."
          },
          {
            pain: "Legacy local database cannot support modern analytical ML pipelines.",
            severity_score: 8,
            business_impact: "Inability to detect fraud trends proactively, keeping claim risk ratios high.",
            recommended_solution_map: "Replicated modern cloud database pipelines optimized for real-time analytics."
          }
        ]
      },
      champion: {
        champion_engagement_score: 84,
        internal_influence_mapping: "Chief Technology Officer (CTO) holds direct influence over board directions.",
        relationship_strength_indicator: "Strong. Highly receptive to modern serverless proof-of-concept plans.",
        action_recommendations: [
          "Share direct technical reference templates to help them champion cloud readiness to board directors.",
          "Set up weekly technical updates to keep progress aligned with key deadlines."
        ]
      }
    }
  };

  // Merge AI-generated data with the safe default fallbacks
  const data = proposalHubData ? {
    ...defaultData,
    ...proposalHubData,
    recommended_solutions: { ...defaultData.recommended_solutions, ...(proposalHubData.recommended_solutions || {}) },
    use_case_section: { ...defaultData.use_case_section, ...(proposalHubData.use_case_section || {}) },
    technical_architecture_section: { ...defaultData.technical_architecture_section, ...(proposalHubData.technical_architecture_section || {}) },
    investment_and_pricing: { ...defaultData.investment_and_pricing, ...(proposalHubData.investment_and_pricing || {}) },
    tco_analysis: { ...defaultData.tco_analysis, ...(proposalHubData.tco_analysis || {}) },
    meddic: { 
      ...defaultData.meddic, 
      ...(proposalHubData.meddic || {}),
      metrics: { ...defaultData.meddic.metrics, ...((proposalHubData.meddic || {}).metrics || {}) },
      economic_buyer: { ...defaultData.meddic.economic_buyer, ...((proposalHubData.meddic || {}).economic_buyer || {}) },
      decision_criteria: { ...defaultData.meddic.decision_criteria, ...((proposalHubData.meddic || {}).decision_criteria || {}) },
      decision_process: { ...defaultData.meddic.decision_process, ...((proposalHubData.meddic || {}).decision_process || {}) },
      pain_points: { ...defaultData.meddic.pain_points, ...((proposalHubData.meddic || {}).pain_points || {}) },
      champion: { ...defaultData.meddic.champion, ...((proposalHubData.meddic || {}).champion || {}) },
    },
    next_meeting_prep: { ...defaultData.next_meeting_prep, ...(proposalHubData.next_meeting_prep || {}) },
  } : defaultData;

  // Collapsible management structures
  const [expandedMiddle, setExpandedMiddle] = useState<Record<string, boolean>>({
    solutions: true,
    usecase: true,
    architecture: true,
    investment: true,
    tco: true,
    references: true
  });

  const [expandedMEDDIC, setExpandedMEDDIC] = useState<Record<string, boolean>>({
    metrics: true,
    buyer: true,
    criteria: true,
    process: true,
    pains: true,
    champion: true
  });

  const [expandedExtra, setExpandedExtra] = useState<Record<string, boolean>>({
    competitors: true,
    recommendations: true,
    actions: true,
    meeting: true
  });

  // Interactive Enhancement simulator states
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [qualityBonus, setQualityBonus] = useState(0);
  const [probabilityBonus, setProbabilityBonus] = useState(0);
  const [enhancements, setEnhancements] = useState<string[]>([]);
  const [copiedEmailIndex, setCopiedEmailIndex] = useState<number | null>(null);
  const [calculatorInputs, setCalculatorInputs] = useState({
    downtimeHours: 4,
    hourlyCost: 50000,
    adjusterCount: 60,
  });

  // Calculated ROI values using input fields
  const calculatedDowntimeLosses = calculatorInputs.downtimeHours * calculatorInputs.hourlyCost;
  const projectSavings = calculatedDowntimeLosses * 0.95; // 95% reduction in downtime

  const handleEnhance = () => {
    setIsEnhancing(true);
    setTimeout(() => {
      setIsEnhancing(false);
      setQualityBonus(16);
      setProbabilityBonus(15);
      setEnhancements([
        "Multi-cloud deployment risk identified: Added parallel cloud staging environments with automatic database replication.",
        "Value prop enhanced: Explicitly quantified the financial recovery margins ($200k saved per year).",
        "Security update: Bound standard Zero Trust SSO tokens directly to identity management specifications."
      ]);
    }, 1500);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedEmailIndex(index);
    setTimeout(() => setCopiedEmailIndex(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const qualityScore = Math.min(100, Math.round(data.proposal_quality_score + qualityBonus));
  const winProbability = Math.min(100, Math.round(data.win_probability_score + probabilityBonus));

  // Auto generated outreach template
  const outreachTemplate = `Subject: Strategic Cloud Modernization Workspace Roadmap & ROI Matrix

Dear Stakeholders,

I am writing to share our custom Cloud Modernization Blueprint, designed specifically to address the claims processing vulnerabilities discussed during our discovery session.

By migrating the on-premises Java system into a decoupled architecture, we aim to recover current Tuesday deployment losses ($50k/hour) and target a 99.99% system availability.

We have structured a multi-cloud cost model comparing AWS, Azure, and GCP resources. I welcome a 15-minute sync next week to review the Strategic TCO Savings and align on sandbox parameters.

Best regards,
Enterprise Account Lead`;

  return (
    <div className="space-y-10 animate-fade-in print:bg-white print:text-black">
      
      {/* Dynamic Strategic Dashboards */}
      <section className="bg-zinc-950/40 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden print:border-none print:shadow-none print:bg-transparent">
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-6 border-b border-zinc-900">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xl font-display font-extrabold text-zinc-100 flex items-center gap-2">
                Deal Strategy & Proposal Hub
              </h2>
            </div>
            <p className="text-xs text-zinc-400 max-w-xl">
              Simulate strategic sales metrics, review MEDDIC qualifications, and generate board-ready proposal assets based on transcript indicators.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleEnhance}
              disabled={isEnhancing}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md ${
                qualityBonus > 0 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border border-indigo-500/30"
              }`}
            >
              {isEnhancing ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  Generating Enhancement...
                </>
              ) : qualityBonus > 0 ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  AI Enhancement Applied
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-white" />
                  One-Click AI Enhance
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-2xl text-xs font-bold text-zinc-300 transition-all pointer-default uppercase tracking-wider"
            >
              <Download className="w-4 h-4" />
              Export PDF Proposal
            </button>
          </div>
        </div>

        {/* Dynamic Metric Gauges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Gauge 1: Proposal Quality Score */}
          <div className="bg-zinc-950/50 border border-zinc-900 rounded-2xl p-5 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-500">Proposal Quality Score</span>
              <p className="text-2xl font-black text-zinc-150 font-mono flex items-baseline gap-1">
                {qualityScore}%
                {qualityBonus > 0 && <span className="text-xs font-cyan-400 text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">+{qualityBonus}%</span>}
              </p>
              <p className="text-[10px] text-zinc-400">Content completeness, multi-cloud sizing, and security alignment index.</p>
            </div>
            
            <div className="relative w-16 h-16 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-zinc-850 stroke-[3]" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-indigo-500 stroke-[3.5] transition-all duration-1000" strokeDasharray={`${qualityScore}, 100`} strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold font-mono text-indigo-400">
                QS
              </div>
            </div>
          </div>

          {/* Gauge 2: Win Probability Score */}
          <div className="bg-zinc-950/50 border border-zinc-900 rounded-2xl p-5 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-500">Win Probability</span>
              <p className="text-2xl font-black text-zinc-150 font-mono flex items-baseline gap-1">
                {winProbability}%
                {probabilityBonus > 0 && <span className="text-xs font-cyan-400 text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">+{probabilityBonus}%</span>}
              </p>
              <p className="text-[10px] text-zinc-400">Value confirmation, buyer mapping depth, and MEDDIC indicators.</p>
            </div>

            <div className="relative w-16 h-16 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-zinc-850 stroke-[3]" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-cyan-500 stroke-[3.5] transition-all duration-1000" strokeDasharray={`${winProbability}, 100`} strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold font-mono text-cyan-400">
                WIN
              </div>
            </div>
          </div>

          {/* Card 3: Deal Health Dashboard Summary */}
          <div className="bg-zinc-950/50 border border-zinc-900 rounded-2xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-500">Deal Health Status</span>
              <span className={`px-2 py-0.5 text-[8px] font-bold font-mono rounded-full uppercase ${
                winProbability > 75 
                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                  : "bg-amber-500/15 text-amber-400 border border-amber-500/25"
              }`}>
                {winProbability > 75 ? "Strong Health" : "Requires Nurture"}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-2 text-[10px]">
              <div>
                <span className="text-zinc-500 block">Identified Risks</span>
                <span className="text-zinc-200 font-semibold block">{qualityBonus > 0 ? "0 Low" : "2 Medium"}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Key Strengths</span>
                <span className="text-emerald-400 font-semibold block">{qualityBonus > 0 ? "5 Crucial" : "3 Standard"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Enhancement Log Notification */}
        <AnimatePresence>
          {enhancements.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl space-y-2 overflow-hidden"
            >
              <span className="text-[10px] font-mono font-extrabold uppercase text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> AI Enhancements Activated successfully
              </span>
              <ul className="space-y-1">
                {enhancements.map((enh, i) => (
                  <li key={i} className="text-xs text-zinc-350 flex items-start gap-1.5 leading-normal">
                    <span className="text-emerald-400 mt-1">•</span>
                    {enh}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Main Dual Grid View (Middle Panel vs MEDDIC Qualification) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* LEFT COLUMN: Middle Panel (Enterprise Proposal Hub) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 px-1 text-zinc-500 select-none">
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <span className="text-[10px] font-display font-medium uppercase tracking-widest">Enterprise Proposal Middle Panel</span>
          </div>

          {/* Section 1: Recommended Solutions */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMiddle(prev => ({ ...prev, solutions: !prev.solutions }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">1. Optimized Solution Strategy</span>
              </div>
              {expandedMiddle.solutions ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMiddle.solutions && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="space-y-1">
                    <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">AI-Generated Executive Summary</h4>
                    <p className="text-zinc-300 font-sans leading-relaxed">{data.recommended_solutions.ai_executive_summary}</p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-zinc-900">
                    <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Business Value Proposition</h4>
                    <p className="text-zinc-300 font-sans leading-relaxed">{data.recommended_solutions.business_value_prop}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-zinc-900">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400" /> Competitive Advantages
                      </span>
                      <ul className="space-y-1.5">
                        {data.recommended_solutions.competitive_advantages.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-400 flex items-start gap-1">
                            <span className="text-indigo-400">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> Key ROI Highlights
                      </span>
                      <ul className="space-y-1.5">
                        {data.recommended_solutions.roi_highlights.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-400 flex items-start gap-1">
                            <span className="text-cyan-400">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 flex items-center justify-between bg-zinc-950/60 p-3 rounded-2xl">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Risk Mitigation Recommendations</span>
                      <ul className="space-y-1">
                        {data.recommended_solutions.risk_mitigations.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-350">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[8px] font-mono block text-zinc-500 uppercase">Strategic Align</span>
                      <span className="text-base font-black text-emerald-400 font-mono block">{data.recommended_solutions.strategic_alignment_score}/100</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Section 2: Use Case & Industry Fit */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMiddle(prev => ({ ...prev, usecase: !prev.usecase }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">2. Structured Use Case & Industry Fit</span>
              </div>
              {expandedMiddle.usecase ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMiddle.usecase && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Problem Statement</span>
                    <p className="text-zinc-250 italic bg-zinc-950 px-3.5 py-2.5 rounded-xl border border-zinc-900">
                      "{data.use_case_section.resolved_problem_statement}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-zinc-900">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Expected Business Outcomes</span>
                      <ul className="space-y-1">
                        {data.use_case_section.expected_business_outcomes.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-300 flex items-start gap-1.5">
                            <span className="text-emerald-400 font-bold">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Target Success Criteria</span>
                      <ul className="space-y-1">
                        {data.use_case_section.success_criteria.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-400 flex items-start gap-1.5">
                            <span className="text-indigo-400 font-bold">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0a0a0c] p-3.5 rounded-2xl">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Core KPI Metrics Mapping</span>
                      <ul className="space-y-1">
                        {data.use_case_section.kpi_mapping.map((item: string, i: number) => (
                          <li key={i} className="text-purple-300 font-semibold">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Use-Case Maturity Plan</span>
                      <p className="text-zinc-400 font-medium leading-normal mt-1">{data.use_case_section.use_case_maturity_assessment}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Section 3: Technical Architecture Section */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMiddle(prev => ({ ...prev, architecture: !prev.architecture }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">3. Cloud Architecture & Infrastructure Sizing</span>
              </div>
              {expandedMiddle.architecture ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMiddle.architecture && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Deployment Staging Recommendation</span>
                      <p className="text-zinc-300">{data.technical_architecture_section.cloud_deployment_recommendations}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Security Architecture Matrix</span>
                      <p className="text-zinc-300">{data.technical_architecture_section.security_architecture}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-zinc-900">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Enterprise Integration Mapping</span>
                      <ul className="space-y-1">
                        {data.technical_architecture_section.integration_mapping.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-400">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Scalability Verification Plan</span>
                      <p className="text-zinc-300">{data.technical_architecture_section.scalability_analysis}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 p-3 bg-zinc-950/80 border border-zinc-900 rounded-2xl">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-1">Infrastructure Resource Sizing Guidelines</span>
                    <ul className="space-y-1 text-zinc-300">
                      {data.technical_architecture_section.infra_sizing_recommendations.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-indigo-400 font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Section 4: Investment and Pricing */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMiddle(prev => ({ ...prev, investment: !prev.investment }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">4. Investment Strategy & Budget Fit</span>
              </div>
              {expandedMiddle.investment ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMiddle.investment && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">CAPEX vs OPEX Strategy</span>
                      <p className="text-zinc-300">{data.investment_and_pricing.capex_vs_opex}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Subscription Recommendations</span>
                      <p className="text-zinc-300">{data.investment_and_pricing.subscription_model_recommendations}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 space-y-2">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Multi-Year Modernization pricing Forecast</span>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-2 bg-zinc-950 border border-zinc-900 rounded-xl relative">
                        <span className="text-[8px] font-mono text-zinc-500 block uppercase">Year 1 Setup</span>
                        <p className="text-zinc-200 font-bold leading-snug mt-1">{data.investment_and_pricing.multiyear_pricing_forecast.year1}</p>
                      </div>
                      <div className="p-2 bg-zinc-950 border border-zinc-900 rounded-xl">
                        <span className="text-[8px] font-mono text-zinc-500 block uppercase">Year 3 Steady</span>
                        <p className="text-zinc-200 font-bold leading-snug mt-1">{data.investment_and_pricing.multiyear_pricing_forecast.year3}</p>
                      </div>
                      <div className="p-2 bg-zinc-950 border border-zinc-900 rounded-xl">
                        <span className="text-[8px] font-mono text-zinc-500 block uppercase">Year 5 Stable</span>
                        <p className="text-zinc-200 font-bold leading-snug mt-1">{data.investment_and_pricing.multiyear_pricing_forecast.year5}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0c0b0f] p-3.5 rounded-2xl">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Cost Optimization Suggestions</span>
                      <ul className="space-y-1">
                        {data.investment_and_pricing.cost_optimization_suggestions.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-400">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Budget Match Alignment</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-black text-cyan-400 font-mono">{data.investment_and_pricing.budget_fit_score}% Fit</span>
                        <p className="text-[10px] text-zinc-400 leading-normal">Optimized to fit original OpEx constraints closely.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-1">Contract Milestone Milestones</span>
                    <ul className="space-y-1">
                      {data.investment_and_pricing.payment_milestone_planning.map((item: string, i: number) => (
                        <li key={i} className="text-zinc-300 flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Section 5: Total Cost of Ownership (TCO) */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMiddle(prev => ({ ...prev, tco: !prev.tco }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">5. Total Cost of Ownership (TCO)</span>
              </div>
              {expandedMiddle.tco ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMiddle.tco && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl text-center">
                      <span className="text-[8px] font-mono text-zinc-500 block uppercase">1-Year TCO</span>
                      <p className="text-lg font-black text-indigo-400 font-mono mt-1">{data.tco_analysis.tco_1yr}</p>
                    </div>
                    <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl text-center ring-1 ring-zinc-800">
                      <span className="text-[8px] font-mono text-zinc-500 block uppercase">3-Year TCO</span>
                      <p className="text-lg font-black text-cyan-400 font-mono mt-1">{data.tco_analysis.tco_3yr}</p>
                    </div>
                    <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl text-center">
                      <span className="text-[8px] font-mono text-zinc-500 block uppercase">5-Year TCO</span>
                      <p className="text-lg font-black text-purple-400 font-mono mt-1">{data.tco_analysis.tco_5yr}</p>
                    </div>
                  </div>

                  {/* Comparative Cost breakdown visual block */}
                  <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-900 space-y-2">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#88888b] block">Comparative Breakdown Metrics</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] pt-1">
                      <div>
                        <span className="text-zinc-500 block uppercase text-[8px] font-mono">Infrastructure</span>
                        <p className="text-zinc-200 font-bold">{data.tco_analysis.infrastructure_costs}</p>
                      </div>
                      <div>
                        <span className="text-zinc-500 block uppercase text-[8px] font-mono">Licensing Tooling</span>
                        <p className="text-zinc-200 font-bold">{data.tco_analysis.licensing_costs}</p>
                      </div>
                      <div>
                        <span className="text-zinc-500 block uppercase text-[8px] font-mono">Oversight Management</span>
                        <p className="text-zinc-200 font-bold">{data.tco_analysis.maintenance_costs}</p>
                      </div>
                      <div>
                        <span className="text-zinc-500 block uppercase text-[8px] font-mono">Support Support</span>
                        <p className="text-zinc-200 font-bold">{data.tco_analysis.support_costs}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-400 block">Modernization Return Ratio</span>
                      <p className="text-zinc-300">{data.tco_analysis.savings_analysis}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0 select-none">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Section 6: Client References */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMiddle(prev => ({ ...prev, references: !prev.references }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <UserCheck className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">6. Enterprise Reference Alignments</span>
              </div>
              {expandedMiddle.references ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMiddle.references && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="space-y-4">
                    {data.client_references.map((ref: any, i: number) => (
                      <div key={i} className="p-4 bg-zinc-950 border border-zinc-900 rounded-2xl space-y-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div>
                            <p className="text-xs font-black text-zinc-100">{ref.customer_name}</p>
                            <span className="text-[9px] font-mono text-zinc-500 uppercase">{ref.industry}</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full select-none">
                            {ref.reference_matching_score}% Match Index
                          </span>
                        </div>
                        <p className="text-zinc-400 leading-normal">{ref.story_summary}</p>
                        
                        <div className="p-2.5 bg-[#08080a] rounded-xl border border-zinc-900">
                          <p className="text-[8px] font-mono text-zinc-500 uppercase block mb-0.5">Verified Improvement Metrics</p>
                          <p className="text-emerald-400 text-[11px] font-mono leading-normal font-bold">{ref.before_after_impact}</p>
                        </div>
                        
                        <p className="text-xs italic text-zinc-400 border-l-2 border-indigo-500/60 pl-3">
                          "{ref.testimonial_quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>

        {/* RIGHT COLUMN: MEDDIC Board Qualifications Panel */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 px-1 text-zinc-500 select-none">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-display font-medium uppercase tracking-widest">MEDDIC Sales Qualifications Board</span>
          </div>

          {/* MEDDIC 1: Metrics */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMEDDIC(prev => ({ ...prev, metrics: !prev.metrics }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">M - Economic Value Metrics</span>
              </div>
              {expandedMEDDIC.metrics ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMEDDIC.metrics && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Estimated Revenue Impact</span>
                      <p className="text-zinc-300">{data.meddic.metrics.revenue_impact_estimate}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Estimated cost Savings</span>
                      <p className="text-zinc-300">{data.meddic.metrics.cost_savings_calc}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#0a0a0c] border border-zinc-900 rounded-2xl grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Productivity Improvements</span>
                      <p className="text-zinc-250 leading-relaxed font-bold mt-1">{data.meddic.metrics.productivity_metrics}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Project ROI estimate</span>
                      <p className="text-emerald-400 text-lg font-black font-mono leading-none mt-1">{data.meddic.metrics.roi_percent}% ROI</p>
                    </div>
                  </div>

                  {/* Interactive ROI Calculator widget */}
                  <div className="p-4 bg-zinc-950/80 rounded-2xl border border-zinc-900 space-y-3">
                    <span className="text-[10px] font-mono font-extrabold uppercase text-indigo-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" /> Interactive Value Calculator
                    </span>
                    <p className="text-[10px] text-zinc-400 leading-normal">
                      Tweak variables to calculate downtime loss mitigation immediately.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-[8px] font-mono text-zinc-500 uppercase block mb-1">Downtime Hours</label>
                        <input 
                          type="number" 
                          value={calculatorInputs.downtimeHours} 
                          onChange={(e) => setCalculatorInputs({ ...calculatorInputs, downtimeHours: Number(e.target.value) })}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-1 text-zinc-200 text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[8px] font-mono text-zinc-500 uppercase block mb-1">Hourly Cost</label>
                        <input 
                          type="number" 
                          value={calculatorInputs.hourlyCost} 
                          onChange={(e) => setCalculatorInputs({ ...calculatorInputs, hourlyCost: Number(e.target.value) })}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-1 text-zinc-200 text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[8px] font-mono text-zinc-500 uppercase block mb-1">Adjusters Bound</label>
                        <input 
                          type="number" 
                          value={calculatorInputs.adjusterCount} 
                          onChange={(e) => setCalculatorInputs({ ...calculatorInputs, adjusterCount: Number(e.target.value) })}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-1 text-zinc-200 text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-zinc-900 flex justify-between items-center text-[10.5px]">
                      <span className="text-zinc-400 font-medium">Estimated Quarterly Downtime loss:</span>
                      <span className="text-rose-400 font-mono font-extrabold">${calculatedDowntimeLosses.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="text-emerald-400 font-bold">Net Project Recoverable ROI (95% reduction):</span>
                      <span className="text-emerald-400 font-mono font-black">${projectSavings.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-1">Key Business KPI Dashboard Target</span>
                    <ul className="space-y-1">
                      {data.meddic.metrics.kpi_benefit_summary.map((item: string, i: number) => (
                        <li key={i} className="text-zinc-350 flex items-start gap-1.5 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-450 text-emerald-450 shrink-0 text-emerald-400 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* MEDDIC 2: Economic Buyer */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMEDDIC(prev => ({ ...prev, buyer: !prev.buyer }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">E - Economic Buyer Mapping</span>
              </div>
              {expandedMEDDIC.buyer ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMEDDIC.buyer && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Target Role Identified</span>
                      <p className="text-zinc-200 font-extrabold">{data.meddic.economic_buyer.stakeholder_id}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">influence Score Level</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-black font-mono text-cyan-400">{data.meddic.economic_buyer.influence_score}/100</span>
                        <span className="text-[10px] text-zinc-400">(Absolute Discretionary spending Authority)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 space-y-1">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Budget Ownership mapping</span>
                    <p className="text-zinc-300 leading-normal">{data.meddic.economic_buyer.budget_ownership}</p>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 p-3 bg-zinc-950/80 border border-zinc-900 rounded-2xl">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-1.5">Executive engagement Recommendations</span>
                    <ul className="space-y-1">
                      {data.meddic.economic_buyer.executive_engagement_recs.map((item: string, i: number) => (
                        <li key={i} className="text-zinc-300 flex items-start gap-1.5">
                          <span className="text-cyan-400 font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* MEDDIC 3: Decision Criteria */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMEDDIC(prev => ({ ...prev, criteria: !prev.criteria }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">D - Validation Decision Criteria</span>
              </div>
              {expandedMEDDIC.criteria ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMEDDIC.criteria && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Functional Requirement matrix</span>
                      <ul className="space-y-1">
                        {data.meddic.decision_criteria.functional_reqs.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-300">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Technical requirements Matrix</span>
                      <ul className="space-y-1">
                        {data.meddic.decision_criteria.technical_reqs.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-300">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#909095]">Compliance requirements</span>
                      <ul className="space-y-1">
                        {data.meddic.decision_criteria.compliance_reqs.map((item: string, i: number) => (
                          <li key={i} className="text-zinc-350">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#909095]">Decision priority Ranking</span>
                      <ul className="space-y-1">
                        {data.meddic.decision_criteria.priority_ranking.map((item: string, i: number) => (
                          <li key={i} className="text-indigo-450 font-bold text-indigo-400">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* MEDDIC 4: Decision Process */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMEDDIC(prev => ({ ...prev, process: !prev.process }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">D - procurement Decision Process</span>
              </div>
              {expandedMEDDIC.process ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMEDDIC.process && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Procurement phase status</span>
                      <p className="text-zinc-200 font-bold">{data.meddic.decision_process.procurement_stage}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Workflow Timeline Forecast</span>
                      <p className="text-zinc-305 text-zinc-300 italic">{data.meddic.decision_process.timeline_prediction}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 p-3 bg-zinc-950 rounded-2xl border border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-550 text-zinc-500">Board Approval Checklist</span>
                      <ul className="space-y-1 text-zinc-350">
                        {data.meddic.decision_process.approval_workflow.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-cyan-405 text-cyan-500 font-bold">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">Deal Procurement Risk Assessment</span>
                      <p className="text-zinc-300 leading-normal">{data.meddic.decision_process.risk_assessment}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* MEDDIC 5: Pain Points */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMEDDIC(prev => ({ ...prev, pains: !prev.pains }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">I - Extracted Client Pain Points</span>
              </div>
              {expandedMEDDIC.pains ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMEDDIC.pains && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="space-y-4">
                    {data.meddic.pain_points.extracted_pains.map((p: any, i: number) => (
                      <div key={i} className="p-3.5 bg-zinc-950 border border-zinc-900 rounded-2xl space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-extrabold text-zinc-200">{p.pain}</p>
                          <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            Severity: {p.severity_score}/10
                          </span>
                        </div>
                        <p className="text-zinc-400 font-sans leading-normal">
                          <span className="text-zinc-500 uppercase text-[8px] font-mono block">Financial Business Impact</span>
                          {p.business_impact}
                        </p>
                        <p className="text-indigo-300 font-medium leading-normal bg-zinc-900 px-3 py-2 rounded-xl border border-zinc-800">
                          <span className="text-zinc-500 uppercase text-[8px] font-mono block">Proposed architecture solution fit</span>
                          {p.recommended_solution_map}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* MEDDIC 6: Champion */}
          <section className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-xl">
            <button 
              onClick={() => setExpandedMEDDIC(prev => ({ ...prev, champion: !prev.champion }))}
              className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-900 font-semibold text-zinc-200 bg-zinc-950/30 hover:bg-zinc-950/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-zinc-100">C - Internal Champion Enablement</span>
              </div>
              {expandedMEDDIC.champion ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
            </button>

            <AnimatePresence>
              {expandedMEDDIC.champion && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 space-y-4 text-xs leading-relaxed"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Champion engagement readiness</span>
                      <p className="text-base font-black text-cyan-400 font-mono">{data.meddic.champion.champion_engagement_score}% Alignment</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Internal Influence Matrix</span>
                      <p className="text-zinc-300 font-medium">{data.meddic.champion.internal_influence_mapping}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 space-y-1">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#a0a0a5]">Relationship Strength assessment</span>
                    <p className="text-zinc-300 leading-normal">{data.meddic.champion.relationship_strength_indicator}</p>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 p-3 bg-zinc-950 rounded-2xl border border-zinc-950">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-1">Outbound Action Recommendations</span>
                    <ul className="space-y-1">
                      {data.meddic.champion.action_recommendations.map((item: string, i: number) => (
                        <li key={i} className="text-zinc-350 flex items-start gap-1.5 font-medium">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>

      {/* ADDITIONAL PLAYGROUNDS & ASSISTANTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Competitor Battle Cards & Competitive Matrix */}
        <div className="lg:col-span-2 space-y-4 bg-zinc-950/40 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-904 border-b-zinc-900 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Competitive Landscape Battlecards</span>
            <span className="text-[9px] uppercase font-bold text-indigo-400 px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded">Live</span>
          </div>

          <div className="space-y-4">
            {data.competitor_analysis.map((comp: any, i: number) => (
              <div key={i} className="p-4 bg-zinc-950 border border-zinc-900 rounded-2xl space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="font-extrabold text-xs text-zinc-250 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    {comp.competitor_name}
                  </h4>
                  <span className="text-[8px] bg-indigo-500/10 text-indigo-300 font-mono p-1 rounded uppercase tracking-wider select-none">Battle Card strategy</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-normal">
                  <div className="bg-[#0c0c0e] p-3 rounded-xl border border-zinc-903 border-zinc-900">
                    <span className="text-[8px] font-mono text-zinc-500 block uppercase">Competitor weaknesses</span>
                    <p className="text-zinc-350 mt-1">{comp.weaknesses}</p>
                  </div>
                  <div className="bg-[#0b0c10] p-3 rounded-xl border border-zinc-900">
                    <span className="text-[8px] font-mono text-zinc-500 block uppercase">Our core modern strengths</span>
                    <p className="text-emerald-400 mt-1">{comp.our_strengths}</p>
                  </div>
                </div>

                <div className="p-3 bg-indigo-500/5 rounded-xl border border-indigo-500/15">
                  <span className="text-[8.5px] font-mono text-indigo-400 block uppercase font-bold">Seller Tactical Battle Plan</span>
                  <p className="text-zinc-300 mt-0.5 text-xs italic">{comp.battle_card}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board Meeting Prep Assistant & Objections preparation */}
        <div className="space-y-4 bg-gradient-to-br from-zinc-950 to-slate-950 border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Board Meeting Prep Assistant</span>
            <Lightbulb className="w-4 h-4 text-amber-400" />
          </div>

          <div className="space-y-4 text-xs">
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Key Objectives</span>
              <ul className="space-y-1">
                {data.next_meeting_prep.objectives.map((obj: string, i: number) => (
                  <li key={i} className="text-zinc-350 flex items-start gap-1">
                    <span className="text-indigo-400">•</span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-3 border-t border-zinc-900">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Recommended Agenda Checklist</span>
              <ul className="space-y-1">
                {data.next_meeting_prep.suggested_agenda.map((ag: string, i: number) => (
                  <li key={i} className="text-zinc-400 font-mono text-[10px] bg-zinc-950 p-1.5 rounded border border-zinc-900">
                    {ag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-zinc-900">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Answers to Common Objections</span>
              <div className="space-y-2">
                {data.next_meeting_prep.answers_to_objections.map((obj: string, i: number) => {
                  const parts = obj.split("->");
                  return (
                    <div key={i} className="p-2.5 bg-zinc-900 border border-zinc-805/40 border-zinc-800 rounded-xl">
                      <span className="text-[10px] text-rose-400 font-bold block mb-0.5">{parts[0]}</span>
                      <p className="text-zinc-300 leading-normal text-[10.5px] font-sans">{parts[1] || ''}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Outbound outreach / Template Section */}
      <section className="bg-zinc-950/40 backdrop-blur-md border border-zinc-900 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-wider">Outbound Client email Assistant</h3>
          </div>
          <button 
            onClick={() => copyToClipboard(outreachTemplate, 1)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/15 border border-indigo-500/20 rounded-xl text-xs font-bold text-indigo-300 transition-all cursor-pointer uppercase tracking-wider"
          >
            {copiedEmailIndex === 1 ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Copied template!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy outreach Email
              </>
            )}
          </button>
        </div>

        <div className="mt-4 bg-zinc-950 p-4 border border-zinc-900 rounded-2xl">
          <pre className="text-[11px] font-mono text-zinc-400 select-all whitespace-pre-wrap leading-relaxed">
            {outreachTemplate}
          </pre>
        </div>
      </section>

    </div>
  );
}
