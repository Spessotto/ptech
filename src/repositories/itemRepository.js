var CustomException = require("../customException");
const Sequelize = require("sequelize");
const itemModel = require('../models/itemModel');
const groupitemModel = require('../models/groupitemModel');

class itemRepository {

    async getItems(iduser) {
        try {

            const model = itemModel(sequelize, Sequelize);

            let item = await model.findAll({
                where: {
                    iduser: iduser
                }
            });

            return item;

        } catch (erro) {
            throw new CustomException(erro.message, 400);
        }
    }

    async getItem(itemid) {
        try {

            const model_item = itemModel(sequelize, Sequelize);
            const model_groups = groupitemModel(sequelize, Sequelize);

            let item = await model_item.findAll({
                where: {
                    id: itemid
                }
            });

            let item_data;

            if (item.length > 0) {
                
                item_data = {
                    id: item[0].id,
                    iduser: item[0].iduser,
                    nameitem: item[0].nameitem
                }

                let groups = await model_groups.findAll({
                    where: {
                        iditem: item_data.id
                    }
                });

                item_data.groups = groups;
            }            
            
            return item_data;

        } catch (erro) {
            throw new CustomException(erro.message, 400);
        }
    }

    async addItem(iduser, nameitem) {
        try {

            const model = itemModel(sequelize, Sequelize);

            let item = await model.create({
                iduser: iduser,
                nameitem: nameitem
            });

        } catch (erro) {
            throw new CustomException(erro.message, 400);
        }
    }

    async updateItem(itemid, nameitem) {
        try {

            //Model
            const model = itemModel(sequelize, Sequelize);
            let item = await model.findAll({
                where: {
                    id: itemid
                }
            });

            //If the item was found
            if (item.length > 0) {
                await model.update({
                    nameitem: nameitem
                },
                    {
                        where: {
                            id: itemid
                        }
                    });
            }
            else
                throw new CustomException('Error: item not found.', 400);

        } catch (erro) {
            throw new CustomException(erro.message, 400);
        }
    }

    async deleteItem(itemid) {
        try {
            
            const model = itemModel(sequelize, Sequelize);
            let item = await model.findAll({
                where: {
                    id: itemid
                }
            });

            //If the item was found
            if (item.length > 0) {
                await model.destroy({
                    where: {
                        id: itemid
                    }
                });
            }
            else
                throw new CustomException('Error: item not found.', 400);

        } catch (erro) {
            throw new CustomException(erro.message, 400);
        }
    }


}

module.exports = itemRepository;