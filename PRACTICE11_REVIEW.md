# Practice #11 — read-only agentic review

| ID | Status | Severity | Evidence / verification | Decision |
|---|---|---|---|---|
| F1 | Confirmed design risk | High | A provider response could claim Available when checker says Unavailable. Negative unit test P11-10 confirms such output is rejected. | Strict match to deterministic template; fallback. |
| F2 | Confirmed design risk | Medium | Pending async explanation could outlive a replaced checked result. The UI uses `checkNumber` as a component key and effect cleanup ignores stale responses. | Isolate each check, still requires browser validation. |
| F3 | Confirmed limitation | Low | For multiple simultaneous rejection causes the mock shows one prioritized reason, while core UI lists every reason. | Kept for two-sentence explanation limit. |
| F4 | Plausible, not present | High in a real API | Browser key exposure would be a risk only if remote LLM was enabled. Current code has no key or external LLM. | Keep mock-only; future server proxy needed. |
| F5 | Unsupported | High if true | Claim that mock AI modifies real room bookings: no write path; P11-12 validates fixture immutability. | Rejected after inspection. |

Before demo: run npm ci + typecheck/lint/build and record UI screenshots. New unit suite and preserved booking suite passed 44/44 locally.
