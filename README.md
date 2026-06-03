# ☁️ Mr. Cloud Architect PRO-AI (Enterprise Multi-Cloud Discovery Engine)

[![Vite](https://img.shields.io/badge/bundler-Vite%206-646CFF?logo=vite)](https://vite.dev/)
[![React](https://img.shields.io/badge/framework-React%2019-20232A?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/styles-Tailwind%20v4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/language-TypeScript%205-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Google GenAI SDK](https://img.shields.io/badge/engine-Google%20GenAI-4285F4?logo=google)](https://github.com/google/generative-ai-js)
[![MermaidJS](https://img.shields.io/badge/visuals-Mermaid%20v11-FF6F61?logo=diagrams)](https://mermaid.js.org/)

**Mr. Cloud Architect PRO-AI** is a enterprise-grade cognitive simulator and cloud solutions architect optimizer. It ingests complex, raw discovery-call transcripts from clients, executives, engineers, and stakeholders, and automatically extracts structured cloud modernization strategies. 

Rather than focusing on a single cloud, the engine simultaneously designs equivalent native architectures, configurations, sizing specifications, pricing models, and monthly cost estimations side-by-side across **AWS (Amazon Web Services)**, **Microsoft Azure**, and **GCP (Google Cloud Platform)**. It then critically compares their strengths and weaknesses against the client's explicit transcript requirements to deliver an **Ultimate Suitability Winner** and a structured implementation plan.

---

## 🚀 Architectural Blueprint & Core Framework

The core architecture operates as a strict, schema-validated cognitive pipeline powered by **Gemini-3.1-Pro-Preview** coupled with the modern `@google/genai` SDK.

```
       [Raw Discovery Transcript Input]
                      │
                      ▼
 ┌─────────────────────────────────────────┐
 │       Gemini Cognitive Core             │
 │  (gemini-3.1-pro-preview Model Engine)  │
 ├─────────────────────────────────────────┤
 │  • Zero Trust & Identity Mapping        │
 │  • Sizing Spec equivalence matrix       │
 │  • STAR/SPAR Use Case analysis          │
 │  • Mermaid XML syntax rendering         │
 └────────────────────┬────────────────────┘
                      │  Strict Validated JSON Output
                      ▼  (ARCHITECT_SCHEMA constraint)
 ┌─────────────────────────────────────────┐
 │          React 19 State Hydration       │
 └────────────────────┬────────────────────┘
                      │
                      ├───► [Interactive Sizing/Costing Grid]
                      ├───► [Real-Time Mermaid SVG Visualizer]
                      ├───► [Milestone Roadmap & Dependendency Gantt]
                      └───► [Stakeholder alignment Matrix]
```

---

## 🎯 Major Interactive Modules & Capabilities

### 1. Unified Sizing Engine & Cost Equivalence Grid
*   **Provider Equivalent Specs**: Generates matching cloud sizing configurations across AWS, Azure, and GCP. E.g., mapping an `EC2 t3.medium` instances config to `Azure VM D2s v5` and `GCP Compute Engine e2-medium`, ensuring architectural parity.
*   **Itemized Cost Breakdowns**: Detail monthly expenditures and item calculations.
*   **Provider Spotlighting**: Sort criteria dynamically using standard keys, highlight entire cloud providers, and explore cross-provider specs interactively.

### 2. Live Discovery Simulator Console
*   **Raw Logs Parsing**: Accepts highly complex transcripts featuring speaking segments from multiple personas (e.g., CTO, VP of Operations, Data Engineers, and Security Leads).
*   **Pre-bundled Enterprise Script**: Includes the *Monolithic claims processing system* script as a default code model to demonstrate structured, multicloud modernization paths.

### 3. Dynamic Visual Strategy Engine (Mermaid Rendering)
*   **Unified Use-Case Diagram**: Standardizes discovered system interaction boundaries.
*   **Targeted System Architecture Diagram**: Automatically generated using native resources matching the **Recommended Winner** cloud platform. If GCP is the strategic victor, the Mermaid.js topology utilizes GCP native nodes like Cloud Run, Cloud SQL, Cloud IAM, and Cloud KMS, rendered programmatically on-demand.

### 4. Enterprise Stakeholder Alignment Matrix
*   **Influence Map**: Maps stakeholder organizational roles discovered in the logs.
*   **Focus Points Tracker**: Keeps track of primary concerns and assigns influence weighting (High, Medium, Low) to reconcile board, operational, or technical interests.

### 5. Multi-Cloud Suitability Scorecard & Delta Progression Index
*   **Index Progress Tracker**: Evaluates current vs. target architectural state on a 1.0 to 5.0 maturity matrix across Security (Zero Trust, RBAC), Scalability (elastic computing), Cost Optimization (OpEx limits), and Performance (low latency Compute).
*   **Granular Score Explanations**: A rigorous single-sentence explanation analyzes exactly what factors are dragging down current maturity and how the target model resolves them.

### 6. Strategic Recommended Pilot Launching Roadmap & Phases
*   **Timeframe-bound Phases**: Outlines logical sequential stages (e.g., Weeks 1-4, Months 1-3).
*   **Dependency Tracks**: Explicitly tracks prerequisite upstream phases or milestones.
*   **Metrics of Success**: Establishes definitive measurable success criteria to validate pilot outcomes before full-scale migration.

### 7. Core Demostration Guide & Validation Framework
*   **High-Impact Demo Plan**: Synthesizes custom-tailored tactical demos to prove the architectural design to the executive board.
*   **Target Assessment Questions**: Yields specific follow-up questions focused on validating constraints or refining estimates.

---

## 🛠️ Fully Structrued Schema Spec (`ARCHITECT_SCHEMA`)

All cognitive data objects generated are verified using a strict JSON schema structure. Below is the technical schema representation enforced in `/src/services/geminiService.ts`:

```typescript
export const ARCHITECT_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    client_snapshot: {
      type: Type.OBJECT,
      properties: {
        organization_type: { type: Type.STRING },
        technical_maturity_level: { type: Type.STRING },
        top_priorities: { type: Type.ARRAY, items: { type: Type.STRING } },
        constraints: { type: Type.ARRAY, items: { type: Type.STRING } },
        risk_factors: { type: Type.ARRAY, items: { type: Type.STRING } },
        detected_pains: { type: Type.ARRAY, items: { type: Type.STRING } },
        detected_goals: { type: Type.ARRAY, items: { type: Type.STRING } },
        stakeholder_mapping: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              role: { type: Type.STRING },
              primary_concerns: { type: Type.ARRAY, items: { type: Type.STRING } },
              influence_level: { type: Type.STRING } // High, Medium, Low
            },
            required: ["role", "primary_concerns", "influence_level"]
          }
        }
      },
      required: ["organization_type", "technical_maturity_level", "top_priorities", "constraints", "risk_factors", "detected_pains", "detected_goals", "stakeholder_mapping"],
    },
    core_drivers: { type: Type.ARRAY, items: { type: Type.STRING } },
    top_recommendations: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          solution_name: { type: Type.STRING },
          architecture_layer: { type: Type.STRING }, // Foundation, Identity, Network, Security, Storage, Compute, AI
          business_value: { type: Type.STRING },
          technical_reason: { type: Type.STRING },
          transcript_reference: { type: Type.STRING },
          confidence_score: { type: Type.NUMBER },
          why_it_fits: { type: Type.STRING },
          complementary_solutions: { type: Type.ARRAY, items: { type: Type.STRING } },
          aws_config: {
            type: Type.OBJECT,
            properties: {
              service_name: { type: Type.STRING },
              configuration: { type: Type.STRING },
              pricing_model: { type: Type.STRING },
              estimated_monthly_cost: { type: Type.STRING },
              cost_breakdown: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["service_name", "configuration", "pricing_model", "estimated_monthly_cost", "cost_breakdown"]
          },
          azure_config: {
            type: Type.OBJECT,
            properties: {
              service_name: { type: Type.STRING },
              configuration: { type: Type.STRING },
              pricing_model: { type: Type.STRING },
              estimated_monthly_cost: { type: Type.STRING },
              cost_breakdown: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["service_name", "configuration", "pricing_model", "estimated_monthly_cost", "cost_breakdown"]
          },
          gcp_config: {
            type: Type.OBJECT,
            properties: {
              service_name: { type: Type.STRING },
              configuration: { type: Type.STRING },
              pricing_model: { type: Type.STRING },
              estimated_monthly_cost: { type: Type.STRING },
              cost_breakdown: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["service_name", "configuration", "pricing_model", "estimated_monthly_cost", "cost_breakdown"]
          }
        },
        required: ["solution_name", "architecture_layer", "business_value", "technical_reason", "transcript_reference", "confidence_score", "why_it_fits", "complementary_solutions", "aws_config", "azure_config", "gcp_config"],
      }
    },
    matched_use_cases: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          scenario_name: { type: Type.STRING },
          format: { type: Type.STRING }, // STAR, SPAR
          situation: { type: Type.STRING },
          problem_or_task: { type: Type.STRING },
          action: { type: Type.STRING },
          result: { type: Type.STRING },
          industry_relevance: { type: Type.STRING }
        },
        required: ["scenario_name", "format", "situation", "problem_or_task", "action", "result", "industry_relevance"],
      }
    },
    diagrams: {
      type: Type.OBJECT,
      properties: {
        use_case_diagram: { type: Type.STRING }, // Mermaid string
        tech_architecture_diagram: { type: Type.STRING } // Mermaid string
      },
      required: ["use_case_diagram", "tech_architecture_diagram"],
    },
    recommended_pilot: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING },
        why_this_pilot: { type: Type.STRING },
        high_level_architecture: { type: Type.ARRAY, items: { type: Type.STRING } },
        measurable_success_metrics: { type: Type.ARRAY, items: { type: Type.STRING } }
      },
      required: ["name", "why_this_pilot", "high_level_architecture", "measurable_success_metrics"]
    },
    implementation_phases: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          phase_name: { type: Type.STRING },
          focus: { type: Type.STRING },
          duration: { type: Type.STRING },
          expected_outcome: { type: Type.STRING },
          milestones: { type: Type.ARRAY, items: { type: Type.STRING } },
          dependencies: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: ["phase_name", "focus", "duration", "expected_outcome", "milestones", "dependencies"]
      }
    },
    next_steps: {
      type: Type.OBJECT,
      properties: {
        demo_direction: { type: Type.STRING },
        follow_up_focus: { type: Type.STRING },
        validation_questions: { type: Type.ARRAY, items: { type: Type.STRING } }
      },
      required: ["demo_direction", "follow_up_focus", "validation_questions"]
    },
    cloud_maturity_trend: {
      type: Type.OBJECT,
      properties: {
        security: { current: Type.NUMBER, target: Type.NUMBER, explanation: Type.STRING },
        scalability: { current: Type.NUMBER, target: Type.NUMBER, explanation: Type.STRING },
        cost_optimization: { current: Type.NUMBER, target: Type.NUMBER, explanation: Type.STRING },
        performance: { current: Type.NUMBER, target: Type.NUMBER, explanation: Type.STRING }
      },
      required: ["security", "scalability", "cost_optimization", "performance"]
    },
    provider_comparison: {
      type: Type.OBJECT,
      properties: {
        aws_suitability: { type: Type.STRING },
        azure_suitability: { type: Type.STRING },
        gcp_suitability: { type: Type.STRING },
        final_verdict: { type: Type.STRING },
        recommended_winner: { type: Type.STRING } // AWS, Azure, GCP
      },
      required: ["aws_suitability", "azure_suitability", "gcp_suitability", "final_verdict", "recommended_winner"]
    },
    executive_summary: { type: Type.STRING }
  },
  required: ["client_snapshot", "core_drivers", "top_recommendations", "matched_use_cases", "diagrams", "recommended_pilot", "implementation_phases", "next_steps", "cloud_maturity_trend", "provider_comparison", "executive_summary"]
};
```

---

## 💾 Environmental Configuration & Getting Started

### 1. Prerequisites & Environment Setup
Add your Gemini model API key to your local development environment variable. You can specify this in a `.env` file at the root level:

```bash
# /.env
GEMINI_API_KEY="AIzaSyYourKeyHere..."
```

*(Note: In Google AI Studio Build, the core platform automatically injects the active configured API key into your service routines securely).*

### 2. Dependency Sourcing
Run the system package manager to source dependencies, initialize standard libraries, and resolve dev components:

```bash
npm install
```

### 3. Development Command
Launch the development server. The setup uses Vite running configured on port `3000` bound to network interface `0.0.0.0` for sandboxed ingress compatibility:

```bash
npm run dev
```

The application is accessible locally at `http://localhost:3000`.

### 4. Production Compiling & Building
To compile code types, eliminate warnings, check type safety, and compile files into highly optimized production assets in `/dist`:

```bash
# Run structural Linter and double-check standard type definitions
npm run lint

# Build static optimization chunks
npm run build
```

---

## 💎 Design System & Visual Aesthetics

The architecture interface presents a custom, meticulous **Obsidian Space Theme** optimized for enterprise solutions architects:

*   **Color Blueprint**: Powered by a deep `#07070a` canvas base surrounded by obsidian card components (`bg-zinc-950/50`) backed by a frosted glass backdrop filter (`backdrop-blur-md`).
*   **Ambient Rays**: Rendered via absolute high-contrast CSS radiant spot gradients blurring on radial bounds (Indigo/Violet/Sky).
*   **Typography**: Styled dynamically pairing structural Display grotesque classifications with `"JetBrains Mono"` code variables to emphasize computational outputs, pricing breakdowns, and service sizing constraints.
*   **Micro-Animations**: Framed using standard `motion/react` dynamic viewport entrances, content exits, tab transitions, and pulsing highlights that guide the eyes through high-volume data charts without clutter.

---

## 📦 File Layout Structure

```
├── .env.example              # Template file mapping required variables
├── .gitignore                # Runtime build ignored path manifests
├── index.html                # Vite entry point canvas container
├── metadata.json             # Core applet parameters and system permissions
├── package.json              # System configuration and compilation dependencies
├── tsconfig.json             # TypeScript parameters and rules specifications
├── vite.config.ts            # Vite compiler routing, variables & alias config
├── src/
│   ├── main.tsx              # React mounting routine file
│   ├── index.css             # Unified global CSS (Tailwind v4 integration)
│   ├── App.tsx               # Main Master Front-End React Dashboard Layout
│   ├── lib/
│   │   └── utils.ts          # Conditional className merge helper utility (cn)
│   └── services/
│       └── geminiService.ts  # Structured API Engine & Schema Constraints definition
```

---

*Designed and engineered in AI Studio utilizing React 19, TypeScript, and the Google GenAI Cognitive SDK.*
