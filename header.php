<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js" ng-app="app">

<head>
	<base href="/wphoto/">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<title><?php wp_title(''); ?><?php if( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link href="//www.google-analytics.com" rel="dns-prefetch">
	<link href="<?php the_favicon_url(); ?>" rel="shortcut icon">
	<link href="<?php the_apple_touch_url(); ?>" rel="apple-touch-icon-precomposed" sizes="144x144">

	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="Squarespace" />

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="<?php bloginfo( 'description' ); ?>">

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

	<header class="container">
    <nav class="nav">
      <div class="logo">
        <a href="<?php echo site_url(); ?>/#/">
          <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="Logo" />
        </a>
      </div>
			<ul>
				<li ng-class="{active: activetab=='/posts'}"><a href="#/posts/">Ver lista de entradas</a></li>
			</ul>
    </nav>
  </header>
