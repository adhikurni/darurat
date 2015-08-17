angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/ambulans.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeAmbulans = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.ambulans = function() {
    $scope.modal.show();
  };


  // Perform the login action when the user submits the login form
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('JalurCtrl', function($scope) {
 
        var myLatlng = new google.maps.LatLng(-6.891160, 107.610911);
        var gedSate = new google.maps.LatLng(-6.902493, 107.618727);
        

        var mapOptions = {
            center: myLatlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        function displayRoute(origin, destination, service, display) {
          service.route({
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
          }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              display.setDirections(response);
            } else {
              alert('Could not display directions due to: ' + status);
            }
          });
        }

        function computeTotalDistance(result) {
          var total = 0;
          var myroute = result.routes[0];
          for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
          }
          total = total / 1000;
          document.getElementById('total').innerHTML = total + ' km';
        }
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({
          draggable: true,
          map: map
        });

        directionsDisplay.addListener('directions_changed', function() {
          computeTotalDistance(directionsDisplay.getDirections());
        });

        displayRoute(myLatlng, gedSate, directionsService,
            directionsDisplay); 
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(-6.891160, 107.610911),
            map: map,
            title: "My Location",
            icon: 'img/user-tag.png'
        });

        var amb1 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.897381, 107.612676),
            map: map,
            title: "Kebakaran",
            icon: 'img/damkar-tag.png'
        });

        var amb2 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.893680, 107.604055),
            map: map,
            title: "Pohon Tumbang",
            icon: 'img/pohon-tag.png'
        });

        var amb3 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.895725, 107.607017),
            map: map,
            title: "Banjir",
            icon: 'img/banjir-tag.png'
        });

        var pol1 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.901285, 107.617660),
            map: map,
            title: "Kecelakaan",
            icon: 'img/ambulans-tag.png'
        });

        var pol2 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.892871, 107.599024),
            map: map,
            title: "Kecelakaan",
            icon: 'img/ambulans-tag.png'
        });

  var amb1c = '<h4>Kebakaran</h4>'+"<p>Jl. Ir. H Juanda</p>";
  var amb2c = '<h4>Pohon Tumbang</h4>'+"<p>Jl. Cihampelas</p>";
  var pol1c = '<h4>Kecelakaan</h4>'+"<p>Jl. Diponegoro</p>";

  var infowindow1 = new google.maps.InfoWindow({
    content: amb1c
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: amb2c
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: pol1c
  });

  amb1.addListener('click', function() {
    infowindow1.open(map, amb1);
  });

  amb2.addListener('click', function() {
    infowindow2.open(map, amb2);
  });

  pol1.addListener('click', function() {
    infowindow3.open(map, pol1);
  });
 
        $scope.map = map;
        $scope.reloading = function() {
          window.location.reload(true);
        }
 
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SettingsCtrl', function($scope, $stateParams) {
})

.controller('PlusCtrl', function($scope, $stateParams) {
})

.controller('MaplistCtrl', function($scope) {
 
        var myLatlng = new google.maps.LatLng(-6.891160, 107.610911);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(-6.891160, 107.610911),
            map: map,
            title: "My Location",
            icon: 'img/user-tag.png'
        });

        var amb1 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.893871, 107.613695),
            map: map,
            title: "Santo Borromeus",
            icon: 'img/ambulans-tag.png'
        });

        var amb2 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.892156, 107.603557),
            map: map,
            title: "RS Advent",
            icon: 'img/ambulans-tag.png'
        });

        var amb3 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.897976, 107.598197),
            map: map,
            title: "RS Hasan Sadikin",
            icon: 'img/ambulans-tag.png'
        });

        var pol1 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.882893, 107.610927),
            map: map,
            title: "Polsekta Coblong",
            icon: 'img/polisi-tag.png'
        });

        var pol2 = new google.maps.Marker({
            position: new google.maps.LatLng(-6.887861, 107.596443),
            map: map,
            title: "Polsekta Sukajadi",
            icon: 'img/polisi-tag.png'
        });

  var amb1c = '<h4>Santo Borromeus</h4>'+"<p>Jl. Ir. H Juanda No. 100, Kec. Coblong</p>";
  var amb2c = '<h4>RS Advent</h4>'+"<p>Jl. Cihampelas No. 161, Kec. Coblong</p>";
  var pol1c = '<h4>Polsekta Coblong</h4>'+"<p>Jl. Sangkuriang No. 10A, Kec. Coblong</p>";

  var infowindow1 = new google.maps.InfoWindow({
    content: amb1c
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: amb2c
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: pol1c
  });

  amb1.addListener('click', function() {
    infowindow1.open(map, amb1);
  });

  amb2.addListener('click', function() {
    infowindow2.open(map, amb2);
  });

  pol1.addListener('click', function() {
    infowindow3.open(map, pol1);
  });
 
        $scope.map = map;
        $scope.reloading = function() {
          window.location.reload(true);
        }
 
})

.controller('TimelineCtrl', function($scope) {
  $scope.bencana = [
    { title: 'Kebakaran', id: 1, tempat: "Jl. Ir. H Juanda", lat: -6.892274, longi: 107.613154, src:"img/kebakaran.jpg"},
    { title: 'Pohon Tumbang', id: 2, tempat: "Jl. Cihampelas", lat: -6.893680, longi: 107.604055 , src:"img/pohon.jpg"}, 
    { title: 'Banjir', id: 3, tempat: "Jl. Pelesiran", lat: -6.895725, longi: 107.607017, src:"img/banjir.jpg"}, 
    { title: 'Kecelakaan', id: 4, tempat: "Jl. Diponegoro", lat: -6.901285, longi: 107.617660, src:"img/celaka1.jpg"}, 
    { title: 'Kecelakaan', id: 5, tempat: "Jl. Sederhana", lat: -6.892871, longi: 107.599024, src:"img/celaka2.jpg"} 
  ];
})

.controller('ShakeCtrl', function($scope) {
  var toggle = false;
  var onShake = function () {
    alert('Pesan darurat akan dikirim ke instansi terdekat dalam 10 detik. Non-aktifkan mode emergency shake untuk membatalkan');

  };

  var onError = function () {
    // Fired when there is an accelerometer error (optional)
  };
  $scope.aleirt = function() {

        if (toggle === true) {
            document.getElementById('shake-tog').src  = 'img/aktif.png';
            shake.startWatch(onShake, 30 /*, onError */);
        } else {
           document.getElementById('shake-tog').src = 'img/non-aktif.png';
           shake.stopWatch();
        }
        toggle = !toggle; 
    }


})

.controller("FotoCtrl", function($scope, $cordovaCamera) {
 
    $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 390,
            targetHeight: 125,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            alert("camera error");
        });
    }
 
});


