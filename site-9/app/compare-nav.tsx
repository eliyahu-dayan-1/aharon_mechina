const variants = [
  { key: "home", label: "עיצוב 7 (מפוצל לדפים)", path: "/" },
  { key: "site-9", label: "עיצוב 9 (מדויק ובשל)", path: "/site-9/" },
];

export default function CompareNav() {
  if (process.env.NEXT_PUBLIC_COMPARE_NAV !== "true") {
    return null;
  }

  const currentKey = process.env.NEXT_PUBLIC_SITE_KEY ?? "home";
  const pagesBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
    /\/(site-\d+)$/,
    ""
  );

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
            href={`${pagesBasePath}${variant.path}`}
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
