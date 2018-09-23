function printHelloWorld(language) {    
    
    if (language === 'c') {
        return function(speakerName) {
            console.log('Hi ' + speakerName + '! Write "printf("Hello, World!");" in C language')
        }
    } else if (language === 'rust') {
        return function(speakerName) {
            console.log('In Rust you should write "println!("Hello World!");", ' + speakerName + '.')
        }
    } else {
        return function(speakerName) {
            console.log('In english it\'s written "Hello world!", I guess you knew that ' + speakerName + '!')
        }
    }
}

const helloC = printHelloWorld('c')

helloC('Gabriella')
helloC('Gerardo')

const helloRust = printHelloWorld('rust')

helloRust('John')

printHelloWorld()('Amalia')

