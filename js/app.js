/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.js */ \"./src/js/timer.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timer_js__WEBPACK_IMPORTED_MODULE_1__);\n\n/* Your JS Code goes here */\n\n/* Demo JS */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYXJlYXRobG9uL2Zyb250ZW5kLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9hcHAuc2Nzc1wiO1xyXG5cclxuLyogWW91ciBKUyBDb2RlIGdvZXMgaGVyZSAqL1xyXG5cclxuLyogRGVtbyBKUyAqL1xyXG5pbXBvcnQgXCIuL3RpbWVyLmpzXCI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  // конечная дата, например 1 июля 2021\n  var deadline = new Date(2022, 6, 1); // id таймера\n\n  var timerId = null; // склонение числительных\n\n  function declensionNum(num, words) {\n    return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];\n  } // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов\n\n\n  function countdownTimer() {\n    var diff = deadline - new Date();\n\n    if (diff <= 0) {\n      clearInterval(timerId);\n    }\n\n    var days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;\n    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;\n    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;\n    var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;\n    $days.textContent = days < 10 ? \"0\" + days : days;\n    $hours.textContent = hours < 10 ? \"0\" + hours : hours;\n    $minutes.textContent = minutes < 10 ? \"0\" + minutes : minutes;\n    $seconds.textContent = seconds < 10 ? \"0\" + seconds : seconds;\n    $days.dataset.title = declensionNum(days, [\"день\", \"дня\", \"дней\"]);\n    $hours.dataset.title = declensionNum(hours, [\"час\", \"часа\", \"часов\"]);\n    $minutes.dataset.title = declensionNum(minutes, [\"минута\", \"минуты\", \"минут\"]);\n    $seconds.dataset.title = declensionNum(seconds, [\"секунда\", \"секунды\", \"секунд\"]);\n  } // получаем элементы, содержащие компоненты даты\n\n\n  var $days = document.querySelector(\".timer__days\");\n  var $hours = document.querySelector(\".timer__hours\");\n  var $minutes = document.querySelector(\".timer__minutes\");\n  var $seconds = document.querySelector(\".timer__seconds\"); // вызываем функцию countdownTimer\n\n  countdownTimer(); // вызываем функцию countdownTimer каждую секунду\n\n  timerId = setInterval(countdownTimer, 1000);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy90aW1lci5qcz80YWJiIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYWRsaW5lIiwiRGF0ZSIsInRpbWVySWQiLCJkZWNsZW5zaW9uTnVtIiwibnVtIiwid29yZHMiLCJjb3VudGRvd25UaW1lciIsImRpZmYiLCJjbGVhckludGVydmFsIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCIkZGF5cyIsInRleHRDb250ZW50IiwiJGhvdXJzIiwiJG1pbnV0ZXMiLCIkc2Vjb25kcyIsImRhdGFzZXQiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQ7QUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpCLENBRndELENBR3hEOztBQUNBLE1BQUlDLE9BQU8sR0FBRyxJQUFkLENBSndELENBS3hEOztBQUNBLFdBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxLQUE1QixFQUFtQztBQUNqQyxXQUFPQSxLQUFLLENBQ1ZELEdBQUcsR0FBRyxHQUFOLEdBQVksQ0FBWixJQUFpQkEsR0FBRyxHQUFHLEdBQU4sR0FBWSxFQUE3QixHQUNJLENBREosR0FFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CQSxHQUFHLEdBQUcsRUFBTixHQUFXLENBQVgsR0FBZUEsR0FBRyxHQUFHLEVBQXJCLEdBQTBCLENBQTdDLENBSE0sQ0FBWjtBQUtELEdBWnVELENBYXhEOzs7QUFDQSxXQUFTRSxjQUFULEdBQTBC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dGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8g0LrQvtC90LXRh9C90LDRjyDQtNCw0YLQsCwg0L3QsNC/0YDQuNC80LXRgCAxINC40Y7Qu9GPIDIwMjFcclxuICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKDIwMjIsIDYsIDEpO1xyXG4gIC8vIGlkINGC0LDQudC80LXRgNCwXHJcbiAgbGV0IHRpbWVySWQgPSBudWxsO1xyXG4gIC8vINGB0LrQu9C+0L3QtdC90LjQtSDRh9C40YHQu9C40YLQtdC70YzQvdGL0YVcclxuICBmdW5jdGlvbiBkZWNsZW5zaW9uTnVtKG51bSwgd29yZHMpIHtcclxuICAgIHJldHVybiB3b3Jkc1tcclxuICAgICAgbnVtICUgMTAwID4gNCAmJiBudW0gJSAxMDAgPCAyMFxyXG4gICAgICAgID8gMlxyXG4gICAgICAgIDogWzIsIDAsIDEsIDEsIDEsIDJdW251bSAlIDEwIDwgNSA/IG51bSAlIDEwIDogNV1cclxuICAgIF07XHJcbiAgfVxyXG4gIC8vINCy0YvRh9C40YHQu9GP0LXQvCDRgNCw0LfQvdC40YbRgyDQtNCw0YIg0Lgg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L7RgdGC0LDQstGI0LXQtdGB0Y8g0LLRgNC10LzQtdC90Lgg0LIg0LrQsNGH0LXRgdGC0LLQtSDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+INGN0LvQtdC80LXQvdGC0L7QslxyXG4gIGZ1bmN0aW9uIGNvdW50ZG93blRpbWVyKCkge1xyXG4gICAgY29uc3QgZGlmZiA9IGRlYWRsaW5lIC0gbmV3IERhdGUoKTtcclxuICAgIGlmIChkaWZmIDw9IDApIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRheXMgPSBkaWZmID4gMCA/IE1hdGguZmxvb3IoZGlmZiAvIDEwMDAgLyA2MCAvIDYwIC8gMjQpIDogMDtcclxuICAgIGNvbnN0IGhvdXJzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjAgLyA2MCkgJSAyNCA6IDA7XHJcbiAgICBjb25zdCBtaW51dGVzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjApICUgNjAgOiAwO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IGRpZmYgPiAwID8gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCkgJSA2MCA6IDA7XHJcbiAgICAkZGF5cy50ZXh0Q29udGVudCA9IGRheXMgPCAxMCA/IFwiMFwiICsgZGF5cyA6IGRheXM7XHJcbiAgICAkaG91cnMudGV4dENvbnRlbnQgPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xyXG4gICAgJG1pbnV0ZXMudGV4dENvbnRlbnQgPSBtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xyXG4gICAgJHNlY29uZHMudGV4dENvbnRlbnQgPSBzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xyXG4gICAgJGRheXMuZGF0YXNldC50aXRsZSA9IGRlY2xlbnNpb25OdW0oZGF5cywgW1wi0LTQtdC90YxcIiwgXCLQtNC90Y9cIiwgXCLQtNC90LXQuVwiXSk7XHJcbiAgICAkaG91cnMuZGF0YXNldC50aXRsZSA9IGRlY2xlbnNpb25OdW0oaG91cnMsIFtcItGH0LDRgVwiLCBcItGH0LDRgdCwXCIsIFwi0YfQsNGB0L7QslwiXSk7XHJcbiAgICAkbWludXRlcy5kYXRhc2V0LnRpdGxlID0gZGVjbGVuc2lvbk51bShtaW51dGVzLCBbXHJcbiAgICAgIFwi0LzQuNC90YPRgtCwXCIsXHJcbiAgICAgIFwi0LzQuNC90YPRgtGLXCIsXHJcbiAgICAgIFwi0LzQuNC90YPRglwiLFxyXG4gICAgXSk7XHJcbiAgICAkc2Vjb25kcy5kYXRhc2V0LnRpdGxlID0gZGVjbGVuc2lvbk51bShzZWNvbmRzLCBbXHJcbiAgICAgIFwi0YHQtdC60YPQvdC00LBcIixcclxuICAgICAgXCLRgdC10LrRg9C90LTRi1wiLFxyXG4gICAgICBcItGB0LXQutGD0L3QtFwiLFxyXG4gICAgXSk7XHJcbiAgfVxyXG4gIC8vINC/0L7Qu9GD0YfQsNC10Lwg0Y3Qu9C10LzQtdC90YLRiywg0YHQvtC00LXRgNC20LDRidC40LUg0LrQvtC80L/QvtC90LXQvdGC0Ysg0LTQsNGC0YtcclxuICBjb25zdCAkZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJfX2RheXNcIik7XHJcbiAgY29uc3QgJGhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lcl9faG91cnNcIik7XHJcbiAgY29uc3QgJG1pbnV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyX19taW51dGVzXCIpO1xyXG4gIGNvbnN0ICRzZWNvbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lcl9fc2Vjb25kc1wiKTtcclxuICAvLyDQstGL0LfRi9Cy0LDQtdC8INGE0YPQvdC60YbQuNGOIGNvdW50ZG93blRpbWVyXHJcbiAgY291bnRkb3duVGltZXIoKTtcclxuICAvLyDQstGL0LfRi9Cy0LDQtdC8INGE0YPQvdC60YbQuNGOIGNvdW50ZG93blRpbWVyINC60LDQttC00YPRjiDRgdC10LrRg9C90LTRg1xyXG4gIHRpbWVySWQgPSBzZXRJbnRlcnZhbChjb3VudGRvd25UaW1lciwgMTAwMCk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6Ii4vc3JjL2pzL3RpbWVyLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/timer.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;