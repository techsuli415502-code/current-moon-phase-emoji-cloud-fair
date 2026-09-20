"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email doesn't look quite right.";
    }
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) {
      next.message = "Please write a message.";
    } else if (form.message.trim().length < 12) {
      next.message = "A little more detail would help us reply.";
    }
    return next;
  }

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please fix the highlighted fields before sending.");
      return;
    }

    setSubmitting(true);
    // Simulate a non-functional submit (no backend, per spec).
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Thanks — we've received your message.", {
      description: `We'll reply to ${form.email} within two business days.`,
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass-card rounded-2xl p-6 sm:p-8"
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#c4b9d6]">
            Your name
          </Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Ada Lovelace"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="bg-[#0a0420]/60 border-amber-300/25 placeholder:text-[#9c8cba]"
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-[#e8746a]">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#c4b9d6]">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="bg-[#0a0420]/60 border-amber-300/25 placeholder:text-[#9c8cba]"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-[#e8746a]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="subject" className="text-[#c4b9d6]">
          Subject
        </Label>
        <Input
          id="subject"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          placeholder="Correction on the current moon phase emoji"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="bg-[#0a0420]/60 border-amber-300/25 placeholder:text-[#9c8cba]"
        />
        {errors.subject && (
          <p id="subject-error" className="text-xs text-[#e8746a]">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="message" className="text-[#c4b9d6]">
          Message
        </Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us what you noticed — factual corrections, questions about the moon phase calculation, or just hello."
          rows={6}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="bg-[#0a0420]/60 border-amber-300/25 placeholder:text-[#9c8cba]"
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-[#e8746a]">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#9c8cba]">
          We don&apos;t store your message in a database. The form is for
          getting in touch — not for adding you to anything.
        </p>
        <Button
          type="submit"
          disabled={submitting}
          className="bg-[#f5c542] text-[#1a0b3d] hover:bg-[#f8d77a] disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
