/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calculator; });
/* abstract */ class Calculator {
    constructor(selectorName) {
         this.name = selectorName;
         this.$calculatorDOMElement = $(selectorName); //o co chodzi? --> dzięki temu nasza clasa bedzie uniweralna (dla bin. i dec kalktulatora)

         this.firstNumberArray = [];
         this.secondNumberArray = [];
         this.resultNumberArray = [0,0,0,0,0,0,0,0,0];
         this.initEvents();
   }

   /* Abstract method add numbers in two array
   *  @param {array} numberX First number
   *  @param {array} numberY Second number
   *  @return {array}
   */
   add(numberX, numberY) {
       console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
       return [0,0,0,0,0,0,0,0];
   }

   /* Abstract method changing number
   *  @param {jQuery element} root Parent element
   */
   changeNumber(root) {
       console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
   }

   /* Abstract method changing Result
   */
   updateResult() {
       console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
   }

   /* Get the name of calculator selector
   *  @return {string}
   */
   getName() {
       return `Hello I am ${this.name}`;
   }

   /* Check what number is set in both numbers and add
   *  @return {string}
   */
   checkNumber() {
       let root =  this.$calculatorDOMElement;
       let $firstNumber = root.children(".group-number").children("label:first-child");
       let $secondNumber = root.children(".group-number").children("label:nth-child(2)");
       let $resultNumber = root.children(".group-number").children(".result-bit");

       for(let i = $firstNumber.length-1, j = 0; i >= 0 ; i--, j++) {
           this.firstNumberArray[i] = parseInt( $firstNumber.eq(j).find('.active').text() );
           this.secondNumberArray[i] = parseInt( $secondNumber.eq(j).find('.active').text() );
           this.resultNumberArray[i] = parseInt( $resultNumber.eq(j).find('.active').text() );
       }
       this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
   }

   /* Set event click on number
   */
   initEvents() {
        this.$calculatorDOMElement.find(".display-number").on('click', (event) => {
            const parentLabel = $(event.target).parent(".display-number");
            this.changeNumber(parentLabel);
        })
   }
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BinaryCalculator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DecCalculator__ = __webpack_require__(4);






$(document).ready(function() {
    const bitCalc = new __WEBPACK_IMPORTED_MODULE_0__BinaryCalculator__["a" /* BinaryCalculator */](".binary-calculator");
    const decCalc = new __WEBPACK_IMPORTED_MODULE_2__DecCalculator__["a" /* DecCalculator */]('.dec-calculator');
});




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinaryCalculator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calculator__ = __webpack_require__(0);


class BinaryCalculator extends __WEBPACK_IMPORTED_MODULE_0__Calculator__["a" /* Calculator */]{
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    /* Method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */
    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if( carryBit  === 2) {
                result[i] = 0;
                result[i-1] = 1;
            } else if (carryBit === 3 ){
                result[i] = 1;
                result[i-1] = 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }

    /* Method changing number
    *  @param {jQuery element} root Parent element
    */
    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.removeClass("active");
        activeElement.siblings().addClass("active");
        root.children(":first-child").slideToggle(() => { //nasza animacja, gdy klikam na liczbę
             this.checkNumber();
             this.updateResult();
        });
    }

    /* Method changing Result
    */
    updateResult() {
         let root =  this.$calculatorDOMElement;
         let $resultNumber = root.children(".group-number").children(".result-bit");
         for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
            let valueResult = parseInt( $resultNumber.eq(j).find(".active").text() );
            if( this.resultNumberArray[i] != valueResult ) {
                let activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
                activeElement.siblings().addClass("active");
                $resultNumber.eq(j).children(":first-child").slideToggle();
            }
         }
    }
}




/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecCalculator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calculator__ = __webpack_require__(0);


class DecCalculator extends  __WEBPACK_IMPORTED_MODULE_0__Calculator__["a" /* Calculator */]{

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




/***/ })
/******/ ]);