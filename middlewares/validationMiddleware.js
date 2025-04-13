import { getConnection } from '../lib/db';

export const validateId = async (req, res, next) => {
  try {
    const { id } = req.query; 
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ msg: 'Invalid ID' });
    }
    const pool = await getConnection();
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    req.userData = rows[0];
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};
