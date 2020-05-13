var CustomException = require("../customException");
//let authService = new (require("../services/authService"));
//let exameModel = require("../models/BD/Mongo/exameModel");
let userRepository = new (require("../repositories/userRepository"));
const jwtUtil = new (require("../utils/jwt"));

class loginService {

    async login(email, password) {
        try {
            let user = await userRepository.getUser(email,password);
            let token =  jwtUtil.createJWT(user.nameuser);
            return token;

        }
        catch (erro) {
            console.error(erro.message)          
            throw new CustomException(erro.message, erro.code);
        }
    }

    async signup(email, password) {
        try {            
            let user = await userRepository.addUser(email,password);   
            return;

        }
        catch (erro) {
            console.error(erro.message)          
            throw new CustomException(erro.message, erro.code);
        }
    }

    async reset(email, password) {
        try {            
            await userRepository.updateUser(email,password);   
            return;

        }
        catch (erro) {
            console.error(erro.message)           
            throw new CustomException(erro.message, erro.code);
        }
    }

}

module.exports = loginService;