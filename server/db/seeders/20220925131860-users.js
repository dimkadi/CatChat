const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = await bcrypt.hash('123', 10);
    const status = 'happy';
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Stepan',
          email: 'stepan@stepan',
          password,
          status,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Shlyopa',
          email: 'shlyopa@shlyopa',
          password,
          status,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Scientist',
          email: 'scientist@scientist',
          password,
          status,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Scaredy Cat',
          email: 'scaredy@scaredy',
          password,
          status,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Grumpy',
          email: 'grumpy@grumpy',
          password,
          status,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
