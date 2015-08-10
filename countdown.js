var eventCountdownMessages = (function(running) {
        if(running) {
                return running;
        }
 
        startTime = 10; // minutes
                       
        function countdown(minutes){
                API.sendChat(minutes + "minute(s) until the event starts!");
                if (minutes > 1) {
                        setTimeout(function(){ countdown(minutes-1) }, 60000);
                }
        };
 
 
        var countdownCommand = "!countdown";
        API.on(API.CHAT, function(data){      
                if (data.message.toLowerCase().lastIndexOf(countdownCommand, 0) === 0 && API.getUser(data.uid).role >= 2){
                        countdown(startTime);
                        setTimeout(function(){
                                API.sendChat("10 seconds until the event starts!");
                        }, (startTime * 60000) - 10000);
                };
        });
})(eventCountdownMessages);
