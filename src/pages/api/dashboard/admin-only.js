import { authMiddleware, requireRole } from '../../../middlewares/auth';
import { RoleEnum } from '../../../enums/role';

function handler(req, res) {
  // Nëse arrijmë deri këtu, do të thotë që user ka token valid dhe është ADMIN
  return res.status(200).json({ message: 'Welcome ADMIN!' });
}

// E mbështjellim me middleware për auth + role check
export default authMiddleware(requireRole(RoleEnum.ADMIN)(handler));
