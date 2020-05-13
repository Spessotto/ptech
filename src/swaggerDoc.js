const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'PTech API',
      version: '1.0.0',
      description: 'PTech API - by Rafael Spessotto',
    },
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    //app.use('/', swaggerUi.serve, swaggerUi.setup(specs));
    app.use('/', swaggerUi.serve);
    app.get('/', swaggerUi.setup(specs));
}