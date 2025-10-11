"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/i18n/LanguageProvider";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const item = { hidden: { scale: 0 }, show: { scale: 1 } };

export default function Form() {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const validateEmail = async (email) => {
    const basicPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidSequences = /(\.{2,}|--|__)/;
    const blockedChars = /[^\w.@+-]/;
    const trimmed = email.trim().toLowerCase();
    const tld = trimmed.split(".").pop() ?? "";
    const allowedTlds = new Set([
      "com",
      "net",
      "org",
      "io",
      "co",
      "me",
      "dev",
      "app",
      "ba",
      "rs",
      "hr",
      "de",
    ]);

    const isValid =
      basicPattern.test(trimmed) &&
      !invalidSequences.test(trimmed) &&
      !blockedChars.test(trimmed) &&
      !trimmed.startsWith(".") &&
      !trimmed.endsWith(".") &&
      trimmed.length <= 254 &&
      allowedTlds.has(tld);

    if (!isValid) {
      toast.error(t("form.toast.invalidEmail"));
    }

    return isValid;
  };

  const sendEmail = async (ownerParams, userParams) => {
    const toastId = toast.loading(t("form.toast.sending"));
    const options = {
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      limitRate: { throttle: 5000 },
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        ownerParams,
        options
      );
    } catch (err) {
      console.error("Owner notification send failed:", err);
      toast.error(t("form.toast.error"), { id: toastId });
      return;
    }

    if (process.env.NEXT_PUBLIC_AUTOREPLY_TEMPLATE_ID) {
      try {
        await sleep(6000);
        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_AUTOREPLY_TEMPLATE_ID,
          userParams,
          options
        );
      } catch (err) {
        console.error("Auto-reply send failed:", err);
        if (err && err.status === 429) {
          try {
            await sleep(7000);
            await emailjs.send(
              process.env.NEXT_PUBLIC_SERVICE_ID,
              process.env.NEXT_PUBLIC_AUTOREPLY_TEMPLATE_ID,
              userParams,
              options
            );
          } catch (err2) {
            console.error("Auto-reply retry failed:", err2);
          }
        }
      }
    }

    toast.success(t("form.toast.success"), { id: toastId });
  };

  const onSubmit = async (data) => {
    const safeEmail = (data.email || "").trim().toLowerCase();

    if (!(await validateEmail(safeEmail))) {
      return;
    }

    const ownerParams = {
      to_name: "Hamza",
      to_email: process.env.NEXT_PUBLIC_TO_EMAIL,
      from_name: data.name,
      reply_to: safeEmail,
      message: data.message,
    };

    const userParams = {
      from_name: data.name,
      reply_to: safeEmail,
      message: data.message,
      to_email: process.env.NEXT_PUBLIC_TO_EMAIL,
    };

    sendEmail(ownerParams, userParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
        <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          {t("contact.title")}
        </h1>
        <p className="text-center font-light text-sm xs:text-base">
          {t("contact.description")}
        </p>
      </div>
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder={t("form.placeholders.name")}
          {...register("name", {
            required: t("form.errors.name.required"),
            minLength: {
              value: 3,
              message: t("form.errors.name.min"),
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder={t("form.placeholders.email")}
          {...register("email", { required: t("form.errors.email.required") })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          placeholder={t("form.placeholders.message")}
          {...register("message", {
            required: t("form.errors.message.required"),
            maxLength: {
              value: 500,
              message: t("form.errors.message.max"),
            },
            minLength: {
              value: 50,
              message: t("form.errors.message.min"),
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value={t("form.send")}
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      "
          type="submit"
        />
      </motion.form>
    </>
  );
}
