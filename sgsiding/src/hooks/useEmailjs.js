import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function useEmailjs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const templateParams = {
      to_name: "Your Name", // The name of the person receiving the email
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, status, handleSubmit };
}
