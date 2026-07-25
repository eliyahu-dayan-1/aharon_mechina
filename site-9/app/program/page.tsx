import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "התוכנית | רוח נתנאל",
  description:
    "ארבעה יסודות, דרך אחת קדימה — תוכנית הכנה מלאה שמותאמת לכל משתתף ולמסלול השירות שהוא רוצה לבנות.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const program = [
  {
    label: "גוף",
    title: "אימוני כושר קרבי",
    text: "ריצה, כוח, סיבולת והרגלי אימון — בסיס פיזי יציב לקראת שירות תובעני.",
  },
  {
    label: "נפש",
    title: "הכנה מנטלית",
    text: "התמודדות עם אי־ודאות, משמעת, מנהיגות ובניית אמון בתוך צוות.",
  },
  {
    label: "דרך",
    title: "היכרות עם צה״ל",
    text: "מפגשים עם לוחמים וקצינים, ביקורים בבסיסים ותמונה כנה של מסלולי השירות.",
  },
  {
    label: "גב",
    title: "מנטור אישי",
    text: "ליווי של מי שכבר עבר את הדרך — מההתלבטות הראשונה ועד יום הגיוס.",
  },
];

const tracks = [
  "סיירות ויחידות מיוחדות",
  "קצונה ומנהיגות",
  "יחידות טכנולוגיות",
  "מסלולים מותאמים אישית",
];

export default function ProgramPage() {
  return (
    <main>
      <div className="wash-blob wash-blob-a" data-parallax="0.18" aria-hidden="true" />
      <div className="wash-blob wash-blob-b" data-parallax="0.12" aria-hidden="true" />

      <SiteHeader solid />

      <section className="program section-navy" data-zone="program">
        <div className="program-photo" data-parallax="0.14">
          <Image
            src={asset("/training-portrait.jpeg")}
            alt="קבוצת מתאמנים באימון לילי על חוף הים"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            unoptimized
          />
          <div className="photo-caption">
            <span>מהשטח</span>
            אימון. צוות. אחריות.
          </div>
        </div>

        <div className="program-content">
          <div className="section-kicker section-kicker-dark" data-reveal>
            <span>02</span>
            התוכנית
          </div>
          <h2 data-reveal>
            ארבעה יסודות.
            <br />
            <em>דרך אחת קדימה.</em>
          </h2>
          <p className="section-lead" data-reveal>
            תוכנית הכנה מלאה, שמותאמת לכל משתתף ולמסלול השירות שהוא רוצה
            לבנות.
          </p>

          <div className="program-list" data-reveal="stagger">
            {program.map((item, index) => (
              <article className="program-item" key={item.title}>
                <span className="program-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="program-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="possibility section-light" data-zone="possibility">
        <div className="possibility-copy" data-reveal>
          <div className="section-kicker">
            <span>03</span>
            לאן אפשר להגיע
          </div>
          <h2>
            לשבור את
            <br />
            <em>תקרת הזכוכית.</em>
          </h2>
          <p>
            כל צעיר חרדי יכול להגיע רחוק בצה״ל. מה שנדרש הוא רצון, הכנה
            נכונה ומעטפת שמאמינה בו לאורך הדרך.
          </p>
        </div>

        <div className="tracks" aria-label="מסלולים אפשריים" data-reveal="stagger">
          {tracks.map((track, index) => (
            <div className="track" key={track}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{track}</h3>
              <i aria-hidden="true">↙</i>
            </div>
          ))}
        </div>

        <div className="hero-actions" data-reveal style={{ marginTop: "1rem" }}>
          <Link className="button button-gold" href="/join">
            להצטרפות
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
