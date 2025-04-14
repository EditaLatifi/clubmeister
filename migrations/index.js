import 'dotenv/config'; 
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { getConnection } from '../lib/db.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runMigrations() {
  const pool = await getConnection();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      run_at DATETIME NOT NULL
    );
  `);
  const [rows] = await pool.query(`SELECT name FROM migrations`);
  const executedMigrations = rows.map((r) => r.name);
  const migrationFiles = fs
    .readdirSync(__dirname)
    .filter((file) => file.endsWith('.js') && file !== 'index.js')
    .sort();
  for (const file of migrationFiles) {
    if (!executedMigrations.includes(file)) {
      console.log(`Running migration: ${file}`);
      const migrationPath = path.join(__dirname, file);
      const migrationURL = pathToFileURL(migrationPath);
      const { up } = await import(migrationURL.href);
      if (typeof up === 'function') {
        await up(pool);
      }
      await pool.query(
        `INSERT INTO migrations (name, run_at) VALUES (?, NOW())`,
        [file]
      );

      console.log(`Migration ${file} done.`);
    }
  }
  pool.end();
}

runMigrations()
  .then(() => {
    console.log('All migrations finished.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error running migrations:', err);
    process.exit(1);
  });
