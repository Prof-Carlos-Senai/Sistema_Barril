/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const Barril = __webpack_require__(/*! ./models/Barril */ \"./models/Barril.js\")\r\n\r\nlet resposta = document.getElementById('resposta')\r\n\r\nlet principal = document.getElementById('principal')\r\n\r\nprincipal.addEventListener('click', ()=>{\r\n    let diamMaior = Number(document.getElementById('diamMaior').value)\r\n    let diamMenor = Number(document.getElementById('diamMenor').value)\r\n    let altura = Number(document.getElementById('altura').value)\r\n\r\n    let barril = new Barril(diamMaior, diamMenor, altura)\r\n\r\n    console.log(barril)\r\n\r\n    let Ab = barril.calcularAb()\r\n    let AB = barril.calcularAB()\r\n    let Al = barril.calcularAl()\r\n    let At = barril.calcularAt()\r\n    let v = barril.calcularVolume()\r\n    let classificacao = barril.classificarBarril()\r\n\r\n    console.log(`A área da base da tampa do Barril é: ${Ab.toFixed(2)}`)\r\n    console.log(`A área de ambas as base do Barril é: ${AB.toFixed(2)}`)\r\n    console.log(`A área lateral do Barril é: ${Al.toFixed(2)}`)\r\n    console.log(`A área total do Barril é: ${At.toFixed(2)}`)\r\n    console.log(`O volume do Barril é: ${v.toFixed(2)}`)\r\n\r\n    resposta.innerHTML = ``\r\n    resposta.innerHTML += `A área da base da tampa do Barril é: ${Ab.toFixed(2)} cm² <br>`\r\n    resposta.innerHTML += `A área de ambas as base do Barril é: ${AB.toFixed(2)} cm² <br>`\r\n    resposta.innerHTML += `A área lateral do Barril é: ${Al.toFixed(2)} cm² <br>`\r\n    resposta.innerHTML += `A área total do Barril é: ${At.toFixed(2)} cm² <br>`\r\n    resposta.innerHTML += `O volume do Barril é: ${v.toFixed(2)} cm³ <br>`\r\n    resposta.innerHTML += `${classificacao} <br>`\r\n\r\n})\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./models/Barril.js"
/*!**************************!*\
  !*** ./models/Barril.js ***!
  \**************************/
(module) {

eval("{class Barril{\r\n    // diamMaior => y, diamMenor => z, altura => h\r\n    constructor(diamMaior, diamMenor, altura){\r\n        this.diamMaior = diamMaior\r\n        this.diamMenor = diamMenor\r\n        this.altura = altura\r\n    }\r\n\r\n    // raio base = (z / 2)\r\n    calcularRaio(){\r\n        return this.diamMenor / 2.0\r\n    }\r\n    // Ab = π * r²\r\n    calcularAb(){\r\n        let raio = this.calcularRaio()\r\n        return Math.PI * raio * raio\r\n    }\r\n    // AB = 2 * Ab\r\n    calcularAB(){\r\n        return this.calcularAb() * 2.0\r\n    }\r\n    // Al = ((π * h)/3) * (2 *y +  z)\r\n    calcularAl(){\r\n        return ((Math.PI * this.altura)/3.0) * \r\n            (2.0 * this.diamMaior + this.diamMenor) \r\n    }\r\n    // At = Ab + Al\r\n    calcularAt(){\r\n        return this.calcularAb() + this.calcularAB()\r\n    }\r\n    // v = ((π * h)/12) * (2*y² + z²) \r\n    calcularVolume(){\r\n        return ( (Math.PI * this.altura) / 12.0 ) *\r\n            ( (2.0 * (this.diamMaior * this.diamMaior)) + \r\n              (this.diamMenor * this.diamMenor) )\r\n    }\r\n\r\n    classificarBarril(){\r\n        let volume = this.calcularVolume()\r\n\r\n        if(volume < 100000 ){\r\n            return 'Classificação: Ancorote (Pequeno Porte)'\r\n        }else if(volume >= 100000 && volume <= 400000){\r\n            return 'Classificação: Barril Padrão (Bordalesa)'\r\n        }else if(volume > 400000){\r\n            return 'Classificação: Tonel / Bago (Grande Porte)'\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Barril\r\n\n\n//# sourceURL=webpack:///./models/Barril.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;