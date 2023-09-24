let a = Math.floor(Math.random() * 100);


// if...else
let result2;

while(true){
if (a > 10) {
    result2 = a
} else {
    result2 = a * 2
}


if (result2 > 5) {
    result2 = (2 * a) + 1
    break
} else if (a < 3) {
    result2 = 1
} else {
    result2 = 2 * (a - 2)
}

if (result2 > 4) {
    result2 = 5
    break
} else if (a % 2 == 0) {
    result2 = 6
    break
} else {
    result2 = 7
    break
}
}


// switch()
let result3;

switch (true) {
    case (a>10):
        result3=a
        
        
    case (a<10):
        result3=a*2
        
        
}

switch (true) {        
    case (result3>5):
        result3=(2 * a) + 1
        break
    default:
        switch (true) {        
            case (a<3):
                result3=1
            default:
                result3=2 * (a - 2)
        }
        switch (true) {
            case (result3>4):
                result3=5
                break
            default:
                switch (true) {
                    case (a % 2 == 0):
                        result3=6
                        break
                    default:
                        result3=7
                        break
                }
        }
}
console.log("a =",a)
console.log("Тернарный оператор: ",(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7));
console.log("if...else:", result2)
console.log("switch():", result3)