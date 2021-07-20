input.onButtonPressed(Button.A, function () {
    radio.sendString("hi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(197)
basic.forever(function () {
	
})
