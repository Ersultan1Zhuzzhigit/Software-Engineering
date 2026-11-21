# AGENTS.md — Practice #11

## Scope
Single-page fictional Smart Campus availability checker. No login, database, production API, network AI service, personal data, or secrets. The LLM adapter is a labelled local mock.

## Review gates
- Preserve all booking constraints: 0 <= start < end <= 1440, future start time, <=120-minute duration, block status and overlap rule (touching endpoints allowed).
- Never give the explanation layer permission to set `available` or modify bookings.
- Limit explanation input, handle errors and timeouts, validate provider output, and never trust injected instructions.
- Run `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build` after installing dependencies.
- Before merge or demonstration, human checks the diff, test logs, UI result freshness, and narrow-screen behavior.
- Do not add secrets, dependencies, real external API calls, deploy, force-push or auto-merge without approval.

## Map
`src/lib/checkAvailability.ts` = booking authority; `src/lib/explainAvailability.ts` = mock adapter; `src/components/ExplanationPanel.tsx` = UI; `practice11.test.mjs` = feature tests; `evidence/` = verification logs.
