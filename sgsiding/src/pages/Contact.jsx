import "../components/styles/Contact.css";

export default function Contact() {
  const emailAddress = import.meta.env.VITE_EMAIL;

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
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
              onClick={handleEmailClick}
              tabIndex="0"
            >
              {emailAddress}
            </span>
            <p className="mt-2 text-sm text-black copy-status">
              (Hover to reveal, click to open email)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
