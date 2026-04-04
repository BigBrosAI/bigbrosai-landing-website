"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  CheckCircle2,
  Send,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { contactFormSchema } from "@/lib/validation";
import { z } from "zod";

type FormErrors = z.ZodFormattedError<
  z.infer<typeof contactFormSchema>,
  string
>;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    useCase: "",
    companySize: "",
    website: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof typeof formData, string>> = {};
        error.issues.forEach((issue) => {
          const path = issue.path[0] as keyof typeof formData;
          newErrors[path] = issue.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof formData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        useCase: "",
        companySize: "",
        website: "",
      });
      setErrors({});

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Give Us a Call",
      details: ["Sales: +91 8279305027", "Mon-Fri: 10 AM - 7 PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@bigbrosai.com"],
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-white to-brand-50 pt-8 pb-4 px-6 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(21,128,61,1) 1px,transparent 1px),linear-gradient(90deg,rgba(21,128,61,1) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Radial gradient */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top center, rgba(21,128,61,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-6">
            <Mail size={13} className="text-brand-700" />
            <span className="text-xs font-semibold text-brand-700 uppercase tracking-wide">
              Get in Touch
            </span>
          </div>

          <h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-tight text-gray-900 mb-5">
            Let's Get in Touch
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions about our
            platform, need support, or want to schedule a demo, our team is here
            to help.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:pr-8">
            {submitted && (
              <div className="mb-8 p-4 bg-brand-50 border border-brand-200 rounded-xl flex items-start gap-3 animate-fade-up">
                <CheckCircle2
                  size={20}
                  className="text-brand-700 shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-semibold text-brand-900 mb-1">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-brand-700">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition text-gray-900 placeholder-gray-400 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-300 focus:border-brand-700 focus:ring-brand-700/20"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition text-gray-900 placeholder-gray-400 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-300 focus:border-brand-700 focus:ring-brand-700/20"
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition text-gray-900 placeholder-gray-400 ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-300 focus:border-brand-700 focus:ring-brand-700/20"
                    }`}
                    placeholder="+91 8279305027"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition text-gray-900 placeholder-gray-400 ${
                      errors.company
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-300 focus:border-brand-700 focus:ring-brand-700/20"
                    }`}
                    placeholder="Your Company"
                  />
                  {errors.company && (
                    <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Size
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition text-gray-900 bg-white ${
                    errors.companySize
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-gray-300 focus:border-brand-700 focus:ring-brand-700/20"
                  }`}
                >
                  <option value="">Select company size (optional)</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
                {errors.companySize && (
                  <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.companySize}
                  </p>
                )}
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Business Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition text-gray-900 placeholder-gray-400 ${
                    errors.website
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-gray-300 focus:border-brand-700 focus:ring-brand-700/20"
                  }`}
                  placeholder="https://yourcompany.com"
                />
                {errors.website && (
                  <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.website}
                  </p>
                )}
              </div>

              {/* Use Case */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Your WhatsApp Use Case
                </label>
                <textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  rows={2}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition text-gray-900 placeholder-gray-400 resize-none ${
                    errors.useCase
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-gray-300 focus:border-brand-700 focus:ring-brand-700/20"
                  }`}
                  placeholder="Tell us about your use case, challenges, and what you're hoping to achieve..."
                />
                {errors.useCase && (
                  <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.useCase}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-700 hover:bg-brand-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={17} />
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center pt-2">
                We'll get back to you within 24 hours. Privacy is important to
                us.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick contact cards */}
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-gray-200 hover:border-brand-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-brand-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p
                          key={i}
                          className="text-sm text-slate-600 leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Calendly Appointment Section */}
            <a
              href="https://calendly.com/founderbbai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gradient-to-br from-brand-50 to-brand-50/50 rounded-xl border border-brand-200 hover:border-brand-300 hover:shadow-md transition-all duration-300 group"
            >
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                Schedule a Demo
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Book a personalized demo with our team to see how bigbrosai can
                transform your customer engagement.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold rounded-lg transition-colors">
                Book Now
                <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
