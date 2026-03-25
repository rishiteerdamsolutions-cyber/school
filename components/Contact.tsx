"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

type Attribution = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  referrer: string;
};

export function Contact() {
  const { theme } = useTheme();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [attribution, setAttribution] = useState<Attribution>({
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmContent: "",
    referrer: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAttribution({
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmContent: params.get("utm_content") || "",
      referrer: document.referrer || "",
    });
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      parentName: String(data.get("parent_name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      grade: String(data.get("grade") || ""),
      message: String(data.get("message") || ""),
      themeId: theme,
      utmSource: attribution.utmSource,
      utmMedium: attribution.utmMedium,
      utmCampaign: attribution.utmCampaign,
      utmContent: attribution.utmContent,
      referrer: attribution.referrer,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Lead submit failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[var(--bg)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Contact
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
              Plan a visit or ask a question
            </h2>
            <p className="mt-4 text-[var(--text-muted)]">
              Share your details and our admissions team will call you back.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <span className="text-[var(--text-muted)]">Phone:</span>{" "}
                <a
                  className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
                  href="tel:+919505009699"
                >
                  +91 95050 09699
                </a>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">Email:</span>{" "}
                <a
                  className="font-medium text-[var(--primary)] underline-offset-2 hover:underline"
                  href="mailto:aideveloperindia@gmail.com"
                >
                  aideveloperindia@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">Campus:</span>{" "}
                <span className="text-[var(--text)]">
                  12 Lakeview Road, Bengaluru
                </span>
              </li>
            </ul>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="glass-panel space-y-4 rounded-[var(--radius-lg)] p-6 md:p-8"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="utm_source" value={attribution.utmSource} />
            <input type="hidden" name="utm_medium" value={attribution.utmMedium} />
            <input type="hidden" name="utm_campaign" value={attribution.utmCampaign} />
            <input type="hidden" name="utm_content" value={attribution.utmContent} />
            <input type="hidden" name="referrer" value={attribution.referrer} />

            <div>
              <label className="text-xs font-semibold text-[var(--text-muted)]">
                Parent name
              </label>
              <input
                name="parent_name"
                required
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--text)] outline-none ring-[var(--primary)] focus:ring-2"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[var(--text-muted)]">
                Phone number
              </label>
              <input
                name="phone"
                required
                inputMode="tel"
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--text)] outline-none ring-[var(--primary)] focus:ring-2"
                placeholder="+91..."
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[var(--text-muted)]">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--text)] outline-none ring-[var(--primary)] focus:ring-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[var(--text-muted)]">
                Grade interested in
              </label>
              <select
                name="grade"
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--text)] outline-none ring-[var(--primary)] focus:ring-2"
              >
                <option>Nursery</option>
                <option>Primary</option>
                <option>Middle</option>
                <option>Senior</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-[var(--text-muted)]">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--text)] outline-none ring-[var(--primary)] focus:ring-2"
                placeholder="Tell us what you need on your school site..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitting}
              className="w-full rounded-[var(--radius-md)] bg-[var(--primary)] py-3 text-sm font-semibold text-[var(--on-primary)] disabled:cursor-not-allowed disabled:opacity-70"
              style={
                theme === "smart"
                  ? { color: "#041016", boxShadow: "0 0 28px -8px var(--glow)" }
                  : undefined
              }
            >
              {submitting ? "Submitting..." : "Book counselling call"}
            </motion.button>
            {status === "success" && (
              <p className="text-sm text-emerald-600">
                Enquiry received. Our admissions counsellor will contact you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                Unable to submit now. Please try again in a moment.
              </p>
            )}
            <p className="text-xs text-[var(--text-muted)]">
              Your details are safe and used only for admissions support.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
