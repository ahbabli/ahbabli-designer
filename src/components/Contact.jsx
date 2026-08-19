import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa";
import siteInfo from "../data/siteInfo";
import SectionHeading from "./SectionHeading";

const socialIcons = {
  instagram: FaInstagram,
  behance: FaBehance,
  dribbble: FaDribbble,
  linkedin: FaLinkedin,
};

const initialForm = { name: "", email: "", subject: "", message: "" };

function encode(data) {
  return Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const activeSocials = Object.entries(siteInfo.social).filter(
    ([, url]) => url
  );

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Have a project in mind?"
            description="Tell me a little about it. I usually reply within two business days."
          />

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${siteInfo.email}`}
              className="flex items-center gap-3 text-cream/85 hover:text-mint transition-colors"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink-line">
                <HiOutlineMail aria-hidden="true" />
              </span>
              {siteInfo.email}
            </a>

            {siteInfo.phone && (
              <a
                href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-cream/85 hover:text-mint transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink-line">
                  <HiOutlinePhone aria-hidden="true" />
                </span>
                {siteInfo.phone}
              </a>
            )}
          </div>

          {activeSocials.length > 0 ? (
            <div className="mt-8 flex items-center gap-3">
              {activeSocials.map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={key}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink-line text-cream/80 hover:text-mint hover:border-mint transition-colors"
                  >
                    {Icon ? <Icon size={16} /> : key}
                  </a>
                );
              })}
            </div>
          ) : (
            <p className="mt-8 text-sm text-cream/50 italic">
              Social links weren't provided yet — add them to{" "}
              <code className="text-sky not-italic">src/data/siteInfo.js</code>.
            </p>
          )}
        </div>

        <form
          name="contact"
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8"
        >
          {/* Required for Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          {status === "success" ? (
            <div
              role="status"
              className="flex flex-col items-center text-center py-10"
            >
              <HiOutlineCheckCircle className="text-mint" size={44} />
              <p className="mt-4 font-display text-xl text-cream">
                Message sent
              </p>
              <p className="mt-2 text-cream/65">
                Thanks for reaching out — I'll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 font-display text-sm px-5 py-2.5 rounded-full border border-cream/30 text-cream hover:border-mint hover:text-mint transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
              />
              <Field
                label="Message"
                name="message"
                as="textarea"
                rows={5}
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />

              {status === "error" && (
                <p role="alert" className="text-sm text-red-300">
                  Something went wrong sending your message. Please try again
                  or email me directly at {siteInfo.email}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="font-semibold text-sm px-6 py-3.5 rounded-full bg-mint text-ink hover:bg-cream transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <span
                      className="w-4 h-4 rounded-full border-2 border-ink/40 border-t-ink animate-spin"
                      aria-hidden="true"
                    />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  value,
  onChange,
  error,
  rows,
  autoComplete,
}) {
  const Component = as;
  const id = `field-${name}`;
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs tracking-wide uppercase text-cream/45 mb-2"
      >
        {label}
      </label>
      <Component
        id={id}
        name={name}
        type={as === "input" ? type : undefined}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        autoComplete={autoComplete}
        className={`w-full rounded-xl bg-transparent border px-4 py-3.5 text-cream placeholder:text-cream/30 focus:outline-none transition-colors ${
          error
            ? "border-red-400/70"
            : "border-ink-line focus:border-mint"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
