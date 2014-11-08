module.exports = function(map) {
	var geocoder = new google.maps.Geocoder();

	var addrInputEl = document.getElementById('geoJumper');

	addrInputEl.addEventListener('keydown', function codeAddress(ev) {
			if (ev.keyCode === 13) {
				var address = document.getElementById('geoJumper').value;
				geocoder.geocode( { 'address': address}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						var loc = results[0].geometry.location;
						map.moveTo([loc.lat(), loc.lng()]);
						console.log("success");
					} else {
						alert('Geocode was not successful for the following reason: ' + status);
					}
				});
			}

		}
	);
};
