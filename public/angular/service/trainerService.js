var app=angular.module('app');
app.factory('trainerService',function ($http,$window) {
return{

    updatetrainerdatamanage:function(savedata){
  
      console.log("trainerService"+JSON.stringify(savedata));
      
    var promise = $http.post('/updatetrainerdatamanage',savedata).then(function(response){
        console.log("Service response"+JSON.stringify(response));
        alert("fr"+JSON.stringify(response))
        return response;
      });
      return promise; 

    },

addTrainer:function(savedata){

    savedata.trainerstatus=1;
     savedata.addeddate=new Date();
  var services = $http.post('/addtrainerdata',savedata).then(function(response)
  { 
    
      return response;
      console.log("service"+JSON.stringify(response))
  });
   return services;
},
removeTrainermgnt:function(id){
  console.log(id);
        var remove=$http.post('/removeTrainermgnttype',id).then(function(response){
           console.log("removeVendor response"+JSON.stringify(response));
           return response;
        });
        return remove;
},
 
Ontraineremailcheck:function(data)
{
  console.log("data"+JSON.stringify(data))
  var email=$http.post('/Ontraineremailcheck',data).then(function(response)
  {
    return response;
  });
  return email;
},
Ontrainerphonecheck:function(data)
{
  console.log("data"+JSON.stringify(data))
  var email=$http.post('/Ontrainerphonecheck',data).then(function(response)
  {
    return response;
  });
  return email;
},


getTrainermgnt:function(activestatus){
  console.log("Service::"+activestatus);
  if (activestatus==false) {
    var promise = $http.get('/getTrainermgntdata').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }else{
      var promise = $http.get('/getallTrainermgnt').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }
  
},


removeTrainer:function(removeitem){
  var promise = $http.post('/removetrainer',removeitem).then(function(response){
        return response;
      });
      // Return the promise to the controller
      return promise; 
},
activeTrainer:function(activeitem){
  var promise = $http.post('/statustrainer',activeitem).then(function(response){
        return response;
      });
      // Return the promise to the controller
      return promise; 
},


getTrainer:function(activestatus){
  console.log("Service::"+activestatus);
  if (activestatus==false) {
    var promise = $http.get('/gettrainer').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }else{
      var promise = $http.get('/getalltrainer').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }
	
},
getCompetency:function(activestatus){
  console.log("Service::"+activestatus);
  if (activestatus==false) {
    var promise = $http.get('/getcompetency').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }else{
      var promise = $http.get('/getallcompetency').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }
  
},

getCertification:function(activestatus){
  console.log("Service::"+activestatus);
  if (activestatus==false) {
    var promise = $http.get('/getcertification').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }else{
      var promise = $http.get('/getallcertification').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }
  
},


getVendor:function(activestatus){
  console.log("Service::"+activestatus);
  if (activestatus==false) {
    var promise = $http.get('/getvendor').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }else{
      var promise = $http.get('/getallvendor').then(function(response){
        // console.log("Service response"+JSON.stringify(response));
        return response;
      });
      // Return the promise to the controller
      return promise; 
    }
  
},
getTags:function()
{
  var data=$http.get('/getTags').then(function(response)
  {
    return response;

  });
  
  return data;
},
}
});