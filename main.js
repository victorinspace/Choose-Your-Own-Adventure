var legacy = 0
var shame = 0


var awaken = [
	'look around',
	'yell for help',
	'cry'
]

var stranger = [
	`Your Legacy: ${legacy} \n\n A stranger is heard approaching from the other side of the door. Upon arrival they open the tiny peep-hole and say, "Ah, I see that you are finally awake! Good! It is time for you to enter the Arena and fight for your freedom!"`,
	`Your Legacy: ${legacy} \n\n The strange man continues, rudely not introducing himself, "You see, you have been brought here to stand trial for the crimes by which you have commited." \n\n The strange man seems pleased as he says this. \n\n "Now, I don't pleasure in this," he lies, "But you are to engage in combat with one of the king's champions. If you succeed, you are forgiven and are free to go!"`
]


var theChallenge = function() {
	// var displayText = document.getElementById("displaytext")

	alert(stranger[0])
	alert(stranger[1])
	// var strangeMan = alert(`Your Legacy: ${legacy} 
	// 	A stranger is heard approaching from the other side of the door. Upon arrival they open the tiny peep-hole and say, "Ah, I see that you are finally awake! Good! It is time for you to enter the Arena and fight for your freedom!"`)
	
	// var stranger = `<p>Your Legacy: ${legacy} \n\n A stranger is heard approaching from the other side of the door. Upon arrival they open the tiny peep-hole and say, "Ah, I see that you are finally awake! Good! It is time for you to enter the Arena and fight for your freedom!"</p>`
	// displayText.innerHTML = stranger
	
	// var callToAction = alert(`Your Legacy: ${legacy} \n\n The strange man continues, rudely not introducing himself, "You see, you have been brought here to stand trial for the crimes by which you have commited." \n\n The strange man seems pleased as he says this. \n\n "Now, I don't pleasure in this," he lies, "But you are to engage in combat with one of the king's champions. If you succeed, you are forgiven and are free to go!"`)
	// var callToAction - `<p>Your Legacy: ${legacy} \n\n The strange man continues, rudely not introducing himself, "You see, you have been brought here to stand trial for the crimes by which you have commited." \n\n The strange man seems pleased as he says this. \n\n "Now, I don't pleasure in this," he lies, "But you are to engage in combat with one of the king's champions. If you succeed, you are forgiven and are free to go!"</p>`
	// displayText.innerHTML = callToAction
}


var firstSteps = function() {
	var intro = prompt(`You find yourslef inside of a cobble-stone room. What do you do? \n\n [look around] [yell for help] [cry]`)

	if (intro == awaken[0]) {
		alert(`There is a small cot, bucket, and a single wooden door, by which you can determine is locked from the other side.`)
		
		firstSteps2()
		function firstSteps2() {
			var intro2 = prompt(`[yell for help] [cry]`)
			
			if (intro2 == awaken[1]) {
				legacy++
				theChallenge()
			} else if (intro2 == awaken[2]) {
				legacy--
				theChallenge()
			} else {
				alert(`Please type one of the options.`)
				firstSteps2()
			}
		}
	} else if (intro == awaken[1]) {
		legacy++
		theChallenge()
	} else if (intro == awaken[2]) {
		legacy--
		theChallenge()
	} else {
		alert(`Please type one of the options.`)
		firstSteps()
	}
}
firstSteps()

