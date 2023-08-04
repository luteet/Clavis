

const 
	body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, body'),
	burger = document.querySelector('.header__burger'),
	header = document.querySelector('.header');


// =-=-=-=-=-=-=-=-=-=- <image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-

const imageAspectRatio = document.querySelectorAll('.image-aspect-ratio, figure');
imageAspectRatio.forEach(imageAspectRatio => {
	const img = imageAspectRatio.querySelector('img'), style = getComputedStyle(imageAspectRatio);
	if(img) {
		if(img.getAttribute('width') && img.getAttribute('height') && style.position == "relative")
		imageAspectRatio.style.setProperty('--padding-aspect-ratio', Number(img.getAttribute('height')) / Number(img.getAttribute('width')) * 100 + '%');
	}
	
})

// =-=-=-=-=-=-=-=-=-=- </image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-


// =-=-=-=-=-=-=-=-=-=- <Get-device-type> -=-=-=-=-=-=-=-=-=-=-

const getDeviceType = () => {

	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return "tablet";
	}

	if (
		/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
		ua
		)
	) {
		return "mobile";
	}
	return "desktop";

};

// =-=-=-=-=-=-=-=-=-=- </Get-device-type> -=-=-=-=-=-=-=-=-=-=-

function slideUp (target, duration=300) {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.boxSizing = 'border-box';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout( () => {
	  target.style.display = 'none';
	  target.style.removeProperty('height');
	  target.style.removeProperty('padding-top');
	  target.style.removeProperty('padding-bottom');
	  target.style.removeProperty('margin-top');
	  target.style.removeProperty('margin-bottom');
	  target.style.removeProperty('overflow');
	  target.style.removeProperty('transition-duration');
	  target.style.removeProperty('transition-property');
	}, duration);
}

function slideDown (target, duration=300) {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;

	if (display === 'none')
	  display = 'block';

	target.style.display = display;
	let height = target.scrollHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = 'border-box';
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout( () => {
	  target.style.height = 'auto';
	  target.style.removeProperty('overflow');
	  target.style.removeProperty('transition-duration');
	  target.style.removeProperty('transition-property');
	}, duration);
}

const headerNavLi = document.querySelectorAll('.header__nav--list > li'),
headerNavContacts = document.querySelector('.header__nav--contacts'),
headerContacts = document.querySelector('.header__contacts');

headerNavLi.forEach(li => {
	if(li.querySelector('ul')) {

		li.addEventListener('pointerenter', function () {
			if(getDeviceType() == "desktop" && window.innerWidth >= 992) {
				headerNavLi.forEach(li => {
					li.classList.remove('hover')
				})
				header.classList.add('_sub-active');
				li.classList.add('hover')
				html.style.setProperty("--height-nav-sub", header.querySelector('.header__nav--list > li.hover > ul').offsetHeight + "px");
				html.style.setProperty("--height-contacts", header.querySelector('.header__contacts').offsetHeight + "px");
			}
		})

		li.querySelector('a').addEventListener('click', function (event) {
			if(getDeviceType() != "desktop" && !event.target.parentElement.classList.contains('hover') && window.innerWidth >= 992) {
				event.preventDefault();
				headerNavLi.forEach(li => {
					li.classList.remove('hover')
				})
				header.classList.add('_sub-active');
				event.target.parentElement.classList.add('hover')
				html.style.setProperty("--height-nav-sub", header.querySelector('.header__nav--list > li.hover > ul').offsetHeight + "px");
				html.style.setProperty("--height-contacts", header.querySelector('.header__contacts').offsetHeight + "px");

			}
		})

		headerNavContacts.addEventListener('pointerenter', function () {
			if(getDeviceType() == "desktop" && window.innerWidth >= 992) {
				header.classList.add('_sub-active');
				headerNavContacts.classList.add('hover');
				html.style.setProperty("--height-contacts", header.querySelector('.header__contacts').offsetHeight + "px");
			}
		})

		headerNavContacts.addEventListener('click', function (event) {
			if(getDeviceType() != "desktop" && !headerNavContacts.classList.contains('hover') && window.innerWidth >= 992) {
				event.preventDefault();
				
				headerNavContacts.classList.add('hover');
				header.classList.add('_sub-active');
				html.style.setProperty("--height-contacts", header.querySelector('.header__contacts').offsetHeight + "px");
			}
		})

		header.addEventListener('pointerleave', function () {
			if(getDeviceType() == "desktop" && window.innerWidth >= 992) {
				headerNavLi.forEach(li => {
					li.classList.remove('hover')
				})
				header.classList.remove('_sub-active');
				html.style.removeProperty('--height-nav-sub')
			}
		})

	} else {
		li.addEventListener('pointerenter', function () {
			if(getDeviceType() == "desktop" && window.innerWidth >= 992) {
				headerNavLi.forEach(li => {
					li.classList.remove('hover')
				})
				header.classList.remove('_sub-active');
			}
		})
	}
})



// =-=-=-=-=-=-=-=-=-=- <click events> -=-=-=-=-=-=-=-=-=-=-

body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}

	// =-=-=-=-=-=-=-=-=-=- <open menu in header> -=-=-=-=-=-=-=-=-=-=-

	if ($('.header__burger')) {
		menu.forEach(element => {
			element.classList.toggle('_mob-menu-active')
		})
	}

	// =-=-=-=-=-=-=-=-=-=- </open menu in header> -=-=-=-=-=-=-=-=-=-=-



	// =-=-=-=-=-=-=-=-=-=-=-=- <header-contacts> -=-=-=-=-=-=-=-=-=-=-=-=
	
	

	/* if(headerNavContacts) {
	
		headerNavLi.forEach(li => {
			li.classList.remove('hover')
		})
		header.classList.remove('_sub-active');
		html.style.removeProperty('--height-nav-sub')
	
	} */

	/* if(headerContacts && getDeviceType() != "desktop") {
		
	} */
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </header-contacts> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <header-nav-sub> -=-=-=-=-=-=-=-=-=-=-=-=
	const headerNavContacts2 = $(".header__nav--contacts"),
	headerContacts2 = $('.header__contacts');
	const headerNavList = $(".header__nav--list")
	if(getDeviceType() != "desktop" && !headerNavList && !headerContacts2 && !headerNavContacts2 && window.innerWidth >= 992) {
	
		headerNavLi.forEach(li => {
			li.classList.remove('hover')
		})

		headerNavContacts.classList.remove('hover')
		header.classList.remove('_sub-active');
		html.style.removeProperty('--height-nav-sub')
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </header-nav-sub> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <click> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const headerNavLink = $(".header__nav--list > li > a")
	if(headerNavLink) {
	
		if(headerNavLink.parentElement.querySelector('ul') && window.innerWidth < 992 && !headerNavLink.classList.contains('active')) {
			event.preventDefault();
			document.querySelectorAll('.header__nav--list > li > a.active').forEach(activeLink => {
				const activeList = activeLink.parentElement.querySelector('ul');
				activeLink.classList.remove('active')
				slideUp(activeList);
			})

			headerNavLink.classList.add('active');
			const list = headerNavLink.parentElement.querySelector('ul');
			slideDown(list);
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </click> -=-=-=-=-=-=-=-=-=-=-=-=
	

	// =-=-=-=-=-=-=-=-=-=-=-=- <about-tour-tab-nav> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const aboutTourTabNav = $(".about-tour__tab-nav li a")
	if(aboutTourTabNav) {
	
		event.preventDefault();
		const nav = aboutTourTabNav.closest('ul'),
		activeBlock = document.querySelector(nav.querySelector('a.active').getAttribute('href')),
		block = document.querySelector(aboutTourTabNav.getAttribute('href'));

		if(!aboutTourTabNav.classList.contains('active')) {
			
			nav.querySelector('a.active').classList.remove('active')
			aboutTourTabNav.classList.add('active');

			activeBlock.classList.remove('_active');
			block.classList.add('_active');
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </about-tour-tab-nav> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <itinerary-accodrion> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const aboutTourItineraryItem = $(".about-tour__itinerary-item")
	if(aboutTourItineraryItem) {

		if(!aboutTourItineraryItem.classList.contains('_animating')) {
			aboutTourItineraryItem.classList.add('_animating');

			const activeItem = aboutTourItineraryItem.closest('ul').querySelector('.about-tour__itinerary-item._active'),
			content = aboutTourItineraryItem.querySelector('.about-tour__itinerary-item--content');

			if(activeItem) {
				const activeItemContent = activeItem.querySelector('.about-tour__itinerary-item--content');
				if(activeItem == aboutTourItineraryItem) {

					aboutTourItineraryItem.classList.remove('_active')
					slideUp(content);
		
				} else {
		
					activeItem.classList.remove('_active');
					slideUp(activeItemContent);
					aboutTourItineraryItem.classList.add('_active');
					slideDown(content);
		
				}
			} else {
				aboutTourItineraryItem.classList.add('_active');
				slideDown(content);
			}

			setTimeout(() => {
				aboutTourItineraryItem.classList.remove('_animating');
			},500)
			
		}
		
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </itinerary-accodrion> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <about-tour-accordion> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const aboutTourAccordionTarget = $(".about-tour__accordion--target")
	if(aboutTourAccordionTarget) {
	
		aboutTourAccordionTarget.classList.toggle('_active')
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </about-tour-accordion> -=-=-=-=-=-=-=-=-=-=-=-=
	

})

// =-=-=-=-=-=-=-=-=-=- </click events> -=-=-=-=-=-=-=-=-=-=-


// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

let windowSize = 0;

function resize() {

	html.style.setProperty("--height-header", header.offsetHeight + "px");
	
	if(header.querySelector('.header__nav--list > li.hover > ul')) {
		html.style.setProperty("--height-nav-sub", header.querySelector('.header__nav--list > li.hover > ul').offsetHeight + "px");
	} else {
		html.style.removeProperty('--height-nav-sub')
	}

	if(windowSize != window.innerWidth) {
		html.style.setProperty("--svh", window.innerHeight * 0.01 + "px");
	}
	
	windowSize = window.innerWidth;
	
}

resize();

window.addEventListener('resize', resize)

// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

function progressBar(slider) {
	const bar = slider.root.querySelector( '.slider-progress__bar' );
	
	// Updates the bar width whenever the carousel moves:
	slider.on( 'mounted move', function () {
	  let end  = slider.Components.Controller.getEnd() + 1,
	  rate = Math.min( ( slider.index + 1 ) / end, 1 );

	  bar.style.width = String( 100 * rate ) + '%';
	});
}

if(document.querySelector('.team__slider')) {

	const teamSlider = new Splide('.team__slider', {

		type: "loop",
		direction: 'ttb',
		waitForTransition: true,
		wheelSleep: 200,
		wheelMinThreshold: 50,
		easing: "ease",
		//wheelMinThreshold: 150,
		freeMode: true,
		speed: 200,
		drag   : 'free',
		focus  : 'center',
		perPage: 1,
		
  		height   : '860px',
		pagination: false,
		arrows: false,
		wheel: true,
		padding: '120px',
		updateOnMove: true,

		breakpoints: {
			1320: {
				padding: '100px',
			},

			992: {
				direction: 'ltr',
				padding: '0px',
				waitForTransition: false,
				wheel    : false,
				height   : 'auto',
			}
		}

	});

	progressBar(teamSlider)

	teamSlider.mount();

}


if(document.querySelector('.services__slider')) {

	const servicesSlider = new Splide('.services__slider', {

		perPage: 2,
		arrows: false,
		pagination: false,
		gap: 60,

		breakpoints: {
			768: {
				perPage: 1,
				gap: 10,
			},
		}

	});
	
	progressBar(servicesSlider)

	servicesSlider.on('mounted', function () {
		if(!servicesSlider.root.classList.contains('is-overflow')) {
			servicesSlider.options.drag = false
		}
	})

	servicesSlider.mount();

	

}

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <animation> -=-=-=-=-=-=-=-=-=-=-=-=

AOS.init({
	disable: "mobile",
	once: true
});

// =-=-=-=-=-=-=-=-=-=-=-=- </animation> -=-=-=-=-=-=-=-=-=-=-=-=


