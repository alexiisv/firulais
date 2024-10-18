
let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "servicios",
    user:"root",
    password: ""
});


conexion.connect(function(error){
    if(error){
        throw error;
        conexion.end();
    } else {
        console.log("conexion exitosa")
    }
});

// const nuevoregistro = "INSERT INTO categorias (id, nombre_animal, ubicacion, vulnerabilidad, ayuda) VALUES (NULL, 'tiber', 'gualmatan', 'abandono', 'hogar') "
//     conexion.query(nuevoregistro, function(error,rows){
//         if(error){
//             throw error;
//         }else{
//             console.log("datos ingresados correctamente")
//         }
//     })

const modificar = "UPDATE categorias SET nombre_animal= 'sacha' WHERE id= 5"
conexion.query(modificar, function(error, lista){
    if(error){
        throw error;
    }else{
        console.log("dato modificado correctamente"); //muestra todos los datos
        // console.log(lista[0].nombre_animal); //mostara segun la posiciòn y lo que se quiere mostrar
        // console.log(lista[lista.length-1]); //muestra el ultimo dato
    }
})

const categorias = "SELECT * FROM categorias";

conexion.query(categorias, function(error, lista){
    if(error){
        throw error;
    }else{
        console.log(lista); //muestra todos los datos
        // console.log(lista[0].nombre_animal); //mostara segun la posiciòn y lo que se quiere mostrar
        // console.log(lista[lista.length-1]); //muestra el ultimo dato
    }
})

const borrar = "DELETE FROM categorias WHERE id= 8"
conexion.query(borrar, function(error, lista){
    if(error){
        throw error;
    }else{
        console.log("Datos eliminados correctamente");
    }
});

conexion.end();
