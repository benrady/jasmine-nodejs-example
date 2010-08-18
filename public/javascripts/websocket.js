mon.webSocket = function(port) {
  return new WebSocket("ws://" + window.location.hostname + ':' + port);
};

mon.webSocket.getAllMetadata = function(processAllMetadata) {
  var managerSocket = mon.webSocket(28000);
  managerSocket.onopen = function(){ managerSocket.send('monitoringmetadata');};
  managerSocket.onmessage = function(message){ 
    processAllMetadata($.parseJSON(message.data));
    managerSocket.onclose = function() {};
    managerSocket.close();
  };
  managerSocket.onclose = function() {
    writeInfo('Cannot open Web Socket.  Attempting to reconnect');
    retry(function(){mon.webSocket.getAllMetadata(processAllMetadata);}, 5000);
  };
};

mon.webSocket.getMetadataForCollection = function(collectionName, processCollectionMetadata){
  var managerSocket = mon.webSocket(28000);
  managerSocket.onopen = function(){ managerSocket.send(collectionName);};
  managerSocket.onmessage = function(message){ 
     setTimeout(function (){
        processCollectionMetadata($.parseJSON(message.data));
        managerSocket.onclose = function() {};
        managerSocket.close();
     }, 1000);
   };
   managerSocket.onclose = function() {
     writeInfo('Cannot open Web Socket.  Attempting to reconnect');
     retry(function(){mon.webSocket.getMetadataForCollection(collectionName, processCollectionMetadata);}, 5000);
   };
};
