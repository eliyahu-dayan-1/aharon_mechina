import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "הדרך של נתנאל | רוח נתנאל",
  description:
    "לזכרו של נתנאל סילברג ז״ל — לוחם וקצין ביחידת יהל״ם, שהדרך שלו ממשיכה להוביל את המכינה.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const netanelPath = [
  {
    number: "01",
    title: "תלמיד ישיבה",
    text: "שנים של לימוד תורה וערכי מוסר עיצבו את דמותו ואת הדרך שבה בחר לחיות.",
  },
  {
    number: "02",
    title: "בחירה מתוך שליחות",
    text: "הוא התגייס מתוך אמונה באחריות כלפי עם ישראל — לא רק כחובה, אלא כזכות.",
  },
  {
    number: "03",
    title: "קצין ביהל״ם",
    text: "כמפקד ביחידת ההנדסה המיוחדת הוביל באומץ והיה דוגמה אישית לחייליו.",
  },
  {
    number: "04",
    title: "התנדבות למלחמה",
    text: "עם פרוץ מלחמת חרבות ברזל לא המתין לצו והתנדב מיד לשירות.",
  },
  {
    number: "05",
    title: "נפל כשסייע לאחרים",
    text: "נתנאל נפל בקרב בעזה כשיצא לסייע ללוחמים שנפגעו.",
  },
];

export default function StoryPage() {
  return (
    <main>
      <div className="wash-blob wash-blob-a" data-parallax="0.18" aria-hidden="true" />
      <div className="wash-blob wash-blob-b" data-parallax="0.12" aria-hidden="true" />

      <SiteHeader />

      <section className="story section-sand" data-zone="story">
        <div className="section-kicker" data-reveal>
          <span>03</span>
          ההשראה
        </div>

        <div className="story-layout">
          <figure className="netanel-portrait" data-reveal data-parallax="0.1">
            <Image
              src={asset("/netanel-silberg.png")}
              width={1440}
              height={2160}
              alt="נתנאל סילברג ז״ל"
              unoptimized
            />
            <figcaption>
              <strong>נתנאל סילברג ז״ל</strong>
              <span>לוחם וקצין ביחידת יהל״ם</span>
            </figcaption>
          </figure>

          <div className="story-copy" data-reveal>
            <p className="eyebrow eyebrow-dark">
              <span />
              לזכרו של נתנאל סילברג ז״ל
            </p>
            <h2>
              הדרך של נתנאל
              <br />
              <em>ממשיכה דרכנו.</em>
            </h2>
            <p className="story-intro">
              נתנאל היה בחור ישיבה שבחר, מתוך שליחות עמוקה, לקחת אחריות על
              שמירת עם ישראל. הוא התגייס, הפך לקצין ביחידת יהל״ם והוביל
              מתוך דוגמה אישית.
            </p>
            <p>
              עם פרוץ מלחמת חרבות ברזל התנדב מיד. הוא נפל בקרב בעזה כשיצא
              לסייע ללוחמים שנפגעו — ועד הרגע האחרון חשב על האחר.
            </p>
            <blockquote>
              <span aria-hidden="true">״</span>
              הוא לא בחר בדרך הקלה.
              <br />
              הוא בחר בדרך הנכונה.
            </blockquote>
          </div>
        </div>

        <div className="life-path">
          <div className="life-path-heading" data-reveal>
            <span>דמותו ודרכו</span>
            <h3>מחמש תחנות — לערכים שמובילים את המכינה</h3>
          </div>
          <div className="life-path-grid" data-reveal="stagger">
            {netanelPath.map((item) => (
              <article key={item.title}>
                <span>{item.number}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="legacy-line">
            מנהיגות, הקרבה ואהבת עם ישראל — זו הרוח שממשיכה להוביל אותנו.
          </p>
        </div>

        <div className="hero-actions" data-reveal style={{ marginTop: "1rem" }}>
          <Link className="button button-gold" href="/join">
            להצטרפות
            <span aria-hidden="true">←</span>
          </Link>
          <Link className="text-link" href="/program">
            להכיר את התוכנית
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
