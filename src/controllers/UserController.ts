import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const usersRepository = getRepository(User);

    const UserAlreadyExists = await usersRepository.findOne({ email });
    console.log(UserAlreadyExists);

    if (UserAlreadyExists) {
      return res.status(409).json({ message: 'User already exists!' });
    }

    const user = usersRepository.create({
      email,
      name,
    });

    await usersRepository.save(user);

    return res.json(user);
  }
}

export default new UserController();
