import { jwtService } from '../../services/jwtService/jwt.service';
import { NextFunction, Request, Response } from 'express';
import { notAcceptableError } from '../../services/errorCreatorService/error.creator.service';
import { userService } from '../../services/userService/user.service';
import ICustomResponse from '../../models/responses/ICustomResponse';
import IRegisterUserDataModel from '../../models/models/dataModels/IRegisterUserDataModel';
import IUserLoginRequest from '../../models/requests/IUserLoginRequest';
import IUserLoginResponse from '../../models/responses/IUserLoginResponse';
import IUserRegistrationRequest from '../../models/requests/IUserRegistrationRequest';

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

  loginUser(
    req: Request<IUserLoginRequest>,
    res: Response<IUserLoginResponse>,
    next: NextFunction,
  ) {
    const { email, password } = req.body;

    userService
      .loginUser({ email, password })
      .then(user => {
        res.status(200).json({
          name: user.name,
          roleId: user.roleId,
          token: jwtService.generateAccessToken(
            user.id,
            user.email,
            user.roleId,
          ),
        });
      })
      .catch(err => {
        return next(err);
      });
  },
};
