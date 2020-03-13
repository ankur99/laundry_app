var index = 0;

setInterval(function(){ 
    index=index+1;
    $('.jumbotron').css('background-image','url(backgrounds/'+index+'.jpg)');   
    if(index==12){
        index = 0
    }
}, 2000);
