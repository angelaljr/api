let endpoint = `https://dog.ceo/api/breeds/image/random`;

let imageElement = document.getElementById("dogimg");

fetch(endpoint)
	.then(function(response){
		return response.json();
	})
	.then(function(jsonData){
		imageElement.src = jsonData.message;
	})

