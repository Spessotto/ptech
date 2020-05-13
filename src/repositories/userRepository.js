var CustomException = require("../customException");
const Sequelize = require("sequelize");
const userModel = require('../models/userModel');

class userRepository {

    async getUser(email, password) {
        try {

            //Model
            const model = userModel(sequelize, Sequelize);

            let user = await model.findAll({
                where: {
                    emailuser: email,
                    passworduser: password
                }
            });

            if (user.length > 0) {
                return user[0];
            }
            else {
                throw new CustomException("Error: wrong user/password.", 400);
            }

        } catch (erro) {
            throw erro;
        }
    }

    async addUser(email, password) {
        try {

            //Model
            const model = userModel(sequelize, Sequelize);

            let user = await model.create({
                nameuser: 'newuser',
                emailuser: email,
                passworduser: password
            });

        } catch (erro) {
            throw new CustomException(erro.message, 400);
        }
    }

    async updateUser(email, password) {
        try {

            //Model
            const model = userModel(sequelize, Sequelize);

            let user = await model.findAll({
                where: {
                    emailuser: email
                }
            });

            //If the user was found
            if(user.length > 0){
                await model.update({
                    passworduser: password
                },
                {
                    where: {
                        emailuser: email
                    }
                });
            }
            else
                throw new CustomException('Error: User not found.', 400);

           

        } catch (erro) {
            throw new CustomException(erro.message, 400);
        }
    }


}

module.exports = userRepository;