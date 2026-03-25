"use client";

import { useCallback, useEffect, useState } from "react";
import type { CrmLead } from "@/lib/crmTypes";
import { FollowUpPanel } from "@/components/crm/FollowUpPanel";

type Props = {
  /** Smart tier shows follow-up queue panel */
  showFollowUp: boolean;
};

export function LeadsDashboard({ showFollowUp }: Props) {
  const [leads, setLeads] = useState<CrmLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [draftNotes, setDraftNotes] = useState<Record<string, string>>({});

  const load = useCallback(async () => {
    try {
      const q = new URLSearchParams();
      if (statusFilter) q.set("status", statusFilter);
      const res = await fetch(`/api/leads?${q.toString()}`);
      if (!res.ok) throw new Error("Failed to load leads");
      const data = (await res.json()) as { leads?: CrmLead[] };
      setLeads(data.leads ?? []);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Load error");
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    const t = setInterval(() => {
      void load();
    }, 8000);
    return () => clearInterval(t);
  }, [load]);

  async function patchLead(
    id: string,
    body: { status?: string; notes?: string; followUpStatus?: string },
  ) {
    const res = await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("Update failed");
    await load();
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-[var(--text)] md:text-3xl">
            Lead CRM
          </h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Live enquiries from the contact form. Refreshes every ~8 seconds.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-xs text-[var(--text-muted)]">
            Status
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="ml-2 rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-1.5 text-sm text-[var(--text)]"
            >
              <option value="">All</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
            </select>
          </label>
          <button
            type="button"
            onClick={() => void load()}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--text)] hover:bg-[var(--bg-alt)]"
          >
            Refresh now
          </button>
        </div>
      </div>

      {loading && leads.length === 0 ? (
        <p className="text-sm text-[var(--text-muted)]">Loading leads…</p>
      ) : null}
      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}

      {showFollowUp ? <FollowUpPanel leads={leads} /> : null}

      <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 md:p-6">
        <h2 className="font-display text-lg font-bold text-[var(--text)]">
          All leads
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-xs uppercase tracking-wide text-[var(--text-muted)]">
                <th className="py-2 pr-3">When</th>
                <th className="py-2 pr-3">Theme</th>
                <th className="py-2 pr-3">Parent</th>
                <th className="py-2 pr-3">Phone</th>
                <th className="py-2 pr-3">Grade</th>
                <th className="py-2 pr-3">Status</th>
                <th className="py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 && !loading ? (
                <tr>
                  <td
                    colSpan={7}
                    className="py-8 text-center text-[var(--text-muted)]"
                  >
                    No leads yet. Submit the contact form on the homepage.
                  </td>
                </tr>
              ) : (
                leads.map((l) => (
                  <tr
                    key={l.id}
                    className="border-b border-[var(--border)] last:border-0 align-top"
                  >
                    <td className="py-3 pr-3 text-xs text-[var(--text-muted)]">
                      {l.createdAt
                        ? new Date(l.createdAt).toLocaleString()
                        : "—"}
                    </td>
                    <td className="py-3 pr-3 font-mono text-xs">{l.themeId}</td>
                    <td className="py-3 pr-3 text-[var(--text)]">{l.parentName}</td>
                    <td className="py-3 pr-3 font-mono text-xs">{l.phone}</td>
                    <td className="py-3 pr-3">{l.grade}</td>
                    <td className="py-3 pr-3">
                      <select
                        value={l.status}
                        onChange={(e) =>
                          void patchLead(l.id, { status: e.target.value })
                        }
                        className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-1 text-xs text-[var(--text)]"
                      >
                        <option value="new">new</option>
                        <option value="contacted">contacted</option>
                        <option value="qualified">qualified</option>
                      </select>
                    </td>
                    <td className="py-3">
                      <textarea
                        rows={2}
                        className="w-full min-w-[180px] rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-1 text-xs text-[var(--text)]"
                        placeholder="Internal note"
                        value={draftNotes[l.id] ?? l.notes ?? ""}
                        onChange={(e) =>
                          setDraftNotes((prev) => ({
                            ...prev,
                            [l.id]: e.target.value,
                          }))
                        }
                        onBlur={() => {
                          const next = draftNotes[l.id] ?? l.notes ?? "";
                          if (next !== (l.notes ?? "")) {
                            void patchLead(l.id, { notes: next });
                          }
                        }}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
