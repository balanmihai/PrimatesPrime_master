let animation = gsap.timeline({repeat:-1})
let targets = document.querySelectorAll(".words p")
let numberOfTargets = targets.length

let duration = 0.6 //change this
let pause = 0.8 // change this

let stagger = duration + pause
let repeatDelay = (stagger * (numberOfTargets - 1)) + pause

function init() {
	gsap.set(".words", {autoAlpha:1})
	animation.from(targets, {yPercent:50, duration:duration, opacity:0, stagger:{
		each:stagger,
		repeat:-1,
		repeatDelay:repeatDelay
	}})
	   .to(targets, {yPercent:-150, duration:duration, opacity:0, stagger:{
		each:stagger,
		repeat:-1,
		repeatDelay:repeatDelay
	}}, stagger)
}

init()