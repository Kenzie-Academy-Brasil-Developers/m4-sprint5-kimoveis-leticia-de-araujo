import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import categoryListPropertiesService from '../../services/categories/categoryListProperties.service';

const categoryListPropertiesController = async (
  req: Request,
  res: Response
) => {
  try {
    const categoryId = req.params.id;

    const categoryProperties = await categoryListPropertiesService(categoryId);

    return res.status(200).json(categoryProperties);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode);
    }
  }
};

export default categoryListPropertiesController;
