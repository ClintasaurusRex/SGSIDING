import emailjs from "@emailjs/browser";

export function initEmailJs() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!publicKey) {
    console.error("EmailJS public key is missing. Check your .env file and build process.");
    // You can provide a fallback key for development
    emailjs.init("Zo2ghu8BuCz8_3N24");
  } else {
    emailjs.init(publicKey);
  }
}
