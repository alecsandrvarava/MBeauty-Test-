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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  // конечная дата, например 1 июля 2021\n  var deadline = new Date(2022, 6, 1); // id таймера\n\n  var timerId = null; // склонение числительных\n\n  function declensionNum(num, words) {\n    return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];\n  } // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов\n\n\n  function countdownTimer() {\n    var diff = deadline - new Date();\n\n    if (diff <= 0) {\n      clearInterval(timerId);\n    }\n\n    var days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;\n    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;\n    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;\n    var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;\n    $days.textContent = days < 10 ? \"0\" + days : days;\n    var hour = hours < 10 ? \"0\" + hours : hours;\n    var hourLeft = String(hour).substring(0, 1);\n    var hourRight = String(hour).substring(1, 2);\n    $hours.innerHTML = \"<div class=\\\"timer__hours\\\"><span>\".concat(hourLeft, \"</span><span>\").concat(hourRight, \"</span></div>\");\n    var minut = minutes < 10 ? \"0\" + minutes : minutes;\n    var minutLeft = String(minut).substring(0, 1);\n    var minutRight = String(minut).substring(1, 2);\n    $minutes.innerHTML = \"<div class=\\\"timer__minutes\\\"><span>\".concat(minutLeft, \"</span><span>\").concat(minutRight, \"</span></div>\");\n    var second = seconds < 10 ? \"0\" + seconds : seconds;\n    var secondLeft = String(second).substring(0, 1);\n    var secondRight = String(second).substring(1, 2);\n    $seconds.innerHTML = \"<div class=\\\"timer__seconds\\\"><span>\".concat(secondLeft, \"</span><span>\").concat(secondRight, \"</span></div>\");\n    $days.dataset.title = declensionNum(days, [\"день\", \"дня\", \"дней\"]);\n    $hours.dataset.title = declensionNum(hours, [\"час\", \"часа\", \"часов\"]);\n    $minutes.dataset.title = declensionNum(minutes, [\"минута\", \"минуты\", \"минут\"]);\n    $seconds.dataset.title = declensionNum(seconds, [\"секунда\", \"секунды\", \"секунд\"]);\n  } // получаем элементы, содержащие компоненты даты\n\n\n  var $days = document.querySelector(\".timer__days\");\n  var $hours = document.querySelector(\".timer__hours\");\n  var $minutes = document.querySelector(\".timer__minutes\");\n  var $seconds = document.querySelector(\".timer__seconds\"); // вызываем функцию countdownTimer\n\n  countdownTimer(); // вызываем функцию countdownTimer каждую секунду\n\n  timerId = setInterval(countdownTimer, 1000);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy90aW1lci5qcz80YWJiIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYWRsaW5lIiwiRGF0ZSIsInRpbWVySWQiLCJkZWNsZW5zaW9uTnVtIiwibnVtIiwid29yZHMiLCJjb3VudGRvd25UaW1lciIsImRpZmYiLCJjbGVhckludGVydmFsIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCIkZGF5cyIsInRleHRDb250ZW50IiwiaG91ciIsImhvdXJMZWZ0IiwiU3RyaW5nIiwic3Vic3RyaW5nIiwiaG91clJpZ2h0IiwiJGhvdXJzIiwiaW5uZXJIVE1MIiwibWludXQiLCJtaW51dExlZnQiLCJtaW51dFJpZ2h0IiwiJG1pbnV0ZXMiLCJzZWNvbmQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCIkc2Vjb25kcyIsImRhdGFzZXQiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQ7QUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpCLENBRndELENBR3hEOztBQUNBLE1BQUlDLE9BQU8sR0FBRyxJQUFkLENBSndELENBS3hEOztBQUNBLFdBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxLQUE1QixFQUFtQztBQUNqQyxXQUFPQSxLQUFLLENBQ1ZELEdBQUcsR0FBRyxHQUFOLEdBQVksQ0FBWixJQUFpQkEsR0FBRyxHQUFHLEdBQU4sR0FBWSxFQUE3QixHQUNJLENBREosR0FFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxD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YSxJQUFBQSxNQUFNLENBQUNVLE9BQVAsQ0FBZUMsS0FBZixHQUF1QjlCLGFBQWEsQ0FBQ1MsS0FBRCxFQUFRLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsT0FBaEIsQ0FBUixDQUFwQztBQUNBZSxJQUFBQSxRQUFRLENBQUNLLE9BQVQsQ0FBaUJDLEtBQWpCLEdBQXlCOUIsYUFBYSxDQUFDVSxPQUFELEVBQVUsQ0FDOUMsUUFEOEMsRUFFOUMsUUFGOEMsRUFHOUMsT0FIOEMsQ0FBVixDQUF0QztBQUtBa0IsSUFBQUEsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxLQUFqQixHQUF5QjlCLGFBQWEsQ0FBQ1csT0FBRCxFQUFVLENBQzlDLFNBRDhDLEVBRTlDLFNBRjhDLEVBRzlDLFFBSDhDLENBQVYsQ0FBdEM7QUFLRCxHQXJEdUQsQ0FzRHhEOzs7QUFDQSxNQUFNQyxLQUFLLEdBQUdqQixRQUFRLENBQUNvQyxhQUFULENBQXVCLGNBQXZCLENBQWQ7QUFDQSxNQUFNWixNQUFNLEdBQUd4QixRQUFRLENBQUNvQyxhQUFULENBQXVCLGVBQXZCLENBQWY7QUFDQSxNQUFNUCxRQUFRLEdBQUc3QixRQUFRLENBQUNvQyxhQUFULENBQXVCLGlCQUF2QixDQUFqQjtBQUNBLE1BQU1ILFFBQVEsR0FBR2pDLFFBQVEsQ0FBQ29DLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWpCLENBMUR3RCxDQTJEeEQ7O0FBQ0E1QixFQUFBQSxjQUFjLEdBNUQwQyxDQTZEeEQ7O0FBQ0FKLEVBQUFBLE9BQU8sR0FBR2lDLFdBQVcsQ0FBQzdCLGNBQUQsRUFBaUIsSUFBakIsQ0FBckI7QUFDRCxDQS9ERCIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAvLyDQutC+0L3QtdGH0L3QsNGPINC00LDRgtCwLCDQvdCw0L/RgNC40LzQtdGAIDEg0LjRjtC70Y8gMjAyMVxyXG4gIGNvbnN0IGRlYWRsaW5lID0gbmV3IERhdGUoMjAyMiwgNiwgMSk7XHJcbiAgLy8gaWQg0YLQsNC50LzQtdGA0LBcclxuICBsZXQgdGltZXJJZCA9IG51bGw7XHJcbiAgLy8g0YHQutC70L7QvdC10L3QuNC1INGH0LjRgdC70LjRgtC10LvRjNC90YvRhVxyXG4gIGZ1bmN0aW9uIGRlY2xlbnNpb25OdW0obnVtLCB3b3Jkcykge1xyXG4gICAgcmV0dXJuIHdvcmRzW1xyXG4gICAgICBudW0gJSAxMDAgPiA0ICYmIG51bSAlIDEwMCA8IDIwXHJcbiAgICAgICAgPyAyXHJcbiAgICAgICAgOiBbMiwgMCwgMSwgMSwgMSwgMl1bbnVtICUgMTAgPCA1ID8gbnVtICUgMTAgOiA1XVxyXG4gICAgXTtcclxuICB9XHJcbiAgLy8g0LLRi9GH0LjRgdC70Y/QtdC8INGA0LDQt9C90LjRhtGDINC00LDRgiDQuCDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQvtGB0YLQsNCy0YjQtdC10YHRjyDQstGA0LXQvNC10L3QuCDQsiDQutCw0YfQtdGB0YLQstC1INGB0L7QtNC10YDQttC40LzQvtCz0L4g0Y3Qu9C10LzQtdC90YLQvtCyXHJcbiAgZnVuY3Rpb24gY291bnRkb3duVGltZXIoKSB7XHJcbiAgICBjb25zdCBkaWZmID0gZGVhZGxpbmUgLSBuZXcgRGF0ZSgpO1xyXG4gICAgaWYgKGRpZmYgPD0gMCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF5cyA9IGRpZmYgPiAwID8gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCkgOiAwO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjAgLyA2MCkgJSAyNCA6IDA7XHJcbiAgICBjb25zdCBtaW51dGVzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjApICUgNjAgOiAwO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IGRpZmYgPiAwID8gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCkgJSA2MCA6IDA7XHJcbiAgICAkZGF5cy50ZXh0Q29udGVudCA9IGRheXMgPCAxMCA/IFwiMFwiICsgZGF5cyA6IGRheXM7XHJcblxyXG4gICAgY29uc3QgaG91ciA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XHJcbiAgICBjb25zdCBob3VyTGVmdCA9IFN0cmluZyhob3VyKS5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICBjb25zdCBob3VyUmlnaHQgPSBTdHJpbmcoaG91cikuc3Vic3RyaW5nKDEsIDIpO1xyXG4gICAgJGhvdXJzLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGltZXJfX2hvdXJzXCI+PHNwYW4+JHtob3VyTGVmdH08L3NwYW4+PHNwYW4+JHtob3VyUmlnaHR9PC9zcGFuPjwvZGl2PmA7XHJcblxyXG4gICAgY29uc3QgbWludXQgPSBtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xyXG4gICAgY29uc3QgbWludXRMZWZ0ID0gU3RyaW5nKG1pbnV0KS5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICBjb25zdCBtaW51dFJpZ2h0ID0gU3RyaW5nKG1pbnV0KS5zdWJzdHJpbmcoMSwgMik7XHJcbiAgICAkbWludXRlcy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRpbWVyX19taW51dGVzXCI+PHNwYW4+JHttaW51dExlZnR9PC9zcGFuPjxzcGFuPiR7bWludXRSaWdodH08L3NwYW4+PC9kaXY+YDtcclxuXHJcbiAgICBjb25zdCBzZWNvbmQgPSBzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xyXG4gICAgY29uc3Qgc2Vjb25kTGVmdCA9IFN0cmluZyhzZWNvbmQpLnN1YnN0cmluZygwLCAxKTtcclxuICAgIGNvbnN0IHNlY29uZFJpZ2h0ID0gU3RyaW5nKHNlY29uZCkuc3Vic3RyaW5nKDEsIDIpO1xyXG4gICAgJHNlY29uZHMuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0aW1lcl9fc2Vjb25kc1wiPjxzcGFuPiR7c2Vjb25kTGVmdH08L3NwYW4+PHNwYW4+JHtzZWNvbmRSaWdodH08L3NwYW4+PC9kaXY+YDtcclxuXHJcbiAgICAkZGF5cy5kYXRhc2V0LnRpdGxlID0gZGVjbGVuc2lvbk51bShkYXlzLCBbXCLQtNC10L3RjFwiLCBcItC00L3Rj1wiLCBcItC00L3QtdC5XCJdKTtcclxuICAgICRob3Vycy5kYXRhc2V0LnRpdGxlID0gZGVjbGVuc2lvbk51bShob3VycywgW1wi0YfQsNGBXCIsIFwi0YfQsNGB0LBcIiwgXCLRh9Cw0YHQvtCyXCJdKTtcclxuICAgICRtaW51dGVzLmRhdGFzZXQudGl0bGUgPSBkZWNsZW5zaW9uTnVtKG1pbnV0ZXMsIFtcclxuICAgICAgXCLQvNC40L3Rg9GC0LBcIixcclxuICAgICAgXCLQvNC40L3Rg9GC0YtcIixcclxuICAgICAgXCLQvNC40L3Rg9GCXCIsXHJcbiAgICBdKTtcclxuICAgICRzZWNvbmRzLmRhdGFzZXQudGl0bGUgPSBkZWNsZW5zaW9uTnVtKHNlY29uZHMsIFtcclxuICAgICAgXCLRgdC10LrRg9C90LTQsFwiLFxyXG4gICAgICBcItGB0LXQutGD0L3QtNGLXCIsXHJcbiAgICAgIFwi0YHQtdC60YPQvdC0XCIsXHJcbiAgICBdKTtcclxuICB9XHJcbiAgLy8g0L/QvtC70YPRh9Cw0LXQvCDRjdC70LXQvNC10L3RgtGLLCDRgdC+0LTQtdGA0LbQsNGJ0LjQtSDQutC+0LzQv9C+0L3QtdC90YLRiyDQtNCw0YLRi1xyXG4gIGNvbnN0ICRkYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lcl9fZGF5c1wiKTtcclxuICBjb25zdCAkaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyX19ob3Vyc1wiKTtcclxuICBjb25zdCAkbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJfX21pbnV0ZXNcIik7XHJcbiAgY29uc3QgJHNlY29uZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyX19zZWNvbmRzXCIpO1xyXG4gIC8vINCy0YvQt9GL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y4gY291bnRkb3duVGltZXJcclxuICBjb3VudGRvd25UaW1lcigpO1xyXG4gIC8vINCy0YvQt9GL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y4gY291bnRkb3duVGltZXIg0LrQsNC20LTRg9GOINGB0LXQutGD0L3QtNGDXHJcbiAgdGltZXJJZCA9IHNldEludGVydmFsKGNvdW50ZG93blRpbWVyLCAxMDAwKTtcclxufSk7XHJcbiJdLCJmaWxlIjoiLi9zcmMvanMvdGltZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/timer.js\n");

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