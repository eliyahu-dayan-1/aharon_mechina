import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "החזון | רוח נתנאל",
  description:
    "לא רק להתגייס — להגיע מוכנים. הכנה פיזית, מנטלית ורוחנית לשירות משמעותי.",
};

const pillars = [
  {
    number: "01",
    title: "מוכנות פיזית",
    text: "כושר קרבי, כוח וסיבולת שנבנים בהדרגה ובצורה בטוחה.",
  },
  {
    number: "02",
    title: "חוסן מנטלי",
    text: "כלים לעבודה תחת לחץ, קבלת החלטות, משמעת ועבודת צוות.",
  },
  {
    number: "03",
    title: "הכוונה אישית",
    text: "היכרות אמיתית עם מסלולי השירות ובחירה שמתאימה ליכולות ולשאיפות.",
  },
  {
    number: "04",
    title: "זהות ושייכות",
    text: "שירות מתוך עולם של תורה, אחריות, אהבת העם והארץ.",
  },
];

export default function VisionPage() {
  return (
    <main>
      <div className="wash-blob wash-blob-a" data-parallax="0.18" aria-hidden="true" />
      <div className="wash-blob wash-blob-b" data-parallax="0.12" aria-hidden="true" />

      <SiteHeader />

      <section className="manifesto section-light" data-zone="vision">
        <div className="section-kicker" data-reveal>
          <span>01</span>
          החזון
        </div>
        <div className="manifesto-heading" data-reveal>
          <h2>
            לא רק להתגייס.
            <br />
            <em>להגיע מוכנים.</em>
          </h2>
          <div>
            <p>
              צעיר שמגיע לשירות מוכן — בגוף, בראש וברוח — יכול להצליח,
              להשפיע ולהוביל. אנחנו בונים את המסגרת שתאפשר לו להגיע לשם.
            </p>
            <p className="accent-copy">
              הרקע שממנו באת אינו מגביל את המקום שאליו תוכל להגיע.
            </p>
          </div>
        </div>

        <div className="pillars" data-reveal="stagger">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <span className="card-number">{pillar.number}</span>
              <span className="card-line" aria-hidden="true" />
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className="hero-actions" data-reveal style={{ marginTop: "3rem" }}>
          <Link className="button button-gold" href="/program">
            להכיר את התוכנית
            <span aria-hidden="true">←</span>
          </Link>
          <Link className="text-link" href="/story">
            הסיפור שמוביל אותנו
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
