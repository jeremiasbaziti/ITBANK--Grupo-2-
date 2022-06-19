var url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
var urlFecha = "https://www.dolarsi.com/api/api.php?type=ultima"

ultimaActualizacion();

cotizaciones();


function ultimaActualizacion(){
    var info = document.getElementById("actualizacion")

    info.innerHTML = "";

    fetch(urlFecha)
    .then(response => response.json())
    .then(data => {
            info.innerHTML += `
            Actualizado:  ${data[0].ultima.zona12.fecha} ${data[0].ultima.zona12.hora}            
            `;
    });    
}

function cotizaciones() {
    
    ultimaActualizacion();
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
    document.getElementById("oficial").innerHTML = `
    Compra: $${data[0].casa.compra} <br> 
    Venta: $${data[0].casa.venta} <br>
    Variacion: ${data[0].casa.variacion}%`

    document.getElementById("blue").innerHTML = `
    Compra: $${data[1].casa.compra} <br> 
    Venta: $${data[1].casa.venta} <br>
    Variacion: ${data[1].casa.variacion}%`

    document.getElementById("ccl").innerHTML = `
    Compra: $${data[3].casa.compra} <br> 
    Venta: $${data[3].casa.venta} <br>
    Variacion: ${data[3].casa.variacion}%`

    document.getElementById("soja").innerHTML = `
    Compra: $${data[2].casa.compra} <br> 
    Venta: $${data[2].casa.venta} <br>
    Variacion: ${data[2].casa.variacion}%`

    document.getElementById("bolsa").innerHTML = `
    Compra: $${data[4].casa.compra} <br> 
    Venta: $${data[4].casa.venta} <br>
    Variacion: ${data[4].casa.variacion}%`

    document.getElementById("turista").innerHTML = `
    Compra: $${data[6].casa.compra} <br> 
    Venta: $${data[6].casa.venta} <br>
    Variacion: ${data[6].casa.variacion}%`
    })
}

function descargar(){
    fetch(url)
    .then(response =>response.json())
    .then(data =>{
        var json = JSON.stringify(data);
        var blob = new Blob ([json], {type: "aplication/json"});
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a")
        a.href = url;
        a.download = "cotizaciones.json";
        a.click();
    } )
}
