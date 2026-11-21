# Zhuzzhigit Er-Sultan — verification note

Student: Zhuzzhigit Er-Sultan  
ID: 24B031798  
Project: Smart Campus Room Availability Checker (Assignment #05)

This submission adapts an earlier audited Smart Campus source bundle, including its saved baseline, risk register, AI review and report. The original evidence logs and baseline screenshots are retained as **historical source evidence**, not represented as freshly captured on this student's computer. The report contains that earlier review's factual limitations.

## Recheck performed for this submission

- Node: v22.16.0.
- Baseline: `cd baseline_snapshot && node --no-warnings --experimental-strip-types --test booking.test.mjs` — **19/19 passed**; output: `evidence/ErSultan_baseline_recheck.log`.
- Final: `npm test` at `Assignment-05/` — **30/30 passed**; output: `evidence/ErSultan_final_test_recheck.log`.
- Full `npm ci`, `npm run typecheck`, `npm run lint`, `npm run build` and final Chromium UI verification **were not rerun for this submission**. Historical logs should not be read as current build results.
- Release decision remains **CONDITIONAL**, as specified in the report.

This folder is intentionally independent of the sibling Practice #11 project. To execute it from a shared Software-Engineering GitHub repository, use `cd Assignment-05` first.
