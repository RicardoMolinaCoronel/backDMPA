var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
 /* MÓDULO CORS */
 var cors = require('cors');
/* REFERENCIA AL MÓDULO */
const swaggerUi = require('swagger-ui-express')

  /* CARGA DE DATOS DE CONFIGURACION EN MEMORIA */
  dotenv.config();
/* REFERENCIA AL ARCHIVO GENERADO */
var authenticateJWT = require('./middleware/auth');
const swaggerFile = require('./swagger_output.json')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clienteRouter = require('./routes/rest_cliente');
var pedidoRouter = require('./routes/rest_pedido');
var app = express();
/* AGREGUE EL MIDDLEWARE CORS */
 app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/* CONFIGURACIÓN DE LA RUTA A LA DOCUMENTACIÓN */
  app.use('/rest/cliente', authenticateJWT, clienteRouter);
  app.use('/rest/pedido', authenticateJWT, pedidoRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
/* RELACIÓN ENTRE LA RUTA DEL URL CON LA REFERENCIA CON EL MANEJADOR DE RUTAS */
app.use('/rest/cliente', clienteRouter);
app.use('/rest/pedido', pedidoRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
