import inquirer from 'inquirer'

const number1 = parseFloat(process.argv[2]);
const number2 = parseFloat(process.argv[3]);

if (process.argv.length !== 4) {
    console.log('Please Enter two numbers')
} else if((isNaN(number1)) || isNaN(number2)) {
    console.log('Please Enter two numbers')
}  else {
    var  question = [
        {type: 'input' , name: 'operator', message: 'add | subtract'}
    ]
    inquirer.prompt(question).then(answers => {
        const operator = answers.operator;
        if (operator === 'add') {
            const result = number1 + number2;
            console.log(`${number1} + ${number2} = ${result.toFixed(2)}`);
        } else if (operator === 'subtract') {
            const result = number1 - number2;
            console.log(`${number1} - ${number2} = ${result.toFixed(2)}`);
        } else {
            console.log('Unknown operator');
        }
    });
    //มีการใส่ toFixed(2) เพื่อให้คำตอบปัดทศนิยมให้เหลือ 2 ตำแหน่ง  
}


