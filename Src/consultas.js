/* Constltas personalizadas ultilizando find*/

db.peliculas.find( {} );

/*{ "_id" : ObjectId("5fa56d76d634cd67daf9b11d"), "item" : "El resplandor", "precio" : 25, "duracion" : "146 min", "valoración" : "5", "persona" : { "director" : "Stanley Kubrick", "protagonista" : "Jack Nicholson" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b11e"), "item" : "Kill bill", "precio" : 50, "duración" : "112 min", "valoración" : "4.5", "persona" : { "director" : "Quentin Tarantino", "protagonista" : "La novia" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b11f"), "item" : "uno de los nuestros", "precio" : 33.4, "duración" : "148 min", "valoración" : "4.8", "persona" : { "director" : " Martin Scorsese", "protagonista" : "Henry Hill" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b120"), "item" : "El padrino", "precio" : 19.86, "duración" : "178 min", "valoración" : "3,6", "persona" : { "director" : "Francis Ford Coppola", "protagonista" : "El padrino" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b121"), "item" : "Avatar", "precio" : 12.7, "duración" : "162 min", "valoración" : "1,6", "persona" : { "director" : "James Cameron", "protagonista" : "Jake sully" } }*/

db.peliculas.find( {precio: { $gte: 20 } } ) //Buscamos una pelicula , que cumpla un valor superior a 20

/* { "_id" : ObjectId("5fa56d76d634cd67daf9b11d"), "item" : "El resplandor", "precio" : 25, "duracion" : "146 min", "valoración" : "5", "persona" : { "director" : "Stanley Kubrick", "protagonista" : "Jack Nicholson" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b11e"), "item" : "Kill bill", "precio" : 50, "duración" : "112 min", "valoración" : "4.5", "persona" : { "director" : "Quentin Tarantino", "protagonista" : "La novia" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b11f"), "item" : "uno de los nuestros", "precio" : 33.4, "duración" : "148 min", "valoración" : "4.8", "persona" : { "director" : " Martin Scorsese", "protagonista" : "Henry Hill" } }*/

db.peliculas.find( {valoración: { $eq: "5" } } )//Buscamos una pelicula con una valoración de 5

/*{ "_id" : ObjectId("5fa56d76d634cd67daf9b11d"), "item" : "El resplandor", "precio" : 25, "duracion" : "146 min", "valoración" : "5", "persona" : { "director" : "Stanley Kubrick", "protagonista" : "Jack Nicholson" } }*/

db.peliculas.find({valoración: {$lt:"4.9"},precio: {$gt:30}}) // Realizamos una busque con dos criterios especificando que la valoración sea menor de 4.9 y su precio mayor o igual que 30

/*{ "_id" : ObjectId("5fa56d76d634cd67daf9b11e"), "item" : "Kill bill", "precio" : 50, "duración" : "112 min", "valoración" : "4.5", "persona" : { "director" : "Quentin Tarantino", "protagonista" : "La novia" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b11f"), "item" : "uno de los nuestros", "precio" : 33.4, "duración" : "148 min", "valoración" : "4.8", "persona" : { "director" : " Martin Scorsese", "protagonista" : "Henry Hill" } }*/
db.peliculas.find({duracion: {$ne:"178 min"},precio: {$lte:25}}) // Realizamos una busque con dos criterios especificando que la duración diferente a 178 min y su precio menor o igual que 25

/* { "_id" : ObjectId("5fa56d76d634cd67daf9b11d"), "item" : "El resplandor", "precio" : 25, "duracion" : "146 min", "valoración" : "5", "persona" : { "director" : "Stanley Kubrick", "protagonista" : "Jack Nicholson" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b120"), "item" : "El padrino", "precio" : 19.86, "duración" : "178 min", "valoración" : "3,6", "persona" : { "director" : "Francis Ford Coppola", "protagonista" : "El padrino" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b121"), "item" : "Avatar", "precio" : 12.7, "duración" : "162 min", "valoración" : "1,6", "persona" : { "director" : "James Cameron", "protagonista" : "Jake sully" } }*/

db.peliculas.find( { precio: { $nin: [ 5, 15 ] } } ) // Realizamos una busqueda de peliculas que no valgan lo mismo que 5 o 15

/*{ "_id" : ObjectId("5fa56d76d634cd67daf9b11d"), "item" : "El resplandor", "precio" : 25, "duracion" : "146 min", "valoración" : "5", "persona" : { "director" : "Stanley Kubrick", "protagonista" : "Jack Nicholson" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b11e"), "item" : "Kill bill", "precio" : 50, "duración" : "112 min", "valoración" : "4.5", "persona" : { "director" : "Quentin Tarantino", "protagonista" : "La novia" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b11f"), "item" : "uno de los nuestros", "precio" : 33.4, "duración" : "148 min", "valoración" : "4.8", "persona" : { "director" : " Martin Scorsese", "protagonista" : "Henry Hill" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b120"), "item" : "El padrino", "precio" : 19.86, "duración" : "178 min", "valoración" : "3,6", "persona" : { "director" : "Francis Ford Coppola", "protagonista" : "El padrino" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b121"), "item" : "Avatar", "precio" : 12.7, "duración" : "162 min", "valoración" : "1,6", "persona" : { "director" : "James Cameron", "protagonista" : "Jake sully" } }*/

db.peliculas.find({ $and: [ { "persona.director":{ $eq:"Quentin Tarantino" } }, { precio: { $gt:40 } } ] })// Busqueda de una pelicula que cumpla dos criterios, El director debe ser Quentin Tarantino y el precio debe ser superior a 40

/*{ "_id" : ObjectId("5fa56d76d634cd67daf9b11e"), "item" : "Kill bill", "precio" : 50, "duración" : "112 min", "valoración" : "4.5", "persona" : { "director" : "Quentin Tarantino", "protagonista" : "La novia" } }*/
db.peliculas.find({"persona.protagonista":{$not:{$eq:"La novia" } }} )//Realizamos una busqueda que no cumpla el criterio especificado

/*{ "_id" : ObjectId("5fa56d76d634cd67daf9b11d"), "item" : "El resplandor", "precio" : 25, "duracion" : "146 min", "valoración" : "5", "persona" : { "director" : "Stanley Kubrick", "protagonista" : "Jack Nicholson" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b11f"), "item" : "uno de los nuestros", "precio" : 33.4, "duración" : "148 min", "valoración" : "4.8", "persona" : { "director" : " Martin Scorsese", "protagonista" : "Henry Hill" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b120"), "item" : "El padrino", "precio" : 19.86, "duración" : "178 min", "valoración" : "3,6", "persona" : { "director" : "Francis Ford Coppola", "protagonista" : "El padrino" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b121"), "item" : "Avatar", "precio" : 12.7, "duración" : "162 min", "valoración" : "1,6", "persona" : { "director" : "James Cameron", "protagonista" : "Jake sully" } }*/
db.peliculas.find( { $nor: [ { precio:25 }, { valoración:"3,6"  } ]  } )//Busqueda de una pelicula que no cumpla ninguno de los dos criterios especificados , precio 25 y valoración 3,6

/*{ "_id" : ObjectId("5fa56d76d634cd67daf9b11e"), "item" : "Kill bill", "precio" : 50, "duración" : "112 min", "valoración" : "4.5", "persona" : { "director" : "Quentin Tarantino", "protagonista" : "La novia" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b11f"), "item" : "uno de los nuestros", "precio" : 33.4, "duración" : "148 min", "valoración" : "4.8", "persona" : { "director" : " Martin Scorsese", "protagonista" : "Henry Hill" } }
{ "_id" : ObjectId("5fa56d76d634cd67daf9b121"), "item" : "Avatar", "precio" : 12.7, "duración" : "162 min", "valoración" : "1,6", "persona" : { "director" : "James Cameron", "protagonista" : "Jake sully" } }*/
db.peliculas.find( { $or: [ { duración: { $eq:"162 min"  } }, { precio: 12.8 } ] } )//Realizamos una busqueda de las peliculas que cumplan cualquiera de las dos especificaciones dadas,duracion:162 min y precio:12.8

/* { "_id" : ObjectId("5fa56d76d634cd67daf9b121"), "item" : "Avatar", "precio" : 12.7, "duración" : "162 min", "valoración" : "1,6", "persona" : { "director" : "James Cameron", "protagonista" : "Jake sully" } } */ 
db.peliculas.find( { $and: [ { item: { $regex:/E*/  } }, { valoración: {$eq: "5"} } ] } )//Utilizamos $regex para especificar una pelicula la cual empiece por E y con $and debera también cumplir que su valoración sea 5

/* { "_id" : ObjectId("5fa56d76d634cd67daf9b11d"), "item" : "El resplandor", "precio" : 25, "duracion" : "146 min", "valoración" : "5", "persona" : { "director" : "Stanley Kubrick", "protagonista" : "Jack Nicholson" } } */