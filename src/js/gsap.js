import {TweenMax, Power2, TimelineLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

var menu = document.getElementById('gnb_svg');
var menuRow1 = document.getElementById('gnb_svg_row_1');
var menuRow2 = document.getElementById('gnb_svg_row_2');
var menuRow3 = document.getElementById('gnb_svg_row_3');
var tl_menu = new TimelineMax();

var menuWrapper = document.querySelector('.menu-wrapper');
var menuCloseIcon = document.getElementById('gnb_svg_close');

menuCloseIcon.addEventListener('click', () => {
	menuWrapper.classList.remove('menu-wrapper-show');
	document.querySelector('.__overlay').classList.remove('__overlay-show');
});

menu.onclick = function(){
	// if(menu.classList != 'menu-open'){
	// 	this.classList.add('menu-open');
	// 	TweenMax.to(menuRow1, 1, {rotation:225,y:7,x:-3,ease:Elastic.easeOut.config(1,1)});
	// 	TweenMax.to(menuRow2, .1, {opacity:0});
	// 	TweenMax.to(menuRow3, 1, {rotation:-225,y:-8,x:5,ease:Elastic.easeOut.config(1,1)});
	// } else {
	// 	this.classList.remove('menu-open');
	// 	TweenMax.to(menuRow1, 1, {rotation:0,y:0,x:0,ease:Elastic.easeOut.config(1,1)});
	// 	TweenMax.to(menuRow2, .1, {opacity:1});
	// 	TweenMax.to(menuRow3, 1, {rotation:0,y:0,x:0,ease:Elastic.easeOut.config(1,1)});
	// }
	menuWrapper.classList.add('menu-wrapper-show');
	TweenMax.staggerFrom('.menu-item', .3, {scale:0.5, opacity:0, delay: .5, color:'#edbf29'}, .1);
	document.querySelector('.__overlay').classList.add('__overlay-show');
}

var tl = new TimelineMax();
var arrowLego = document.querySelector('.arrow-lego');

tl.to(arrowLego, .5, {y:10, repeat:-1, yoyo:true, ease: Circ.easeOut});
tl.play();

arrowLego.addEventListener('click', () => {
	TweenMax.to(window, 1, {scrollTo:'#tiles', ease: Circ.easeOut});
});

var headerDOM = document.querySelector('header');

var counterNumber = document.querySelectorAll('.number-counter');

function animateCounter(element, start, end){
	var counter = {
		var: start
	};
	TweenMax.to(counter, 3, {
		var: end,
		onUpdate: function () {
			element.innerHTML = Math.ceil(counter.var);
		},
		ease: Circ.easeOut
	});
}

window.addEventListener('scroll', function() {
	var wScroll = window.pageYOffset;
	if(wScroll > 200){
		headerDOM.classList.add('scrolled');
	} else if(wScroll < 200) {
		headerDOM.classList.remove('scrolled');
	}
});

var overlayShow = document.querySelector('.__overlay');

overlayShow.addEventListener('click', () => {
	menuWrapper.classList.remove('menu-wrapper-show');
	overlayShow.classList.remove('__overlay-show');
});


// for(var i = 0;i < counterNumber.length; ++i){
// 	var theNumber = counterNumber[i].innerHTML;
// 	var endNumber = parseInt(theNumber.replace(/,/g, ''));
// 	animateCounter(counterNumber[i], 0, endNumber);
// }


    
    
