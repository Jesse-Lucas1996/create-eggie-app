import { Pool } from "pg"

export const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
})
