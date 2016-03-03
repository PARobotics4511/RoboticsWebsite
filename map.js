  function initialize() {
        var mapOptions = {
          zoom: 19,
          center: new google.maps.LatLng(45.045179, -93.471339),
          mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
        new google.maps.Marker({map:map,position:map.getCenter()})
        
        

  google.maps.event.addListener(map, 'center_changed', function() {
    
    //a value to determine whether the map has been resized
    var size=[this.getDiv().offsetWidth,this.getDiv().offsetHeight].join('x');
    
    //when the center has changed, but not the size of the map
    if(!this.get('size') || size===this.get('size')){
       console.log('ccc');
       this.setValues({size:size,_center:this.getCenter()});         
    }
    //when the map has been resized
    else{
      google.maps.event.addListenerOnce(this,'idle',function(){console.log('rrr');
      this.setValues({size:size,center:this.get('_center')});});      
    }
  });
  //trigger the resize-event to initialize the size and _center-values
  google.maps.event.trigger(map,'center_changed',{});
}

 