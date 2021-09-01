import { db } from '../../data/connection';
import IDbResultDataModel from '../../models/models/dataModels/IDbResultDataModel';
import IRegisterUserDataModel from '../../models/models/dataModels/IRegisterUserDataModel';
import IUserDomainModel from '../../models/models/domainModels/IUserDomainModel';

export const userRepository = {
  getUserByEmail(email: string): Promise<IUserDomainModel> {
    return db
      .query<IUserDomainModel[]>(
        'SELECT * FROM myproject.user WHERE email = ?',
        [email],
      )
      .then(dbResult => dbResult[0])
      .catch(err => Promise.reject(err));
  },
  
  registerUser(
    registration: IRegisterUserDataModel,
  ): Promise<IDbResultDataModel> {
    return db
      .query<IDbResultDataModel>(
        `INSERT INTO myproject.user (name, email, password, verificationCode, roleId)
        VALUES (?, ?, ?, ?, ?)`,
        [
          registration.name,
          registration.email,
          registration.password,
          `${registration.verificationCode}`,
          `${registration.roleId}`,
        ],
      )
      .catch(err => Promise.reject(err));
  },
};
