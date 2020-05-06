//GET request
function getRequest(value) {
  
  var requestUrl = url + value.toString();
  
  var options =
      {
        "method"  : "GET",   
        "followRedirects" : true,
        "muteHttpExceptions": true
      };
  var result = UrlFetchApp.fetch(requestUrl, options);
  if (result.getResponseCode() == 200) {
    var params = JSON.parse(result.getContentText());
    //return whole JSON
    return params;
  } else {
    Logger.log("Error");
    return "error";
  }
}

//POST request
function postRequest(data){ 
  var payload = {
    "name":data.name.toString(),   //Temporary i/p 
  }
  var options = {
        "method": "post",
        "payload": payload
    };
  
  var response = UrlFetchApp.fetch(url, options);
  if (response.getResponseCode() == 200) {
    var params = JSON.parse(response.getContentText());
    return params.timestamp;
  } else {
    Logger.log("Error")
    return "error"
  }
}