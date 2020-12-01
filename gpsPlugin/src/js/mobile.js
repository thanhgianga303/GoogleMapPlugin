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
 
  kintone.events.on(["mobile.app.record.create.show"], function(event){
    // コールバックを設定して実行
    navigator.geolocation.getCurrentPosition(
      successCallback, 
      errorCallback,{enableHighAccuracy:true}
    );
    
  });


  // 処理成功時のコールバック関数
  var successCallback = function (p){

    var geocoder = new google.maps.Geocoder();
    var latlng   = new google.maps.LatLng(
      p.coords.latitude,
      p.coords.longitude
    );
    
    geocoder.geocode({latLng: latlng},
      function(res,status){
        console.log("1");
        if(status == google.maps.GeocoderStatus.OK){
            console.log("2");
            // フィールドコード「address」に取得した住所をセットする
            var  data = kintone.mobile.app.record.get();
            data["record"]["address"].value = res[0].formatted_address;
            kintone.mobile.app.record.set(data);
            
        }else{
          console.log("3");
          alert("geocode 取得に失敗 :"+status);
        }
      }
    );
  }

  // 処理失敗時のコールバック関数
  var errorCallback = function (e){
    console.log("4");
    alert(e.message);
  }
  

  
})(jQuery, kintone.$PLUGIN_ID);
