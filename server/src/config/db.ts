import { Sequelize } from 'sequelize';

import { DB_NAME, DB_PASSWORD, DB_USERNAME } from '../constants';

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, { host: 'postgres', dialect: 'postgres' });

export default sequelize;
