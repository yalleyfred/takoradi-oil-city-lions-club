"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ContactFormData,
  ContactFormSchema,
} from "@/validations/contact-form-validations";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      privacy_policy: false,
    },
  });

  const { handleSubmit } = form;

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          agreedToPrivacy: data.privacy_policy,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            result.message ||
            "Your message has been sent successfully! Check your email for confirmation.",
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "An error occurred while sending your message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start justify-start self-stretch gap-4 w-full max-w-[600px] ">
        <div className="flex flex-col lg:items-start w-full lg:gap-4">
          <h1 className="text-gray-900 font-semibold text-center text-3xl lg:text-4xl leading-11 tracking-tighter">
            Get in touch
          </h1>
          <p className="text-gray-600 text-base lg:text-md text-center">
            Our friendly team would love to hear from you.
          </p>
        </div>

        <motion.div
          className="grid mt-8 grid-cols-2 w-full gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}>
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <motion.div className="min-h-[0.9rem]">
                  <FormMessage />
                </motion.div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <div className="min-h-[0.9rem]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <div className="min-h-[0.9rem]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(233) 456-7890" {...field} />
                </FormControl>
                <div className="min-h-[0.9rem]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    className="resize-none h-32"
                    {...field}
                  />
                </FormControl>
                <div className="min-h-[0.9rem]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}>
          <FormField
            control={form.control}
            name="privacy_policy"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-0">
                <FormControl>
                  <Checkbox
                    checked={field.value as boolean}
                    onCheckedChange={field.onChange}
                    id="privacy_policy"
                    className="data-[state=checked]:bg-blue-600"
                  />
                </FormControl>
                <div className="space-y-1 -mt-0.5 leading-none">
                  <label
                    htmlFor="privacy_policy"
                    className="text-sm font-medium text-gray-900">
                    You agree to our friendly{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-gray-600 underline">
                      privacy policy
                    </Link>
                  </label>
                  <div className="min-h-[0.9rem]">
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:cursor-pointer w-full text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
          {isLoading ? "Sending..." : "Send Message"}
        </motion.button>

        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full p-4 rounded-md text-sm font-medium ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}>
            {submitStatus.message}
          </motion.div>
        )}
      </motion.form>
    </Form>
  );
}
