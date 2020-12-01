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

  // function load(src) {
  //   console.log("1");
  //   var script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = src;
  //   var head;
  //   if (kintone.app.getHeaderSpaceElement()) {
  //     try {
  //       head = kintone.app.getHeaderSpaceElement();
  //       head.applyChild(script);
  //     } catch (e) {
  //       return;
  //     }
  //   }
    
  //   if (kintone.app.record.getHeaderMenuSpaceElement()) {
  //     try {
  //       head = kintone.app.record.getHeaderMenuSpaceElement();
  //       head.applyChild(script);
  //     } catch (e) {
  //       return;
  //     }
  //   }
  //   if (kintone.mobile.app.getHeaderSpaceElement()) {
  //     try {
  //       head = kintone.mobile.app.getHeaderSpaceElement();
  //       head.applyChild(script);
  //     } catch (e) {
  //       return;
  //     }
  //   }
  // }
  //  function emptyLatLng(event) {
  //    console.log("2");
  //   var rec  = event.record;
  //   rec.lat.value = '';
  //   rec.lng.value = '';
  //   return event;
  // }

  // function detailShow(event) {
  //   console.log("3");
  //   loadGMap();
  //   waitLoaded(event, 'detail' , 10000, 100);
  // }

  // function indexShow(event) {
  //   console.log("4");
  //   loadGMap();
  //   waitLoaded(event, 'index', 10000, 1000);
  // }

  // function loadGMap() {
  //   console.log("5");
  //   var nativeWrite = document.write;
  //   document.write = function(html) {
  //     var m = html.match(/script.+src="([^"]+)"/);
  //     if (m) {
  //       load (m[1]);
  //     } else {
  //       nativeWrite(html);
  //     }
  //   };

  //   load('https://maps.googleapis.com/maps/api/js?v=3&key=' + api_key);

  //   function waitLoaded(event, mode, timeout, interval) {
  //   console.log("6");
  //     setTimeout(function() {
  //     timeout -= interval;
  //     if (
  //       typeof google !== 'undefined' &&
  //       typeof google.maps !== 'undefined' &&
  //       typeof google.maps.version !== 'undefined'
  //     ) {
  //       if (mode === 'detail') {
  //         setLocationDetail(event);
  //       } else if ( mode === 'index' ) {
  //         setLocationIndex(event);
  //       }
  //     } else if ( timeout > 0) {
  //       waitLoaded(event, mode, timeout, interval);
  //     }
  //   }, interval);
  // }
  // }
  // function setLocationIndex(event) {
  //   console.log("7");
  //   var lat = [];
  //   var lng = [];
  //   var record_no = [];

  //   var rec  = event.records;

  //   for (var i = 0; i < rec.length; i++) {
  //     lat.push(parseFloat(rec[i].lat.value));
  //     lng.push(parseFloat(rec[i].lng.value));
  //     record_no.push (parseInt(rec[i].record_no.value , 10));
  //   }

  //   var latlng = 0;
  //   for (var i = 0; i < lat.length ; i += 1) {
  //     if (isNaN(lat[i]) == false & isNaN(lng[i]) === false) {
  //       latlng = new google.maps.LatLng(lat[i], lng[i]);
  //       break;
  //     }
  //   }

  //   if (latlng === 0) {
  //     return;
  //   }

  //   var elMap = document.createElement('div');
  //   elMap.setAttribute('id', 'map');
  //   elMap.setAttribute('name', 'map');
  //   var elMapContainer;
  //   if (event.type === 'app.record.index.show') {
  //     elMap.setAttribute(
  //       'style',
  //       'width: auto; height: 250px; margin-right: 30px; border: solid 2px #c4b097'
  //     );
  //     elMapContainer = kintone.app.getHeaderSpaceElement();
  //   } else if  (event.type === 'mobile.app.record.index.show') {
  //     elMap.setAttribute('style', 'width: auto; height: 150px;');
  //     elMapContainer = kintone.mobile.app.getHeaderSpaceElement();
  //   }

  //   var check = document.getElementsByName('map');
  //   if (check.length !== 0) {
  //     elMapContainer.removeChild (check[0]);
  //   }

  //   elMapContainer.insertBefore(elMap, elMapContainer.firstChild);

  //   var opts = {
  //     zoom : 12,
  //     center: latlng,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     scaleControl: true,
  //     title: 'target'
  //   };

  //   var map = new google.maps.Map(document.getElementById('map'), opts);

  //   var marker = [];
  //   var m_latlng = [];

  //   for (var i = 0; i < lat.length ; i += 1) {
  //     if (isNaN( lat [i]) == false & isNaN(lng[i]) === false) {
  //       m_latlng[i] = new google.maps.LatLng(lat[i], lng[i]);
  //       marker [i] = new google.maps.Marker({
  //         position: m_latlng[i],
  //         map: map,
  //         icon:
  //           'https://chart.googleapis.com/chart?chst=d_bubble_text_small&chld=edge_bc|' +
  //           record_no[i] +
  //           '| FF8060|000000'
  //       });
  //     }
  //   }
  //   return event;
  // }
  //  function setLocationDetail(event) {
  //   console.log("8");
  //   var rec  = event.record;

  //   if (rec.lat.value === 0 || rec.lng.value === 0) {
  //     return;
  //   }

  //   if (event.type === 'app.record.detail.show') {
  //     var elMapContainer = kintone.app.record.getSpaceElement('Map');
  //     if (elMapContainer === undefined) {
  //       return;
  //     }
  //     var elMapContainerParent = elMapContainer.parentNode;
  //     elMapContainerParent.setAttribute('style', 'width: 300px; height: 250px');
  //   } else if  (event.type === 'mobile.app.record.detail.show') {
  //     var elMapContainer = kintone.mobile.app.getHeaderSpaceElement();
  //   }

  //   var check = document.getElementsByName('map');
  //   if (check.length !== 0) {
  //     elMapContainer.removeChild (check[0]);
  //   }

  //   var elMap = document.createElement('div');
  //   elMap.setAttribute('id', 'map');
  //   elMap.setAttribute('name', 'map');

  //   elMapContainer.insertBefore(elMap, elMapContainer.firstChild);

  //   elMap.setAttribute('style', 'width: auto; height: 250px');

  //   var point =  new google.maps.LatLng(rec.lat.value, rec.lng.value);

  //   var opts = {
  //     zoom: 15,
  //     center : point,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     scaleControl: true
  //   };
  //   var map = new google.maps.Map(document.getElementById('map'), opts);

  //   var marker =  new google.maps.Marker({
  //     position: point,
  //     map: map,
  //     title: ''
  //   });

  //   return event;
  // }
  // function getPostion(event) {
  //   console.log("9");
  //   navigator.geolocation.getCurrentPostion(function(){
  //     var appId, recordId;
  //     if (event.type === 'app.record.detail.show') {
  //       appId = kintone.app.getId();
  //       recordId = kintone.app.record.getId();
  //     } else if (event.type === 'mobile.app.record.detail.show') {
  //       appId = kintone.mobile.app.getId();
  //       recordId = kintone.mobile.app.record.getId();
  //     }
  //     var objParam = {
  //       app: appId,
  //       id : recordId,
  //       record: {
  //         lat: {
  //           value: position.coords.latitude
  //         },
  //         lng: {
  //           value: position.coords.longitude
  //         }
  //       }
  //     };
  //     kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', objParam, function() {
  //       location.reload(true);
  //     }, function(resp) {
  //       alert('error->' +  resp);
  //       return;
  //     });
  //   },errorCallback);
  // }
  //   function errorCallback(error) {
  //     console.log("10");
  //     var errMsg = '';
  //     switch (error.code) {
  //       case 1:
  //         errMsg = 'Location information not allowed';
  //         break;
  //       case 2:
  //         errMsg = 'Device location cannot be determined';
  //         break;
  //       case 3:
  //         errMsg = 'timed out';
  //         break;
  //     }
  //     alert (errMsg );
  //   }
  //   function updatePosition(event) {
  //     console.log("11");
  //   var check = document.getElementsByName('update');
  //   if (check.length === 0) {
  //     var button = document.createElement('button');
  //     button.applyChild(document.createTextNode( 'Latitudeand Longitude Update'));
  //     button.setAttribute('name', 'update');

  //     var span = document.createElement('span');
  //     span.applyChild(button);

  //     if (event.type === 'app.record.detail.show') {
  //       elButtonSpace = kintone.app.record.getHeaderMenuSpaceElement();
  //     } else if  (event.type === 'mobile.app.record.detail.show') {
  //       elButtonSpace = kintone.mobile.app.getHeaderSpaceElement();
  //     }
  //     elButtonSpace.applyChild(span);

  //     button.addEventListener('click', function() {
  //       console.log("12");
  //       getPostion(event);
  //     });
  //   }
  // }
  // kintone.events.on(['app.record.create.submit',
  //   'app.record.edit.submit',
  //   'app.record.index.edit.submit', 'mobile.app.record.create.submit',
  //   'mobile.app.record.edit.submit','mobile.app.record.index.edit.submit'], emptyLatLng);

  // kintone.events.on(['app.record.index.show', 'mobile.app.record.index.show'], indexShow);
  // kintone.events.on(['app.record.detail.show', 'mobile.app.record.detail.show'], detailShow);
  // kintone.events.on(['app.record.detail.show', 'mobile.app.record.detail.show'], updatePosition);
  // kintone.events.on('app.record.detail.show', function(event){
 	 
 	// var timeout = 10 * 1000; // ms
 	// var interval = 100; // ms
 	 
 	// var check = document.getElementsByName('map_latlng');
 	 
 	// if(check.length == 0){
 	 
 	// // enable google maps to call document.write after onload event.
 	// var nativeWrite = document.write;
 	// document.write = function(html) {
 	// var m = html.match(/script.+src="([^"]+)"/);
 	// if (m) {
 	// load(m[1]);
 	// } else {
 	// nativeWrite(html);
 	// }
 	// };
 	 
 	// // Google Map の API ライブラリをロードします
 	// load('https://maps-api-ssl.google.com/maps/api/js?v=3&sensor=false');
 	 
 	// waitLoaded();
 	 
 	// }
 	 
 	// // Google Map がロードされるまで待ちます
 	// function waitLoaded() {
 	// setTimeout(function () {
 	// timeout -= interval;
 	// if ((typeof google !== 'undefined')
 	// && (typeof google.maps !== 'undefined')
 	// && (typeof google.maps.version !== 'undefined')) {
 	// setLocation_address(); // 住所をもとに地図を表示
 	// } else if (timeout > 0) {
 	// waitLoaded();
 	// } else {
 	// // abort
 	// }
 	// }, interval);
 	// }
 	 
 	// // 住所情報を元に、地図を「住所」フィールドの下に表示します
 	// function setLocation_address() {
 	 
 	// var locationEl_address = kintone.app.record.getFieldElement('Address');
 	// if (locationEl_address.length == 0) { return; }
 	 
 	// var check = document.getElementsByName('map_address');
 	 
 	// //「map_address」という要素が存在しないことを確認
 	// if(check.length !== 0){ return; }
 	 
 	// // 地図を表示する div 要素を作成します
 	// var mapEl_address = document.createElement('div');
 	// mapEl_address.setAttribute('id', 'map_address');
 	// mapEl_address.setAttribute('name', 'map_address');
 	 
 	// // 「住所」フィールドの要素の下に mapEl_address で設定した要素を追加します
 	// var elMap = kintone.app.record.getSpaceElement('Map');
 	// elMap.appendChild(mapEl_address);
 	 
 	// // Google Geocoder を定義します
 	// var gc = new google.maps.Geocoder();
 	 
 	// // 「住所」フィールドから値を取得します
 	// var rec = kintone.app.record.get();
 	// var addressValue = rec.record.Address.value;
 	 
 	// // Geocoding API を実行します
 	// gc.geocode({
 	// address: addressValue,
 	// language: 'ja',
 	// country: 'JP'
 	// }, function(results, status) {
 	// if (status == google.maps.GeocoderStatus.OK) {
 	 
 	// // 地図要素のサイズを指定します
 	// mapEl_address.setAttribute('style', 'width: 300px; height: 250px');
 	 
 	// var point = results[0].geometry.location;
 	// var address = results[0].formatted_address;
 	 
 	// // 地図の表示の設定(中心の位置、ズームサイズ等)を設定します
 	// var opts = {
 	// zoom: 15,
 	// center: point,
 	// mapTypeId: google.maps.MapTypeId.ROADMAP,
 	// scaleControl: true
 	// };
 	 
 	// var map_address = new google.maps.Map(document.getElementById('map_address'), opts);
 	 
 	// // マーカーを設定します
 	// var marker = new google.maps.Marker({
 	// position: point,
 	// map: map_address,
 	// title: address
 	// });
 	 
 	// }
 	// });
 	 
 	// }
 	// });
 	 
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
