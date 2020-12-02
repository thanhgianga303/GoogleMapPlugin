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
  var api_key  = 'AIzaSyDrXprklOz1uuXLNQ9efC0q31nAhqxgBew';
  document.write('<script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key='+api_key+'"></script>');
 
  // kintone.events.on(["mobile.app.record.create.show"], function(event){
  //   // コールバックを設定して実行
  //   navigator.geolocation.getCurrentPosition(
  //     successCallback, 
  //     errorCallback,{enableHighAccuracy:true}
  //   );
    
  // });


  // // 処理成功時のコールバック関数
  // var successCallback = function (p){

  //   var geocoder = new google.maps.Geocoder();
  //   var latlng   = new google.maps.LatLng(
  //     p.coords.latitude,
  //     p.coords.longitude
  //   );
    
  //   geocoder.geocode({latLng: latlng},
  //     function(res,status){
  //       console.log("1");
  //       if(status == google.maps.GeocoderStatus.OK){
  //           console.log("2");
  //           // フィールドコード「address」に取得した住所をセットする
  //           var  data = kintone.mobile.app.record.get();
  //           data["record"]["address"].value = res[0].formatted_address;
  //           kintone.mobile.app.record.set(data);
            
  //       }else{
  //         console.log("3");
  //         alert("geocode 取得に失敗 :"+status);
  //       }
  //     }
  //   );
  // }

  // // 処理失敗時のコールバック関数
  // var errorCallback = function (e){
  //   console.log("4");
  //   alert(e.message);
  // }
    // var api_key  = 'AIzaSyDs_FnWCiAV7MTy9D3USjnYVJqHrFTC4ZA';
    // var script = document.createElement('script');
    // script.src = 'https://maps.googleapis.com/maps/api/js?key='+api_key;
    // document.body.appendChild(script);

    // 追加・更新画面処理
    console.log("1");

    // 詳細画面処理
    kintone.events.on('mobile.app.record.detail.show', 
    function(event) {
      console.log("3");
      console.log("33");
        var record = event.record;
        // if (!record['緯度']['value'] && !record['経度']['value']) {
        //   console.log("4");
        //     return event;
        // }
	      console.log("2");
        var latY = record['緯度']['value'];
        var lngX = record['経度']['value'];

        var mapElement = kintone.app.record.getSpaceElement('map_latlng');
        var mapElementDiv = document.createElement('div');
        mapElementDiv.setAttribute('id',   'map');
        mapElementDiv.setAttribute('name', 'map');
        mapElementDiv.setAttribute('style', 'width: 800px; height: 400px');
        // mapElement.appendChild(mapElementDiv);

        // マップの表示(経度、緯度、倍率、最大倍率)
        dysplayMap(lngX, latY, 18, record['住所']['value']);
    });

    // Google Map の表示
    function dysplayMap(fx,fy,zoom,pointName){
  	console.log("3");
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

  
})(jQuery, kintone.$PLUGIN_ID);
