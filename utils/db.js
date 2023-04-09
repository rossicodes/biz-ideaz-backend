import * as dotenv from 'dotenv'
import pg from 'pg'
const { Pool } = pg

// pools will use environment variables
// for connection information

dotenv.config()

const pool = new Pool({
    host: 'localhost',
    database: 'rossi',
    port: 5432,
    user: 'rossi',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

export default {
    query: (text, params) => pool.query(text, params),
};