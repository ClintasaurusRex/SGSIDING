import { EnvelopeIcon } from "@heroicons/react/24/outline";
import "../components/styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-shell">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="contact-eyebrow">Start the Conversation</p>
          <h2 className="contact-title">Ready to talk about your exterior project?</h2>
          <p className="contact-description">
            Email Shaun with a few details about the home, your timeline, and the type of exterior
            work you&apos;re planning. SG Siding will keep the process straightforward and tailored
            to the project.
          </p>
        </div>

        <div className="contact-card">
          {/* <div className="contact-card-header">
            <span className="contact-card-label">Preferred Contact</span>
            <p className="contact-card-value">shaungersthofer@gmail.com</p>
          </div> */}

          <div className="contact-card-body">
            <p className="contact-card-note">
              A short note about the home, schedule, and siding or soffit scope is enough to get the
              conversation started.
            </p>
            <a className="contact-cta" href="mailto:shaungersthofer@gmail.com">
              <EnvelopeIcon width={22} height={22} />
              <span>Email Shaun</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
