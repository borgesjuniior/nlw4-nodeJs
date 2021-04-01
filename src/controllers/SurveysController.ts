import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import SurveysRepository from '../repositories/SurveysRepository';

class SurveysController {
  async create(req: Request, res: Response) {
    const { title, description } = req.body;

    const surveysRepository = getCustomRepository(SurveysRepository);

    const user = surveysRepository.create({
      title,
      description,
    });

    await surveysRepository.save(user);

    return res.json(user);
  }
}

export default new SurveysController();
