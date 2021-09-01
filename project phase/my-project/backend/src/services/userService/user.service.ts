import IRegisterUserDataModel from '../../models/models/dataModels/IRegisterUserDataModel';
import {
    conflictError,
    serverError,
} from '../errorCreatorService/error.creator.service';
import { hashPasswordService } from '../hashPasswordService/hash.password.service';
import { sixDigitCodeGeneratorService } from '../sixDigitCodeGeneratorService/six.digit.code.generator';
import { userRepository } from '../../respository/userRepository/userRepository';

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
};
