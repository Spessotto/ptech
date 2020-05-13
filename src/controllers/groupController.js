var CustomException = require("../customException");
let service = new (require("../services/groupService"));

class groupController {

    //get all getGroups from a item
    async getGroups(req, res) {
        try {

            let itemid;

            //itemid
            if (!req.params.itemid)
                throw new CustomException("Error: invalid itemid.");
            else {
                itemid = req.params.itemid;
            }

            let groups = await service.getGroups(itemid);
            res.status(200).json({ "groups": groups });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code).json(error.message);
        };
    }

    //get a group
    async getGroup(req, res) {
        try {

            let groupid;

            //groupid
            if (!req.params.groupid)
                throw new CustomException("Error: invalid groupid.");
            else {
                groupid = req.params.groupid;
            }

            let group = await service.getGroup(groupid);
            res.status(200).json({ "group": group });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code).json(error.message);
        };
    }

    //add Group
    async addGroup(req, res) {
        try {

            let itemid, name;

            //itemid
            if (!req.body.itemid)
                throw new CustomException("Error: invalid itemid.");
            else {
                if (typeof req.body.itemid != 'string')
                    throw new CustomException("Error: itemid must be a string.");

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

            let group = await service.addGroup(itemid, name);
            res.status(200).json({ "message": "Group Added." });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code).json(error.message);
        };
    }

    //delete Group
    async deleteGroup(req, res) {
        try {

            let groupid;

            //groupid
            if (!req.body.groupid)
                throw new CustomException("Error: invalid groupid.");
            else {
                if (typeof req.body.groupid != 'string')
                    throw new CustomException("Error: groupid must be a string.");

                groupid = req.body.groupid;
            }

            let item = await service.deleteGroup(groupid);
            res.status(200).json({ "message": "Group deleted." });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY HH:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code).json(error.message);
        };
    }


}

module.exports = groupController;