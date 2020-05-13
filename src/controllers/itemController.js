var CustomException = require("../customException");
let service = new (require("../services/itemService"));

class itemController {

    //get all items from a user
    async getItems(req, res) {
        try {

            let userid;

            //userid
            if (!req.params.userid)
                throw new CustomException("Error: invalid userid.");
            else {
                userid = req.params.userid;
            }

            let items = await service.getItems(userid);
            res.status(200).json({ "items": items });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code).json(error.message);
        };
    }

    //get a item
    async getItem(req, res) {
        try {

            let itemid;

            //itemid
            if (!req.params.itemid)
                throw new CustomException("Error: invalid itemid.");
            else {               

                itemid = req.params.itemid;
            }

            let item = await service.getItem(itemid);
            res.status(200).json({ "item": item });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code).json(error.message);
        };
    }

    //add item
    async addItem(req, res) {
        try {

            let userid, name;

            //userid
            if (!req.body.userid)
                throw new CustomException("Error: invalid userid.");
            else {
                userid = req.body.userid;
            }

            //name
            if (!req.body.name)
                throw new CustomException("Error: invalid name.");
            else {
                if (typeof req.body.name != 'string')
                    throw new CustomException("Error: name must be a string.");

                    name = req.body.name;
            }

            let item = await service.addItem(userid, name);
            res.status(200).json({ "message": "Item created." });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code).json(error.message);
        };
    }


    //update item
    async updateItem(req, res) {
        try {

            let itemid, name;

            //itemid
            if (!req.body.itemid)
                throw new CustomException("Error: invalid itemid.");
            else {
                itemid = req.body.itemid;
            }

            //name
            if (!req.body.name)
                throw new CustomException("Error: invalid name.");
            else {
                if (typeof req.body.name != 'string')
                    throw new CustomException("Error: name must be a string.");

                    name = req.body.name;
            }

            let item = await service.updateItem(itemid, name);
            res.status(200).json({ "message": "Item updated." });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code).json(error.message);
        };
    }


    //delete item
    async deleteItem(req, res) {
        try {

            let itemid, nameitem;

            //itemid
            if (!req.body.itemid)
                throw new CustomException("Error: invalid itemid.");
            else {
                itemid = req.body.itemid;
            }

            let item = await service.deleteItem(itemid);
            res.status(200).json({ "message": "Item deleted." });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY HH:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code).json(error.message);
        };
    }


}

module.exports = itemController;