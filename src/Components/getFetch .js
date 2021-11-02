export const getFetchUnProducto = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(producto)
    }, 2000)

})


const producto = [
{"id":1,"nombre": "Whal Magic Clip","precio": 15000,"categoria":"Clipper","cantidad":1,"imagen":"./assets/img/0001.jpeg"},
{"id":2, "nombre": "Babyliss Goldfx", "precio": 22000, "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0002.jpeg"},
{"id":3, "nombre": "Eurostil k-3600", "precio": 7000, "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0003.jpeg"},
{"id":4, "nombre": "Yasaka", "precio": 6400, "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0004.jpeg"},
{"id":5, "nombre": "Whal Super Taper", "precio": 9540, "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0005.jpeg"},
{"id":6, "nombre": "Babyliss fx Rose", "precio": 23000, "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0006.jpeg"},
{"id":7, "nombre": "Eurostil Black Bart", "precio": 11500, "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0007.jpeg"},
{"id":8, "nombre": "Super Taper (Sin accesorios)", "precio": 6800, "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0008.jpeg"},
{"id":9, "nombre": "Whal Balding", "precio": 15000, "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0009.jpeg"},
{"id":10, "nombre": "Bronx Mr Black", "precio": 8700, "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0010.jpeg"}]



export const getFetch  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(producto)
    }, 2000)
})