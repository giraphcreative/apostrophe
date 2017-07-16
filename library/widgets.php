<?php


if ( function_exists('register_sidebar') ) {
 	register_sidebar(array(
		'name'=> 'General Sidebar',
		'id' => 'sidebar-generic',
        'before_widget' => '<div class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="widget-title"><h4>',
        'after_title' => '</h4></div>',
    ));
}


?>