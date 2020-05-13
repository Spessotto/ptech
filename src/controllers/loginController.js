var CustomException = require("../customException");
let service = new (require("../services/loginService"));
const utils = new (require("../utils/utils"));

class exameController {

    //check if user exists
    async login(req, res) {
        try {

            let email, password;

            //email
            if (!req.body.email)
                throw new CustomException("Error: invalid email.");
            else {
                if (typeof req.body.email != 'string')
                    throw new CustomException("Error: email must be a string.");

                //Validate email
                let valid = utils.validateEmail(req.body.email);
                if (!valid)
                    throw new CustomException("Error: invalid email.");

                email = req.body.email;
            }

            //password
            if (!req.body.password)
                throw new CustomException("Error: invalid password");
            else {
                if (typeof req.body.password != 'string')
                    throw new CustomException("Error: password must be a string.");

                password = req.body.password;
            }

            //token
            let token = await service.login(email, password);
            res.status(200).json({ "token": token });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code ? error.code : 400).json(error.message);
        };
    }

    //create new user
    async signup(req, res) {
        try {

            let email, password;

            //email
            if (!req.body.email)
                throw new CustomException("Error: invalid email.");
            else {
                if (typeof req.body.email != 'string')
                    throw new CustomException("Error: email must be a string.");

                //Validate email
                let valid = utils.validateEmail(req.body.email);
                if (!valid)
                    throw new CustomException("Error: invalid email.");

                email = req.body.email;
            }

            //password
            if (!req.body.password)
                throw new CustomException("Error: invalid password");
            else {
                if (typeof req.body.password != 'string')
                    throw new CustomException("Error: password must be a string.");

                password = req.body.password;
            }

            //signup
            let user = await service.signup(email, password);
            res.status(200).json({ "message": "User created." });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code ? error.code : 400).json(error.message);
        };
    }


    //reset password
    async reset(req, res) {
        try {

            let email, password;

            //email
            if (!req.body.email)
                throw new CustomException("Error: invalid email.");
            else {
                if (typeof req.body.email != 'string')
                    throw new CustomException("Error: email must be a string.");

                //Validate email
                let valid = utils.validateEmail(req.body.email);
                if (!valid)
                    throw new CustomException("Error: invalid email.");

                email = req.body.email;
            }

            //password
            if (!req.body.password)
                throw new CustomException("Error: invalid password");
            else {
                if (typeof req.body.password != 'string')
                    throw new CustomException("Error: password must be a string.");

                password = req.body.password;
            }

            //reset
            let user = await service.reset(email, password);
            res.status(200).json({ "message": "Password changed." });
        }
        catch (error) {
            let errorWithDate = moment().format("DD/MM/YYYY hh:mm:ss") + " - " + error.message;
            console.error(errorWithDate)
            res.status(error.code ? error.code : 400 ).json(error.message);
        };
    }

}

module.exports = exameController;