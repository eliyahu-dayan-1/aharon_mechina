import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/vision", label: "החזון" },
  { href: "/program", label: "התוכנית" },
  { href: "/story", label: "הדרך של נתנאל" },
];

export default function SiteHeader() {
  return (
    <header className="site-header" aria-label="ניווט ראשי">
      <Link className="brand" href="/" aria-label="רוח נתנאל — דף הבית">
        <Image
          className="brand-mark"
          src={asset("/logo.jpeg")}
          width={64}
          height={64}
          alt=""
          unoptimized
        />
        <span>
          <strong>רוח נתנאל</strong>
          <small>מכינה קדם־צבאית חרדית</small>
        </span>
      </Link>

      <input type="checkbox" id="nav-toggle" className="nav-toggle-checkbox" />
      <label
        htmlFor="nav-toggle"
        className="nav-toggle-btn"
        aria-label="פתיחת תפריט ניווט"
      >
        <span />
        <span />
        <span />
      </label>

      <nav className="main-nav" aria-label="חלקי האתר">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" href="/join">
        להצטרפות
        <span aria-hidden="true">←</span>
      </Link>
    </header>
  );
}
