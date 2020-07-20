const express = require('express');
const morgan  = require('morgan');

const app = express();
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')


// 1) MIDDLEWARES 
app.use(morgan('dev'));
app.use(express.json());

// Should be before the routing staff
app.use((req, res, next) => {
  console.log('hello from the Middleware!');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})


// 2) ROUTE HANDLERS:


// 3) ROUTES: 
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/tours', userRouter)

// 4) START SERVER: 
const port = 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
