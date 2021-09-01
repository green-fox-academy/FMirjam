import { NextFunction, Request, Response } from 'express';
import { notAcceptableError } from '../../services/errorCreatorService/error.creator.service';
import ICustomResponse from '../../models/responses/ICustomResponse';
import IRegisterUserDataModel from '../../models/models/dataModels/IRegisterUserDataModel';
import IUserRegistrationRequest from '../../models/requests/IUserRegistrationRequest';
import { userService } from '../../services/userService/user.service';

export const userController = {
  registerUser(
    req: Request<IUserRegistrationRequest>,
    res: Response<ICustomResponse>,
    next: NextFunction,
  ) {
    const newRegistration: IRegisterUserDataModel = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      roleId: 2,
    };
    if (!userController.validatePassword(newRegistration.password)) {
      return next(
        notAcceptableError(
          'Password must be at least 6 characters and contain letter and number',
        ),
      );
    }
    userService
      .registerUser(newRegistration)
      .then(_ => {
        res.status(201).json({ message: 'Registration was successful' });
      })
      .catch(err => {
        next(err);
        return;
      });
  },

  validatePassword(password: string): boolean {
    const passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z]).{6,}$/;
    return passwordPattern.test(password);
  },
};
