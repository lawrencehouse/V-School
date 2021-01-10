const xhr = new XMLHttpRequest();


xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // 7-9 Gets the data
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const pokemon = data['objects'][0]['pokemon'];
        // 11-15 Maps the data by pokemon name
        pokemon.map(name => {
            list = document.createElement('li');
            order = document.getElementById('pokelist');
            list.innerHTML = `${name.name}`;
            order.appendChild(list);
        })
    }
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();