// pages/api/auth/login.js

import { getConnection } from '../../../../lib/db';
import bcrypt from 'bcrypt';    // Nëse ke password hashed
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Missing username/password' });
    }

    const pool = await getConnection();
    // Supozojmë se ke një tabelë `users` me kolona: id, username, password, role
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE username = ? LIMIT 1',
      [username]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = rows[0];
    // Kontollo password (nëse e ke hashed me bcrypt)
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Gjithçka OK, krijo token (opsionale)
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Kthe info te front-end
    // (p.sh. mos kthe password, vetëm rolin, user id, etj.)
    return res.status(200).json({
      id: user.id,
      username: user.username,
      role: user.role,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
