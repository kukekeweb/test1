function play_se(){
    var フフフフフフォートナイト = new Audio('フフフフフォートナイト.mp3');
    フフフフフフォートナイト.play();
}


$(function(){
    $('#1曲目').click(play_se);
});


 　　//モーダル表示
    $('.modal').modal({dismissible: false});
    $('#alert').modal('open');
    $('#close').click(function(){
       $('#alert').modal('close');
    });