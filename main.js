let num1 = prompt("Birinci reqemi daxil edin");
num1 = Number(num1);

let num2 = prompt("Ikinci reqemi daxil edin");
num2 = Number(num2);

let operator = prompt('operator(/,+,*,-)');

switch (operator) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '/':
        alert(num1 / num2);
        break;
    case '*':
        alert(num1 * num2);
        break;
    default:
        alert("Bu emmeliyat mevcud deyil");
        break;
}