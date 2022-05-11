//Levantar Servidor en puerto 3000 con Express
const express = require('express');
const expressFileUpload = require('express-fileupload')
const app = express();
const port = 3000;
app.listen(port,  ()=>{
    console.log(`El servidor esta en el puerto ${port}`);
});

app.use(expressFileUpload({
    limits: { fileSize: 8000000},
    abortOnLimit: true,
    responseOnLimit: "El peso del archivo es demasiado grande"

}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/formulario.html")
});

app.post("/", (req,res)=>{
    const { foto }= req.files;
    console.log (foto)
    const { name }= foto;
    foto.mv(`${__dirname}/archivos/${name}`, (err)=>{
        res.send("Archivo cargado con exito");
    });
});

// app.post("/", (req,res)=>{
//     // const {foto} = req.files;

//     // foto.mv(`${__dirname}/archivos/${foto.name}`, (err)=>{
//     //     if (err){
//     //         console.log(err);
//     //         res.status(500).send("Algo salio mmal");
//     //     }
//     //     res.send("Archivo subido con exito");
//     // })
// })

app.post("/", (req,res)=>{
    const { foto }= req.files;
    console.log (foto)
    const { name }= foto;
    foto.mv(`${__dirname}/archivos/${name}`, (err)=>{
        res.send("Archivo cargado con exito");
    });
});