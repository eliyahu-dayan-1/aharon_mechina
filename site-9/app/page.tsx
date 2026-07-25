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
    label: "לקריאת החזון",
  },
  {
    number: "02",
    title: "התוכנית",
    text: "ארבעה יסודות שמחברים אימון, חוסן, הכוונה וליווי אישי.",
    href: "/program",
    label: "לפרטי התוכנית",
  },
  {
    number: "03",
    title: "הדרך של נתנאל",
    text: "הסיפור שממנו נולדה המכינה והערכים שממשיכים להוביל אותה.",
    href: "/story",
    label: "להיכרות עם הדרך",
  },
  {
    number: "04",
    title: "הצטרפות",
    text: "לצעירים, למנטורים ולשותפים שרוצים להיות חלק מהמחזור הראשון.",
    href: "/join",
    label: "ליציאה לדרך",
  },
];

const essentials = [
  { value: "04", label: "יסודות הכנה משלימים" },
  { value: "01", label: "מנטור אישי לאורך הדרך" },
  { value: "360°", label: "גוף, נפש, דרך וגב" },
];

export default function Home() {
  return (
    <main className="home-page">
      <div className="wash-blob wash-blob-a" data-parallax="0.18" aria-hidden="true" />
      <div className="wash-blob wash-blob-b" data-parallax="0.12" aria-hidden="true" />

      <SiteHeader />

      <section className="hero hero-nine" id="top" data-zone="hero">
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

        <div className="hero-nine-layout">
          <div className="hero-content" data-reveal>
            <p className="eyebrow">
              <span />
              הכנה לשירות משמעותי לצעירים חרדים
            </p>
            <h1>
              מגיעים
              <br />
              <em>מוכנים.</em>
            </h1>
            <p className="hero-copy">
              מסגרת שמחברת כושר קרבי, חוסן מנטלי, זהות והכוונה אישית —
              כדי לבחור נכון, לשרת מתוך אמונה ולהוביל.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/program">
                להכיר את התוכנית
                <span aria-hidden="true">←</span>
              </Link>
              <Link className="text-link" href="/join">
                אני רוצה להיות חלק
              </Link>
            </div>
          </div>

          <aside className="hero-brief" data-reveal aria-label="התוכנית בקצרה">
            <p>רוח נתנאל במספר מילים</p>
            <strong>לא רק להגיע לצבא.</strong>
            <span>להגיע עם הכוח, הכלים והגב כדי להצליח בו.</span>
            <ul>
              <li>כושר קרבי שנבנה בהדרגה</li>
              <li>הכנה מנטלית למצבי לחץ</li>
              <li>הכוונה למסלול שמתאים לך</li>
            </ul>
          </aside>
        </div>

        <p className="hero-memorial">
          לזכרו של נתנאל סילברג ז״ל
          <span>לוחם וקצין ביחידת יהל״ם</span>
        </p>

        <Link className="scroll-cue" href="#path" aria-label="המשך למפת הדרך">
          <span>מפת הדרך</span>
          <i aria-hidden="true">↓</i>
        </Link>
      </section>

      <section className="essentials" aria-label="עיקרי התוכנית">
        {essentials.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
        <p>אמונה · מוכנות · שליחות</p>
      </section>

      <section className="manifesto section-light home-path" id="path" data-zone="overview">
        <div className="home-path-intro">
          <div className="section-kicker" data-reveal>
            <span>הדרך</span>
            מהצעד הראשון ועד הגיוס
          </div>
          <div className="manifesto-heading" data-reveal>
            <h2>
              מקום לגדול.
              <br />
              <em>דרך להתקדם.</em>
            </h2>
            <div>
              <p>
                אנחנו לא מבקשים מצעירים לשנות את מי שהם. אנחנו עוזרים להם
                להביא את כל מה שהם — מוכנים יותר, בטוחים יותר ומחוברים לדרך.
              </p>
              <p className="accent-copy">
                כל משתתף מקבל מסלול אישי בתוך קבוצה חזקה.
              </p>
            </div>
          </div>
        </div>

        <div className="pillars home-pillars" data-reveal="stagger">
          {overview.map((item) => (
            <Link className="pillar-card" href={item.href} key={item.title}>
              <span className="card-number">{item.number}</span>
              <span className="card-line" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-link">
                {item.label}
                <i aria-hidden="true">←</i>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-legacy section-sand" data-zone="story">
        <div className="legacy-photo" data-reveal>
          <Image
            src={asset("/netanel-silberg.png")}
            width={1440}
            height={2160}
            alt="נתנאל סילברג ז״ל"
            unoptimized
          />
          <p>
            <strong>נתנאל סילברג ז״ל</strong>
            לוחם וקצין ביחידת יהל״ם
          </p>
        </div>
        <div className="legacy-copy" data-reveal>
          <div className="section-kicker">
            <span>הרוח</span>
            ההשראה שמאחורי המכינה
          </div>
          <blockquote>
            הוא לא בחר בדרך הקלה.
            <br />
            <em>הוא בחר בדרך הנכונה.</em>
          </blockquote>
          <p>
            נתנאל חיבר תורה, אחריות ודוגמה אישית. הדרך שלו מזכירה לנו
            ששירות משמעותי מתחיל בבחירה פנימית — לקחת אחריות על עצמך ועל
            העם שלך.
          </p>
          <Link className="button button-dark" href="/story">
            להכיר את הדרך של נתנאל
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>

      <section className="home-cta" data-zone="join">
        <div data-reveal>
          <p className="eyebrow">
            <span />
            המחזור הראשון בדרך
          </p>
          <h2>
            הצעד הבא
            <br />
            <em>מתחיל כאן.</em>
          </h2>
        </div>
        <div className="home-cta-copy" data-reveal>
          <p>
            בין אם אתה צעיר שמתכונן לשירות, מנטור שרוצה להעביר את זה הלאה
            או שותף שמאמין בדרך — יש לך מקום ברוח נתנאל.
          </p>
          <Link className="button button-gold" href="/join">
            לפרטי ההצטרפות
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
