webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/analytics/gtm.ts":
/*!********************************!*\
  !*** ./utils/analytics/gtm.ts ***!
  \********************************/
/*! exports provided: GTM_ID, GTM_URL, pageView, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTM_ID", function() { return GTM_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTM_URL", function() { return GTM_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageView", function() { return pageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
var GTM_CONFIG = {
  ID: process.env.GTM_ID || 'GTM-KL3MKSK',
  AUTH: process.env.GTM_AUTH || 'yTij4VxRDIhewXqSXNmp4A',
  PREVIEW: process.env.GTM_PREVIEW || 'env-47',
  COOKIES_WIN: process.env.GTM_COOKIES_WIN || 'x'
};
var GTM_ID = GTM_CONFIG.ID;
var GTM_URL = ["https://www.googletagmanager.com/gtag/js?id=".concat(GTM_CONFIG.ID), GTM_CONFIG.AUTH && "gtm_auth=".concat(GTM_CONFIG.AUTH), GTM_CONFIG.PREVIEW && "gtm_preview=".concat(GTM_CONFIG.PREVIEW), GTM_CONFIG.COOKIES_WIN && "gtm_cookies_win=".concat(GTM_CONFIG.COOKIES_WIN)].filter(Boolean).join('&');
var pageView = function pageView(url) {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GTM_CONFIG.ID, {
      page_path: url
    });
  }
};
var event = function event(_ref) {
  var action = _ref.action,
      category = _ref.category,
      label = _ref.label;

  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=_app.js.1506e53d0403b97131ab.hot-update.js.map