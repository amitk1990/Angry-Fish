$(document).ready(function(e) {
    
	$(window).on('load',function(e){
		AnimateFish1();
		AnimateFish2();
		AnimateFish3();
		AnimateFish4();

		
		
		$('#categories-select').hide();
		//bubblesfish1();
	
		//initialiseFloatingImages();
		});
/*Navigation to home*/
$('#my-fish-page').on('click',function(e){
		
	document.location.href="Home-Page-AngryFish-myfishes.html";	
});
$('#leaderboard-page').on('click',function(e){
		
	document.location.href="Angry-fish-leaderboard.html";	
});

$('#my-home-page').on('click',function(e){
		
	document.location.href="Home-Page-AngryFish.html";	
});	

/*navigation to help page*/
$('.life-jacket').on('click',function(e){
	
	document.location.href="Angry-fish-help.html";	
});

/*Home page on hover*/
$('.myhome').hover(function(e){
	$('#myhome').show();
	
},function(e){
	$('#myhome').hide();

});
/*Hover Text for dolphins icons and help text-life jacket*/
		
$('.dolphins').hover(function(e){
	$('#myfishes').show();
	
},function(e){
	$('#myfishes').hide();

});



$('.icons').hover(function(e){
	$('.leaderboard').show();
	
},function(e){
	$('.leaderboard').hide();

});
$('.life-jacket').hover(function(e){
	$('.Help-button').show();
	
},function(e){
	$('.Help-button').hide();

});

/*Refresh hover*/
$('.refresh-icon').hover(function(e){
	$('.refresh-pop').show();
	
},function(e){
	$('.refresh-pop').hide();

});


/*fish 4 DELETING */
var deleteflag=0;
$('#fish4').hover(function(e){
		
		$('#fish4').stop();
	
		
		},function(e){
		//	$('#fish3').toggleClass('fish3-stop');
		if(deleteflag==0)
		{
			AnimateFish4();
		}
	});	

var deletedobject=0;
$('#fish4').on('click',function(e){
 deletedobject=$(this);
 deleteflag++;
 //s$(this).css('z-index',100);
$('#delete-overlay').show();	

});

$('#deletebutton').on('click',function(e){
	
$('#delete-comment').hide();
$('#confirm').show();	
});

$('#yesbutton-delete').on('click',function(e){
	
//$('#delete-comment').show();
$('#delete-overlay').hide();	
deletedobject.remove();
var decrease=$('#counterdecrease').text();
	decrease--;
	$('#counterdecrease').text(decrease);

});

$('#nobutton-delete').on('click',function(e){
	
$('#delete-comment').show();
$('#confirm').hide();	
deleteflag--;

});
$('#close-delete,#close2-delete').on('click',function(e){
	
	$('#delete-overlay').hide();
deleteflag--;
AnimateFish4();
});





/*Hover Text for dolphins icons and help text-life jacket*/

/*selected circle*/
var counter=0;
$('.circles-icon').on('click',function(e){
	
	$(this).toggleClass('selected-circle');
	
		counter=0;
		$('.circles-icon').each(function(e) {
            if($(this).hasClass('selected-circle'))
			{
				counter++;
			}
			
        });
	
	if(counter > 2 || counter == 0)
			{
				
					$('.please-select').show();
			}else if(counter==1 || counter==2)
			{
				$('.select-circle-overlay').hide();
					$('.please-select').hide();
				$('.circle-button').val("Circles");

			}
	});		
/*select cirlce button*/
$('.circle-button').on('click',function(e){
		
		$('.details-contaniner,#close-select-button').css('visibility','hidden');
	
		$('.select-circles').css('visibility','visible');
	});
/*cancel button on click*/
$('#cancel,.close-button-circle').on('click',function(e){
	
	$('.details-contaniner,#close-select-button').css('visibility','visible');
	$('.select-circles').css('visibility','hidden');
});
function bindhoveroyster()
{
	$('.oyster').bind('mouseenter',function(e){
					$('.egg-count-hover').show();
			});
			$('.oyster').bind('mouseleave',function(e){
				$('.egg-count-hover').hide();	
			});
			
}

$('#ok-button-categories').on('click',function(e){
	$('.details-contaniner,#close-select-button').css('visibility','visible');
	$('.select-circles').css('visibility','hidden');
	});
	
	
$('.circles').hover(function(e){

	$('.selected-circle-grid-1').css('display','block');
	
	},function(e){
		
		$('.selected-circle-grid-1').css('display','none');
		
		
});


$('.selected-circle-row').on('click',function(e){
	
	$(this).parent().parent().hide();
	});

	/*Close button for the oyster*/	
		$('.close-button').on('click',function(e){
		
			bindhoveroyster();
			
			$(this).parent().parent().hide();
			$('.oyster').bind('click',function(e){
				
				
				$('.oyster').css('background-image','url(Assets/Eggbreakinganimation.gif)');
				oysterworking();
				
				
			});
			$('.oyster').css('background-image','url(Assets/Eggmovement.gif)');
			//$('.oyster').removeClass('oyster-click');
			$('.oyster').toggleClass('zindexhigh');
			
			});
	/*Hover for info symbol*/	
		$('.infohide-symbol').hover(function(e){
		
			var x=e.clientX;
			var y=e.clientY;
				x=x-8;	
				y=y-29;
			$('.hover-textInfo').css({'top':y+'px','left':x+'px'});
					$('.hover-textInfo').show();
			},function(e){
				$('.hover-textInfo').hide();
				});
/*Fish pop-up*/
$('#Comment-Box-pop').on('click',function(e){
	
$('#fish-pop2').show();	
});
$('.close-button2-fish,#submit-pop2').on('click',function(e){
	
$('#fish-pop2').hide();	
});


$('#close-pop1').on('click',function(e){
flagfish1--;
$('#fish-pop').hide();	
	AnimateFish1();
});

$('#feed').on('click',function(e){
	$(this).hide();
	$('.feed-count').addClass('feed-added');
	var  countVal=$('#counter').text();
	countVal++;
	$('#counter').text(countVal);
});









		var flagfish1=0;
		
	/*fish1 on hover*/
	$('#fish1').hover(function(e){
		
		$('#fish1').stop();
		//$('#fish1').toggleClass('fish1-stop');
		},function(e){
		if(flagfish1==0)
		{
			AnimateFish1();
		}
	});
			
		/*fish2 on hover*/
	$('#fish2').hover(function(e){
		
		$('#fish2').stop();
		//$('#fish2').toggleClass('fish2-stop');
		},function(e){
		//	$('#fish2').toggleClass('fish2-stop');
			AnimateFish2();
			
	});	
			
		/*fish3 on hover*/
	$('#fish3').hover(function(e){
		
		$('#fish3').stop();
		$('.fish-hover-box').show();
		
		},function(e){
		//	$('#fish3').toggleClass('fish3-stop');
		$('.fish-hover-box').hide();
			AnimateFish3();
			
	});	
	
	$('#fish1').on('click',function(e){
		flagfish1++;
		$('#fish1').stop();
	
		$('#fish-pop').show();
		
	});
	
	/*Refresh icon clicks*/
	
$('.refresh-icon').on('click',function(e){	
var angle = 0;
setInterval(function(){
      angle+=3;
     $(".refresh-icon").rotate(angle);
},5);

window.setTimeout('location.reload()', 5000); 

});
	/*Hover oyster*/
	$('.oyster').hover(function(e){
		
		$('.egg-count-hover').show();
	
		},function(e){
		
		$('.egg-count-hover').hide();	
		
		
	});
	
	
	/*Arrow on hover*/
	
	$('#rightarrow').hover(function(e){
		
	$('.View-more').show();	
	},function(){
			$('.View-more').hide();	
	
	});
	$('#left-back').hover(function(e){
	
	
	$('.View-Back').show();	
	
	},function(){
			$('.View-Back').hide();	
	
	});
	
	
	/*arrows on click*/
	$('#rightarrow').on('click',function(e){
		
	/*$('.academyTEXT').css('left',370+'px');	*/
	
	$('#rightarrow').css('visibility','hidden');
	$('#left-back').css('visibility','visible');
	$('#fish1,#fish2,#fish3,#fish4').remove();
	$('.View-more').after('<div class="fishhatch newfishcreated" ></div>');
	$('.newfishcreated').attr('id','fish5');

   

   
  AnimateFish5();
	
	
	
	

/*Fish5 Created*/
function AnimateFish5() {
    var Fish5 = $("#fish5"),
        theContainer = $("#container"),
        maxLeft = theContainer.width() - Fish5.width()-100,
        maxTop = theContainer.height() - Fish5.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        imgRight = "Assets/R1gif.gif",
        imgLeft = "Assets/FIsh1.gif";
    f1bubbletop=topPos;
    if (Fish5.position().left < leftPos) {
	
        Fish5.css("background-image",'url("' + imgRight + '")');

		
    } else {
		
	
      Fish5.css("background-image",'url("' + imgLeft + '")');
    	
	}
        
    Fish5.animate({
        "left": leftPos,
        "top": topPos
    }, 18000, AnimateFish5);
}
	
	
	});
	
	
	
	/*Left arrow back page*/	
$('#left-back').on('click',function(e){
/*	$('.academyTEXT').css('left',370+'px');		*/
	
	$('#rightarrow').css('visibility','visible');
	$('#left-back').css('visibility','hidden');
	

	

});

	
	
	
	
	/*down-arrow*/
	$('#down-arrow').on('click',function(e){
		$('#down-arrow').toggleClass('add-uparrow');
		
			if ($('#down-arrow').hasClass('add-uparrow'))
			{
					$('.hiddendetails').hide();
					$('#categories-select').show();
					$('.hover-textInfo').hide();
			}
			else
			{
					$('#categories-select').hide();
				$('.hiddendetails').show();	
				$('.hover-textInfo').hide();
			}
		
		});
		$('#categories-select li').on('click',function(e){
			var categoryselected=$(this).children('span').text();
			$('.select-category').text(categoryselected);
			$('#down-arrow').toggleClass('add-uparrow');
				$('#categories-select').hide();
				$('.hiddendetails').show();	
				$('.hover-textInfo').hide();	
			});
	
	
	
	
			


var f1bubbletop=0;
/*fish1 movement*/
function AnimateFish1() {
    var Fish1 = $("#fish1"),
        theContainer = $("#container"),
        maxLeft = theContainer.width() - Fish1.width()-100,
        maxTop = theContainer.height() - Fish1.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        imgRight = "Assets/R1gif.gif",
        imgLeft = "Assets/FIsh1.gif";
    f1bubbletop=topPos;
    if (Fish1.position().left < leftPos) {
	
        Fish1.css("background-image",'url("' + imgRight + '")');

		
    } else {
		
	
      Fish1.css("background-image",'url("' + imgLeft + '")');
    	
	}
        
    Fish1.animate({
        "left": leftPos,
        "top": topPos
    }, 18000, AnimateFish1);
}

/*Animate fish2 movement2*/
function AnimateFish2() {
    var Fish2 = $("#fish2"),
        theContainer = $("#container"),
        maxLeft = theContainer.width() - Fish2.width()-100,
        maxTop = theContainer.height() - Fish2.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        imgRight = "Assets/R2gif.gif",
        imgLeft = "Assets/FIsh2.gif";
    
    if (Fish2.position().left < leftPos) {
        Fish2.css("background-image",'url("' + imgRight + '")');
    } else {
        Fish2.css("background-image",'url("' + imgLeft + '")');
    }
        
    Fish2.animate({
        "left": leftPos,
        "top": topPos
    }, 18000, AnimateFish2);
}

/*Animate fish33 movement2*/
var largeFishLeft,largeFishTop=0;
function AnimateFish3() {
    var Fish3= $("#fish3"),
        theContainer = $("#container"),
        maxLeft = theContainer.width() - Fish3.width()-200,
        maxTop = theContainer.height() - Fish3.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        imgRight = "Assets/fish-glow3-right.gif",
        imgLeft = "Assets/fish-glow3.gif";
	/*Get position of the fish*/	
    largeFishLeft=leftPos;
	largeFishTop=topPos;
    if (Fish3.position().left < leftPos) {
        Fish3.css("background-image",'url("' + imgRight + '")');
    } else {
        Fish3.css("background-image",'url("' + imgLeft + '")');
    }
        
    Fish3.animate({
        "left": leftPos,
        "top": topPos
    }, 18000, AnimateFish3);
}






/*Hover Text*/
$('.problem-description').on('focus',function(e){
	
		$(this).css('background','white');

	
	});
$('.keywordstextbox').on('focus',function(e){
	$(this).css('background','url(Assets/keyword-box-focus.png) no-repeat');

	
	});
$('.keywordstextbox').on('blur',function(e){
	$(this).css('background','url(Assets/keyword-box.png) no-repeat');
			
	
	});
	$('.problem-description').on('blur',function(e){
	
		$(this).css('background-color','#addefe');
	
	});
/*opening of a new post*/

$('.oyster').on('click',function(e){
	$('.egg-count-hover').hide();	
	 $('.oyster').unbind('mouseenter mouseleave');
	$('.oyster').css('background-image','url(Assets/Eggbreakinganimation.gif)');
	oysterworking();
	});
function oysterworking(){
	
		//$('.pop-up-selectCategory').delay(2000).show();
	
		
			$('.oyster').toggleClass('zindexhigh');
   setTimeout(function() {
                $('.pop-up-selectCategory').show();
            }, 5);
		$('.oyster').unbind('click');
	}
	
/*on click of category button */
$('#categorybutton').on('click',function(e){
	
	$('#categorybutton').toggleClass('zindexhigh');
	$('#categorybutton-overlay').show();
	});
$('.category-row').on('click',function(e){
	var CategorySelected=$(this).children('span').text();
	$('.academyTEXT').text(CategorySelected);
		$('#categorybutton-overlay').hide();
		$('#categorybutton').toggleClass('zindexhigh');
	});
$('#categorybutton-overlay').on('click',function(e){
		
	$('#categorybutton-overlay').hide();
});

/*post button*/
var idgenerated=0;
$('.post-button').on('click',function(e){
		
		//$('#container img:last-child').append('<div class="small-fish"> </div>');
		//$('#rightarrow').after('<div class="fishhatch" id="'+idgenerated+'"></div>');
		if($('.keywordstextbox').val()!="Keywords")
		{
		$('#rightarrow').after('<div class="fishhatch" ></div>');
		$('.pop-up-selectCategory').hide();	
			$('.oyster').toggleClass('zindexhigh');
		$('.oyster').css('background-image','url(Assets/Eggmovement.gif)');
			bindhoveroyster();
		$('.oyster').bind('click',function(e){
			
			
			$('.oyster').css('background-image','url(Assets/Eggbreakinganimation.gif)');
			oysterworking();
			
			
			});
		
		animatenewfish();
		}
		else
		{
			$('.require-fields').css('visibility','visible');
			$('.post-button,.circle-button').css('margin-top',4+"px");	
		}
		
	});	
	
function animatenewfish() {
	
	var Fishv1 = $(".fishhatch"),
   // var Fishv1 = $("#"+idgenerated),
        theContainer = $("#container"),
        maxLeft = theContainer.width() - Fishv1.width()-100,
        maxTop = theContainer.height() - Fishv1.height()-100,
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop)+100,
        imgRight = "Assets/R1gif.gif",
        imgLeft = "Assets/FIsh1.gif";
		
    if (Fishv1.position().left < leftPos) {
	
        Fishv1.css("background-image",'url("' + imgRight + '")');

		
    }else{
	
      Fishv1.css("background-image",'url("' + imgLeft + '")');
    }
        
    Fishv1.animate({
        "left": leftPos,
        "top": topPos
    }, 18000, animatenewfish);

}

/*Animate fish4 movement2*/
function AnimateFish4() {
    var Fish3= $("#fish4"),
        theContainer = $("#container"),
        maxLeft = theContainer.width() - Fish3.width()-200,
        maxTop = theContainer.height() - Fish3.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop)+100,
        imgRight = "Assets/fish-glow3-right.gif",
        imgLeft = "Assets/fish-glow3.gif";
    
    if (Fish3.position().left < leftPos) {
        Fish3.css("background-image",'url("' + imgRight + '")');
    } else {
        Fish3.css("background-image",'url("' + imgLeft + '")');
    }
        
    Fish3.animate({
        "left": leftPos,
        "top": topPos
    }, 18000, AnimateFish4);
}

	

});


/*bubble working*/
/*
Drew Noakes 6 Apr 2002 http://drewnoakes.com
- Images now can go up and down (allowing bubbles, as well as snow)
- Images move into the screen and move out smoothly, without disappearing or
  appearing suddenly
- Scrolling the page doesn't effect the appearance of the snow/bubbles
- renamed variables to be more meaningful
- refactored common code out to functions, replacing different repeating
  functions for each browser with a single function (moveFloatingImages)
  for all browsers

Modified 8 Dec 2006 for XHTML support.  This required the 'top' and 'left' attributes
be set with a "px" suffix which in turn requires parsing by the CSS engine, reducing
performance.  If you don't use XHTML validation, remove the string appends below.
*/

// relative URL path to the image
var imageSrc = "Assets/bubble-image.png"
// the height of the image in use
var imageHeight = 16;
// number of images to display
var imageCount = 5;
// -1 for up, 1 for down
var imageDirection = -1;

// time to wait before queueing the next screen update
var TIMEOUT_INTERVAL_MILLIS = 50;

// browser sniffer
var ns4up = (document.layers) ? 1 : 0;
var ie4up = (document.all) ? 1 : 0;
var ns6up = (document.getElementById&&!document.all) ? 1 : 0;

// coordinate and position arrays
var thetaRadians = new Array();
var xPosition = new Array();
var yPosition = new Array();

// amplitude and step arrays
var xAmplitude = new Array();
var thetaStep = new Array();
var yStep = new Array();

// window size variables, set by function detectWindowSize()
var windowWidth, windowHeight;

// create DIVs and start the function
function initialiseFloatingImages()
{
    detectWindowSize();

    for (var i = 0; i < imageCount; i++) {
        // set coordinate variables
        thetaRadians[i] = 0;
        // set position variables
        xPosition[i] = Math.random()*(windowWidth-50);
        yPosition[i] = Math.random()*windowHeight;
        // set amplitude variables
        xAmplitude[i] = Math.random()*20;
        // set step variables
        thetaStep[i] = 0.02 + Math.random()/10;
        // set step variables
        yStep[i] = 0.7 + Math.random();
        // write layers etc...
        if (ns4up) {
            document.write('<layer name="dot'+i+'" left="15" top="15" visibility="show"><img src="'+imageSrc+'" alt="Floating image"/></layer>');
        } else if (ie4up||ns6up) {
            document.write('<div id="dot'+i+'" style="POSITION:absolute; Z-INDEX:'+i+'; VISIBILITY:visible; TOP:15px; LEFT:15px;"><img src="'+imageSrc+'" alt="Floating image"/></div>');
        }
    }

    moveFloatingImages();
}

// this is the main function
function moveFloatingImages()
{
    // for each image...
    for (var i = 0; i < imageCount; i++) {
        // recalculate y position
        yPosition[i] += imageDirection * yStep[i];
        // ensure not off top or bottom of visible screen
        if (yPosition[i] > windowHeight+getPageYOffset()) {
            // downwards-heading image is at the bottom...  reset it
            xPosition[i] = Math.random()*(windowWidth-xAmplitude[i]-30);
            yPosition[i] = -imageHeight;
            thetaStep[i] = 0.02 + Math.random()/10;
            yStep[i] = 0.7 + Math.random();
            detectWindowSize();
        } else if (yPosition[i] < getPageYOffset()-imageHeight) {
            // upwards-heading image is at the top...  reset it
            xPosition[i] = Math.random()*(windowWidth-xAmplitude[i]-30);
            yPosition[i] = getPageYOffset() + windowHeight;
            thetaStep[i] = 0.02 + Math.random()/10;
            yStep[i] = 0.7 + Math.random();
            detectWindowSize();
        }
        thetaRadians[i] += thetaStep[i];
        // move each image
        var newXPosition = xPosition[i] + xAmplitude[i]*Math.sin(thetaRadians[i]);
        if (ns4up) {
            document.layers["dot"+i].top = yPosition[i] + "px";
            document.layers["dot"+i].left = newXPosition + "px";
        } else if (ie4up) {
            document.all["dot"+i].style.pixelTop = yPosition[i];
            document.all["dot"+i].style.pixelLeft = newXPosition;
        } else if (ns6up) {
            document.getElementById("dot"+i).style.top = yPosition[i] + "px";
            document.getElementById("dot"+i).style.left = newXPosition + "px";
        }
    }
    setTimeout("moveFloatingImages()", TIMEOUT_INTERVAL_MILLIS);
}

// return the page's offset due to vertical scrolling
function getPageYOffset()
{
    var yOffset = 0;
    if (ns4up) {
        yOffset = window.pageYOffset;
    } else if (ie4up||ns6up) {
        yOffset = document.body.scrollTop;
    }
	yOffset=90;

    return yOffset;
}

// detect information about the window's size
function detectWindowSize()
{
 /*   if (ns6up) {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    } else if (ns4up) {
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    } else if (ie4up) {
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    } else {
        windowWidth = 800;
        windowHeight = 600;
    }*/
	 windowWidth = 942;
        windowHeight = 450;
	//console.log(windowWidth);
}

initialiseFloatingImages();


