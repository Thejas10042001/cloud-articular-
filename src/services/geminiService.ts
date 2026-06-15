import { GoogleGenAI, Type } from "@google/genai";

export function getApiKey(): string {
  if (typeof window !== "undefined") {
    const localKey = localStorage.getItem("gemini_api_key");
    if (localKey && localKey.trim()) {
      return localKey.trim();
    }
  }
  return (process.env.GEMINI_API_KEY || "").trim();
}

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
              role: { type: Type.STRING, description: "Name or role of the stakeholder (e.g., CTO, VP Ops, Data Engineer, Security Lead)" },
              primary_concerns: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific priorities, pain points, or constraints key to this stakeholder." },
              influence_level: { type: Type.STRING, description: "Technical influence / decision-making level (e.g., High, Medium, Low)" }
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
          architecture_layer: { type: Type.STRING },
          business_value: { type: Type.STRING },
          technical_reason: { type: Type.STRING },
          transcript_reference: { type: Type.STRING },
          confidence_score: { type: Type.NUMBER },
          why_it_fits: { type: Type.STRING },
          complementary_solutions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Cross-sell opportunities." },
          aws_config: {
            type: Type.OBJECT,
            properties: {
              service_name: { type: Type.STRING, description: "Specific AWS service (e.g., AWS Fargate, Amazon Aurora)" },
              configuration: { type: Type.STRING, description: "Recommended specification/sizing (e.g., 2 vCPU, 4GB RAM)" },
              pricing_model: { type: Type.STRING, description: "AWS pricing model (e.g., Pay-as-you-go, Compute Savings Plans)" },
              estimated_monthly_cost: { type: Type.STRING, description: "Specific AWS pricing estimation (e.g., $120.00/mo)" },
              cost_breakdown: { type: Type.ARRAY, items: { type: Type.STRING }, description: "AWS cost calculations breakdown items." }
            },
            required: ["service_name", "configuration", "pricing_model", "estimated_monthly_cost", "cost_breakdown"]
          },
          azure_config: {
            type: Type.OBJECT,
            properties: {
              service_name: { type: Type.STRING, description: "Specific Azure equivalent service (e.g., Azure Container Apps, Azure SQL DB)" },
              configuration: { type: Type.STRING, description: "Recommended Azure spec/SKU (e.g., 2 vCPU, 4GB RAM)" },
              pricing_model: { type: Type.STRING, description: "Azure pricing model (e.g., Consumption, Committed Discount)" },
              estimated_monthly_cost: { type: Type.STRING, description: "Specific Azure pricing estimation (e.g., $110.00/mo)" },
              cost_breakdown: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Azure cost calculations breakdown items." }
            },
            required: ["service_name", "configuration", "pricing_model", "estimated_monthly_cost", "cost_breakdown"]
          },
          gcp_config: {
            type: Type.OBJECT,
            properties: {
              service_name: { type: Type.STRING, description: "Specific GCP equivalent service (e.g., Google Cloud Run, Cloud SQL)" },
              configuration: { type: Type.STRING, description: "Recommended GCP spec (e.g., 2 vCPU, 4GB RAM)" },
              pricing_model: { type: Type.STRING, description: "GCP pricing model (e.g., Pay-as-you-go, Committed Use Discount)" },
              estimated_monthly_cost: { type: Type.STRING, description: "Specific GCP pricing estimation (e.g., $95.00/mo)" },
              cost_breakdown: { type: Type.ARRAY, items: { type: Type.STRING }, description: "GCP cost calculations breakdown items." }
            },
            required: ["service_name", "configuration", "pricing_model", "estimated_monthly_cost", "cost_breakdown"]
          }
        },
        required: [
          "solution_name",
          "architecture_layer",
          "business_value",
          "technical_reason",
          "transcript_reference",
          "confidence_score",
          "why_it_fits",
          "complementary_solutions",
          "aws_config",
          "azure_config",
          "gcp_config"
        ],
      },
    },
    matched_use_cases: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          scenario_name: { type: Type.STRING },
          format: { type: Type.STRING, description: "SPAR or STAR" },
          situation: { type: Type.STRING },
          problem_or_task: { type: Type.STRING, description: "Problem for SPAR, Task for STAR" },
          action: { type: Type.STRING },
          result: { type: Type.STRING },
          industry_relevance: { type: Type.STRING },
        },
        required: ["scenario_name", "format", "situation", "problem_or_task", "action", "result", "industry_relevance"],
      },
    },
    diagrams: {
      type: Type.OBJECT,
      properties: {
        use_case_diagram: { type: Type.STRING, description: "Mermaid.js code for a Use Case diagram." },
        tech_architecture_diagram: { type: Type.STRING, description: "Mermaid.js code for a System Technical Architecture diagram." },
      },
      required: ["use_case_diagram", "tech_architecture_diagram"],
    },
    recommended_pilot: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING },
        why_this_pilot: { type: Type.STRING },
        high_level_architecture: { type: Type.ARRAY, items: { type: Type.STRING } },
        measurable_success_metrics: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
      required: ["name", "why_this_pilot", "high_level_architecture", "measurable_success_metrics"],
    },
    implementation_phases: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          phase_name: { type: Type.STRING },
          focus: { type: Type.STRING },
          duration: { type: Type.STRING, description: "Estimated duration or timeframe (e.g., 'Weeks 1-4' or 'Months 1-3')" },
          expected_outcome: { type: Type.STRING },
          milestones: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific key milestones to achieve in this phase." },
          dependencies: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Prerequisites or dependent items/phases." },
        },
        required: ["phase_name", "focus", "duration", "expected_outcome", "milestones", "dependencies"],
      },
    },
    next_steps: {
      type: Type.OBJECT,
      properties: {
        demo_direction: { type: Type.STRING },
        follow_up_focus: { type: Type.STRING },
        validation_questions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "What to ask next to validate fit." },
      },
      required: ["demo_direction", "follow_up_focus", "validation_questions"],
    },
    cloud_maturity_trend: {
      type: Type.OBJECT,
      description: "Comparison of current vs target state out of 5 across 4 key dimensions: Security, Scalability, Cost Optimization, and Performance.",
      properties: {
        security: {
          type: Type.OBJECT,
          properties: {
            current: { type: Type.NUMBER, description: "Current maturity level (float 1-5)" },
            target: { type: Type.NUMBER, description: "Target maturity level (float 1-5)" },
            explanation: { type: Type.STRING, description: "Concise note comparing current issues vs target improvement." },
          },
          required: ["current", "target", "explanation"],
        },
        scalability: {
          type: Type.OBJECT,
          properties: {
            current: { type: Type.NUMBER, description: "Current maturity level (float 1-5)" },
            target: { type: Type.NUMBER, description: "Target maturity level (float 1-5)" },
            explanation: { type: Type.STRING, description: "Concise note comparing current issues vs target improvement." },
          },
          required: ["current", "target", "explanation"],
        },
        cost_optimization: {
          type: Type.OBJECT,
          properties: {
            current: { type: Type.NUMBER, description: "Current maturity level (float 1-5)" },
            target: { type: Type.NUMBER, description: "Target maturity level (float 1-5)" },
            explanation: { type: Type.STRING, description: "Concise note comparing current issues vs target improvement." },
          },
          required: ["current", "target", "explanation"],
        },
        performance: {
          type: Type.OBJECT,
          properties: {
            current: { type: Type.NUMBER, description: "Current maturity level (float 1-5)" },
            target: { type: Type.NUMBER, description: "Target maturity level (float 1-5)" },
            explanation: { type: Type.STRING, description: "Concise note comparing current issues vs target improvement." },
          },
          required: ["current", "target", "explanation"],
        },
      },
      required: ["security", "scalability", "cost_optimization", "performance"],
    },
    provider_comparison: {
      type: Type.OBJECT,
      description: "Comparison of high-level suitability of major cloud providers for this client and the final chosen winner.",
      properties: {
        aws_suitability: { type: Type.STRING, description: "Strengths/weaknesses of AWS for this client's specific transcript needs." },
        azure_suitability: { type: Type.STRING, description: "Strengths/weaknesses of Azure for this client's specific transcript needs." },
        gcp_suitability: { type: Type.STRING, description: "Strengths/weaknesses of GCP for this client's specific transcript needs." },
        final_verdict: { type: Type.STRING, description: "Detailed architectural reasoning for which single cloud provider is absolutely the best fit, and why." },
        recommended_winner: { type: Type.STRING, description: "Which provider is the recommended winner? Must be exactly 'AWS' or 'Azure' or 'GCP'." }
      },
      required: ["aws_suitability", "azure_suitability", "gcp_suitability", "final_verdict", "recommended_winner"]
    },
    executive_summary: { type: Type.STRING },
    proposal_hub: {
      type: Type.OBJECT,
      description: "Enterprise Proposal and MEDDIC sales qualifications parameters customized according to transcript indicators.",
      properties: {
        proposal_quality_score: { type: Type.NUMBER, description: "Calculated quality assessment value (0-100)" },
        win_probability_score: { type: Type.NUMBER, description: "Likelihood to secure the client deal (0-100)" },
        ai_recommendations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "High-level strategic deal optimization advice." },
        follow_up_actions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Concrete immediate steps to advance the deal." },
        next_meeting_prep: {
          type: Type.OBJECT,
          properties: {
            objectives: { type: Type.ARRAY, items: { type: Type.STRING } },
            suggested_agenda: { type: Type.ARRAY, items: { type: Type.STRING } },
            answers_to_objections: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Defensive arguments to anticipated board objections." }
          },
          required: ["objectives", "suggested_agenda", "answers_to_objections"]
        },
        competitor_analysis: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              competitor_name: { type: Type.STRING },
              weaknesses: { type: Type.STRING },
              our_strengths: { type: Type.STRING },
              battle_card: { type: Type.STRING }
            },
            required: ["competitor_name", "weaknesses", "our_strengths", "battle_card"]
          }
        },
        recommended_solutions: {
          type: Type.OBJECT,
          description: "Detailed proposal object: ai_executive_summary, business_value_prop, competitive_advantages, roi_highlights, risk_mitigations, strategic_alignment_score"
        },
        use_case_section: {
          type: Type.OBJECT,
          description: "Detailed use case object: resolved_problem_statement, expected_business_outcomes, success_criteria, kpi_mapping, use_case_maturity_assessment"
        },
        technical_architecture_section: {
          type: Type.OBJECT,
          description: "Detailed technical architecture object: cloud_deployment_recommendations, security_architecture, integration_mapping, scalability_analysis, infra_sizing_recommendations"
        },
        investment_and_pricing: {
          type: Type.OBJECT,
          description: "Detailed pricing object: capex_vs_opex, subscription_model_recommendations, cost_optimization_suggestions, multiyear_pricing_forecast, budget_fit_score, payment_milestone_planning"
        },
        tco_analysis: {
          type: Type.OBJECT,
          description: "Detailed TCO analysis object: tco_1yr, tco_3yr, tco_5yr, infrastructure_costs, licensing_costs, maintenance_costs, support_costs, savings_analysis"
        },
        client_references: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT
          },
          description: "Array of customer references: customer_name, industry, story_summary, before_after_impact, reference_matching_score, testimonial_quote"
        },
        meddic: {
          type: Type.OBJECT,
          description: "Dynamic MEDDIC scorecard object (metrics, economic_buyer, decision_criteria, decision_process, pain_points, champion)"
        }
      },
      required: [
        "proposal_quality_score",
        "win_probability_score",
        "ai_recommendations",
        "follow_up_actions",
        "next_meeting_prep",
        "competitor_analysis",
        "recommended_solutions",
        "use_case_section",
        "technical_architecture_section",
        "investment_and_pricing",
        "tco_analysis",
        "client_references",
        "meddic"
      ]
    }
  },
  required: ["client_snapshot", "core_drivers", "top_recommendations", "matched_use_cases", "diagrams", "recommended_pilot", "implementation_phases", "next_steps", "cloud_maturity_trend", "provider_comparison", "executive_summary", "proposal_hub"],
};

export async function analyzeTranscript(transcript: string) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("API_KEY_MISSING");
  }
  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `You are a senior enterprise cloud solutions architect and executive technology strategist.
Analyze the following enterprise discovery call transcript and produce a concise, action-oriented cloud modernization strategy.

The customer wants a multi-cloud analysis that simultaneously lists suitable native cloud alternatives.
Therefore, for EACH of your top recommendations, you must supply exact mapping and estimations for ALL THREE major cloud providers (AWS, Azure, and GCP) under their respective config objects (aws_config, azure_config, gcp_config).

Transcript:
${transcript}

Strategic Requirements:
1. Executive Precision: Provide a punchy executive summary focused on the "Why" and "What now".
2. Business Outcomes: Clearly define the business value and expected outcomes for every recommendation.
3. Immediate Next Steps: Provide concise, outcome-oriented immediate actions. Include specific, high-impact demo directions and targeted validation questions to confirm strategy fit.
4. Architectural Layering: Map recommendations to Foundation, Identity, Network, Security, Storage, Compute, and AI layers.
5. Use Case Alignment: Identify at least 5 distinct, high-impact use cases from the transcript. Format each using the STAR (Situation, Task, Action, Result) or SPAR framework as appropriate, but prioritize STAR for at least 2 of them. Each use case must include a specific "industry_relevance" scenario.
6. Visual Strategy: Provide Mermaid.js code for a Use Case diagram and a System Technical Architecture diagram. Ensure the System Technical Architecture diagram is dynamically tailored to the native services of the 'recommended_winner' (which you determine in provider_comparison). It must show how the services of that winner map across all the layers (Foundation, etc.).
7. Pricing & Multi-Cloud Equivalent Configurations: For EACH recommendation, you must specify:
   - For AWS (aws_config): service_name, specification/sizing resource requirements, pricing model, specific estimated monthly cost (e.g. $120.00/mo), and bulleted cost breakdown.
   - For Azure (azure_config): equivalent service_name, equivalent specification/sizing config, pricing model, specific estimated monthly cost (e.g. $115.00/mo), and bulleted cost breakdown.
   - For GCP (gcp_config): equivalent service_name, equivalent specification/sizing config, pricing model, specific estimated monthly cost (e.g. $95.00/mo), and bulleted cost breakdown.
   Ensure that these models are realistic and represent similar resource profiles across the three clouds (e.g. EC2 t3.medium vs. Azure VM D2s v5 vs. GCP Compute Engine e2-medium).
8. Implementation Timeline: Detail a structured roadmap timeline for the phases. Each phase must include focus, estimated duration/timeframe, expected business/technical outcome, key milestones, and a clear dependency tracker listing prerequisites.
9. Stakeholder Mapping: In the client snapshot, identify the key organizational roles speaking or mentioned in the transcript (e.g., CTO, VP Ops, Data Engineer, Security Lead) and map each role to their primary concerns and technical influence level (choose from: High, Medium, Low).
10. Cloud Maturity Trend: Critically evaluate the client's current vs. target state on a 1.0 to 5.0 scale across Security, Scalability, Cost Optimization, and Performance. Provide a precise, single-sentence explanation of why they are currently scored low and how the proposed target state fixes it.
11. Provider Comparison & Ultimate Fit: Fill out the provider_comparison section comparing all three major cloud providers (AWS, Azure, and GCP) specifically tailored to the problems and tech stack described in the transcript. Deliver a definitive recommended_winner (exactly 'AWS' or 'Azure' or 'GCP') and justify the choice with precise architectural and strategic reasoning in the final_verdict.
12. Proposal Hub & Sales Qualification (MEDDIC): Fill out the entire 'proposal_hub' of properties based on conversation details:
    - Assess Proposal Quality (0-100) and Win Probability (0-100) realistically.
    - Build an AI executive summary, value prop, competitors, meeting prep objectives and objection counters.
    - Construct CAPEX vs OPEX comparisons, subscription recomendations, and a 1-year, 3-year, and 5-year budget forecast and TCO.
    - Evaluate MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Pain Points, Champion) dynamically utilizing the speaking personas' concerns and actions.

Output must be executive-ready: concise, high-impact, and devoid of technical fluff.`,
          },
        ],
      },
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: ARCHITECT_SCHEMA,
    },
  });

  return JSON.parse(response.text || "{}");
}
