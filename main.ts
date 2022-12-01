function StartupTest () {
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
    }
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let item = 0
let calibrationVal = pins.analogReadPin(AnalogPin.P0)
basic.showNumber(calibrationVal)
StartupTest()
basic.forever(function () {
    item = pins.analogReadPin(AnalogPin.P0)
    if (item < calibrationVal - 50) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
