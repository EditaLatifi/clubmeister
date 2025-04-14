import { getConnection } from '../lib/db';
import bcrypt from 'bcrypt';

export const UserModel = {
  // Krijon tabelën nëse nuk ekziston (opsionale nëse e bën manualisht në phpMyAdmin)
  createTableIfNotExists: async () => {
    const pool = await getConnection();
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL
      );
    `;
    await pool.query(createTableQuery);
  },

  // Krijo user të ri (hashed password)
  createUser: async ({ username, password, role }) => {
    const pool = await getConnection();
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery = `
      INSERT INTO users (username, password, role)
      VALUES (?, ?, ?)
    `;
    await pool.query(insertQuery, [username, hashedPassword, role]);
  },

  // Gjej user nga username
  findByUsername: async (username) => {
    const pool = await getConnection();
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [
      username,
    ]);
    if (rows.length > 0) {
      return rows[0];
    }
    return null;
  },
};
