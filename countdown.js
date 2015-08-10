var eventCountdownMessages = (function(running) {
        if(running) {
                return running;
        }
 
        startTime = 10; // minutes
                       
        function countdown(minutes){
                API.sendChat(minutes + "minute(s) until the fest starts!");
                if (minutes > 1) {
                        setTimeout(function(){ countdown(minutes-1) }, 60000);
                }
        };
 
 
        var countdownCommand = "!countdown";
        API.on(API.CHAT, function(data){      
                if (data.message.toLowerCase().lastIndexOf(countdownCommand, 0) === 0 && API.getUser(data.uid).role >= 2){
                        countdown(startTime);
                        setTimeout(function(){
                                API.sendChat("10 seconds until the fest starts!");
                        }, (startTime * 60000) - 10000);
                        setTimeout(function(){
                                API.sendChat("9 seconds until the fest starts!");
                        }, (startTime * 60000) - 9000);
                        setTimeout(function(){
                                API.sendChat("8 seconds until the fest starts!");
                        }, (startTime * 60000) - 8000);
                        setTimeout(function(){
                                API.sendChat("7 seconds until the fest starts!");
                        }, (startTime * 60000) - 7000);
                        setTimeout(function(){
                                API.sendChat("6 seconds until the fest starts!");
                        }, (startTime * 60000) - 6000);
                        setTimeout(function(){
                                API.sendChat("5 seconds until the fest starts!");
                        }, (startTime * 60000) - 5000);
                        setTimeout(function(){
                                API.sendChat("4 seconds until the fest starts!");
                        }, (startTime * 60000) - 4000);
                        setTimeout(function(){
                                API.sendChat("3 seconds until the fest starts!");
                        }, (startTime * 60000) - 3000);
                        setTimeout(function(){
                                API.sendChat("2 seconds until the fest starts!");
                        }, (startTime * 60000) - 2000);
                        setTimeout(function(){
                                API.sendChat("1 seconds until the fest starts!");
                        }, (startTime * 60000) - 1000);
                        setTimeout(function(){
                                API.sendChat("The fest started! Welcome to the nation!");
                        }, (startTime * 60000) - 0.1);
                        
                };
        });
})(eventCountdownMessages);
