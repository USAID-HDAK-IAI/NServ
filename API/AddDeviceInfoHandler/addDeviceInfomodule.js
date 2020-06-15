const addDeviceInfoApi={
	
	addDeviceInfo : (request,response) => {
              
              let datetime=new Date();
		          /*
              const fsa = require('fs');
              //const bodyParser = require('body-parser');

              const newdata={
                                        "Id":"id151",
                                        "Info":"Headphone",
                                        "Weight":"124",
                                        "Sender":"bobobuya",
                                        "Receiver":"Uwera",
                                        "Phone": "3552574454",
                                        "Departure":"Kg45",
                                        "Destination": "KK333",
                                        "Location":"KL153",
                                        "Price": "1217",
                                        "Status":"In Progress"           
                            }

 

              let filedata=fsa.readFileSync("./API/test.json", (err, data) => {
              if (err) {return err;}else{return data;}

            });

            const jsondata=JSON.parse(filedata);
            //console.log(jsondata);

            const id1 =newdata.Sender, t=newdata.Id;

            //console.log(jsondata.users[id1].Orders);

            //jsondata.users[id1].Orders.NewPropertyName=t;
            jsondata.users[id1].Orders[t]=newdata;




            //console.log(jsondata.users[id1].Orders[t]);
            //console.log(jsondata.users[id1]);

            /*fsa.writeFile('./API/test.json', JSON.stringify(jsondata), (err) => {
                           if (err) throw err;
                              //console.log('The Jason file has added 1 user and has been saved!');
                      });*/
            console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            console.log("Broswer Info: "+request.useragent['browser']);
            console.log("Browser Version: "+request.useragent['version']);
            console.log("Operating System: "+request.useragent['os']);
            console.log("Platform: "+request.useragent['platform']);
            console.log("Android: "+request.useragent['isAndroid']);
            console.log("iPhone: "+request.useragent['isiPhone']);
            console.log("Mobile: "+request.useragent['isMobile']);
            console.log("IP: "+request.ip);
            console.log("Date & Time: "+datetime);
            //console.log(request.headers);
            console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            response.set('Content-Type','text/plain');
            response.send('Device Added!');         
	   }

};

module.exports= addDeviceInfoApi;

/*export function addidparcelsApifunction(request,response){
  return addidparcelsApi.addidparcels(request,response);

}*/