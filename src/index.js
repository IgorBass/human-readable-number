module.exports = function toReadable (number) 
{
    function numberToWord(number) {
        switch(number) {
            case 0: return "zero";  
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            case 4: return "four";
            case 5: return "five";
            case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            case '0': return "zero";  
            case '1': return "one";
            case '2': return "two";
            case '3': return "three";
            case '4': return "four";
            case '5': return "five";
            case '6': return "six";
            case '7': return "seven";
            case '8': return "eight";
            case '9': return "nine";
            default: return "invalid input";
        }
      }

      let arrayOfNumber = Array.from(String(number), Number);
    function hundreds(arrayOfNumber)
    {
        return `${numberToWord(arrayOfNumber[0])} hundred`;
    }

    function tens(number)
{
    if(number < 10)
    {
        return `${numberToWord(number)}`
    }
    else if (number == 10)
    {
        return ('ten');
    }
    else if (number == 11)
    {
        return ('eleven');
    }
    else if (number == 12)
    {
        return ('twelve');
    }
    else if (number == 13)
    {
        return ('thirteen');
    }
    else if (number == 14)
    {
        return ('fourteen');
    }
    else if (number == 15)
    {
        return ('fifteen');
    }
    else if (number == 16)
    {
        return ('sixteen');
    }
    else if (number == 17)
    {
        return ('seventeen');
    }
    else if (number == 18)
    {
        return ('eighteen');
    }
    else if (number == 19)
    {
        return ('nineteen');
    }
    else if (number == 20)
    {
        return ('twenty');
    }
    else if (number > 20 && number < 30)
    {
        let strNumber = number.toString();
        return `twenty ${numberToWord(strNumber[1])}`;
    }
    else if (number >= 30 && number < 40)
    {
        let strNumber = number.toString();
        return `thirty ${numberToWord(strNumber[1])}`;
    }
    else if (number >= 40 && number < 50)
    {
        let strNumber = number.toString();
        return `forty ${numberToWord(strNumber[1])}`;
    }
    else if(number >= 50 && number < 60)
    {
        let strNumber = number.toString();
        return `fifty ${numberToWord(strNumber[1])}`;
    }
    else if( number >= 60 && number < 80)
    {
        let strNumber = number.toString();
        return `${numberToWord(strNumber[0])}ty ${numberToWord(strNumber[1])}`;
    }
    else if (number >= 80 && number < 90)
    {
        let strNumber = number.toString();
        return `eighty ${numberToWord(strNumber[1])}`;
    }
    else if (number >= 90)
    {
        let strNumber = number.toString();
        return `${numberToWord(strNumber[0])}ty ${numberToWord(strNumber[1])}`;
    }
}

    if (arrayOfNumber.length == 3)
    {
    let numberTens = parseInt(arrayOfNumber.slice(1).join(''))
    return((hundreds(arrayOfNumber) + ' ' + tens(numberTens)).replace('zero', '').trim());
    }
else if(arrayOfNumber.length == 2)
    {
    let numberTens = parseInt(arrayOfNumber.join(''))
    return((tens(numberTens)).replace('zero','').trim())
    }
else if(arrayOfNumber.length == 1)
    {
    return(`${numberToWord(arrayOfNumber[0])}`)
    }
}

