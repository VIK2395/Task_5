const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
//
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc'); // npm i swagger-jsdoc@6.1.0 for common js imports to work
//
const comicsRoutes = require('./routes/comicsRouts');
const characterRoutes = require('./routes/characterRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const publisherRoutes = require('./routes/publisherRoutes');

const app = express();
// to enable CORS for all origins
app.use(cors());
app.use(express.json({ extended: true }));
// to allow brosers to request data from this folder
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));

// swagger configuration // start
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Comics API',
      version: '1.0.0',
      description: 'A simple Express Comics API',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  // path must be from the root of an application
  apis: ['src/routes/*.js'],
};

const specs = swaggerJsDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// swagger configuration // end

app.use('/comics', comicsRoutes);
app.use('/character', characterRoutes);
app.use('/review', reviewRoutes);
app.use('/user', userRoutes);
app.use('/publisher', publisherRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// blobal error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});

async function start() {
  try {
    const sequelize = require('./config/postgresql'); // db
    await sequelize.authenticate();
    app.listen(5000);
  } catch (e) {
    console.log('Server Error: ', e.message);
    process.exit(1);
  }
}

start();
