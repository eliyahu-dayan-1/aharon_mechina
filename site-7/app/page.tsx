import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const overview = [
  {
    number: "01",
    title: "החזון",
    text: "למה מוכנות אמיתית — בגוף, בראש וברוח — היא הבסיס לשירות משמעותי.",
    href: "/vision",
  },
  {
    number: "02",
    title: "התוכנית",
    text: "ארבעה יסודות ומסלולים אפשריים — איך בונים את הדרך קדימה.",
    href: "/program",
  },
  {
    number: "03",
    title: "הדרך של נתנאל",
    text: "הסיפור שממנו נולדה המכינה, וחמש התחנות שמובילות אותנו.",
    href: "/story",
  },
  {
    number: "04",
    title: "הצטרפות",
    text: "מעטפת מלאה לאורך הדרך, ואיך אפשר להיות חלק מהמחזור הראשון.",
    href: "/join",
  },
];

export default function Home() {
  return (
    <main>
      <div className="wash-blob wash-blob-a" data-parallax="0.18" aria-hidden="true" />
      <div className="wash-blob wash-blob-b" data-parallax="0.12" aria-hidden="true" />

      <SiteHeader />

      <section className="hero" id="top" data-zone="hero">
        <div className="hero-media" aria-hidden="true" data-parallax="0.1">
          <Image
            src={asset("/training-wide.jpeg")}
            alt=""
            fill
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content" data-reveal>
          <p className="eyebrow">
            <span />
            הכנה לשירות משמעותי לצעירים חרדים
          </p>
          <h1>
            אמונה.
            <br />
            מוכנות.
            <br />
            <em>שליחות.</em>
          </h1>
          <p className="hero-copy">
            מסגרת מקצועית שמכינה צעירים חרדים לשירות — פיזית, מנטלית
            ורוחנית. כדי להגיע חזקים יותר, לבחור נכון ולהוביל.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/program">
              להכיר את התוכנית
              <span aria-hidden="true">←</span>
            </Link>
            <Link className="text-link" href="/story">
              הסיפור שמוביל אותנו
            </Link>
          </div>
        </div>

        <p className="hero-memorial">
          לזכרו של נתנאל סילברג ז״ל
          <span>לוחם וקצין ביחידת יהל״ם</span>
        </p>

        <Link className="scroll-cue" href="/vision" aria-label="המשך לחזון">
          <span>גלו עוד</span>
          <i aria-hidden="true">↓</i>
        </Link>
      </section>

      <section className="manifesto section-light" data-zone="overview">
        <div className="section-kicker" data-reveal>
          <span>האתר</span>
          מפת הדרך
        </div>
        <div className="manifesto-heading" data-reveal>
          <h2>
            ארבעה חלקים.
            <br />
            <em>סיפור אחד.</em>
          </h2>
        </div>

        <div className="pillars" data-reveal="stagger">
          {overview.map((item) => (
            <Link className="pillar-card" href={item.href} key={item.title}>
              <span className="card-number">{item.number}</span>
              <span className="card-line" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
