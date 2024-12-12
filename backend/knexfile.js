require("dotenv").config();

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOSTNAME,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./migrations", // Ensure this matches your migrations folder
    },
    seeds: {
      directory: "./seeds", // Optional: For initial data seeding
    },
  },
};
