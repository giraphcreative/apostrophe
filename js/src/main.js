

// onload responsive footer and menu stuff
jQuery(document).ready(function($){

	// select some things we'll use to make things responsive
	var menu = $( 'header nav' ),
		menu_toggle = menu.find( 'button.menu-toggle' ),
		menu_ul = menu.find( '.nav-menu' ),
		fluid_images = $( '.content-area img, .site-content img' );


	// function to set the sidebar height
	var set_sidebar_height = function(){
		if ( matchMedia('only screen and (min-width: 768px)').matches && $('.three-quarter').height() > $('.sidebar').height() ) {
			$( '.sidebar' ).height( $('.three-quarter').height() + 50 );
		} else {
			$( '.sidebar' ).height( 'auto' );
		}
	};


	// remove height and width from images inside
	fluid_images.removeAttr( 'width' ).removeAttr( 'height' );


	// show/hide menus when they click the toggler
	menu_toggle.click(function(){

		if ( menu_ul.is( ':visible' ) ) {
			menu_ul.hide();
		} else {
			menu_ul.show();
		}

		// when user clicks a link, open submenu if it exists.
		menu_ul.find( 'a' ).click(function(){
			var parent_li = $( this ).parent( 'li' );
			var submenu = $( this ).next( 'ul' );
			if ( !submenu.is( ':visible' ) && parent_li.hasClass( 'menu-item-has-children' ) ) {
				event.preventDefault();
				parent_li.addClass( 'open' );
				submenu.show();
			}
		});

	});


	// if we have a button with a 'data-url' attribute, use the property to make the button link.
	$( 'button[data-url]' ).click(function(){
		window.location.href = $( this ).attr( 'data-url' );
	});

	
	// resize the sidebar on load and when the window is resized.
	setTimeout( function(){
		set_sidebar_height();
	}, 1200 );
	$(window).resize( set_sidebar_height );

});

