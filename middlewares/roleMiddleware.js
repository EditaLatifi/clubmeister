export const roleMiddleware = (allowedRoles = []) => {
    return (req, res, next) => {
      try {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
          return res.status(403).json({ message: 'Forbidden' });
        }
        next();
      } catch (error) {
        return res.status(403).json({ message: 'Forbidden' });
      }
    };
  };
  