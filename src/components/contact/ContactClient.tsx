"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/lib/constants";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ContactHero() {
  return (
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Badge className="mb-4" variant="secondary">
        Get In Touch
      </Badge>
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Let&apos;s Work Together</h1>
      <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
        Have a project in mind? I&apos;m available for freelance work and full-time opportunities. 
        Fill out the form below and I&apos;ll get back to you within 24 hours.
      </p>
    </motion.div>
  );
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-2xl mx-auto"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Send Me a Message</CardTitle>
          <CardDescription>Fill out the form below and I&apos;ll respond as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name *
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-foreground/20"
                } bg-background focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-foreground/20"
                } bg-background focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject *
              </label>
              <input
                {...register("subject")}
                id="subject"
                type="text"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.subject ? "border-red-500" : "border-foreground/20"
                } bg-background focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all`}
                placeholder="What's this about?"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-foreground/20"
                } bg-background focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all resize-none`}
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>

            {/* Success Message */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center"
              >
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center"
              >
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  ✗ Something went wrong. Please try again or email me directly.
                </p>
              </motion.div>
            )}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ContactInfo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Other Ways to Reach Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <motion.div variants={itemVariants}>
          <Card className="h-full text-center hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="text-foreground/70 hover:text-foreground transition-colors underline"
              >
                {siteConfig.author.email}
              </a>
            </CardContent>
          </Card>
        </motion.div>

        {/* GitHub */}
        <motion.div variants={itemVariants}>
          <Card className="h-full text-center hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors underline"
              >
                @{siteConfig.author.github.split("/").pop()}
              </a>
            </CardContent>
          </Card>
        </motion.div>

        {/* LinkedIn */}
        <motion.div variants={itemVariants}>
          <Card className="h-full text-center hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors underline"
              >
                Connect with me
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ContactAvailability() {
  return (
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-foreground/5 border-foreground/10">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <h3 className="text-xl font-semibold">Currently Available</h3>
          </div>
          <p className="text-foreground/70 mb-4">
            I&apos;m available for freelance projects and full-time opportunities starting immediately.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">Web Development</Badge>
            <Badge variant="secondary">Mobile Apps</Badge>
            <Badge variant="secondary">Backend Systems</Badge>
            <Badge variant="secondary">AI Integration</Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
