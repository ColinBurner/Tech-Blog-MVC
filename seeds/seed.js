const sequelize = require('../config/config');
const { User, Post, Comment } = require('../models');

const userData = [
    {
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: 'password123'
    },
];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();