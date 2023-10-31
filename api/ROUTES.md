# DOCUMENTACION DE RUTAS


## USERS


## Registro
### POST - /users/signup

Auth: No se requiere <br>
Body: Se espera un objeto JSON con los siguientes campos:

```javascript
{
  "first_name": "Pepe",
  "surname": "Argento",
  "email": "pepe@hotmail.com",
  "password": "puertadebaño",
  "tel": "099333999", 
}
```

Respuesta: Devuelve un objeto JSON con la información del Usuario y un token JWT.

```javascript
{
  "name": "Pepe",
  "surname": "Argento",
  "email": "pepe@hotmail.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlNDI5NzRiYi0zYWVjLTQ3MWEtYmFmZi1iZTkwNTBmOTBiMGYiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjk4NjAwOTEyLCJleHAiOjE2OTg2MTE3MTJ9.lgsRU7-WKIPxV80_qSWk_bPHqFlWpC_iNzvlen5ef3g"
}
```

## Inicio de sesion
### POST - /users/signin

Auth: No se requiere
Body: Se espera un objeto JSON con los siguientes campos:

```javascript
{
  "email": "pepe@hotmail.com",
  "password": "puertadebaño"
}
```

Respuesta: Devuelve un objeto JSON con la información del Usuario y un token JWT.
```javascript
{
  "name": "Pepe",
  "surname": "Argento",
  "email": "pepe@hotmail.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlNDI5NzRiYi0zYWVjLTQ3MWEtYmFmZi1iZTkwNTBmOTBiMGYiLCJpYXQiOjE2OTg2MDEwMjIsImV4cCI6MTY5ODYxMTgyMn0.5z8NVS4x7eneaIDiDDIWIGsSFYbVu2oxCRpOgY0dd4U"
}
```

## OBTENER INFO DE 1 USUARIO
### GET - /users/find

Auth: Requiere encabezado Authorization: Bearer + token
Body: No se requiere <br>
Respuesta: Devuelve un objeto JSON con la información del Usuario y un array de Pets que posee el Usuario.
```javascript
{
  "name": "Oliver",
  "surname": "Paucar",
  "email": "oliver@paucar.com",
  "Pets": [
    {
      "id": "0cadaa3b-7478-494e-8dce-467bddb0514c",
      "title": "Tabare test",
      "description": "Perdido en la plaza Artigas, a la 15hs",
      "post_date": "2023-10-29",
      "image": "https://res.cloudinary.com/dkgvoukdj/image/upload/v1698599256/mascotopia/661a53c1-7004-470b-9bee-747c6e86eeee/undefined.jpg",
      "status": "lost",
      "completed": false,
      "genre": "female",
      "specie": "dog",
      "UserId": "661a53c1-7004-470b-9bee-747c6e86eeee"
    },
    {
      "id": "198f4555-2a1d-48d8-8013-1fc867b3feb5",
      "title": "Oso",
      "description": "Perro de color marrón, buena onda",
      "post_date": "2023-10-29",
      "image": "https://maikaipets.com/wp-content/uploads/MAIKAI-HOME-DEF.jpg",
      "status": "found",
      "completed": true,
      "genre": "male",
      "specie": "cat",
      "UserId": "661a53c1-7004-470b-9bee-747c6e86eeee"
    },
  ]
}
```

## OBTENER INFO DE TODOS LOS USUARIOS
### GET - /users

Auth: No se requiere <br>
Body: No se requiere <br>
Respuesta: Devuelve un array de todos los usuarios en formato JSON. Cada usuario incluye la información del Usuario y un array de Pets que posee el Usuario.

```javascript
[
  {
    "id": "661a53c1-7004-470b-9bee-747c6e86eeee",
    "first_name": "Oliver",
    "surname": "Paucar",
    "email": "oliver@paucar.com",
    "password": "$2b$10$Mu6GdEOyevvkWL0MvFWX5ORhPiM0OQwe81RbndL0MNMOni4sWQsTy",
    "role": "client",
    "Pets": [
      {
        "id": "90c9af69-1ebd-4530-a147-85217aec35d8",
        "title": "Tabare edited",
        "description": "Perdido en la plaza Artigas, a la 15hs",
        "post_date": "2023-10-29",
        "image": "https://res.cloudinary.com/dkgvoukdj/image/upload/v1698600070/mascotopia/tj5ynw4lcomcuvp0mdza.png",
        "status": "lost",
        "completed": true,
        "genre": "female",
        "specie": "dog",
        "UserId": "661a53c1-7004-470b-9bee-747c6e86eeee"
      },
    ]
 },
   {
    "id": "10701b20-656e-4e20-98da-50b11df4bd31",
    "first_name": "Hernan",
    "surname": "Curbelo",
    "email": "mail@algo.com",
    "password": "$2b$10$CgHfj2KhXBaHwjBkclp3ae/mYq5/ZI7B4.ZE4wkyGV1m9snj78vBe",
    "role": "client",
    "Pets": []
  },
]
```


<br>

## PETS

## OBTENER TODAS LAS PETS
### GET - /pets 

Auth: No se requiere <br>
Body: No se requiere <br>
Respuesta: Devuelve un array de todos los Pets en formato JSON. Cada Pet incluye la información del Pet y la información del usuario que posee el Pet.

Ejemplo de respuesta:

```javascript
[
  {
    "id": "0cadaa3b-7478-494e-8dce-467bddb0514c",
    "title": "Tabare test",
    "description": "Perdido en la plaza Artigas, a la 15hs",
    "post_date": "2023-10-29",
    "image": "https://res.cloudinary.com/dkgvoukdj/image/upload/v1698599256/mascotopia/661a53c1-7004-470b-9bee-747c6e86eeee/undefined.jpg",
    "status": "lost",
    "completed": false,
    "genre": "female",
    "specie": "dog",
    "UserId": "661a53c1-7004-470b-9bee-747c6e86eeee",
    "User": {
      "id": "661a53c1-7004-470b-9bee-747c6e86eeee",
      "first_name": "Oliver",
      "surname": "Paucar",
      "email": "oliver@paucar.com"
    }
  },
]
```

## CREAR PET
### POST - /pets 

Auth: Requiere encabezado Authorization: Bearer + JWT <br>
Body: Espera un objeto JSON con los siguientes campos:

```javascript
{
"title": Un string que representa el título del Pet.
"description": Un string que representa la descripción del Pet.
"status": Un string que puede ser "lost" o "found".
"image": Un string que representa la imagen del Pet en formato base64.
"specie": Un string que puede ser "dog", "cat" o "unknown".
"genre": Un string que puede ser "male", "female" o "unknown".
}
```

Respuesta: Devuelve el Pet creado en formato JSON. El Pet incluye la información del Pet y la información del usuario que posee el Pet.

```javascript
{
  "id": "90c9af69-1ebd-4530-a147-85217aec35d8",
  "post_date": "2023-10-29",
  "completed": false,
  "title": "Tabare test",
  "description": "Perdido en la plaza Artigas, a la 15hs",
  "status": "lost",
  "specie": "dog",
  "genre": "female",
  "image": "https://res.cloudinary.com/dkgvoukdj/image/upload/v1698600070/mascotopia/tj5ynw4lcomcuvp0mdza.png",
  "UserId": "661a53c1-7004-470b-9bee-747c6e86eeee"
}
```

## EDITAR PET
### PATCH (editar) - /pets 

Auth: Requiere encabezado Authorization: Bearer + JWT <br>
Body: Espera un objeto JSON con los siguientes campos:

```javascript
{
    "id": Id del Pet a editar.
    "pet": {
        // Lo que se quiera editar va aquí
        // Por ejemplo para editar el title o el completed seria:
        "title": Un string que representa el título del Pet.
        "completed": true
    }
}

```

Respuesta: JSON modificado de la Pet

```javascript
{
  "id": "90c9af69-1ebd-4530-a147-85217aec35d8",
  "title": "Tabare edited",
  "description": "Perdido en la plaza Artigas, a la 15hs",
  "post_date": "2023-10-29",
  "image": "https://res.cloudinary.com/dkgvoukdj/image/upload/v1698600070/mascotopia/tj5ynw4lcomcuvp0mdza.png",
  "status": "lost",
  "completed": true,
  "genre": "female",
  "specie": "dog",
  "UserId": "661a53c1-7004-470b-9bee-747c6e86eeee"
}
```



