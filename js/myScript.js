




$.fn.scrollView = function () {
    return this.each(function () {
    	//returns wherever you want to scroll to
        $('html, body').animate({
            scrollTop: $(this).offset().top + 20
        }, 1000);
    });
}

$(document).ready(function() {
var slidesAmount = 4,
currentSlide = 0,
infoAmount = 3,
currentinfoSlide = 0,
infotitle = document.getElementById('infotitle'),
infocontent = document.getElementById('infocontent')
$('.second_header, .circles, #back-to-top, #second_arrow_down, .info_images, h3, .mini_images, .my_title').hide();

$('.arrows, #back-to-top').mouseover(function(){ //mouseover and mouseleave animates arrow
$(this).animate({backgroundColor: "white", color: "black"}, 300);
});
$('#back-to-top').mouseleave(function(){ 
$(this).animate({backgroundColor: "black", color: "white"}, 400);
});
$('.arrows').mouseleave(function(){ 
$(this).animate({backgroundColor: "transparent", color: "white"}, 200);
})
$('#arrow_down').click(function(){ 
currentSlide++; //current slide = 1 at this point
$('#second_picture').scrollView();	//puts second slide into view
setTimeout(function() { //animates circles flying in (timeline)
	$('.second_header, #back-to-top, .circles').fadeIn(1000);
$('#blue').animate({marginLeft: "20px"}, 900)
$('#red').animate({marginLeft: "300px"}, 1000)
$('#green').animate({marginLeft: "600px"}, 1100)
$('#yellow').animate({marginLeft: "900px"}, 1200)
$('#second_arrow_down, h3').fadeIn(3000)
}, 1200);//about 1.2 seconds delay
});

//create slides amount to ensure effectiveness of $('#back-to-top') arrow
$('#second_arrow_down').click(function(){
	currentSlide++; //current slide = 2
	$('#third_picture').scrollView();
	setTimeout(function() {  
$('.mini_images, .my_title').fadeIn(1000)
	}, 1200);

});



$('#first_mini, #second_mini').mouseover(function(){
$(this).animate({opacity: 1}, 600);
})
$('#first_mini, #second_mini').mouseleave(function(){
$(this).animate({opacity: 0.5}, 600);
})


$('#third_arrow_down').click(function(){
	currentSlide++; //current slide = 3
$('#fourth_picture').scrollView();

})

$('#back-to-top').click(function(){ //slides to make my life easier instead of individual functions
switch(currentSlide) {
	case 1:
$('#center_picture').scrollView();
$(this).hide();
currentSlide-=1;
break;
case 2:
$('#second_picture').scrollView();
currentSlide-=1;
break;
case 3:
$('#third_picture').scrollView();
 currentSlide-=1;
  break;

	}

})

infotitle.innerHTML = "The Importance of this technology";
infocontent.innerHTML = "The computer mouse, a simple tool that has been included into our everyday lives, without it computers would still be in their primal form, a solid box that can only take command inputs. A mouse is simple yet integral into creating a computer, it is a tool that younger generations often take for granted.  The informal name of this technology came from the similarities of the technological mouse to the real life furry rodents. The similarity as such was the cord attached to the back of the mouse which was resembled the tail of common rodent that had the same name. The Mouse has is also one of the most recognisable parts of the computer, much like the keyboard and the monitor, it's role is clearly evident."


$('#next_info').click(function(){
 //slides to make my life easier instead of individual functions

if(currentinfoSlide < 2) {
	currentinfoSlide++;
}
   
switch(currentinfoSlide) {
case 0:

infotitle.innerHTML = "The Importance of this technology";
infocontent.innerHTML = "The computer mouse, a simple tool that has been included into our everyday lives, without it computers would still be in their primal form, a solid box that can only take command inputs. A mouse is simple yet integral into creating a computer, it is a tool that younger generations often take for granted.  The informal name of this technology came from the similarities of the technological mouse to the real life furry rodents. The similarity as such was the cord attached to the back of the mouse which was resembled the tail of common rodent that had the same name. The Mouse has is also one of the most recognisable parts of the computer, much like the keyboard and the monitor, it's role is clearly evident."
   
break;
case 1:
infotitle.innerHTML = "The discovery ";
infocontent.innerHTML = "Doug Engelbart (known as the Father of the Mouse) created  the first of its kind in 1965. The idea spawned from the concept of increasing efficiency  of computing as command inputs were simply too arduous.   The invention of the mouse was straightforward, the mouse would combined   rotations and track x and y position accordingly.   The first prototype was a bulky piece of equipment which   used knife-edge wheels and had space for only one button.  The patent was given to Doug Engelbart and his team in 1980 as it was deemed the most   efficient of its kind and its formal name was known as an x, y position indicator for a display system,  this piece of revolutionary technology was significant into globalising computers as we know it."

break;
case 2: 
infotitle.innerHTML = "Future Improvements"
infocontent.innerHTML = "Since its conception, the mouse has evolved that has increased accuracy, efficiency and speed. Latest models of the mouse have included more features and the appearance has become much more appealing. One of the many new features of the mouse is bluetooth connectivity so no wire is required to move the cursor along. Computer have also become 'optical' instead of using rotators to detect x and y positions. This optical technology basically means using laser technology underneath the mouse for this tracking process. Some specific mice (like the Razer Mice) have made mice specifically for gaming. This technology includes numbered button the sides as to increase gaming efficiency for fast paced gamers."
currentinfoSlide = -1;

break


	}
	
});

//hovering over words in the fourth slide
$('#code').mouseover(function() {
$('#center_changer').css({backgroundImage: "url('images/code.jpg')"})
})

$('#design').mouseover(function() {
$('#center_changer').css({backgroundImage: "url('images/design_process.jpg')"})
})
$('#portfolio').mouseover(function() {
$('#center_changer').css({backgroundImage: "url('images/portfolio.jpg')"})
})


$('#bibliography').mouseover(function() {
$('#center_changer').css({backgroundImage: "url('images/bibliography.jpg')"})
})
});
