import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

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
      },
      required: ["organization_type", "technical_maturity_level", "top_priorities", "constraints", "risk_factors", "detected_pains", "detected_goals"],
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
          pricing_model: { type: Type.STRING },
          why_it_fits: { type: Type.STRING },
          complementary_solutions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Cross-sell opportunities." },
        },
        required: ["solution_name", "architecture_layer", "business_value", "technical_reason", "transcript_reference", "confidence_score", "pricing_model", "why_it_fits", "complementary_solutions"],
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
          expected_outcome: { type: Type.STRING },
        },
        required: ["phase_name", "focus", "expected_outcome"],
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
    executive_summary: { type: Type.STRING },
  },
  required: ["client_snapshot", "core_drivers", "top_recommendations", "matched_use_cases", "recommended_pilot", "implementation_phases", "next_steps", "executive_summary"],
};

export async function analyzeTranscript(transcript: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `You are a senior enterprise cloud solutions architect and executive technology strategist.
Analyze the following enterprise discovery call transcript and produce structured, executive-ready cloud modernization recommendations.

Transcript:
${transcript}

Requirements:
- Extract business context, political dynamics, risks, and constraints.
- Identify architectural layers: foundation, identity, network, security, storage, compute, AI.
- Recommend solutions strategically.
- Tie every recommendation to transcript evidence.
- Prioritize outcomes over technical buzzwords.
- Avoid vague generic language.`,
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
