import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('nodetest', 'root', '1111', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.sync().then(() => {
  console.log('초기화 완료.');
}).catch((err) => {
  console.error('초기화 실패');
  console.error(err);
});

export default sequelize;

