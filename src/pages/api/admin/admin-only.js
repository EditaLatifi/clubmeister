import { authMiddleware, requireRole } from '../../../middlewares/auth';
import { RoleEnum } from '../../../enums/role';
function handler(req, res) {

  return res.status(200).json({ message: 'Welcome ADMIN!' });
}

export default authMiddleware(requireRole(RoleEnum.ADMIN)(handler));
