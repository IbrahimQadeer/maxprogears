"use client";

import { useMemo, useState } from "react";
import { brand, productOptions } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  academy: string;
  product: string;
  quantity: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  academy: "",
  product: productOptions[0],
  quantity: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Valid email is required";
    if (!form.whatsapp.trim()) next.whatsapp = "WhatsApp number is required";
    if (!form.quantity.trim()) next.quantity = "Quantity is required";
    return next;
  }, [form]);

  const message = encodeURIComponent(
    `Quote request from ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nAcademy/Brand: ${form.academy}\nProduct: ${form.product}\nQuantity: ${form.quantity}\nDetails: ${form.message}`,
  );
  const mailto = `mailto:${brand.email}?subject=MAXPROGEARS Quote Request&body=${message}`;
  const whatsapp = `${brand.whatsappHref}?text=${message}`;

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) {
      window.location.href = mailto;
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[32px] border border-white/10 bg-zinc-950 p-5 shadow-2xl shadow-black/30 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={submitted ? errors.name : undefined}>
          <input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" />
        </Field>
        <Field label="Email" error={submitted ? errors.email : undefined}>
          <input value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@academy.com" />
        </Field>
        <Field label="WhatsApp" error={submitted ? errors.whatsapp : undefined}>
          <input value={form.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} placeholder="+1 555 000 0000" />
        </Field>
        <Field label="Academy / Brand">
          <input value={form.academy} onChange={(event) => update("academy", event.target.value)} placeholder="Gym or brand name" />
        </Field>
        <Field label="Product">
          <select value={form.product} onChange={(event) => update("product", event.target.value)}>
            {productOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Quantity" error={submitted ? errors.quantity : undefined}>
          <input value={form.quantity} onChange={(event) => update("quantity", event.target.value)} placeholder="Example: 50 pcs" />
        </Field>
        <Field label="Project Details" className="md:col-span-2">
          <textarea value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell us about colors, sizes, logo placements, deadline, and shipping country." />
        </Field>
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="min-h-13 rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-zinc-200">
          Email Quote Request
        </button>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/10">
          WhatsApp Quote
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement> | React.SelectHTMLAttributes<HTMLSelectElement>>;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </span>
      <div className="[&_input]:min-h-13 [&_input]:w-full [&_input]:rounded-2xl [&_input]:border [&_input]:border-white/10 [&_input]:bg-black [&_input]:px-4 [&_input]:text-white [&_input]:outline-none [&_input]:transition [&_input]:placeholder:text-zinc-700 [&_input]:focus:border-white/35 [&_select]:min-h-13 [&_select]:w-full [&_select]:rounded-2xl [&_select]:border [&_select]:border-white/10 [&_select]:bg-black [&_select]:px-4 [&_select]:text-white [&_select]:outline-none [&_textarea]:min-h-36 [&_textarea]:w-full [&_textarea]:rounded-2xl [&_textarea]:border [&_textarea]:border-white/10 [&_textarea]:bg-black [&_textarea]:p-4 [&_textarea]:text-white [&_textarea]:outline-none [&_textarea]:placeholder:text-zinc-700 [&_textarea]:focus:border-white/35">
        {children}
      </div>
      {error ? <span className="mt-2 block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}
