import {
  conflictError,
  forbiddenError,
  serverError,
  unauthorizedError,
} from '../errorCreatorService/error.creator.service';
import { hashPasswordService } from '../hashPasswordService/hash.password.service';
import { sixDigitCodeGeneratorService } from '../sixDigitCodeGeneratorService/six.digit.code.generator';
import { userRepository } from '../../respository/userRepository/userRepository';
import ILoginUserDataModel from '../../models/models/dataModels/ILoginUserDataModel';
import IRegisterUserDataModel from '../../models/models/dataModels/IRegisterUserDataModel';
import IUserDomainModel from '../../models/models/domainModels/IUserDomainModel';

export const userService = {
  registerUser(registration: IRegisterUserDataModel): Promise<void> {
    const verificationCode: number = sixDigitCodeGeneratorService.generateSixDigitCode();

    return userRepository
      .getUserByEmail(registration.email)
      .then(async user => {
        if (user) {
          return Promise.reject(
            conflictError('You are already registered, please log in'),
          );
        }

        const newRegistration: IRegisterUserDataModel = {
          ...registration,
          password: hashPasswordService.generateHash(registration.password),
          verificationCode: verificationCode,
        };
        return await userRepository.registerUser(newRegistration);
      })
      .then(result => {
        if (result && result.affectedRows > 0) {
          return;
        }
        return Promise.reject(serverError('Cannot add registration'));
      })
      .catch(err => Promise.reject(err));
  },

  loginUser(login: ILoginUserDataModel): Promise<IUserDomainModel> {
    {
      return userRepository
        .getUserByEmail(login.email)
        .then(async user => {
          if (
            !user ||
            !hashPasswordService.comparePasswords(login.password, user.password)
          ) {
            return Promise.reject(
              unauthorizedError('E-mail or password is incorrect'),
            );
          }
          if (user.isVerified !== 1) {
            return Promise.reject(
              forbiddenError('E-mail has not been verified yet'),
            );
          }
          return Promise.resolve(user);
        })
        .catch(err => Promise.reject(err));
    }
  },
};
