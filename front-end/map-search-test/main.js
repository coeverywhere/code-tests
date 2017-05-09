function initMap() {

	// Create a map object and specify the DOM element for display.
	const map = new google.maps.Map(document.querySelector('.map'), {
		center: {
			lat: -34.397,
			lng: 150.644
		},
		scrollwheel: false,
		zoom: 8,
	})

}
