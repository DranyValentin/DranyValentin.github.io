(() =>
{
	"use strict"

	var $body = document.querySelector('.bg_paralax')

	window.addEventListener("scroll", (event) =>
	{
		var scrollY = event.currentTarget.scrollY
        	var backgroundPositionY = scrollY/5 + 'px'

		$body.style.backgroundPosition = "0px " + backgroundPositionY
	})
})()
