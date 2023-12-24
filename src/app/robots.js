export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/sitemap.xml"
        : `${process.env.CONICAL_URL}/sitemap.xml`,
  };
}
