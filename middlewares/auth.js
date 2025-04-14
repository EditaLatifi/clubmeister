import jwt from 'jsonwebtoken';
import { RoleEnum } from '../enums';

export function authMiddleware(handler) {
  return async (req, res) => {
    try {
      const authorization = req.headers.authorization;
      if (!authorization) {
        return res.status(401).json({ message: 'No token provided' });
      }

      const token = authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Invalid token format' });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
}

export function requireRole(requiredRole) {
  return function (handler) {
    return async (req, res) => {
      try {
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
