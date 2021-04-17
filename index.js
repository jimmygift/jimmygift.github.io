const express = require('express'),
      app = express(),
      port = 3000;

// endpoint por defecto
app.get('/', (req, res) => res.send('Hello Kodoti!'));

// en que puerto se va a ejecutar la aplicación
app.listen(
    port,
    () => console.log(`Running on http://localhost:${port}`)
);

