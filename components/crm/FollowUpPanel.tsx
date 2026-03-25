"use client";

import type { CrmLead } from "@/lib/crmTypes";

export function FollowUpPanel({ leads }: { leads: CrmLead[] }) {
  const rows = leads.filter((l) => l.themeId === "smart");

  if (rows.length === 0) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 text-sm text-[var(--text-muted)]">
        No Smart-theme leads yet. Submit the enquiry form while{" "}
        <strong className="text-[var(--text)]">Smart School</strong> is selected
        to see follow-up status here.
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 md:p-6">
      <h2 className="font-display text-lg font-bold text-[var(--text)] md:text-xl">
        Auto follow-up queue (Smart)
      </h2>
      <p className="mt-1 text-sm text-[var(--text-muted)]">
        Pending = waiting for WhatsApp template env. Sent / failed / skipped
        updates right after submit when configured.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] text-xs uppercase tracking-wide text-[var(--text-muted)]">
              <th className="py-2 pr-3">When</th>
              <th className="py-2 pr-3">Parent</th>
              <th className="py-2 pr-3">Phone</th>
              <th className="py-2 pr-3">Follow-up</th>
              <th className="py-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((l) => (
              <tr
                key={l.id}
                className="border-b border-[var(--border)] last:border-0"
              >
                <td className="py-3 pr-3 text-[var(--text-muted)]">
                  {l.createdAt
                    ? new Date(l.createdAt).toLocaleString()
                    : "—"}
                </td>
                <td className="py-3 pr-3 text-[var(--text)]">{l.parentName}</td>
                <td className="py-3 pr-3 font-mono text-xs">{l.phone}</td>
                <td className="py-3 pr-3">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                      l.followUpStatus === "sent"
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                        : l.followUpStatus === "failed"
                          ? "bg-red-500/15 text-red-700 dark:text-red-300"
                          : l.followUpStatus === "skipped"
                            ? "bg-amber-500/15 text-amber-800 dark:text-amber-200"
                            : "bg-slate-500/15 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {l.followUpStatus || "—"}
                  </span>
                  {l.followUpError ? (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                      {l.followUpError}
                    </p>
                  ) : null}
                </td>
                <td className="max-w-[200px] truncate py-3 text-[var(--text-muted)]">
                  {l.followUpSentAt
                    ? `Sent ${new Date(l.followUpSentAt).toLocaleString()}`
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
