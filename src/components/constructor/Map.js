import React, { Component } from 'react';
import {InfoWindow, Map, Marker, GoogleApiWrapper} from "google-maps-react";
import * as $ from "jquery";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
        this.initMap = this.initMap.bind(this);
    }
    initMap() {
        let settings = {
            initialCenter: {
                lat: 55.753706,
                lng: 37.621384
            },
            zoom: 11,
            onReady: this.setupAutocomplete,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#4761f3"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "stylers": [
                        {
                            "color": "#4761f3"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#c4ccfb"
                        },
                        {
                            "saturation": 100
                        },
                        {
                            "weight": 1
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#4761f3"
                        },
                        {
                            "saturation": -65
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        };

        return settings;
    }
    setupAutocomplete(mapProps, map) {
        /**
         * @property maps
         * @property places
         * @property Autocomplete
         * @property bindTo
         * @property Point
         * @property addListener
         * @property setVisible
         * @property getPlace
         * @property geometry
         * @property fitBounds
         * @property setCenter
         * @property setZoom
         * @property setIcon
         * @property Size
         * @property address_components
         * @property short_name
         * @property setContent
         */

        let {google} = mapProps,
            input = document.getElementById("address"),
            autoComplete = new google.maps.places.Autocomplete(input),
            infoWindow = new google.maps.InfoWindow(),
            marker = new google.maps.Marker({
                map: map,
                anchorPoint: new google.maps.Point(0, -29)
            }),
            address = "";

        autoComplete.bindTo('bounds', map);

        autoComplete.addListener('place_changed', () => {
            infoWindow.close();
            marker.setVisible(false);

            let place = autoComplete.getPlace();

            if (!place.geometry) {
                input.value = "No details available for input: '" + place.name + "'";
            } else if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }

            marker.setIcon(/** @type {google.maps.Icon} */({
                url: "../../../img/map_marker.svg",
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
            }));
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ""),
                    (place.address_components[1] && place.address_components[1].short_name || ""),
                    (place.address_components[2] && place.address_components[2].short_name || "")
                ].join(", ");
            }

            infoWindow.setContent(`<p style="text-align: left; padding: 0 20px 0 0; margin: 5px 0};"><strong>${place.name}</strong><br>${address}</p>`);
            infoWindow.open(map, marker);

            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });
        });
    };
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }
    render() {
        return (
            <Map google={this.props.google}
                 onClick={this.onMapClicked}
                 {...this.initMap()}
            >
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBsIsrJj6xi3hbA-aVYQjZkKYUAdhnbeOY"),
    libraries: ["places"]
})(MapContainer)
