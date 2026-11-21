# Smart Campus — Practice #11

**Student:** Zhuzzhigit Er-Sultan  
**Student ID:** 24B031798  
**Course:** Software Engineering — Practice #11

A standalone React/TypeScript Smart Campus Room Availability Checker with an optional **Explain availability (mock AI)** feature. Booking decisions are made solely by the original deterministic `checkAvailability` rules; the explanation cannot change results or bookings. Fictional data only; no actual LLM API or secrets.

## Local use

Requires Node.js >=22 and npm.

```bash
npm ci
npm test
npm run typecheck
npm run lint
npm run build
npm run dev
```

Click **Check Availability**, then **Explain availability (mock AI)**. The verified booking result remains above the labelled explanation. A rejected or timed-out explanation falls back to safe text.

## Evidence

- Existing booking tests: **30 pass**.
- New Practice #11 tests: **14 pass**.
- Combined local execution: **44/44 pass** (see `evidence/npm_test.txt`).
- Full `typecheck`, `lint`, and `build` **not verified** here due to unavailable installed project dependencies. Logs supplied.
- Browser screenshot verification **not performed** in this execution environment.

## Files

- `src/lib/checkAvailability.ts`: preserved deterministic booking authority.
- `src/lib/explainAvailability.ts`: bounded mock LLM adapter, input validation, strict output policy, 500ms timeout, fallback.
- `src/components/ExplanationPanel.tsx`: optional labelled explanation button, pending response cleanup.
- `src/App.tsx`: integrates the optional panel without replacing booking result.
- `practice11.test.mjs`: 14 additional tests.
- `PRACTICE11_REPORT.pdf`: user story, contract, architecture, test matrix, prompt comparison, review, reflection.

Release readiness: **CONDITIONAL** until dependencies are installed and browser/build verification completes.
