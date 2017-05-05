import {TweenMax, Power2, TimelineLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

var menu = document.getElementById('gnb_svg');
var menuRow1 = document.getElementById('gnb_svg_row_1');
var menuRow2 = document.getElementById('gnb_svg_row_2');
var menuRow3 = document.getElementById('gnb_svg_row_3');
var tl_menu = new TimelineMax();

var menuWrapper = document.querySelector('.menu-wrapper');
var menuCloseIcon = document.getElementById('gnb_svg_close');
var overlayMenu = document.querySelector('.__overlay');

menuCloseIcon.addEventListener('click', () => {
	menuWrapper.classList.remove('menu-wrapper-show');
	setTimeout(() => {
		overlayMenu.classList.remove('__overlay-show');
	}, 350);
	overlayMenu.style.backgroundColor = 'transparent';
});

var preload = document.querySelector('.preload');

window.onload = function(){
	setTimeout(() => {
		TweenMax.from(document.body, 1, {opacity:'0'})
		TweenMax.to(document.body, 1, {opacity:'1'})
		preload.classList.add('hide');
	}, 500);
}

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
	overlayMenu.classList.add('__overlay-show');
	
	setTimeout(() => {
		overlayMenu.style.backgroundColor = 'rgba(0,0,0,.7)';
	}, 200);
	TweenMax.staggerFrom('.menu-item', .3, {scale:0.5, opacity:0, delay: .5, color:'#edbf29'}, .1);
}

var headerDOM = document.querySelector('header');

window.addEventListener('scroll', function() {
	var wScroll = window.pageYOffset;
	if(wScroll > 50){
		headerDOM.classList.add('scrolled');
	} else if(wScroll < 50) {
		headerDOM.classList.remove('scrolled');
	}
});

var overlayShow = document.querySelector('.__overlay');

overlayShow.addEventListener('click', () => {
	menuWrapper.classList.remove('menu-wrapper-show');
	setTimeout(() => {
		overlayMenu.classList.remove('__overlay-show');
	}, 350);
	overlayMenu.style.backgroundColor = 'transparent';
});

// var anchor = document.getElementsByTagName('a');
// var host = 'http://'+window.location.hostname+':3000';

// for(var i=0;i<anchor.length;++i){
// 	anchor[i].addEventListener('click', function(e){
// 		e.preventDefault();
// 		var location = this.getAttribute('href');
// 		preload.classList.remove('hide');
// 		setTimeout(() => {
// 			window.location.href = host + location;
// 		}, 500);
// 	});
// }

function removeAllClass(elName, removedClass){
	var cName = document.querySelectorAll(elName);
	for(var i = 0;i < cName.length; ++i){
		cName[i].classList.remove(removedClass);
	}
}

var accordionItem = document.querySelectorAll('.accordion-item');

for(var i = 0;i < accordionItem.length; ++i){
	accordionItem[i].addEventListener('click', function() {
		var accordionArrow = this.querySelector('.accordion-arrow');
		var accordioContent = this.querySelector('.accordion-content-container');
		accordioContent.classList.toggle('accordion-open');
		accordionArrow.classList.toggle('accordion-arrow-open');
	});
}


var tabList = document.querySelectorAll('.tab-list');
var cat = document.querySelectorAll('.cat');

for(var i=0;i<tabList.length;++i){
	tabList[i].addEventListener('click', function(){
		removeAllClass('.tab-list', 'active-tab');
		for(var i=0;i<cat.length;++i){
			cat[i].style.display = 'none';
		}
		this.classList.add('active-tab');
		var id = this.getAttribute('id');
		var postCatActive = document.querySelector('.' + id + '-cat');
		postCatActive.style.display = 'block';
	});
}


var teamBoxBig = document.querySelectorAll('.team-box-big');

for(var i = 0;i < teamBoxBig.length; ++i){
	teamBoxBig[i].addEventListener('click', function(){
		if(!this.classList.contains('expanded')){
			removeAllClass('.team-box-big','expanded');
			this.classList.add('expanded');
		} else {
			this.classList.remove('expanded');
		}
	});
}


// GSAP

var tl = new TimelineMax();
var arrowLego = document.querySelector('.arrow-lego');

tl.to(arrowLego, .5, {y:10, repeat:-1, yoyo:true, ease: Circ.easeOut});
tl.play();

arrowLego.addEventListener('click', () => {
	TweenMax.to(window, 1, {scrollTo:'#tiles', ease: Circ.easeOut});
});

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
		ease: Expo.easeInOut
	});
}


// for(var i = 0;i < counterNumber.length; ++i){
// 	var theNumber = counterNumber[i].innerHTML;
// 	var endNumber = parseInt(theNumber.replace(/,/g, ''));
// 	animateCounter(counterNumber[i], 0, endNumber);
// }


    
    
