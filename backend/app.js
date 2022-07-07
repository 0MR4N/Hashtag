const express = require('express') 
const app = express() ;
const route =  require('./Router');
const bodyParser =  require('body-parser') ;
const session = require('express-session') ;
const path = require('path');
const fs = require('fs') ;
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/route' , route) ;

app.use((req ,res , next) => {

	
	var imagepath =  path.join(__dirname  , (req.url || 'none')) ;
	fs.stat(imagepath , (err , info ) => {
		console.log(err)
		if (err) {
			next();
			return
		}
		if (info.isFile()) {
			res.sendFile(imagepath) ;
			
		}else {
			next()
		}
	})

})

// app.get('/images/public_img' , (req ,res) => {

// 	res.end()
// })
app.get('/images' , (req ,res) => {

	res.end()
})
app.listen(8080 , (err) => {
	if (err) {
		console.log(err)
	}
	console.log("Server is runing on : http://localhost:8080")
})