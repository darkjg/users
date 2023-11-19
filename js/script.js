const lista = document.getElementById("listaUsuarios");
fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => {
        if (!Response.ok) {
            throw new Error("Error en la solicitud");
        } else {
            return Response.json();
        }
    }).then(datos => {
       

        datos.forEach((dato, i) => {
            var li = document.createElement('li');
            let edad =Math.floor(Math.random() * 120);
            li.setAttribute('id', dato.id);
            lista.appendChild(li);
            li.innerHTML +=li.innerHTML+
           `<div id=${dato.id} class="usuario">    
                <div class="arriba">       
                    <ul>
                        <li>${dato.name}</li>
                        <li>${edad}</li>
                        <li>${dato.username}</li>                    
                        <li>${dato.phone}</li>
                        <li>${dato.email}</li>
                    </ul>
                    <img id=${dato.id} src=./assets/img/${dato.id }.jpeg >
                </div>
                <p>${dato.company.name}</p>
                <p>${dato.address.street} ${dato.address.suite} ${dato.address.city}</p>
            </div>`;            
            console.log(dato, i);

        });
    })