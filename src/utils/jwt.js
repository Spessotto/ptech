const jsonwebtoken = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

class jwt {

    createJWT(name) {
        var user = {          
            name: name          
        }

        let jwtKey = jsonwebtoken.sign(user, SECRET, { expiresIn: "7d" });
        return jwtKey;
    }

    verifyJWT(token) {
        let autorizado;
        jsonwebtoken.verify(token, SECRET, function (err, decoded) {
            if (err)
                autorizado = false;
            else
                autorizado = true;
        });

        return autorizado;
    }
}

module.exports = jwt;