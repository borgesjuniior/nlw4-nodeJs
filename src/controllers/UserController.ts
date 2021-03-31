import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
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
