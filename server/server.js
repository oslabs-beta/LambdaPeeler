const express = require('express');
const layerRouter = require('./routes/layerRouter')
const functionRouter = require('./routes/functionRouter')

// Initialize Express
const app = express();
const PORT = 3000;

// CORS
const cors = require('cors');
app.use(cors());


// Endpoint to list AWS Lambda layers
app.use('/list-layers', layerRouter)
app.use('/list-functions', functionRouter)






// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});