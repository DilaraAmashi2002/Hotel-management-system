import express from 'express';

const app = express();

//convert  http payloads into js objects
app.use(express.json());

//define port
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is listening on PORT : " , PORT);
});