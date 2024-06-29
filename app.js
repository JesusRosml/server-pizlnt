const express = require('express');
const loginRoutes = require('./routes/loginRoute');
const registerUserRoutes = require('./routes/registerUserRoute');
const app = express();
const PORT = process.env.PORT || 3000;

require('./connection_database');

app.use( express.json() );
app.use( loginRoutes );
app.use( registerUserRoutes );

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});