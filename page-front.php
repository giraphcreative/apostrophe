<?php

/*
Template Name: Page - Home
*/

get_header();

?>

	<?php the_showcase(); ?>

	<div class="home-pad icon-container bg-blue group">
		<h2 class="icon-title">services</h2>
		<?php the_icon_showcase(); ?>
		<a href="/services" class="more">more</a>
	</div>

	<div class="home-pad blog">
		<div class="text-center">
			<img src="<?php bloginfo( 'template_url' ); ?>/img/icon-blog.png" />
		</div>
		<div class="blog-listing">
			<?php
			global $query_string;
			query_posts( $query_string . '&post_per_page=4' );
			if ( have_posts() ) : 

				// Start the Loop.
				while ( have_posts() ) : the_post(); 
					?>
				<div class="post quarter">
					<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
					<?php the_excerpt(); ?>
				</div>
				<?php
				endwhile;

			else :

				print "<p>There are currently no posts to list here.</p>";

			endif;
			?>
			<div class="group text-center"><a href="/blog" class="more">more posts</a></div>
		</div>
	</div>

<?php 

get_footer();

?>