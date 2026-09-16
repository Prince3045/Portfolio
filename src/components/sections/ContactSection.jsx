import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  MapPin,
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Phone,
  Loader2,
} from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import { Card } from '../common/Card';
import { GithubIcon } from '../common/GithubIcon';
import { LinkedinIcon } from '../common/LinkedinIcon';
import { profilesData } from '../../data/profiles';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  // Email format regex
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@example.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change if field was already touched
    if (touched[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate();
    if (validationErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validationErrors[name] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitResult(null);

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${profilesData.contact.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            'Submitted At (IST)': new Date().toLocaleString('en-IN', {
              timeZone: 'Asia/Kolkata',
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            }),
            _subject: `Portfolio Message from ${formData.name.trim()}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const data = await response.json();

        if (response.ok && (data.success === true || data.success === 'true')) {
          setSubmitResult({
            success: true,
            senderName: formData.name.trim(),
            senderEmail: formData.email.trim(),
            message: `Your message has been sent directly to ${profilesData.contact.email}. Prince Goyal will reply to your email soon!`,
          });
          setFormData({ name: '', email: '', message: '' });
          setTouched({});
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch {
        setSubmitResult({
          success: false,
          senderName: formData.name.trim(),
          message: `Network delivery encountered an issue. You can click below to send your note directly via your email app.`,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <SectionContainer
      id="contact"
      title={profilesData.contact.headline}
      subtitle={profilesData.contact.subheadline}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Connection Channels */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-5"
        >
          <Card className="p-6 sm:p-7 space-y-5 bg-surface/85 border-border-subtle">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-light font-semibold">
                Direct Channels
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Software Development Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                I am actively seeking software development opportunities, engineering internships, and collaborative full-stack projects.
              </p>
            </div>

            {/* Info Badges */}
            <div className="space-y-3 pt-2 text-xs text-text-secondary border-t border-border-subtle/70">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Email</span>
                  <a
                    href={`mailto:${profilesData.contact.email}`}
                    className="text-text-muted hover:text-white transition-colors"
                  >
                    {profilesData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-light shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Phone</span>
                  <a
                    href={`tel:${profilesData.contact.phone}`}
                    className="text-text-muted hover:text-white transition-colors font-mono"
                  >
                    {profilesData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Education</span>
                  <span className="text-text-muted">{profilesData.contact.education}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Location</span>
                  <span className="text-text-muted">{profilesData.contact.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-light shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Status</span>
                  <span className="text-accent-emerald font-mono text-[11px]">
                    {profilesData.contact.availability}
                  </span>
                </div>
              </div>
            </div>

            {/* Verified Social Profile Links */}
            <div className="pt-3 border-t border-border-subtle/70 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">
                Connect Online
              </h4>
              <div className="flex flex-wrap gap-2">
                <a
                  href={profilesData.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-secondary text-xs inline-flex items-center gap-2"
                  aria-label="Connect with Prince Goyal on GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-text-dim" />
                </a>

                <a
                  href={profilesData.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-secondary text-xs inline-flex items-center gap-2 hover:text-[#0077b5]"
                  aria-label="Connect with Prince Goyal on LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-text-dim" />
                </a>

                <a
                  href={profilesData.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline text-xs inline-flex items-center gap-2 hover:text-accent-amber"
                  aria-label="View Prince Goyal on LeetCode"
                >
                  <span className="font-mono text-[11px] font-semibold text-accent-amber">&lt;/&gt;</span>
                  <span>LeetCode</span>
                  <ExternalLink className="w-3 h-3 text-text-dim" />
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Right Column: Contact Form with Client-Side Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <Card className="p-6 sm:p-8 bg-surface/90 border-border-subtle relative shadow-soft-sm">
            
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Form Title & Instruction */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-light" />
                  <span>Send a Message</span>
                </h3>
                <p className="text-xs text-text-secondary">
                  Complete the fields below to send a project inquiry or note.
                </p>
              </div>

              {/* Name Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name-field"
                  className="block text-xs font-mono font-medium text-text-primary"
                >
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name-field"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. John Doe"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-3.5 py-2.5 rounded-md bg-background border text-xs sm:text-sm text-text-primary placeholder:text-text-dim transition-colors focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-red-500/80 focus:ring-red-500/30'
                      : 'border-border-subtle focus:border-brand-light focus:ring-brand/20'
                  }`}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    role="alert"
                    className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono"
                  >
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email-field"
                  className="block text-xs font-mono font-medium text-text-primary"
                >
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email-field"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. john@company.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-3.5 py-2.5 rounded-md bg-background border text-xs sm:text-sm text-text-primary placeholder:text-text-dim transition-colors focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-500/80 focus:ring-red-500/30'
                      : 'border-border-subtle focus:border-brand-light focus:ring-brand/20'
                  }`}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono"
                  >
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message-field"
                  className="block text-xs font-mono font-medium text-text-primary"
                >
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message-field"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Share details about the role, project scope, or opportunity..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-3.5 py-2.5 rounded-md bg-background border text-xs sm:text-sm text-text-primary placeholder:text-text-dim transition-colors focus:outline-none focus:ring-2 resize-y ${
                    errors.message
                      ? 'border-red-500/80 focus:ring-red-500/30'
                      : 'border-border-subtle focus:border-brand-light focus:ring-brand/20'
                  }`}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono"
                  >
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-base btn-primary inline-flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-soft-sm group disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label="Send message to Prince Goyal"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <span className="text-[11px] font-mono text-text-dim">
                  * Required fields
                </span>
              </div>

            </form>

            {/* Live Feedback Banner */}
            <AnimatePresence>
              {submitResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-6 p-4 rounded-lg border space-y-2.5 text-xs ${
                    submitResult.success
                      ? 'bg-emerald-950/40 border-accent-emerald/40 text-text-primary'
                      : 'bg-red-950/40 border-red-500/40 text-text-secondary'
                  }`}
                  role={submitResult.success ? 'status' : 'alert'}
                >
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    {submitResult.success ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0" />
                        <span className="text-accent-emerald">Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span className="text-red-400">Direct Email Option</span>
                      </>
                    )}
                  </div>
                  <p className="leading-relaxed">
                    {submitResult.message}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {submitResult.success ? (
                      <button
                        onClick={() => setSubmitResult(null)}
                        className="text-xs font-mono text-accent-emerald hover:underline"
                      >
                        Send Another Message
                      </button>
                    ) : (
                      <a
                        href={`mailto:${profilesData.contact.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name || 'Visitor')}&body=${encodeURIComponent(formData.message || '')}`}
                        className="btn-base btn-primary text-xs inline-flex items-center gap-1.5 py-1 px-3"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Mail App</span>
                      </a>
                    )}
                    <a
                      href={`mailto:${profilesData.contact.email}`}
                      className="text-xs font-mono text-text-muted hover:text-white underline inline-flex items-center gap-1"
                    >
                      <span>{profilesData.contact.email}</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </Card>
        </motion.div>

      </div>
    </SectionContainer>
  );
};
