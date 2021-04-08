import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import SurveysRepository from '../repositories/SurveysRepository';
import SurveyUserRepository from '../repositories/SurveyUserRepository';
import UsersRepository from '../repositories/UsersRepository';

class SendMailController {
  async execute(req: Request, res: Response) {
    const { email, survey_id } = req.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveyUserRepository = getCustomRepository(SurveyUserRepository);

    const userExists = await usersRepository.findOne(email);

    if (!userExists) {
      return res.status(404).json({ message: 'User does not exists!' });
    }

    const surveyExists = await surveysRepository.findOne({ id: survey_id });

    if (!surveyExists) {
      return res.status(404).json({ message: 'Survey does not exists!' });
    }
  }
}

export default new SendMailController();
