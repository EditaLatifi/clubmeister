
import { UserModel } from '../../../../models/UserModel';
import { RoleEnum } from '../../../../enums';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Parametrat nga body
      const { username, password, role } = req.body;

      // Mund të sigurohesh që roli të jetë një nga vlerat e lejuara
      const validRoles = Object.values(RoleEnum); 
      if (!validRoles.includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
      }

      // Nëse do, krijo tabelën nëse nuk ekziston (ose bëje manualisht diku tjetër)
      await UserModel.createTableIfNotExists();

      // Ruaj userin e ri
      await UserModel.createUser({ username, password, role });
      
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
