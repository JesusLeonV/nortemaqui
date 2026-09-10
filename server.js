const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Sirve tu index.html y carpetas css/img automáticamente
app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`==================================================`);
    console.log(`🚜 Norte Maqui en línea en Puerto ${PORT} 🚜`);
    console.log(`==================================================`);
});
