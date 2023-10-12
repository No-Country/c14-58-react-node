En esta carpeta vamos a crear una carpeta por cada ruta que vayamos a usar, por ejemplo si necesitamos un router de usuarios crearemos una carpeta ```/users``` y dentro de ella tendremos un archivo index ```users/index.js``` con todas las rutas de este router.

Por ejemplo:

# /web/users/index.js
```js
var express = require('express');
var usersRouter = express.Router('users');

// Home page route.
usersRouter.get('/', function (req, res) {
  res.send('Users home page');
})


module.exports = usersRouter;
```