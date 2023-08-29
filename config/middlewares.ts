export default [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::session",
    config: {
      httpOnly: true,
      // maxAge: 1000 * 60 * 60 * 24 * 14, // 14 Day Age
      // domain:
      //   process.env.NODE_ENV === "development"
      //     ? "localhost"
      //     : process.env.APP_DOMAIN,
      secure: process.env.NODE_ENV === "production",
    },
  },
];
