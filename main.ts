input.onButtonPressed(Button.A, function () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 2, controller)
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 90, controller)
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 178, controller)
    basic.showString("B")
})
let controller = 0
controller = PCA9685.chipAddress("0x40")
basic.showNumber(controller)
PCA9685.init(controller, 60)
PCA9685.setServoLimits(
PCA9685.ServoNum.Servo1,
6,
24,
14,
64
)
