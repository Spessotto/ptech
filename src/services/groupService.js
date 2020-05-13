var CustomException = require("../customException");
let groupRepository = new (require("../repositories/groupRepository"));

class itemService {

    async getGroups(itemid) {
        try {
            let groups = await groupRepository.getGroups(itemid);
            return groups;

        }
        catch (erro) {                
            throw new CustomException(erro.message, erro.code);
        }
    }

    async getGroup(groupid) {
        try {
            let group = await groupRepository.getGroup(groupid);
            return group;

        }
        catch (erro) {                
            throw new CustomException(erro.message, erro.code);
        }
    }

    async addGroup(itemid,namegroup) {
        try {
            let group = await groupRepository.addGroup(itemid,namegroup);
            return;

        }
        catch (erro) {                    
            throw new CustomException(erro.message, erro.code);
        }
    }
 
    async deleteGroup(groupid) {
        try {
            let group = await groupRepository.deleteGroup(groupid);
            return;

        }
        catch (erro) {                    
            throw new CustomException(erro.message, erro.code);
        }
    }


}

module.exports = itemService;