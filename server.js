//1.include modules
const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');

/*//3.set app engine
app.engine('handlebars',expbs());
app.set('view engine', 'handlebars');*/

//6.set default layout
/*app.engine('handlebars',expbs({defaultLayout:'main'}));*/

//7. changing the name of layout folder
//app.engine('handlebars',expbs({defaultLayout:'main', layoutsDir:'views/test'}));


//8.pathjoin
app.engine('handlebars',expbs({
	defaultLayout:'main', 
	layoutsDir:path.join(__dirname,'views/mainLayout')
}));
app.set('view engine', 'handlebars');


//4. Routing
app.get('/',(req,res)=>{
	//res.render('index');

//9. added dynamic title 
	res.render('index',{
		title:'Home Page', 
		name:'Beula'
	});
})

//5.About page 
app.get('/about',(req,res)=>{
	res.render('about', {title:'About Page'});
})


//2.server
app.listen(8080, ()=>{
	console.log('Server is running at port', 8080);
});