// middlewares/roleMiddleware.js
export const roleMiddleware = (allowedRoles = []) => {
    return (req, res, next) => {
      try {
        // supozojmë se authMiddleware është thirrur para roleMiddleware
        if (!req.user || !allowedRoles.includes(req.user.role)) {
          return res.status(403).json({ message: 'Forbidden' });
        }
        next();
      } catch (error) {
        return res.status(403).json({ message: 'Forbidden' });
      }
    };
  };
  