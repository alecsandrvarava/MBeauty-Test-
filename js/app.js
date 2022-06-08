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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  // конечная дата, например 1 июля 2021\n  var deadline = new Date(2022, 6, 1); // id таймера\n\n  var timerId = null; // склонение числительных\n\n  function declensionNum(num, words) {\n    return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];\n  } // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов\n\n\n  function countdownTimer() {\n    var diff = deadline - new Date();\n\n    if (diff <= 0) {\n      clearInterval(timerId);\n    }\n\n    var days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;\n    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;\n    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0; //  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;\n\n    $days.textContent = days < 10 ? \"0\" + days : days;\n    $hours.textContent = hours < 10 ? \"0\" + hours : hours;\n    $minutes.textContent = minutes < 10 ? \"0\" + minutes : minutes; //  $seconds.textContent = seconds < 10 ? \"0\" + seconds : seconds;\n\n    $days.dataset.title = declensionNum(days, [\"день\", \"дня\", \"дней\"]);\n    $hours.dataset.title = declensionNum(hours, [\"час\", \"часа\", \"часов\"]);\n    $minutes.dataset.title = declensionNum(minutes, [\"минута\", \"минуты\", \"минут\"]); //  $seconds.dataset.title = declensionNum(seconds, [\n    //    \"секунда\",\n    //    \"секунды\",\n    //    \"секунд\",\n    //  ]);\n  } // получаем элементы, содержащие компоненты даты\n\n\n  var $days = document.querySelector(\".timer__days\");\n  var $hours = document.querySelector(\".timer__hours\");\n  var $minutes = document.querySelector(\".timer__minutes\"); //   const $seconds = document.querySelector(\".timer__seconds\");\n  // вызываем функцию countdownTimer\n\n  countdownTimer(); // вызываем функцию countdownTimer каждую секунду\n\n  timerId = setInterval(countdownTimer, 60000);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy90aW1lci5qcz80YWJiIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYWRsaW5lIiwiRGF0ZSIsInRpbWVySWQiLCJkZWNsZW5zaW9uTnVtIiwibnVtIiwid29yZHMiLCJjb3VudGRvd25UaW1lciIsImRpZmYiLCJjbGVhckludGVydmFsIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsIiRkYXlzIiwidGV4dENvbnRlbnQiLCIkaG91cnMiLCIkbWludXRlcyIsImRhdGFzZXQiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQ7QUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpCLENBRndELENBR3hEOztBQUNBLE1BQUlDLE9BQU8sR0FBRyxJQUFkLENBSndELENBS3hEOztBQUNBLFdBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxLQUE1QixFQUFtQztBQUNqQyxXQUFPQSxLQUFLLENBQ1ZELEdBQUcsR0FBRyxHQUFOLEdBQVksQ0FBWixJQUFpQkEsR0FBRyxHQUFHLEdBQU4sR0FBWSxFQUE3QixHQUNJLENBREosR0FFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CQSxHQUFHLEdBQUcsRUFBTixHQUFXLENBQVgsR0FBZUEsR0FBRyxHQUFHLEVBQXJCLEdBQTBCLENBQTdDLENBSE0sQ0FBWjtBQUtELEdBWnVELENBYXhEOzs7QUFDQSxXQUFTRSxjQUFULEdBQTBCO0FBQ3hCLFFBQU1DLElBQUksR0FBR1AsUUFBUSxHQUFHLElBQUlDLElBQUosRUFBeEI7O0FBQ0EsUUFBSU0sSUFBSSxJQUFJLENBQVosRUFBZTtBQUNiQyxNQUFBQSxhQUFhLENBQUNOLE9BQUQsQ0FBYjtBQUNEOztBQUNELFFBQU1PLElBQUksR0FBR0YsSUFBSSxHQUFHLENBQVAsR0FBV0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLElBQUksR0FBRyxJQUFQLEdBQWMsRUFBZCxHQUFtQixFQUFuQixHQUF3QixFQUFuQyxDQUFYLEdBQW9ELENBQWpFO0FBQ0EsUUFBTUssS0FBSyxHQUFHTCxJQUFJLEdBQUcsQ0FBUCxHQUFXRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osSUFBSSxHQUFHLElBQVAsR0FBYyxFQUFkLEdBQW1CLEVBQTlCLElBQW9DLEVBQS9DLEdBQW9ELENBQWxFO0FBQ0EsUUFBTU0sT0FBTyxHQUFHTixJQUFJLEdBQUcsQ0FBUCxHQUFXRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osSUFBSSxHQUFHLElBQVAsR0FBYyxFQUF6QixJQUErQixFQUExQyxHQUErQyxDQUEvRCxDQVB3QixDQVF4Qjs7QUFDQU8sSUFBQUEsS0FBSyxDQUFDQyxXQUFOLEdBQW9CTixJQUFJLEdBQUcsRUFBUCxHQUFZLE1BQU1BLElBQWxCLEdBQXlCQSxJQUE3QztBQUNBTyxJQUFBQSxNQUFNLENBQUNELFdBQVAsR0FBcUJILEtBQUssR0FBRyxFQUFSLEdBQWEsTUFBTUEsS0FBbkIsR0FBMkJBLEtBQWhEO0FBQ0FLLElBQUFBLFFBQVEsQ0FBQ0YsV0FBVCxHQUF1QkYsT0FBTyxHQUFHLEVBQVYsR0FBZSxNQUFNQSxPQUFyQixHQUErQkEsT0FBdEQsQ0FYd0IsQ0FZeEI7O0FBQ0FDLElBQUFBLEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxLQUFkLEdBQXNCaEIsYUFBYSxDQUFDTSxJQUFELEVBQU8sQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQUFQLENBQW5DO0FBQ0FPLElBQUFBLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQyxLQUFmLEdBQXVCaEIsYUFBYSxDQUFDUyxLQUFELEVBQVEsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixPQUFoQixDQUFSLENBQXBDO0FBQ0FLLElBQUFBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsS0FBakIsR0FBeUJoQixhQUFhLENBQUNVLE9BQUQsRUFBVSxDQUM5QyxRQUQ4QyxFQUU5QyxRQUY4QyxFQUc5QyxPQUg4QyxDQUFWLENBQXRDLENBZndCLENBb0J4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0F2Q3VELENBd0N4RDs7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHaEIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixjQUF2QixDQUFkO0FBQ0EsTUFBTUosTUFBTSxHQUFHbEIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixlQUF2QixDQUFmO0FBQ0EsTUFBTUgsUUFBUSxHQUFHbkIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixpQkFBdkIsQ0FBakIsQ0EzQ3dELENBNEN4RDtBQUNBOztBQUNBZCxFQUFBQSxjQUFjLEdBOUMwQyxDQStDeEQ7O0FBQ0FKLEVBQUFBLE9BQU8sR0FBR21CLFdBQVcsQ0FBQ2YsY0FBRCxFQUFpQixLQUFqQixDQUFyQjtBQUNELENBakREIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIC8vINC60L7QvdC10YfQvdCw0Y8g0LTQsNGC0LAsINC90LDQv9GA0LjQvNC10YAgMSDQuNGO0LvRjyAyMDIxXHJcbiAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZSgyMDIyLCA2LCAxKTtcclxuICAvLyBpZCDRgtCw0LnQvNC10YDQsFxyXG4gIGxldCB0aW1lcklkID0gbnVsbDtcclxuICAvLyDRgdC60LvQvtC90LXQvdC40LUg0YfQuNGB0LvQuNGC0LXQu9GM0L3Ri9GFXHJcbiAgZnVuY3Rpb24gZGVjbGVuc2lvbk51bShudW0sIHdvcmRzKSB7XHJcbiAgICByZXR1cm4gd29yZHNbXHJcbiAgICAgIG51bSAlIDEwMCA+IDQgJiYgbnVtICUgMTAwIDwgMjBcclxuICAgICAgICA/IDJcclxuICAgICAgICA6IFsyLCAwLCAxLCAxLCAxLCAyXVtudW0gJSAxMCA8IDUgPyBudW0gJSAxMCA6IDVdXHJcbiAgICBdO1xyXG4gIH1cclxuICAvLyDQstGL0YfQuNGB0LvRj9C10Lwg0YDQsNC30L3QuNGG0YMg0LTQsNGCINC4INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC+0YHRgtCw0LLRiNC10LXRgdGPINCy0YDQtdC80LXQvdC4INCyINC60LDRh9C10YHRgtCy0LUg0YHQvtC00LXRgNC20LjQvNC+0LPQviDRjdC70LXQvNC10L3RgtC+0LJcclxuICBmdW5jdGlvbiBjb3VudGRvd25UaW1lcigpIHtcclxuICAgIGNvbnN0IGRpZmYgPSBkZWFkbGluZSAtIG5ldyBEYXRlKCk7XHJcbiAgICBpZiAoZGlmZiA8PSAwKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXlzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjAgLyA2MCAvIDI0KSA6IDA7XHJcbiAgICBjb25zdCBob3VycyA9IGRpZmYgPiAwID8gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCAvIDYwIC8gNjApICUgMjQgOiAwO1xyXG4gICAgY29uc3QgbWludXRlcyA9IGRpZmYgPiAwID8gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCAvIDYwKSAlIDYwIDogMDtcclxuICAgIC8vICBjb25zdCBzZWNvbmRzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKSAlIDYwIDogMDtcclxuICAgICRkYXlzLnRleHRDb250ZW50ID0gZGF5cyA8IDEwID8gXCIwXCIgKyBkYXlzIDogZGF5cztcclxuICAgICRob3Vycy50ZXh0Q29udGVudCA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XHJcbiAgICAkbWludXRlcy50ZXh0Q29udGVudCA9IG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XHJcbiAgICAvLyAgJHNlY29uZHMudGV4dENvbnRlbnQgPSBzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xyXG4gICAgJGRheXMuZGF0YXNldC50aXRsZSA9IGRlY2xlbnNpb25OdW0oZGF5cywgW1wi0LTQtdC90YxcIiwgXCLQtNC90Y9cIiwgXCLQtNC90LXQuVwiXSk7XHJcbiAgICAkaG91cnMuZGF0YXNldC50aXRsZSA9IGRlY2xlbnNpb25OdW0oaG91cnMsIFtcItGH0LDRgVwiLCBcItGH0LDRgdCwXCIsIFwi0YfQsNGB0L7QslwiXSk7XHJcbiAgICAkbWludXRlcy5kYXRhc2V0LnRpdGxlID0gZGVjbGVuc2lvbk51bShtaW51dGVzLCBbXHJcbiAgICAgIFwi0LzQuNC90YPRgtCwXCIsXHJcbiAgICAgIFwi0LzQuNC90YPRgtGLXCIsXHJcbiAgICAgIFwi0LzQuNC90YPRglwiLFxyXG4gICAgXSk7XHJcbiAgICAvLyAgJHNlY29uZHMuZGF0YXNldC50aXRsZSA9IGRlY2xlbnNpb25OdW0oc2Vjb25kcywgW1xyXG4gICAgLy8gICAgXCLRgdC10LrRg9C90LTQsFwiLFxyXG4gICAgLy8gICAgXCLRgdC10LrRg9C90LTRi1wiLFxyXG4gICAgLy8gICAgXCLRgdC10LrRg9C90LRcIixcclxuICAgIC8vICBdKTtcclxuICB9XHJcbiAgLy8g0L/QvtC70YPRh9Cw0LXQvCDRjdC70LXQvNC10L3RgtGLLCDRgdC+0LTQtdGA0LbQsNGJ0LjQtSDQutC+0LzQv9C+0L3QtdC90YLRiyDQtNCw0YLRi1xyXG4gIGNvbnN0ICRkYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lcl9fZGF5c1wiKTtcclxuICBjb25zdCAkaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyX19ob3Vyc1wiKTtcclxuICBjb25zdCAkbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJfX21pbnV0ZXNcIik7XHJcbiAgLy8gICBjb25zdCAkc2Vjb25kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJfX3NlY29uZHNcIik7XHJcbiAgLy8g0LLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjiBjb3VudGRvd25UaW1lclxyXG4gIGNvdW50ZG93blRpbWVyKCk7XHJcbiAgLy8g0LLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjiBjb3VudGRvd25UaW1lciDQutCw0LbQtNGD0Y4g0YHQtdC60YPQvdC00YNcclxuICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoY291bnRkb3duVGltZXIsIDYwMDAwKTtcclxufSk7XHJcbiJdLCJmaWxlIjoiLi9zcmMvanMvdGltZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/timer.js\n");

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