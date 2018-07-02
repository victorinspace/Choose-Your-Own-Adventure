var legacy = 0
var shame = 0

var theChallenge = function() {
	var strangeMan = alert(`Your legacy is ${legacy}. \n A stranger is heard approaching from the other side of the door. Upon arrival they open the tiny peep-hole and say, "Ah, I see that you are finally awake! Good! It is time for you to enter the Arena and fight for your freedom!"`)
}

var firstSteps = function() {
	var intro = prompt(`You find yourslef inside of a cobble-stone room. What do you do? \n [look around] [yell for help] [cry]`)

	if (intro == "look around") {
		alert(`There is a small cot, bucket, and a single wooden door. by which you can determine is locked from the other side.`)
		
		firstSteps2()
		function firstSteps2() {
			var intro2 = prompt(`[yell for help] [cry]`)
			
			if (intro2 == `yell for help`) {
				legacy++
				theChallenge()
			} else if (intro2 == `cry`) {
				legacy--
				theChallenge()
			} else {
				alert(`Please type one of the options.`)
				firstSteps2()
			}
		}
	} else if (intro == `yell for help`) {
		legacy++
		theChallenge()
	} else if (intro == `cry`) {
		legacy--
		theChallenge()
	} else {
		alert(`Please type one of the options.`)
		firstSteps()
	}
}
firstSteps()


