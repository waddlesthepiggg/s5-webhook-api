require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require("cors");
let result = {};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=> {
	res.send("Hello World! Welcome to the Webhook API. Go to /result endpoint")
}) 
app.get('/result', (req,res)=> {
	res.send(result);
})

app.post('/', (req,res) =>{
	result = req.body;
	res.send(result);

})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})

