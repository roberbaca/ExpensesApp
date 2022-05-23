const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');


app.use( bodyParser.urlencoded( {extended: true }));
app.use( bodyParser.json() );
app.use( cors() );

const expensesRouter = require("./routes/expense");
app.use("/api/expenses", expensesRouter);

app.use( (req, res) => {
    res.statusCode = 404;
    res.send();    
});


const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
    console.log(`🚀 Server ready at: http://localhost:${PORT} ⭐️`);
});