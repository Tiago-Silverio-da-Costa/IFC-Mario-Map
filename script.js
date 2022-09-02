function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: -27.015952620301757 ,  lng:-48.65920371338841},
        zoom: 18,
        mapId: '58c0ff714c3fb445'
	});

	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
      //decoration  
			"Yoshi's House",
			-27.016952308902685,
			-48.66020327511921,
			'castle.svg',
			50,
			40,
		],
		[
      // decoration 
			'You Are Here',
			-27.016663380630508,
      -48.660650875282684,
			'pipe.svg',
			30,
			47.8,
		],
		[
      // decoration 
			'Donut Plains',
			-27.016764200881912,
			-48.65885022127669,
			'yoshi_house.svg',
			50,
			60.7,
		],
    [
      // decoration 
			'Donut Plains',
			-27.013700449057772,
			-48.66285805891393,
			'ghosthouse.svg',
			50,
			60.7,
		], 
    [
      // decoration 
			'Donut Plains',
			-27.015949884311322,
			-48.66104086951081,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
      //POINTS
    [ 
			'BIBLIOTECA',
			-27.01674568469059,
			-48.659272757504795,
			'pointer.svg',
			50,
			60.7,
		],
    [ 
			'BLOCO J',
			-27.016877498689112,
			-48.660634995363324,
			'pointer.svg',
			50,
			60.7,
		],
    [ 
			'ALOJAMENTO',
			-27.014643990149537,
			-48.65770953305931,
			'pointer.svg',
			50,
			60.7,
		],
    [ 
			'CÃO GUIA',
			-27.01416696292112,
			-48.66538080576615,
			'pointer.svg',
			50,
			60.7,
		]


	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}