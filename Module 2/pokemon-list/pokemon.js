const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        // document.getElementById("demo1").textContent = "JSON results: " + jsonData;
        document.getElementById("demo2").textContent = "Parsed JSON's 'name' property: " + data.name;
        const pokemon = data['objects'][0]['pokemon'];
        console.log(pokemon);
    }
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

allPokemon = (pokemon) => pokemon.map(pokename => document.getElementById('pokename').textContent = pokename)

allPokemon(pokemon)