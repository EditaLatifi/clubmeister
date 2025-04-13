// utils/generateJWT.js
import jwt from 'jsonwebtoken';

export const generateJWT = (payload) => {
  // p.sh. payload mund të ketë { id, role, ... }
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h', // ose çfarëdo kohëzgjatje doni
  });
};
