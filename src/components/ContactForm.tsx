import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { CONTACT } from "../data/contact";
import { useT } from "../i18n/useT";
import styles from "./ContactForm.module.css";

const MIN_MESSAGE_LEN = 20;

const COUNTRIES = [
  { value: "UAE",          key: "form.country.uae" },
  { value: "Saudi Arabia", key: "form.country.ksa" },
  { value: "Bahrain",      key: "form.country.bhr" },
  { value: "Kuwait",       key: "form.country.kwt" },
  { value: "Qatar",        key: "form.country.qat" },
  { value: "Oman",         key: "form.country.omn" },
  { value: "Other GCC",    key: "form.country.gcc" },
  { value: "Other",        key: "form.country.other" },
] as const;

const SERVICES = [
  { value: "business-analytics",   key: "form.svc.ba" },
  { value: "data-engineering",     key: "form.svc.de" },
  { value: "data-ai-strategy",     key: "form.svc.ai" },
  { value: "geospatial-analytics", key: "form.svc.geo" },
  { value: "managed-services",     key: "form.svc.ms" },
  { value: "enterprise-ai",        key: "form.svc.eai" },
  { value: "platforms",            key: "form.svc.platforms" },
  { value: "other",                key: "form.svc.other" },
] as const;

const BUDGETS = [
  { value: "under-50k", key: "form.budget.under50k" },
  { value: "50-150k",   key: "form.budget.50to150k" },
  { value: "150-500k",  key: "form.budget.150to500k" },
  { value: "500k-1m",   key: "form.budget.500kto1m" },
  { value: "over-1m",   key: "form.budget.over1m" },
  { value: "discuss",   key: "form.budget.discuss" },
] as const;

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  budget: string;
  message: string;
  honeypot: string;
}

const EMPTY: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  budget: "",
  message: "",
  honeypot: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validateFn(t: (k: string, vars?: Record<string, string | number>) => string) {
  return (state: FormState): Errors => {
    const e: Errors = {};
    if (!state.name.trim()) e.name = t("form.err.name");
    if (!state.company.trim()) e.company = t("form.err.company");
    if (!state.email.trim()) e.email = t("form.err.email");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      e.email = t("form.err.emailFormat");
    }
    if (state.message.trim().length < MIN_MESSAGE_LEN) {
      e.message = t("form.err.message", { min: MIN_MESSAGE_LEN });
    }
    return e;
  };
}

export function ContactForm() {
  const t = useT();
  const [params] = useSearchParams();
  const initialService = SERVICES.some((s) => s.value === params.get("service"))
    ? (params.get("service") ?? "")
    : "";

  const [state, setState] = useState<FormState>({ ...EMPTY, service: initialService });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
    if (errors[key]) setErrors((es) => ({ ...es, [key]: undefined }));
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (state.honeypot.trim()) {
      setSubmitted(true);
      return;
    }
    const eMap = validateFn(t)(state);
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) {
      const first = Object.keys(eMap)[0] as keyof FormState;
      const el = document.getElementById(`contact-${first}`);
      el?.focus();
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      console.info("[ContactForm] submission (stub):", state);
      await new Promise((res) => setTimeout(res, 400));
      setSubmitted(true);
    } catch (err) {
      setSubmitError(t("form.err.submit"));
      console.error("[ContactForm] submit failed", err);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <h3 className={styles.successTitle}>{t("form.success.title")}</h3>
        <p className={styles.successBody}>
          {t("form.success.body", { wa: CONTACT.whatsappDisplay })}
        </p>
        <button
          type="button"
          className={styles.successReset}
          onClick={() => {
            setState({ ...EMPTY, service: initialService });
            setSubmitted(false);
          }}
        >
          {t("form.success.reset")}
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate aria-labelledby="form-heading">
      <h3 id="form-heading" className={styles.formHeading}>
        {t("form.heading")}
      </h3>

      <div className={styles.grid}>
        <Field id="contact-name" label={t("form.name")} required error={errors.name}>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={state.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-err" : undefined}
            className={styles.input}
          />
        </Field>

        <Field id="contact-company" label={t("form.company")} required error={errors.company}>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            value={state.company}
            onChange={(e) => update("company", e.target.value)}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "contact-company-err" : undefined}
            className={styles.input}
          />
        </Field>

        <Field id="contact-email" label={t("form.email")} required error={errors.email}>
          <input
            id="contact-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-err" : undefined}
            className={styles.input}
          />
        </Field>

        <Field id="contact-phone" label={t("form.phone")}>
          <input
            id="contact-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+971-XX-XXX-XXXX"
            value={state.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={styles.input}
          />
        </Field>

        <Field id="contact-country" label={t("form.country")}>
          <select
            id="contact-country"
            value={state.country}
            onChange={(e) => update("country", e.target.value)}
            className={styles.select}
          >
            <option value="">{t("form.countryPlaceholder")}</option>
            {COUNTRIES.map((c) => (
              <option key={c.value} value={c.value}>{t(c.key)}</option>
            ))}
          </select>
        </Field>

        <Field id="contact-service" label={t("form.service")}>
          <select
            id="contact-service"
            value={state.service}
            onChange={(e) => update("service", e.target.value)}
            className={styles.select}
          >
            <option value="">{t("form.servicePlaceholder")}</option>
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>{t(s.key)}</option>
            ))}
          </select>
        </Field>

        <Field id="contact-budget" label={t("form.budget")} className={styles.spanFull}>
          <select
            id="contact-budget"
            value={state.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={styles.select}
          >
            <option value="">{t("form.budgetPlaceholder")}</option>
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>{t(b.key)}</option>
            ))}
          </select>
        </Field>

        <Field
          id="contact-message"
          label={t("form.message")}
          required
          error={errors.message}
          className={styles.spanFull}
          hint={t("form.messageHint", { min: MIN_MESSAGE_LEN })}
        >
          <textarea
            id="contact-message"
            rows={6}
            value={state.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-err" : "contact-message-hint"}
            className={styles.textarea}
          />
        </Field>

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={state.honeypot}
            onChange={(e) => update("honeypot", e.target.value)}
          />
        </div>
      </div>

      {submitError && (
        <p className={styles.submitError} role="alert">
          {submitError}
        </p>
      )}

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={submitting}>
          {submitting ? t("form.submitting") : t("form.submit")}
        </button>
        <p className={styles.notice}>{t("form.notice")}</p>
      </div>
    </form>
  );
}

interface FieldProps {
  readonly id: string;
  readonly label: string;
  readonly required?: boolean;
  readonly error?: string;
  readonly hint?: string;
  readonly className?: string;
  readonly children: React.ReactNode;
}

function Field({ id, label, required, error, hint, className = "", children }: FieldProps) {
  return (
    <div className={[styles.field, className].filter(Boolean).join(" ")}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className={styles.hint}>{hint}</p>
      )}
      {error && (
        <p id={`${id}-err`} className={styles.error} role="alert">{error}</p>
      )}
    </div>
  );
}
