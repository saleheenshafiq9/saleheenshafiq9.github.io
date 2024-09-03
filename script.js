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
        strings: ["Software Engineering", "Web Development", "Human-Computer Interaction", "UI/UX Design" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});