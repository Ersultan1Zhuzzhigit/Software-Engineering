import { useEffect, useState } from 'react';
import { explainAvailability } from '../lib/explainAvailability';
import type { ExplanationResponse } from '../lib/explainAvailability';
import type { CheckResult } from '../lib/types';

export function ExplanationPanel({ roomLabel, start, end, result }: {
  roomLabel: string; start: number; end: number; result: CheckResult;
}) {
  const [request, setRequest] = useState(0);
  const [value, setValue] = useState<ExplanationResponse | null>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (request === 0) return;
    let active = true;
    setBusy(true);
    setValue(null);
    void explainAvailability({ roomLabel, start, end, result }).then(response => {
      if (active) { setValue(response); setBusy(false); }
    });
    return () => { active = false; };
  }, [request, roomLabel, start, end, result]);
  return <section className="border-t border-current/10 px-3 py-3 text-sm" aria-label="Optional AI explanation">
    <button type="button" disabled={busy} onClick={() => setRequest(n => n + 1)}
      className="rounded-lg bg-sky-600 px-3 py-2 font-semibold text-white disabled:opacity-50">
      {busy ? 'Explaining...' : 'Explain availability (mock AI)'}
    </button>
    {value && <div role="status" aria-live="polite" className="mt-2">
      <strong className="block text-xs">{value.source === 'mock' ? 'Mock AI explanation — not the decision' : 'Safe fallback — not AI-generated'}</strong>
      <p>{value.explanation}</p>
    </div>}
    <p className="mt-2 text-xs opacity-70">Confirmed availability is determined by booking rules only. No external API is used.</p>
  </section>;
}
