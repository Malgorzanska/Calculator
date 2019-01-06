import { Calculator } from "./Calculator";

class DecCalculator extends  Calculator{

    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryDec =  numberX[i] + numberY[i] + result[i];
            if( carryDec  >= 10) {
                result[i] = 0;
                result[i-1] = 1;
            } else  {
                result[i] = carryDec;
            }
        }
        return result;
    }

    changeNumber(root) {
        let activeElement = $(root).find('.active');
        activeElement.attr('contenteditable', "true");
        activeElement.trigger('focus');
    }


     initEvents() {
         super.initEvents();

         $('.dec-calculator .operator-bar span').on('click', () => {
             console.log('aa');
             this.checkNumber() ;
             this.updateResult();
         });
     }

    updateResult() {
        let root =  this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");
        for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
            parseInt( $resultNumber.eq(j).find(".active").text(this.resultNumberArray[i]));

            }
        }
    }


export { DecCalculator  };