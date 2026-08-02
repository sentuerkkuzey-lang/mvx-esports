import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MVX Esports" },
      { name: "description", content: "Business, sponsorship, and partnership inquiries." },
    ],
  }),
  component: ContactPage,
});

const inquiries = ["Business", "Sponsorship", "Partnership", "General"] as const;

type Status = "idle" | "sending" | "sent" | "error";

function ContactPage() {
  const [type, setType] = useState<(typeof inquiries)[number]>("Business");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("send failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="container-xl pt-20 pb-16 md:pt-32 md:pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
          <h1 className="mt-6 text-display-lg uppercase max-w-3xl">Let's talk.</h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            For business inquiries, sponsorships, partnerships, and general questions, reach out below.
          </p>
        </Reveal>
      </section>

      <section className="container-xl pb-32 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-elevated p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Inquiry Type</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {inquiries.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setType(t)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                    type === t
                      ? "border-white bg-white text-background"
                      : "border-white/20 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Company" name="company" className="sm:col-span-2" />
            </div>

            <div className="mt-6">
              <label className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                name="message"
                className="mt-3 w-full resize-none rounded-xl border border-white/15 bg-transparent px-4 py-3 text-base outline-none focus:border-white/50 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-10 group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send inquiry"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            {status === "sent" && (
              <p className="mt-4 text-sm text-muted-foreground">Thanks — we'll get back to you shortly.</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">
                Something went wrong sending your message. Please try again or email us directly.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Direct</p>
              <a
                href="mailto:contact@mvx-esports.com"
                className="mt-4 inline-flex items-center gap-3 text-xl md:text-2xl border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                <Mail className="h-5 w-5" /> contact@mvx-esports.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Business</p>
              <p className="mt-3 text-muted-foreground">partnerships@mvx-esports.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Head Coach</p>
              <p className="mt-3 text-muted-foreground">rajtko@mvx-esports.com</p>
            </div>
            <div className="hairline-t pt-8">
              <p className="font-display text-3xl uppercase tracking-[0.06em]">Pure Class</p>
              <p className="mt-3 text-sm text-muted-foreground">Est. 2026</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        className="mt-3 w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-base outline-none focus:border-white/50 transition-colors"
      />
    </div>
  );
}
