import "../components/styles/Contact.css";
import { useState } from "react";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const emailAddress = "example@yourdomain.com"; // Replace with actual email

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        setCopyStatus("Email copied!");
        setTimeout(() => setCopyStatus(""), 2000);
      })
      .catch(() => {
        setCopyStatus("Copy failed");
        setTimeout(() => setCopyStatus(""), 2000);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-md mx-auto">
        <div className="contact-card p-6 rounded-lg shadow-md">
          <p className="mb-4">You can reach us at:</p>

          <div className="email-container">
            <span
              className="email-blur"
              onMouseEnter={(e) => e.target.classList.add("email-visible")}
              onMouseLeave={(e) => e.target.classList.remove("email-visible")}
              onFocus={(e) => e.target.classList.add("email-visible")}
              onBlur={(e) => e.target.classList.remove("email-visible")}
              onClick={handleCopyEmail}
              tabIndex="0"
            >
              {emailAddress}
            </span>
            {copyStatus ? (
              <p className="mt-2 text-sm text-green-600 font-medium">{copyStatus}</p>
            ) : (
              <p className="mt-2 text-sm text-gray-600">(Hover to reveal, click to copy)</p>
            )}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Alternative Contact Methods</h2>
            <p>You can also reach us by phone at: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
