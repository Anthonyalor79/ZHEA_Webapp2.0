import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Allows self-signed certificates (for production, use a proper CA)
  },
  max: 1000, // Max connections
  idleTimeoutMillis: 30000, // Auto close idle connections
});

export default pool;
