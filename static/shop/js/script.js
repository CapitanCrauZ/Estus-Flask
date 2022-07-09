(function(d,w){
    //Evento para ver si el DOM está listo
    d.onreadystatechange = function(){
        if(d.readyState === 'interactive'){
            //Podemos comenzar a cargar las funciones con el DOM
            genMain();
        }
    }
    //De aquí hacía abajo comienza el código

    const main = document.querySelector("main");

    function genMain(){
        //Creación de container
        let container = document.createElement('div');
        container.classList.add('container');

        //Creación de titulo
        let title = document.createElement('h1');
        title.innerText = "Shop";

        //Creación de sección
        let section = document.createElement('section');
        section.classList.add('section');

        //Creación de tabla
        let table = document.createElement('table');
        table.classList.add('table');

        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let tfoot = document.createElement('tfoot');

        let trName = document.createElement('tr');
        let trPrice = document.createElement('tr');
        let trStock = document.createElement('tr');

        let thName = document.createElement('th');
        let thPrice = document.createElement('th');
        let thStock = document.createElement('th');

        let button = document.createElement('button');
        button.innerText = "Submit";
        
        //Asignación Jerárquica

        //Main
        main.appendChild(title);
        main.appendChild(container);

        //Container
        container.appendChild(section);

        //Section
        section.appendChild(table);

        //Table
        table.appendChild(thead);
        table.appendChild(tbody);
        table.appendChild(tfoot);

        //THead
        thead.appendChild(trName);

        //Columns
        trName.append(thName);

        //TBody
        tbody.appendChild(trPrice);
        tbody.appendChild(trStock);

        //Columns
        trPrice.appendChild(thPrice);
        trStock.appendChild(thStock);

        //TFoot
        tfoot.appendChild(button)

    }

})(document, window);