import type { ContactInfo } from '../types/content';
import IceCreamLogo from '../assets/01.png';

type SiteFooterProps = {
  contact: ContactInfo;
};

export const SiteFooter = ({ contact }: SiteFooterProps) => (
  <footer className="site-footer">
    <div className="site-footer__content">
      <div className="site-footer__brand">
        <img src={IceCreamLogo} alt="MRVS Logo" className="site-footer__logo" />
        <p className="site-footer__brand-text">Kuya Cris Lechon House</p>
      </div>
      <div className="site-footer__contact">
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="site-footer__facebook-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          Kuya Cris Lechon House
        </a>
        <p>{contact.location}</p>
      </div>
    </div>
    <p className="site-footer__copyright">
      © {new Date().getFullYear()} Mavi
    </p>
  </footer>
);

