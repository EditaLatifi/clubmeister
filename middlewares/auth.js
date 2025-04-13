import jwt from 'jsonwebtoken';
import { RoleEnum } from '../enums';

export function authMiddleware(handler) {
  return async (req, res) => {
    try {
      // Marrim tokenin nga Headers (p.sh. "Authorization: Bearer <token>")
      const authorization = req.headers.authorization;
      if (!authorization) {
        return res.status(401).json({ message: 'No token provided' });
      }

      const token = authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Invalid token format' });
      }

      // Verifikojmë token-in
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // I shtojmë req.user me të dhënat e token-it
      req.user = decoded;

      // Kalojmë te handleri nëse çdo gjë është ok
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
}

// Shembull i një middleware për role-based
export function requireRole(requiredRole) {
  return function (handler) {
    return async (req, res) => {
      try {
        // supozojmë se authMiddleware është aplikuar më parë
        // ose e aplikojmë këtu manualisht
        const userRole = req.user?.role;
        if (!userRole || userRole !== requiredRole) {
          return res.status(403).json({ message: 'Forbidden' });
        }

        return handler(req, res);
      } catch (error) {
        return res.status(403).json({ message: 'Forbidden' });
      }
    };
  };
}
