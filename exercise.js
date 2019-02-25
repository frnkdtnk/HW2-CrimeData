var exercise = {};

exercise.countRecords = function(data){
    return data.length;
};

exercise.countDistrictCrimes = function(data,district){
    number=0;
    function add(item,counter,array){
        if (item[19]==district){number+=1};
    }
    data.forEach(add);
     return number; 
 };
 
 exercise.countPrimaryType = function(data,primaryType){
    number=0;
    function add(item,counter,array){
        if (item[13]==primaryType){number+=1};
    }
    data.forEach(add);
     return number;
 };
 
 exercise.countLocation = function(data,location){
     number=0;
    function add(item,counter,array){
        if (item[15]==location){number+=1};
    }
    data.forEach(add);
     return number;
 };
 
 
 exercise.buildLatLngPoint = function(crime){
     
     var point = {};    
     point.latitude = crime[26];
     point.longitude = crime[28];
     return point;    
     
       
     
 };
 

