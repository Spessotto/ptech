var CustomException = require("../customException");
let itemRepository = new (require("../repositories/itemRepository"));

class itemService {

    async getItems(iduser) {
        try {
            let items = await itemRepository.getItems(iduser);
            return items;

        }
        catch (erro) {                
            throw new CustomException(erro.message, erro.code);
        }
    }

    async getItem(itemid) {
        try {
            let item = await itemRepository.getItem(itemid);
            return item;

        }
        catch (erro) {                
            throw new CustomException(erro.message, erro.code);
        }
    }

    async addItem(iduser,nameitem) {
        try {
            let item = await itemRepository.addItem(iduser,nameitem);
            return;

        }
        catch (erro) {                    
            throw new CustomException(erro.message, erro.code);
        }
    }

    async updateItem(itemid,nameitem) {
        try {
            let item = await itemRepository.updateItem(itemid,nameitem);
            return;

        }
        catch (erro) {                    
            throw new CustomException(erro.message, erro.code);
        }
    }

    async deleteItem(itemid) {
        try {
            let item = await itemRepository.deleteItem(itemid);
            return;

        }
        catch (erro) {                    
            throw new CustomException(erro.message, erro.code);
        }
    }


}

module.exports = itemService;