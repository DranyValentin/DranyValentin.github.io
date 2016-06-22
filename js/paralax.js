(() =>
{
	"use strict"

	const $ = selector => document.querySelector(selector)

	var $body = $('body')

	window.addEventListener("scroll", (event) =>
	{
		let {scrollY} = event.currentTarget
		let backgroundPositionY = scrollY/2

		//if (scrollY < 400)
			$body.style.backgroundPositionY = 
					`-${backgroundPositionY}px`
	})
})()