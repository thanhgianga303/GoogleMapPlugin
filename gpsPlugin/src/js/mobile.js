jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';

  kintone.events.on('mobile.app.record.index.show', function() {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);

    var spaceElement = kintone.mobile.app.getHeaderSpaceElement();
    var fragment = document.createDocumentFragment();
    var headingEl = document.createElement('h3');
    var messageEl = document.createElement('p');

    messageEl.classList.add('plugin-space-message');
    messageEl.textContent = config.message;
    headingEl.classList.add('plugin-space-heading');
    headingEl.textContent = 'Hello kintone plugin!';

    fragment.appendChild(headingEl);
    fragment.appendChild(messageEl);
    spaceElement.appendChild(fragment);
  });
  
  //Set api key for script
  var api_key  = 'AIzaSyDrXprklOz1uuXLNQ9efC0q31nAhqxgBew';
  document.write('<script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key='+api_key+'"></script>');

  kintone.events.on(["mobile.app.record.create.show"], function(event){
    // get current postion
    navigator.geolocation.getCurrentPosition(
      function(res){
        setMapForCurrentPosition(res,event);
      }, 
      errorCallback,
      {enableHighAccuracy:true}
    );
    
  });
  // success - navigator.geolocation.getCurrentPosition
  // var successCallback = function (p){
  //   console.log("lat Y 1: " + p.coords.latitude);
  //   console.log("lng X 1: " +p.coords.longitude);
    
    // var geocoder = new google.maps.Geocoder();
    // var latlng   = new google.maps.LatLng(
    //   p.coords.latitude,
    //   p.coords.longitude
    // );
    
    // geocoder.geocode({latLng: latlng},
    //   function(res,status){
    //     console.log("1");
    //     if(status == google.maps.GeocoderStatus.OK){
    //         console.log("2");
    //         console.log(res[0].formatted_address);
    //         // フィールドコード「address」に取得した住所をセットする
    //         var  data = kintone.mobile.app.record.get();
    //         data["record"]["address"].value = res[0].formatted_address;
    //         kintone.mobile.app.record.set(data);
            
    //     }else{
    //       console.log("3");
    //       alert("geocode 取得に失敗 :"+status);
    //     }
    //   }
    // );
  // }

  // error - navigator.geolocation.getCurrentPosition
  var errorCallback = function (e){
    console.log("4");
    alert(e.message);
  }
    
     
  function setMapForCurrentPosition(res,event) {  
    initMapElement();
    console.log("Finihed init MapElement!");

    var record = event.record;
    var latY = res.coords.latitude;
    var lngX = res.coords.longitude;
    displayMap(lngX, latY, 18, record['address']['value']);
  }

    // Event detail show
    kintone.events.on('mobile.app.record.detail.show', 
      function(event) {
        initMapElement();

        var record = event.record;
        var latY = record['latY']['value'];
        var lngX = record['lngX']['value'];
        displayMap(lngX, latY, 18, record['address']['value']);
      }
    );

    // Display Google Map 
    function displayMap(fx,fy,zoom,pointName){
      var point = new google.maps.LatLng(fy,fx);
      var opts = {
          zoom: zoom,
          center: point,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scaleControl: true
      };

      var map = new google.maps.Map(document.getElementById('map'), opts);
      var marker = new google.maps.Marker({
          position: point,
          map: map,
          title: pointName
      });
    }
    // Init map element
    function initMapElement()
    {
      var mapElement = kintone.mobile.app.record.getSpaceElement('map_latlng');
      var mapElementDiv = document.createElement('div');
      mapElementDiv.setAttribute('id',   'map');
      mapElementDiv.setAttribute('name', 'map');
      mapElementDiv.setAttribute('style', 'width: 800px; height: 400px');
      mapElement.appendChild(mapElementDiv);
    }
  
})(jQuery, kintone.$PLUGIN_ID);
