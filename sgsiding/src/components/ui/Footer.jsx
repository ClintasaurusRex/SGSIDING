import { EnvelopeIcon } from "@heroicons/react/24/outline";
import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-mark">SG Siding</p>
          <p className="footer-copy">
            Premium siding, soffit, and exterior finishing for Vancouver Island homes.
          </p>
        </div>

        <div className="footer-meta">
          <p className="footer-location">Serving Cowichan Valley and Vancouver Island</p>
          <a className="footer-link" href="mailto:shaungersthofer@gmail.com">
            <EnvelopeIcon width={20} height={20} />
            <span>Email Shaun</span>
          </a>
        </div>

        <p className="footer-legal">
          © {new Date().getFullYear()} SG Siding. Built for custom exterior work.
        </p>
      </div>
    </footer>
  );
}
