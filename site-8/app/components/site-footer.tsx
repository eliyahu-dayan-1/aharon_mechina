import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <Image
          src={asset("/logo.jpeg")}
          width={72}
          height={64}
          alt=""
          unoptimized
        />
        <span>
          <strong>רוח נתנאל</strong>
          <small>מכינה קדם־צבאית חרדית</small>
        </span>
      </div>
      <p>אמונה. מוכנות. שליחות.</p>
      <Link href="/">חזרה לדף הבית ↑</Link>
    </footer>
  );
}
