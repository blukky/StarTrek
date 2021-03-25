jQuery(function () {
    let header = $("#navbar");
    let height = $("#news").offset()['top'];
    $(window).scroll(function () {
        let ScrollPos = $(this).scrollTop();
        if (ScrollPos>=height){
            header.css({'background-color':'#030721'});

        }
        else{
            header.css({'background-color':''});
        }
    });
});