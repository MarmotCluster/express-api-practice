import { DataTypes } from 'sequelize';
import sequelize from '.';

const User = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
});

export default User;
