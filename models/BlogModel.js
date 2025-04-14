// models/BlogModel.js
import { getConnection } from '../lib/db.js';

export const BlogModel = {
  create: async ({ title, paragraph, imageUrl }) => {
    const pool = await getConnection();
    const sql = `
      INSERT INTO blog_posts (title, paragraph, imageUrl)
      VALUES (?, ?, ?)
    `;
    await pool.query(sql, [title, paragraph, imageUrl]);
  },

  list: async () => {
    const pool = await getConnection();
    const [rows] = await pool.query('SELECT * FROM blog_posts');
    return rows;
  },
};
