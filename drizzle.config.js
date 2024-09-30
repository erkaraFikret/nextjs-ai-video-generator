/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://finansmart_owner:LCtsY48zoKjV@ep-icy-snow-a5ys4rty.us-east-2.aws.neon.tech/ai-video-generator?sslmode=require",
    }
  };