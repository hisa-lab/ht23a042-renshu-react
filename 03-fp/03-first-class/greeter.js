function greeter(target) {
    const sayHello = () => {
        console.log(`Hi, ${target}!`);
    };

    return sayHello;
}

const greet = greeter('Step Jun');
greet();  // Hi, Step Jun!

// 修正1
function greeter1(target) {
    return () => {
        console.log(`Hi, ${target}!`);
    };
}

const greet1 = greeter1('Step Jun');
greet1();  // Hi, Step Jun!

// 修正2
const greeter2 = (target) => () => {console.log(`Hi, ${target}!`); };

const greet2 = greeter2('Step Jun');
greet2();  // Hi, Step Jun!
