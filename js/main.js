(() =>
{
	"use strict"

	const $ = selector => document.querySelector(selector)

	let $form = $('form')
	var count = 0

	console.log($('.container3').hidden)

	$form.addEventListener("submit", event =>
	{
	
			$('.container3').hidden = false
			event.target.style.display = `none`
			

		console.log(event.target)
		event.preventDefault()


	})
})()