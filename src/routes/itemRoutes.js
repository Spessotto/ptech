var controller = new (require("../controllers/itemController"));


/**
* @swagger
* /items/getItems/{userid}:
*   get:
*     tags:
*       - items
*     summary: get all items from a user
*     produces:
*       - application/json
*     parameters:
*       - name: "Authorization"
*         in: "header"
*         required: false
*         type: "string"
*       - name: userid
*         in: "path"
*         required: true
*         type: "number"
*     responses:
*       200:
*         description: Success
*        
*       400:
*         description: Error
*/
app.get("/items/getItems/:userid", (req, res) => {
    controller.getItems(req, res);
});

/**
* @swagger
* /items/getItem/{itemid}:
*   get:
*     tags:
*       - items
*     summary: get a item
*     produces:
*       - application/json
*     parameters:
*       - name: "Authorization"
*         in: "header"
*         required: false
*         type: "string"
*       - name: itemid
*         in: "path"
*         required: true
*         type: "number"
*     responses:
*       200:
*         description: Success
*        
*       400:
*         description: Error
*/
app.get("/items/getItem/:itemid", (req, res) => {
    controller.getItem(req, res);
});

/**
* @swagger
* /items/addItem:
*   post:
*     tags:
*       - items
*     summary: addItem
*     produces:
*       - application/json
*     parameters:
*       - name: "Authorization"
*         in: "header"
*         required: false
*         type: "string"
*       - name: body
*         in: body
*         description: "item info"
*         required: true
*         schema:
*           type: object
*           properties:
*                 userid:
*                   type: "string"
*                 name:
*                   type: "string"
*     responses:
*       200:
*         description: Success
*        
*       400:
*         description: Error
*/
app.post("/items/addItem", (req, res) => {
    controller.addItem(req, res);
});


/**
* @swagger
* /items/updateItem:
*   put:
*     tags:
*       - items
*     summary: updateItem
*     produces:
*       - application/json
*     parameters:
*       - name: "Authorization"
*         in: "header"
*         required: false
*         type: "string"
*       - name: body
*         in: body
*         description: "item info"
*         required: true
*         schema:
*           type: object
*           properties:
*                 itemid:
*                   type: "string"
*                 name:
*                   type: "string"
*     responses:
*       200:
*         description: Success
*        
*       400:
*         description: Error
*/
app.put("/items/updateItem", (req, res) => {
    controller.updateItem(req, res);
});


/**
* @swagger
* /items/deleteItem:
*   delete:
*     tags:
*       - items
*     summary: deleteItem
*     produces:
*       - application/json
*     parameters:
*       - name: "Authorization"
*         in: "header"
*         required: false
*         type: "string"
*       - name: body
*         in: body
*         description: "item info"
*         required: true
*         schema:
*           type: object
*           properties:
*                 itemid:
*                   type: "string"
*     responses:
*       200:
*         description: Success
*        
*       400:
*         description: Error
*/
app.delete("/items/deleteItem", (req, res) => {
    controller.deleteItem(req, res);
});
