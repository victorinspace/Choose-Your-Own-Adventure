// Score Counters
var legacy = 0
var shame = 0


// Respones and Narration

var exposition = {
	intro: [
		`You awaken to find that you have been placed inside of a cobble-stone room. What do you do? \n\n Option 1: Look around the room \n\n Option 2: Yell for help. \n\n Option 3: Cry.`,
		`There is a small cot, a small bucket, and a single wooden door, by which you can determine is locked from the other side.`
	]
	theThreshold = [
		`Two heavily armed guards enter the room and grab you with muscular brevity, hauling you out of the small cobble-stone room. \n\n You are carried down a dark and narrow hallway that echoes the clattering of armor and dragged feet. \n\n You assume that you are approaching the end as the natural light of the outside world grows brighter and brighter towards you.`,
		`As your near the light you can hear the roar of a thousand people just outside the hallway. Coming to the opening, you can see the Arena. A huge space surrounded by seats and statues of generals of war. Your heart beats faster as you stand in doorway, just outside the sunlight. \n\n One of the guards hand you a rusty sword and small wooden shield, the other guard follows up this gesture by kicking you into the unforgiving light.`
		`Your ears ring as the noise from the crowd blends into one cacophony of screaming and shouting. \n\n You can see the King's Champion before you, approaching without care. He wields a mighty axe and iron shield. \n\n What do you do? \n\n Option 1: Engage in glorious battle! \n\n Option 2: Attempt to reason with your competitor.`
	]
	battle: [
		`You sprint towards the Champion, matching his blade with yours. You both swing for each other's torso, then the head. Blocking and ducking back and forth. The crowd eats it up. Your foe is outmatched. \n\n You lead him to lunge towards you, sidestepping his approach and kicking the back of his knees. The Champion falls to the ground, fatigue taking control... \n\n Option 1: Perform a fatal execution. \n\n Option 2: Bask in the applause of the crowd.`,
		`You attempt to reason with this brute, but his pace only quickens. Your lack of will allows him to overpower you and you are knocked to the ground by a brutal shield bunt. Laughter is heard from the crowd and the Champion turns away from you to engage the crowd with shouting and cheering. \n\n He is about to turn back, swinging his axe down for a final blow... \n\n Option 1: Strike at his ankles. \n\n Option 2: Plead for your life.`,

		`You are slain by the King's Champion. Your head rolls, the crowd cheers. Your crimes are paid for with your eternal slumber.`,

		`You slice at his ankles causing him to lose balance. His hand falls, but misses you entirely. He is prone for a fatal attack, what do you do? \n\n Option 1: Perform a fatal execution. \n\n Option 2: Bask in the applause of the crowd.`

		`You entertain the crowd `
	]

}




function stranger(legacy, num) {
	var theStranger = [
		`Your Legacy: ${legacy} \n\n You hear casual yet heavy footsteps approaching your room. They stop abruptly in front of the door and with no urgency a small window in the door is opened. \n\n Peeping through the tiny peep-hole is one distant blue human eyeball that says, "Ah! I see that you are finally awake! Good! It is time for you to enter the Arena and fight for your freedom!"`,
		`Your Legacy: ${legacy} \n\n The Stranger continues, rudely not introducing himself, "You see, you have been brought here to stand trial for the crimes that you have commited." \n\n The strange man seems pleased as he says this. \n\n "Now, I don't take any pleasure in this," he lies, "But you are to engage in mortal combat with one of the king's own champions. If you succeed, you are forgiven and are free to go!" \n\n The Stranger pauses for a moment and says, "And if you are to fail then... well, we don't need to explain much further do we?" \n\n You can feel The Stranger smiling on the other side. \n\n Option 1: "I will defeat whoever you put before me!" \n\n Option 2: "I will not fight! \n\n Option 3: Cry.`,
		`Your Legacy: ${legacy} \n\n The Stranger howls with laughter. \n\n "You presume to have a choice!" The Stranger says and as he says this, metal keys rattle at the door handle...`
	]

	return theStranger[num]
}



var callToAction = function() {
	alert(stranger(legacy, 0))
	
	var challenge = prompt(stranger(legacy, 1))

	if (challenge == '1') {
		legacy++
		alert(stranger(legacy, 2))
	} else if (challenge == '2') {
		legacy--
		alert(stranger(legacy, 2))
	} else if (challenge == '3') {
		legacy--
		alert(stranger(legacy, 2))
	} else {
		alert(`Please type one of the options.`)
		callToAction()
	}

	alert()
}

var lookAround = function () {
	var intro2 = prompt(`Option 1: Yell for help. \n\n Option 2: Cry.`)
	
	if (intro2 == '1') {
		legacy++
		callToAction()
	} else if (intro2 == '2') {
		legacy--
		callToAction()
	} else {
		alert(`Please type one of the options.`)
		lookAround()
	}
}

// Introduction
var introduction = function() {
	var intro = prompt(exposition.intro[0])

	if (intro == '1') { // Look around
		alert(exposition.intro[1])
		lookAround()
	} else if (intro == '2') { // Yell
		legacy++
		callToAction()
	} else if (intro == '3') { // Cry
		legacy--
		callToAction()
	} else {
		alert(`Please type one of the options.`)
		introduction()
	}
}
introduction()