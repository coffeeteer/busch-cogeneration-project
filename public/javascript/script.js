$(document).ready(function() {
	console.log('script loaded');

	lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      fitImagesInViewport: true,
      maxWidth: 100%,
    });

    $("img.lazy").lazyload({
    	effect : "fadeIn",
    	event : "sporty"
    });
});