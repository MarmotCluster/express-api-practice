import { DataTypes } from 'sequelize';
import sequelize from '.';

const Post = sequelize.define('post', {
    title: DataTypes.STRING,
    username: DataTypes.STRING,
    body: DataTypes.STRING,
});

export default Post;
