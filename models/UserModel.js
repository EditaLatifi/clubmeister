import { getConnection } from '../lib/db';
import bcrypt from 'bcrypt';

export const UserModel = {
  createUser: async ({ username, password, role }) => {
    const pool = await getConnection();
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery = `
      INSERT INTO users (username, password, role)
      VALUES (?, ?, ?)
    `;
    await pool.query(insertQuery, [username, hashedPassword, role]);
  },
  findByUsername: async (username) => {
    const pool = await getConnection();
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [
      username,
    ]);
    return rows.length > 0 ? rows[0] : null;
  },
  findById: async (id) => {
    const pool = await getConnection();
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null;
  },
  updateUser: async (id, { username, password, role }) => {
    const pool = await getConnection();
    let query = 'UPDATE users SET username = ?, role = ?';
    const params = [username, role];
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      query += ', password = ?';
      params.push(hashedPassword);
    }
    query += ' WHERE id = ?';
    params.push(id);

    await pool.query(query, params);
  },
  deleteUser: async (id) => {
    const pool = await getConnection();
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
  },
};
