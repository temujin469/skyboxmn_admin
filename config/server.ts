export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  proxy: true,
  url: env("SERVER_URL", "http://localhost:1337"),
  admin: {
    url: env("PUBLIC_ADMIN_URL", "/"),
    auth: {
      secret: env("ADMIN_JWT_SECRET", ""),
    },
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
