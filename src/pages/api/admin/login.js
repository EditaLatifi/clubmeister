// pages/api/admin/login.js

import { getConnection } from '../../../../lib/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; // nëse i ke hashed passwordët

export default async function loginHandler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  // 1) Kontrollo formën (username / password)
  if (!username || !password) {
    return res.status(400).json({ message: 'Missing username or password' });
  }

  try {
    const pool = await getConnection();
    // 2) Merr user nga DB
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? LIMIT 1', [username]);

    // Nëse s’gjendet user, kthe 401
    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = rows[0];

    // 3) Verifiko passwordin 
    //    (nëse ke plaintext password, bëj krahasim direkt; 
    //     nëse ke hashed me bcrypt, përdor bcrypt.compare)
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // 4) Krijo token (psh. 1 orë)
    const token = jwt.sign(
      { id: user.id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    // 5) Kthe user + token
    //    role = user.role (p.sh. 'superadmin')
    //    username = user.username
    return res.json({
      token,
      role: user.role,
      username: user.username,
    });    
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
