import emailjs from "@emailjs/browser";

export function initEmailJs() {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}
