const variants = [
  { key: "home", label: "בית", path: "/" },
  { key: "site-2", label: "עיצוב 2", path: "/site-2/" },
  { key: "site-3", label: "עיצוב 3", path: "/site-3/" },
  { key: "site-4", label: "עיצוב 4", path: "/site-4/" },
  { key: "site-5", label: "עיצוב 5", path: "/site-5/" },
  { key: "site-6", label: "עיצוב 6", path: "/site-6/" },
  { key: "site-7", label: "עיצוב 6 (מפוצל לדפים)", path: "/site-7/" },
];

export default function CompareNav() {
  if (process.env.NEXT_PUBLIC_COMPARE_NAV !== "true") {
    return null;
  }

  const currentKey = process.env.NEXT_PUBLIC_SITE_KEY ?? "home";

  return (
    <nav
      dir="rtl"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        padding: "10px 16px",
        background: "#111111",
        borderBottom: "1px solid #333333",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <span style={{ color: "#999999", fontSize: 13, alignSelf: "center" }}>
        השוואת עיצובים:
      </span>
      {variants.map((variant) => {
        const isCurrent = variant.key === currentKey;
        return (
          <a
            key={variant.key}
            href={variant.path}
            style={{
              fontSize: 13,
              padding: "4px 10px",
              borderRadius: 999,
              textDecoration: "none",
              background: isCurrent ? "#ffffff" : "transparent",
              color: isCurrent ? "#111111" : "#ffffff",
              border: "1px solid #444444",
            }}
          >
            {variant.label}
          </a>
        );
      })}
    </nav>
  );
}
