// Cloudflare Pages Function -> erreichbar unter POST /api/inquiries
// Braucht die Environment Variable RESEND_API_KEY (als "Secret" in den
// Cloudflare Pages Projekteinstellungen -> Settings -> Environment variables).

interface Env {
  RESEND_API_KEY: string;
}

const TO_EMAIL = "contact@mvx-esports.com";
// Muss eine Adresse auf einer bei Resend verifizierten Domain sein.
const FROM_EMAIL = "inquiries@mvx-esports.com";

const ALLOWED_TYPES = ["Business", "Sponsorship", "Partnership", "General"] as const;

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type RequestContext = { request: Request; env: Env };

export const onRequestPost = async (context: RequestContext) => {

  let body: Record<string, unknown>;
  try {
    body = await context.request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const type = typeof body.type === "string" ? body.type : "General";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Name, Email und Message sind erforderlich." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return new Response(JSON.stringify({ error: "Ungültige Email-Adresse." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const safeType = (ALLOWED_TYPES as readonly string[]).includes(type) ? type : "General";

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `MVX Esports Inquiries <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      reply_to: email,
      subject: `[${safeType}] Neue Anfrage von ${name}`,
      text: [
        `Typ: ${safeType}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Firma: ${company || "-"}`,
        "",
        "Nachricht:",
        message,
      ].join("\n"),
      html: `
        <p><strong>Typ:</strong> ${escapeHtml(safeType)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Firma:</strong> ${escapeHtml(company || "-")}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!resendRes.ok) {
    const details = await resendRes.text();
    return new Response(JSON.stringify({ error: "Versand fehlgeschlagen.", details }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
