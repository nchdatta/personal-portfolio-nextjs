"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/actions/contact";
import { motion } from "framer-motion";
import { Circle, Send } from "lucide-react";
import { useActionState } from "react";

// Define the shape of the form errors
export interface FormErrors {
  name?: string[];
  email?: string[];
  subject?: string[];
  message?: string[];
}

// Define the shape of the form state
export interface FormState {
  success: boolean;
  message: string;
  errors: FormErrors | null;
}

// Define the initial state
const initialState: FormState = {
  success: false,
  message: "",
  errors: {
    name: [],
    email: [],
    subject: [],
    message: [],
  },
};

const ContactForm = () => {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitContactForm,
    initialState
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="md:col-span-3"
    >
      <Card>
        <CardContent className="p-6">
          {!state.success && (
            <p className="text-red-700 mb-1">{state.message}</p>
          )}
          {state.success && (
            <p className="text-green-700 mb-1">{state.message}</p>
          )}
          <h2 className="text-xl font-bold mb-4">Send Me a Message</h2>
          <form id="contact-form" action={formAction} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  aria-invalid={!!state.errors?.name?.length}
                  aria-describedby={
                    state.errors?.name?.length ? "name-error" : undefined
                  }
                />
                {state.errors?.name && state.errors?.name?.length > 0 && (
                  <p id="name-error" className="text-sm text-destructive">
                    {state.errors.name[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  aria-invalid={!!state.errors?.email?.length}
                  aria-describedby={
                    state.errors?.email?.length ? "email-error" : undefined
                  }
                />
                {state.errors?.email && state.errors?.email?.length > 0 && (
                  <p id="email-error" className="text-sm text-destructive">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                aria-invalid={!!state.errors?.subject?.length}
                aria-describedby={
                  state.errors?.subject?.length ? "subject-error" : undefined
                }
              />
              {state.errors?.subject && state.errors?.subject?.length > 0 && (
                <p id="subject-error" className="text-sm text-destructive">
                  {state.errors.subject[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={10}
                required
                aria-invalid={!!state.errors?.message?.length}
                aria-describedby={
                  state.errors?.message?.length ? "message-error" : undefined
                }
                className="h-44"
              />
              {state.errors?.message && state.errors?.message?.length > 0 && (
                <p id="message-error" className="text-sm text-destructive">
                  {state.errors.message[0]}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={pending}>
              {pending ? (
                <span className="flex items-center gap-2">
                  <Circle className="animate-spin" size={16} />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={16} />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
