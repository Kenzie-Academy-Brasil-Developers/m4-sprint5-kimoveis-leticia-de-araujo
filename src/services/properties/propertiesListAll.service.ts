import AppDataSource from '../../data-source';
import { Properties } from '../../entities/properties.entity';

const propertiesListAllService = async () => {
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const properties = await propertiesRepository.find();

  return properties;
};

export default propertiesListAllService;
