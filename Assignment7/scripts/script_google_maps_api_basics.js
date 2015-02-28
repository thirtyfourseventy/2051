// JavaScript Document

// Made up function name to initialize the Google Maps
// generating function
initMap();

// Made up function for generating a Google Map
function initMap(){
	
	// The containing element that the generated
	// Google Map will go into
	var mapOut = document.getElementById('map_03');

	// A JavaScript Object used for storing the
	// options that the generated Google Map will
	// use
	var mapOptions = {
	  // center parameter is generated by passing in a latitude
	  // and a longitude value of a location
	  center: new google.maps.LatLng(49.2832594, -123.1152064),
	  // Zoom level controls how zoomed in or zoomed out the
	  // the Google Map is
	  // Higher numbers mean a higher zoom level 
	  zoom: 8
	};
	
	// Create a new Google Map object
	// the two parameters are:
	// 1. The JavaScript HTML element that the 
	// map will go into...
	// 2. The map options that are applied to 
	// the generated Google Map
	var map = new google.maps.Map(mapOut, mapOptions);
	
}

