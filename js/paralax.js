(function()
{
	"use strict"

	var $body = document.querySelector('.bg_paralax')

	window.addEventListener("scroll", function(event)
    	{
        	var scrollY = event.currentTarget.pageYOffset
        	var backgroundPositionY = scrollY + 'px'

        	$body.style.backgroundPosition = "0px " + backgroundPositionY

        	event.preventDefault()
    	})
})()
