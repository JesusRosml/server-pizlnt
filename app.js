const express = require('express');
const loginRoutes = require('./routes/loginRoute');
const app = express();
const PORT = process.env.PORT || 3000;

require('./connection_database');

app.use( express.json() );
app.use( loginRoutes );

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});