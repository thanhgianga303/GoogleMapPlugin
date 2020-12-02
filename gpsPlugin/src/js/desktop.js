jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';

  kintone.events.on('app.record.index.show', function() {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);

    var spaceElement = kintone.app.getHeaderSpaceElement();
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
 	 
 	// // ヘッダに要素を追加します
 	// function load(src) {
 	// var head = document.getElementsByTagName('head')[0];
 	// var script = document.createElement('script');
 	// script.type = 'text/javascript';
 	// script.src = src;
 	// head.appendChild(script);
 	// }
 	 // Google Map の指定
    var api_key  = 'AIzaSyDs_FnWCiAV7MTy9D3USjnYVJqHrFTC4ZA';
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key='+api_key;
    document.body.appendChild(script);

    // 追加・更新画面処理
    console.log("1");

    // 詳細画面処理
    kintone.events.on('app.record.detail.show', 
    function(event) {
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
        mapElement.appendChild(mapElementDiv);

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
