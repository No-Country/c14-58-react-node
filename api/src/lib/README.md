En esta carpeta vamos a crear una carpeta para cada modelo que vamos a definir, dentro de esta carpeta vamos a tener los archivos necesarios para cada modelo conectarse a la base de datos.

Para generar los archivos solo hay que ejecutar en la ruta raíz  ```npx hygen generate table```

TL:DR (xd)

- el archivo .model contendrá todo lo relacionado con la conexión e instancia del modelo
- el archivo .serializer tendrá todo lo relacionado con el formateo de la respuesta
- el archivo .validations tendrá todo lo relacionado con la validación de la solicitud
- el archivo .service tendrá toda la lógica que necesitamos devolver en la respuesta

Por ejemplo:

# /lib/users/users.model.js
```js
const { DataTypes, Model } = require('sequelize');
const { SequelizeInstance } = require('../../../db');

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize: SequelizeInstance, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
  },
);

module.exports = User;
```
