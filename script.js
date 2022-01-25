$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    var typed = new Typed(".typing", {
        strings: ["Web Development", "UX Design", "Data Analysis", "Freelancing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});