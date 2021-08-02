import { STRING, INTEGER, Optional, Model } from 'sequelize';

import { db } from '../config';

export interface UserAttributes {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  avatar?: string | null;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}

const User = db.define<UserInstance>('users', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  firstname: {
    type: STRING,
    allowNull: false,
  },
  lastname: {
    type: STRING,
    allowNull: false,
  },
  avatar: {
    type: STRING,
    allowNull: true,
  },
});

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;

  return values;
};

export default User;
