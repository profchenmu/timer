;(function(){
    $.fn.simpleTimer = function(opt){
        var options = merge(opt);
        this.each(function(){
            var timerHolder = $(this);           
            main(timerHolder, options.callback, options.time);
        });
        return this;
    }
    function merge(opt){
        var defaults = {
            callback: null,
            time: null
        }
        return $.extend({}, defaults, opt);
    }
    function setTime(timerHolder, timeText){
        timerHolder.text(timeText)
    }
    function checkNaN(timerHolder){
        var timerText = timerHolder.text();
        if(isNaN(timerText)){
            console.warn(timerText + ' is not a number!');
            return false;
        }else{
            return true;
        }
    }
    function main(timerHolder, callback, timeText){
        if(timeText){
            timerHolder.text(timeText)
        }
        if(checkNaN(timerHolder)){
            setTimeout(function(){
                timerFun(timerHolder);
            },1000);
        }
        function timerFun(timerHolder){
            var timer = timerHolder.text();
            if(timer>0){
                timer--;
                timerHolder.text(timer);
                setTimeout(function(){
                    timerFun(timerHolder);
                },1000);
            }else{
                if(callback){
                    callback();
                }
            }
        }
    }
})(jQuery);