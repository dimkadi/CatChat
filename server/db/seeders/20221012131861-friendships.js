module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Friendships',
      [
        {
          subjectUserId: 1,
          objectUserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectUserId: 1,
          objectUserId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectUserId: 1,
          objectUserId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectUserId: 1,
          objectUserId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectUserId: 5,
          objectUserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectUserId: 5,
          objectUserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectUserId: 5,
          objectUserId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectUserId: 4,
          objectUserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Friendships', null, {});
  },
};
