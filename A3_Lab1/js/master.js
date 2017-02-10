// JavaScript Document

(function() {
	var carImages = document.querySelectorAll('div img'),
		carModelNum = document.querySelector('h4 span'),
		carName = document.querySelector('.modelName'),
		carPrice = document.querySelector('.priceInfo'),
		carDesc = document.querySelector('.modelDetails'),
		httpRequest;
	
		function makeRequest() {
			httpRequest = new XMLHttpRequest();
//can name this ^ part whatever
			
			if (!httpRequest) {
				console.log('Your browser doesnt support this');
				return false;
			}
			
			httpRequest.onreadystatechange = showCarInfo; // YOU FORGOT THE Y IN READYSTATECHANGE -- your original file was .onreadstatechange which was breaking everything
			httpRequest.open('GET', 'includes/ajaxQuery.php' + '?model=' + this.id); ////? = a query parameter
			httpRequest.send();
		}
	
	function showCarInfo() {
		if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200)
			{
				//parse stringified result
				var carData = JSON.parse(httpRequest.responseText);
				
				///carName.firstChild.nodeValue = carData.pokeName;
				
				///[].forEach.call(document.querySelectorAll('.hidden'), function(item) {
				///	item.classList.remove('hidden'); // YOU MISSPELLED CLASSLIST (you had a lowercase l)
				///});
				
				///critterImage.src="images/" + carData.pokeImage + '.png';
				carModelNum.firstChild.nodeValue = ' MINI COOPER ' + carData.model;
				
				carName.firstChild.nodeValue = carData.modelName;
				
				carPrice.firstChild.nodeValue = carData.pricing;
				
				carDesc.firstChild.nodeValue = carData.modelDetails;

			}
	}
	
		//event handling
	[].forEach.call(carImages, function(img) {
		img.addEventListener('click', makeRequest, false);
	});
	
})();


/*
// JavaScript Document

(function() {
console.log('fired');
	$('nav li').on('click', function() {
	$.getJSON('includes/getPokemon.php', { critter : this.id }, function(data)
			  {
		console.log(data);
		
		$('.click-header').text(data.pokeName);
		$('.hidden').removeClass('hidden');
		$('.pokemon-large').attr('src', 'images/' + data.pokeImage + '.png');
		$('.content-section p').text(data.pokeDesc);
		$('.habitat-header').text(data.pokeName + " lives here!");
		$('.habitat').attr('src', 'images/' + data.bgImage + '.jpg');
	})
})

})();*/