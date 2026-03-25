/**
 * WhatsApp Cloud API — template messages (server-only).
 * If env is incomplete, callers should treat as "not configured" and skip sending.
 */

type WhatsAppConfig = {
  phoneNumberId: string;
  token: string;
  templateName: string;
  templateLanguage: string;
};

export function getWhatsAppSendConfig(): WhatsAppConfig | null {
  const phoneNumberId = process.env.WHATSAPP_SENDER_NUMBER_ID?.trim();
  const token = process.env.WHATSAPP_TOKEN?.trim();
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME?.trim();
  const templateLanguage =
    process.env.WHATSAPP_TEMPLATE_LANGUAGE?.trim() || "en";

  if (!phoneNumberId || !token || !templateName) return null;

  return { phoneNumberId, token, templateName, templateLanguage };
}

export type LeadForTemplate = {
  phone: string;
  parentName: string;
  grade: string;
  message: string;
};

/**
 * Sends an approved template. `to` must be digits only (no +), country code included.
 * Template body params: {{1}} parentName, {{2}} grade, {{3}} message (truncated).
 */
export async function sendLeadFollowUpTemplate(
  toDigits: string,
  lead: LeadForTemplate,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const cfg = getWhatsAppSendConfig();
  if (!cfg) {
    return { ok: false, error: "WhatsApp send not configured" };
  }

  const url = `https://graph.facebook.com/v21.0/${cfg.phoneNumberId}/messages`;
  const msgSnippet =
    lead.message.length > 120
      ? `${lead.message.slice(0, 117)}...`
      : lead.message;

  const body = {
    messaging_product: "whatsapp",
    to: toDigits.replace(/\D/g, ""),
    type: "template",
    template: {
      name: cfg.templateName,
      language: { code: cfg.templateLanguage },
      components: [
        {
          type: "body",
          parameters: [
            { type: "text", text: lead.parentName },
            { type: "text", text: lead.grade },
            { type: "text", text: msgSnippet || "—" },
          ],
        },
      ],
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = (await res.json().catch(() => ({}))) as {
    error?: { message?: string };
  };

  if (!res.ok) {
    const errMsg =
      json?.error?.message || `WhatsApp API ${res.status}`;
    return { ok: false, error: errMsg };
  }

  return { ok: true };
}
