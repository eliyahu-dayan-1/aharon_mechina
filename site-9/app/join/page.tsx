import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "הצטרפות | רוח נתנאל",
  description:
    "אתה לא הולך לבד — מעטפת מלאה של מנטורים, סיוע מעשי וקהילה שממשיכה. ההרשמה למחזור הראשון תיפתח בקרוב.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

export default function JoinPage() {
  return (
    <main>
      <div className="wash-blob wash-blob-a" data-parallax="0.18" aria-hidden="true" />
      <div className="wash-blob wash-blob-b" data-parallax="0.12" aria-hidden="true" />

      <SiteHeader solid />

      <section className="support section-navy" data-zone="support">
        <div className="support-copy" data-reveal>
          <p className="eyebrow">
            <span />
            מעטפת מלאה
          </p>
          <h2>
            אתה לא
            <br />
            <em>הולך לבד.</em>
          </h2>
        </div>

        <div className="support-grid" data-reveal="stagger">
          <article>
            <span>א׳</span>
            <h3>מנטור אישי</h3>
            <p>דמות שעברה את הדרך, מכירה את האתגרים ונמצאת איתך בכל שלב.</p>
          </article>
          <article>
            <span>ב׳</span>
            <h3>סיוע מעשי</h3>
            <p>ליווי בהתמודדות עם חסמים בירוקרטיים, משפטיים וכלכליים.</p>
          </article>
          <article>
            <span>ג׳</span>
            <h3>קהילה שממשיכה</h3>
            <p>המשתתף של היום הופך למנטור של מחר ומרחיב את מעגל ההשפעה.</p>
          </article>
        </div>
      </section>

      <section className="join" id="join" data-zone="join">
        <div className="join-image" aria-hidden="true" data-parallax="0.12">
          <Image
            src={asset("/training-wide.jpeg")}
            alt=""
            fill
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="join-overlay" aria-hidden="true" />
        <div className="join-content" data-reveal>
          <Image
            className="join-logo"
            src={asset("/logo.jpeg")}
            width={120}
            height={108}
            alt=""
            unoptimized
          />
          <p className="eyebrow">
            <span />
            המרכז הראשון בדרך
          </p>
          <h2>
            הגיע הזמן
            <br />
            <em>לצאת לדרך.</em>
          </h2>
          <p>
            לצעירים שרוצים להגיע מוכנים. למנטורים שרוצים להעביר את זה
            הלאה. לשותפים שרוצים להקים איתנו תנועה של אחריות ושליחות.
          </p>
          <div className="join-status" role="note">
            <strong>ההרשמה למחזור הראשון תיפתח בקרוב</strong>
            <span>פרטי יצירת קשר וטופס התעניינות יתווספו כאן.</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
