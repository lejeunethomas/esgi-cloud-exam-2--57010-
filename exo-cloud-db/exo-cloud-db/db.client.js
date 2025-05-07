const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://esgi_cloud_exam_db_57010_user:kj5ymqhwid9wsBrMPE5OleaARCliQiav@dpg-d0djfb2dbo4c738kas0g-a.oregon-postgres.render.com/esgi_cloud_exam_db_57010', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
