var CustomException = require("../customException");
const Sequelize = require("sequelize");
const groupitemModel = require('../models/groupitemModel');

class groupRepository {

    async getGroups(itemid) {
        try {

            const model = groupitemModel(sequelize, Sequelize);

            let groups = await model.findAll({
                where: {
                    iditem: itemid
                }
            });

            return groups;

        } catch (erro) {
            throw erro;
        }
    }

    async getGroup(groupid) {
        try {

            const model = groupitemModel(sequelize, Sequelize);

            let group = await model.findAll({
                where: {
                    id: groupid
                }
            });

            return group;

        } catch (erro) {
            throw erro;
        }
    }

    async addGroup(itemid, namegroup) {
        try {

            const model = groupitemModel(sequelize, Sequelize);

            let group = await model.create({
                iditem: itemid,
                namegroup: namegroup
            });

        } catch (erro) {
            throw new CustomException(erro.message, 400);
        }
    }

    async deleteGroup(groupid) {
        try {

            const model = groupitemModel(sequelize, Sequelize);
            let group = await model.findAll({
                where: {
                    id: groupid
                }
            });

            //If the group was found
            if (group.length > 0) {
                await model.destroy({
                    where: {
                        id: groupid
                    }
                });
            }
            else
                throw new CustomException('Error: group not found.', 400);

        } catch (erro) {
            throw new CustomException(erro.message, 400);
        }
    }

}

module.exports = groupRepository;