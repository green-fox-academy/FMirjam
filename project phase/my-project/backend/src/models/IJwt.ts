import { UserRole } from './models/enums/user.role.enum';

export default interface IJwt {
  userId: number;
  email: string;
  roleId: UserRole;
  iat: number;
  exp: number;
}