const express = require('express');
const bodyParser = require('body-parser');
const rideRoutes = require('./routes/rideRoutes'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', rideRoutes); 

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
