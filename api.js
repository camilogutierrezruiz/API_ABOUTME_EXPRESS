const express = require('express');

const api = express();

api.get('/me', (req, res) => {
  console.log(req.method);
  res.status(200).json({
    message: 'OK',
    name: 'Camilo Gutiérrez',
    age: 30,
    pais: 'Colombia',
  });
});

api.post('/hobbies', (req, res) => {
  console.log(req.method);
  res.status(201).json({
    message: 'OK',
    hobbies: [
      'Artes Plásticas y Visuales',
      'Programacion y Diseño 3D',
      'Música Guitarra Eléctrica y Batería'
    ]
  });
});

api.patch('/metas', (req, res) => {
  console.log(req.method);
  res.status(200).json({
    message: 'OK',
    metas: [
      'Profesionamlemte poder terminar alguna mastria en historia del arte y la arquitectura, o algún tema relacionadop con mi titulo profesional',
      'Convertirme en un buen desarrollador para emprender un negocio relacionado con el tema',
      'Comprar una casa jajaja'
    ]
  });
});

api.put('/business', (req, res) => {
  console.log(req.method);
  res.status(200).json({
    message: 'OK',
    empresas: [
      'Amazon',
      'Facebook',
      'Siendo realistas quisiera hacer mi priopia empresa'
    ]
  });
});


const PORT = 1969;

api.listen(PORT, () => {
  console.log(`API is running on ${PORT} succesfully`);
});