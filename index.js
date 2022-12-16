const express=require('express');
const app=express();
const port = 3000
app.get('/misitio', (req,res)=>{
 res.send('Bienvenido a mi sitio web');

});
app.listen(port, ()=>{
 console.log('Servidor escuchando en el puerto ' + port);
})
