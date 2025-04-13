// middlewares/validationMiddleware.js
import { getConnection } from '../lib/db';

export const validateId = async (req, res, next) => {
  try {
    // supozojmë se id vjen nga req.params ose req.query
    const { id } = req.query; 
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ msg: 'Invalid ID' });
    }

    // Kontrollojmë në DB nëse ekziston rreshti me atë ID
    const pool = await getConnection();
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ msg: 'Item not found' });
    }

    // Opsionale: ruaje rezultatet në req p.sh.
    req.userData = rows[0];

    // Kalo tek funksioni tjetër
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};
