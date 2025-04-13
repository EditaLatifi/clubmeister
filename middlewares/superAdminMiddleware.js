// middlewares/superAdminMiddleware.js
export const superAdminMiddleware = (req, res, next) => {
    try {
      if (!req.user || req.user.role !== 'SUPER_ADMIN') {
        return res.status(403).json({ message: 'Forbidden - Not Super Admin' });
      }
      next();
    } catch (error) {
      return res.status(403).json({ message: 'Forbidden' });
    }
  };
  