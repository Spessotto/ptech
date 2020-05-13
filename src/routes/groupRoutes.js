var controller = new (require("../controllers/groupController"));


/**
* @swagger
* /groups/getGroups/{itemid}:
*   get:
*     tags:
*       - groups
*     summary: get all groups from a item
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
app.get("/groups/getGroups/:itemid", (req, res) => {
    controller.getGroups(req, res);
});

/**
* @swagger
* /groups/getGroup/{groupid}:
*   get:
*     tags:
*       - groups
*     summary: get a group
*     produces:
*       - application/json
*     parameters:
*       - name: "Authorization"
*         in: "header"
*         required: false
*         type: "string"
*       - name: groupid
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
app.get("/groups/getGroup/:groupid", (req, res) => {
    controller.getGroup(req, res);
});

/**
* @swagger
* /groups/addGroup:
*   post:
*     tags:
*       - groups
*     summary: add a group
*     produces:
*       - application/json
*     parameters:
*       - name: "Authorization"
*         in: "header"
*         required: false
*         type: "string"
*       - name: body
*         in: body
*         description: "group info"
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
app.post("/groups/addGroup", (req, res) => {
    controller.addGroup(req, res);
});


/**
* @swagger
* /groups/deleteGroup:
*   delete:
*     tags:
*       - groups
*     summary: delete a group
*     produces:
*       - application/json
*     parameters:
*       - name: "Authorization"
*         in: "header"
*         required: false
*         type: "string"
*       - name: body
*         in: body
*         description: "group info"
*         required: true
*         schema:
*           type: object
*           properties:
*                 groupid:
*                   type: "string"
*     responses:
*       200:
*         description: Success
*        
*       400:
*         description: Error
*/
app.delete("/groups/deleteGroup", (req, res) => {
    controller.deleteGroup(req, res);
});
