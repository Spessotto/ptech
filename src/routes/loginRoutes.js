var controller = new (require("../controllers/loginController"));


/**
* @swagger
* /login/login:
*   post:
*     tags:
*       - login
*     summary: login
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         description: "login info"
*         required: true
*         schema:
*           type: object
*           properties:
*                 email:
*                   type: "string"
*                 password:
*                   type: "string"
*     responses:
*       200:
*         description: authorization token
*        
*       400:
*         description: Error
*/
app.post("/login/login", (req, res) => {
    controller.login(req, res);
});


/**
* @swagger
* /login/signup:
*   post:
*     tags:
*       - login
*     summary: signup
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         description: "signup info"
*         required: true
*         schema:
*           type: object
*           properties:
*                 email:
*                   type: "string"
*                 password:
*                   type: "string"
*     responses:
*       200:
*         description: Success
*        
*       400:
*         description: Error
*/
app.post("/login/signup", (req, res) => {
    controller.signup(req, res);
});


/**
* @swagger
* /login/reset:
*   post:
*     tags:
*       - login
*     summary: reset
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         description: "reset info"
*         required: true
*         schema:
*           type: object
*           properties:
*                 email:
*                   type: "string"
*                 password:
*                   type: "string"
*     responses:
*       200:
*         description: Success
*        
*       400:
*         description: Error
*/
app.post("/login/reset", (req, res) => {
    controller.reset(req, res);
});

