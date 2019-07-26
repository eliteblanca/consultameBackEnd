(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/*! HTML5 Boilerplate v7.1.0 | MIT License | https://html5boilerplate.com/ */\r\n/* main.css 1.0.0 | MIT License | https://github.com/h5bp/main.css#readme */\r\n/*\r\n * What follows is the result of much research on cross-browser styling.\r\n * Credit left inline and big thanks to Nicolas Gallagher, Jonathan Neal,\r\n * Kroc Camen, and the H5BP dev community and team.\r\n */\r\n/* ==========================================================================\r\n   Base styles: opinionated defaults\r\n   ========================================================================== */\r\nhtml {\r\n        color: #222;\r\n        font-size: 16px;\r\n        line-height: 1.4;\r\n        background-color: rgb(253,253,253);\r\n    }\r\n/*\r\n * Remove text-shadow in selection highlight:\r\n * https://twitter.com/miketaylr/status/12228805301\r\n *\r\n * Vendor-prefixed and regular ::selection selectors cannot be combined:\r\n * https://stackoverflow.com/a/16982510/7133471\r\n *\r\n * Customize the background color to match your design.\r\n */\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n/*\r\n * A better looking default horizontal rule\r\n */\r\nhr {\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 1px solid #ccc;\r\n    margin: 1em 0;\r\n    padding: 0;\r\n}\r\n/*\r\n * Remove the gap between audio, canvas, iframes,\r\n * images, videos and the bottom of their containers:\r\n * https://github.com/h5bp/html5-boilerplate/issues/440\r\n */\r\naudio,\r\ncanvas,\r\niframe,\r\nimg,\r\nsvg,\r\nvideo {\r\n    vertical-align: middle;\r\n}\r\n/*\r\n * Remove default fieldset styles.\r\n */\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n/*\r\n * Allow only vertical resizing of textareas.\r\n */\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n/* ==========================================================================\r\n   Browser Upgrade Prompt\r\n   ========================================================================== */\r\n.browserupgrade {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}\r\n*,*::after,*::before{\r\n    box-sizing: border-box !important;\r\n}\r\nfont{\r\n    color: var(--primaryText) !important;\r\n    font-size: 16px !important;\r\n    line-height: 1.4 !important;\r\n    font-family: 'Roboto', sans-serif !important;\r\n}\r\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n/* Document\r\n   ========================================================================== */\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n  height: 100%;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n/* Sections\r\n   ========================================================================== */\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\nbody {\r\n  margin: 0;\r\n  height: 100%;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\nmain {\r\n  display: block;\r\n}\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n/* Grouping content\r\n   ========================================================================== */\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\na {\r\n  background-color: transparent;\r\n}\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted; /* 2 */\r\n}\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\nsup {\r\n  top: -0.5em;\r\n}\r\n/* Embedded content\r\n   ========================================================================== */\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\nimg {\r\n  border-style: none;\r\n}\r\n/* Forms\r\n   ========================================================================== */\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n/* Interactive\r\n   ========================================================================== */\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\ndetails {\r\n  display: block;\r\n}\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\nsummary {\r\n  display: list-item;\r\n}\r\n/* Misc\r\n   ========================================================================== */\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\ntemplate {\r\n  display: none;\r\n}\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n[hidden] {\r\n  display: none;\r\n}\r\n:root {\r\n    --primary:     rgb(3,155,229);\r\n    --primaryLight:rgb(178,225,247);\r\n    --primaryDark: rgb(0, 60, 143);\r\n    --secondary:   rgb(255,152,0);\r\n    --error:       rgb(237,28,36);\r\n    --terciaryDark:rgb(241,241,241);\r\n\r\n    --background:  rgb(249,249,249);\r\n\r\n    --primaryText:  rgb(67,67,67);\r\n    --secondaryText:#707070;\r\n\r\n    color: var(--primaryText);\r\n\r\n    --shadow1: 0 1px  3px  rgba(0,0,0,0.12), 0 1px 2px   rgba(0,0,0,0.24);\r\n    --shadow2: 0 3px  6px  rgba(0,0,0,0.16), 0 3px 6px   rgba(0,0,0,0.23);\r\n    --shadow3: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px   rgba(0,0,0,0.23);\r\n    --shadow4: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n    --shadow5: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\r\n\r\n    --trasition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n.site{\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: 3.5rem auto;\r\n\r\n    grid-template-areas: \"main_header\"\r\n                         \"mainContent\";\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.main_header{\r\n    min-height: 3.5rem;\r\n    max-height: 3.5rem;\r\n    grid-area: \"main_header\";\r\n    background-color: var(--primary);\r\n    box-shadow: var(--shadow2);\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    padding: 1rem;\r\n    color: white;\r\n}\r\n.logo{\r\n    margin-right: 1rem;\r\n}\r\n.tab{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 1rem;\r\n    background-color: rgba(255,255,255,0.2);\r\n    margin: -.5rem;\r\n    margin-right: 1rem;\r\n    border-radius: 3px;\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n.tab:hover{\r\n    cursor: pointer;\r\n}\r\n.main_header .separator{\r\n    flex-grow: 1;\r\n}\r\n.main_header .acountMenu{\r\n    position: relative;\r\n}\r\n.main_header .acountMenu .acount{\r\n    color: white;  \r\n    position: absolute;\r\n    top: .0rem;\r\n    right: .5rem;\r\n    transition-delay: 50ms;\r\n}\r\n.main_header .acountMenu .acount:hover, .main_header .acountMenu:hover .acount{\r\n    color: var(--primaryText) !important;\r\n    cursor: default;\r\n    pointer-events: none;\r\n}\r\n.main_header .acountMenu .container{\r\n    height: 0rem;\r\n    width: 0rem;\r\n}\r\n.main_header .acountMenu .acount:hover + .container, .main_header .acountMenu .container:hover{\r\n    display: inline-block;\r\n    height: 15rem;\r\n    width: 15rem;   \r\n    background-color: white;\r\n    box-shadow: var(--shadow2);\r\n    z-index: 2;\r\n    margin-top: -.5rem;\r\n    padding: .5rem 1rem; \r\n    border-radius: 3px;\r\n}\r\n.main_header .acountMenu .container:hover *{\r\n    display: inline-block;    \r\n    color: var(--primaryText);\r\n}\r\n.main_header .acountMenu .container *{\r\n    color: transparent;\r\n    display: none;\r\n    transition-delay: 150ms;\r\n}\r\n.main_header .acountMenu .container:hover .nombre{    \r\n    display: inline-block;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--primaryText);\r\n    margin-top: .25rem;\r\n}\r\n.dropDownSelect{\r\n    width: 100%;\r\n    font-family: inherit;\r\n    color: inherit;\r\n    padding: .5rem;\r\n    background-color: white;\r\n    border-radius: 3px;\r\n    border: 1px solid var(--primary);\r\n    outline: inherit;\r\n}\r\n.dropDownSelect:hover{\r\n    border-radius: 3px 3px 0 0;\r\n}\r\n.main_header .dropDownSelect{\r\n    margin-bottom: .5rem;\r\n}\r\n.search_box{\r\n    width: 20rem;\r\n    margin-top: -.5rem;\r\n    margin-bottom: -5rem;\r\n    margin-right: 1rem;\r\n    background-color: white;\r\n    border-radius: 3px;\r\n    display: flex;\r\n    flex-direction: column;       \r\n}\r\n.backDrop{    \r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: transparent;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n.search_box .nextWord{\r\n    text-align: end;\r\n    color: var(--secondaryText);\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n.search_box .nextWord span{\r\n    font-size: .5rem;\r\n    background-color: var(--primaryLight);\r\n    color: var(--secondaryText);\r\n    padding: .2rem;\r\n    margin-right: .5rem;\r\n}\r\n.search_box_input{\r\n    height: 2.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    border: 0;\r\n    background-color: white;\r\n    max-width: 20rem;\r\n    padding: 1rem;\r\n    z-index: 3;\r\n    border-radius: 3px;\r\n    outline: 0 !important;\r\n}\r\n.search_box_suggestion:hover{\r\n    cursor: pointer;\r\n}\r\n.search_box_suggestion{    \r\n    background-color: white;\r\n    width: 100%;\r\n    padding: .5rem;\r\n    padding-left: 1.5rem;\r\n    color: var(--primaryText);    \r\n    z-index: 2;\r\n}\r\n.search_box_suggestion.selected{\r\n    background-color: var(--terciaryDark);\r\n}\r\n.search_box_suggestions{ \r\n    margin-top: -2px;\r\n    z-index: 2;\r\n    box-shadow: var(--shadow2);\r\n    border-radius: 0 0 3px 3px;\r\n    overflow: hidden;\r\n}\r\n.search_box_suggestion:hover{\r\n    background-color: var(--terciaryDark);\r\n}\r\n.mainContent{\r\n    grid-area: \"mainContent\";\r\n    overflow-y: hidden;\r\n}\r\n.searchContainer{\r\n    padding: 2rem 3rem;\r\n    height: 100% !important;\r\n    width: 100%;\r\n    overflow-y: scroll;\r\n}\r\n.exploreContainer{\r\n    padding: 2rem 3rem;\r\n    height: 100% !important;\r\n    width: 100%;\r\n    overflow-y: scroll;\r\n\r\n    display: grid;\r\n    grid-template-columns: 22% auto;\r\n    grid-template-rows: auto;\r\n}\r\n.articles_container{\r\n    padding-left: 1rem;\r\n}\r\n.categories{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    width: 100%;\r\n}\r\napp-categorie{\r\n    background-color: var(--terciaryDark);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    width: 100%;\r\n    margin-bottom: .5rem;\r\n}\r\napp-categorie app-categorie{\r\n    background-color: transparent;    \r\n    margin-bottom: 0rem;\r\n}\r\napp-categorie .header{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: .5rem;\r\n    padding-left: 1rem; \r\n    padding-right: 1rem; \r\n}\r\napp-categorie .header .title{\r\n    margin: 0;    \r\n    font-size: inherit;\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\napp-categorie .header i:hover, app-categorie .header .title{\r\n    cursor: pointer;\r\n}\r\napp-categorie .body.desplegado{\r\n    display: inline-block;\r\n    padding-left: 2rem;\r\n    width: 100%;\r\n}\r\napp-categorie .body{    \r\n    display: none;\r\n}\r\n.newsContainer{\r\n    padding: 2rem 3rem;\r\n    height: 100% !important;\r\n    width: 100%;\r\n    overflow-y: scroll;\r\n\r\n    display: grid;\r\n    grid-template-columns: 22% auto;\r\n    grid-template-rows: auto;\r\n}\r\napp-article{\r\n    border-radius: 3px;\r\n    box-shadow: var(--shadow2);\r\n    width: 100%;\r\n    background-color: white;\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    margin-bottom: .5rem;\r\n    overflow: hidden;\r\n}\r\n.img_header img{\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    min-width: 100%;\r\n}\r\n.article_body{\r\n    padding: 1rem;\r\n}\r\n.article_body .resumme p{\r\n    margin: 0;\r\n    margin-bottom: 1rem;\r\n}\r\napp-article .title{\r\n    margin: 1rem;\r\n    margin-bottom: 0;\r\n    font-size: 1.5rem;\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n.article_body .links{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.article_body .links a:hover:before, .article_body .links a:hover, .article_body .links a:hover *{\r\n    color: var(--primary) !important;\r\n}\r\n.article_body .links a:before {\r\n    font-family: \"Material Icons\";\r\n    content: \"link\";\r\n    font-size: 1.5rem;\r\n    margin-right: 1rem;\r\n}\r\n.article_body .links a *{\r\n    font-weight: 500 !important;\r\n}\r\n.article_body .links a{\r\n    font-weight: 400 !important;\r\n    text-decoration: none;\r\n    background-color: rgba(0,0,0,0.07);\r\n    padding: .2rem 1rem;\r\n    border-radius: 3px;\r\n    text-transform: lowercase;\r\n    max-width: 100%;\r\n    margin-bottom: .2rem;\r\n    overflow-x:hidden;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.article_body *{\r\n    color: var(--primaryText) !important;\r\n    font-size: 16px !important;\r\n    line-height: 1.4 !important;\r\n    font-family: 'Roboto', sans-serif !important;\r\n}\r\n.dissmissList{\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: .5rem;\r\n    font-size: .7rem;\r\n}\r\n.dissmissList:hover{\r\n    cursor: pointer;\r\n}\r\n.footer{\r\n    display: flex;\r\n    align-items: flex-end;\r\n    padding: 1rem;\r\n    padding-bottom: .7rem;\r\n    padding-top: 0;\r\n}\r\n.footer .tags{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    flex-grow: 1;\r\n}\r\n.footer .tag{\r\n    padding: .4rem 1rem;\r\n    border-radius: 50px;\r\n    background-color: var(--primaryLight);\r\n    font-size: .85rem;\r\n    margin-right: .3rem;\r\n    margin-bottom: .3rem;\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n.footer .votes{\r\n    display: flex;\r\n    align-items: center;\r\n    color: grey;\r\n}\r\n.footer .votes .voteCount{\r\n    margin-right: .5rem;\r\n    margin-left: .3rem;\r\n}\r\n.footer .votes i:hover{\r\n    cursor: pointer;\r\n    color: var(--primary);\r\n}\r\n.footer .votes i:nth-child(3){\r\n    margin-top: .3rem;\r\n}\r\n.footer .votes i.liked{\r\n    color: var(--primary);\r\n}\r\n.footer .votes i.disLiked{\r\n    color: var(--error);\r\n}\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n.bounce {\r\n    -webkit-animation-name: bounce;\r\n    animation-name: bounce;\r\n    -webkit-transform-origin: center bottom;\r\n    transform-origin: center bottom;\r\n}\r\n@-webkit-keyframes bounce {\r\n    from,\r\n    20%,\r\n    53%,\r\n    80%,\r\n    to {\r\n        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n\r\n    40%,\r\n    43% {\r\n        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n        -webkit-transform: translate3d(0, -30px, 0);\r\n        transform: translate3d(0, -30px, 0);\r\n    }\r\n\r\n    70% {\r\n        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n        -webkit-transform: translate3d(0, -15px, 0);\r\n        transform: translate3d(0, -15px, 0);\r\n    }\r\n\r\n    90% {\r\n        -webkit-transform: translate3d(0, -4px, 0);\r\n        transform: translate3d(0, -4px, 0);\r\n    }\r\n}\r\n@keyframes bounce {\r\n    from,\r\n    20%,\r\n    53%,\r\n    80%,\r\n    to {\r\n        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n\r\n    40%,\r\n    43% {\r\n        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n        -webkit-transform: translate3d(0, -30px, 0);\r\n        transform: translate3d(0, -30px, 0);\r\n    }\r\n\r\n    70% {\r\n        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n        -webkit-transform: translate3d(0, -15px, 0);\r\n        transform: translate3d(0, -15px, 0);\r\n    }\r\n\r\n    90% {\r\n        -webkit-transform: translate3d(0, -4px, 0);\r\n        transform: translate3d(0, -4px, 0);\r\n    }\r\n}\r\n@-webkit-keyframes swing {\r\n    20% {\r\n      -webkit-transform: rotate3d(0, 0, 1, 15deg);\r\n      transform: rotate3d(0, 0, 1, 15deg);\r\n    }\r\n  \r\n    40% {\r\n      -webkit-transform: rotate3d(0, 0, 1, -10deg);\r\n      transform: rotate3d(0, 0, 1, -10deg);\r\n    }\r\n  \r\n    60% {\r\n      -webkit-transform: rotate3d(0, 0, 1, 5deg);\r\n      transform: rotate3d(0, 0, 1, 5deg);\r\n    }\r\n  \r\n    80% {\r\n      -webkit-transform: rotate3d(0, 0, 1, -5deg);\r\n      transform: rotate3d(0, 0, 1, -5deg);\r\n    }\r\n  \r\n    to {\r\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\r\n      transform: rotate3d(0, 0, 1, 0deg);\r\n    }\r\n}\r\n@keyframes swing {\r\n    20% {\r\n      -webkit-transform: rotate3d(0, 0, 1, 15deg);\r\n      transform: rotate3d(0, 0, 1, 15deg);\r\n    }\r\n  \r\n    40% {\r\n      -webkit-transform: rotate3d(0, 0, 1, -10deg);\r\n      transform: rotate3d(0, 0, 1, -10deg);\r\n    }\r\n  \r\n    60% {\r\n      -webkit-transform: rotate3d(0, 0, 1, 5deg);\r\n      transform: rotate3d(0, 0, 1, 5deg);\r\n    }\r\n  \r\n    80% {\r\n      -webkit-transform: rotate3d(0, 0, 1, -5deg);\r\n      transform: rotate3d(0, 0, 1, -5deg);\r\n    }\r\n  \r\n    to {\r\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\r\n      transform: rotate3d(0, 0, 1, 0deg);\r\n    }\r\n}\r\n.swing {\r\n    -webkit-transform-origin: top center;\r\n    transform-origin: top center;\r\n    -webkit-animation-name: swing;\r\n    animation-name: swing;\r\n}\r\napp-article-view{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 2rem 3rem;\r\n    display: grid;\r\n    grid-template-columns: auto 22%;\r\n    grid-template-rows: auto auto;\r\n}\r\napp-article-view .articleContainer{\r\n    grid-row: 1 / 3;\r\n    grid-column: 1 / 2;\r\n    background-color: white;\r\n    border-radius: 3px;\r\n    box-shadow: var(--shadow2);\r\n    \r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: 3rem auto 3rem;\r\n}\r\napp-article-view .articleContainer .header{\r\n    background-color: var(--terciaryDark);\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 2;\r\n}\r\napp-article-view .articleContainer .content{\r\n    grid-row: 2 / 2;\r\n    grid-column: 1 / 2;\r\n}\r\napp-article-view .articleContainer .footer{\r\n    grid-row: 3 / 4;\r\n    grid-column: 1 / 2;\r\n    background-color: var(--terciaryDark);\r\n}\r\napp-article-view .articleContainer .content iframe{\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 0;\r\n}\r\napp-article-view .articleContainer .content iframe *{\r\n    color: red;\r\n}\r\napp-article-list{\r\n    width: 100%;\r\n    display: grid;    \r\n    grid-template-columns: auto auto auto;\r\n    grid-template-rows: auto;\r\n    -webkit-column-gap: 1rem;\r\n       -moz-column-gap: 1rem;\r\n            column-gap: 1rem;\r\n}\r\n.column{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwic3JjL2Nzcy9iYXNlL2RlZmF1bHRzLmNzcyIsInNyYy9jc3MvYmFzZS9ub3JtYWxpemUuY3NzIiwic3JjL2Nzcy9iYXNlL2NvbG9ycy5jc3MiLCJzcmMvY3NzL3NpdGUvc2l0ZS5jc3MiLCJzcmMvY3NzL3NpdGUvaGVhZGVyL2hlYWRlci5jc3MiLCJzcmMvY3NzL3NpdGUvaGVhZGVyL3NlYXJjaEJveC9zZWFyY2hCb3guY3NzIiwic3JjL2Nzcy9zaXRlL21haW5Db250ZW50L21haW5Db250ZW50LmNzcyIsInNyYy9jc3Mvc2l0ZS9tYWluQ29udGVudC9zZWFyY2hTZWN0aW9uL3NlYXJjaFNlY3Rpb24uY3NzIiwic3JjL2Nzcy9zaXRlL21haW5Db250ZW50L2V4cGxvcmVTZWN0aW9uL2V4cGxvcmVTZWN0aW9uLmNzcyIsInNyYy9jc3Mvc2l0ZS9tYWluQ29udGVudC9leHBsb3JlU2VjdGlvbi9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY3NzIiwic3JjL2Nzcy9zaXRlL21haW5Db250ZW50L25ld3NTZWN0aW9uL25ld3NTZWN0aW9uLmNzcyIsInNyYy9jc3Mvc2l0ZS9tYWluQ29udGVudC9hcnRpY2xlL2FydGljbGUuY3NzIiwic3JjL2Nzcy9zaXRlL21haW5Db250ZW50L2FydGljbGUvYXJ0aWNsZVZpZXcuY3NzIiwic3JjL2Nzcy9zaXRlL21haW5Db250ZW50L2FydGljbGVMaXN0L2FydGljbGVMaXN0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUNBOUUsNEVBQTRFO0FBRTVFLDJFQUEyRTtBQUMzRTs7OztFQUlFO0FBR0Y7OytFQUUrRTtBQUUzRTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGtDQUFrQztJQUN0QztBQUVKOzs7Ozs7OztFQVFFO0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JC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dUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjs7SUFFMUIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6QztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0FBQ2I7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQzlDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4Qix3QkFBZ0I7T0FBaEIscUJBQWdCO1lBQWhCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0ICdjc3MvJyIsIi8qISBIVE1MNSBCb2lsZXJwbGF0ZSB2Ny4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vaHRtbDVib2lsZXJwbGF0ZS5jb20vICovXHJcblxyXG4vKiBtYWluLmNzcyAxLjAuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvbWFpbi5jc3MjcmVhZG1lICovXHJcbi8qXHJcbiAqIFdoYXQgZm9sbG93cyBpcyB0aGUgcmVzdWx0IG9mIG11Y2ggcmVzZWFyY2ggb24gY3Jvc3MtYnJvd3NlciBzdHlsaW5nLlxyXG4gKiBDcmVkaXQgbGVmdCBpbmxpbmUgYW5kIGJpZyB0aGFua3MgdG8gTmljb2xhcyBHYWxsYWdoZXIsIEpvbmF0aGFuIE5lYWwsXHJcbiAqIEtyb2MgQ2FtZW4sIGFuZCB0aGUgSDVCUCBkZXYgY29tbXVuaXR5IGFuZCB0ZWFtLlxyXG4gKi9cclxuXHJcbiBcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQmFzZSBzdHlsZXM6IG9waW5pb25hdGVkIGRlZmF1bHRzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywyNTMsMjUzKTtcclxuICAgIH1cclxuXHJcbi8qXHJcbiAqIFJlbW92ZSB0ZXh0LXNoYWRvdyBpbiBzZWxlY3Rpb24gaGlnaGxpZ2h0OlxyXG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcclxuICpcclxuICogVmVuZG9yLXByZWZpeGVkIGFuZCByZWd1bGFyIDo6c2VsZWN0aW9uIHNlbGVjdG9ycyBjYW5ub3QgYmUgY29tYmluZWQ6XHJcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjk4MjUxMC83MTMzNDcxXHJcbiAqXHJcbiAqIEN1c3RvbWl6ZSB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBtYXRjaCB5b3VyIGRlc2lnbi5cclxuICovXHJcblxyXG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuOjpzZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4vKlxyXG4gKiBBIGJldHRlciBsb29raW5nIGRlZmF1bHQgaG9yaXpvbnRhbCBydWxlXHJcbiAqL1xyXG5cclxuaHIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qXHJcbiAqIFJlbW92ZSB0aGUgZ2FwIGJldHdlZW4gYXVkaW8sIGNhbnZhcywgaWZyYW1lcyxcclxuICogaW1hZ2VzLCB2aWRlb3MgYW5kIHRoZSBib3R0b20gb2YgdGhlaXIgY29udGFpbmVyczpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvaXNzdWVzLzQ0MFxyXG4gKi9cclxuXHJcbmF1ZGlvLFxyXG5jYW52YXMsXHJcbmlmcmFtZSxcclxuaW1nLFxyXG5zdmcsXHJcbnZpZGVvIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cclxuICovXHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKlxyXG4gKiBBbGxvdyBvbmx5IHZlcnRpY2FsIHJlc2l6aW5nIG9mIHRleHRhcmVhcy5cclxuICovXHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBCcm93c2VyIFVwZ3JhZGUgUHJvbXB0XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uYnJvd3NlcnVwZ3JhZGUge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMDtcclxufVxyXG5cclxuKiwqOjphZnRlciwqOjpiZWZvcmV7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmZvbnR7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeVRleHQpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59IiwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xyXG5cclxuLyogRG9jdW1lbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxyXG4gKi9cclxuXHJcbmh0bWwge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogU2VjdGlvbnNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICovXHJcblxyXG5tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcclxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcclxufVxyXG5cclxuLyogR3JvdXBpbmcgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXHJcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxyXG4gKi9cclxuXHJcbmhyIHtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xyXG4gIGhlaWdodDogMDsgLyogMSAqL1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxucHJlIHtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xyXG59XHJcblxyXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG5hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXHJcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuYWJiclt0aXRsZV0ge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5iLFxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuY29kZSxcclxua2JkLFxyXG5zYW1wIHtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4vKipcclxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXHJcbiAqIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5zdWIsXHJcbnN1cCB7XHJcbiAgZm9udC1zaXplOiA3NSU7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuc3ViIHtcclxuICBib3R0b206IC0wLjI1ZW07XHJcbn1cclxuXHJcbnN1cCB7XHJcbiAgdG9wOiAtMC41ZW07XHJcbn1cclxuXHJcbi8qIEVtYmVkZGVkIGNvbnRlbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxyXG4gKi9cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4vKiBGb3Jtc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxub3B0Z3JvdXAsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXHJcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXHJcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICBtYXJnaW46IDA7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxyXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQgeyAvKiAxICovXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cclxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuc2VsZWN0IHsgLyogMSAqL1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5idXR0b24sXHJcblt0eXBlPVwiYnV0dG9uXCJdLFxyXG5bdHlwZT1cInJlc2V0XCJdLFxyXG5bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cclxuICovXHJcblxyXG5idXR0b246LW1vei1mb2N1c3JpbmcsXHJcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxyXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxyXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XHJcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbmZpZWxkc2V0IHtcclxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXHJcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcclxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxubGVnZW5kIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cclxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xyXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xyXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxyXG4gKi9cclxuXHJcbnByb2dyZXNzIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cclxuICovXHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cclxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxyXG4gKi9cclxuXHJcblt0eXBlPVwiY2hlY2tib3hcIl0sXHJcblt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICBwYWRkaW5nOiAwOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXHJcbiAqL1xyXG5cclxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cclxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuW3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXHJcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cclxuICovXHJcblxyXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxyXG4gKi9cclxuXHJcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXHJcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xyXG59XHJcblxyXG4vKiBJbnRlcmFjdGl2ZVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLypcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cclxuICovXHJcblxyXG5kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLypcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxufVxyXG5cclxuLyogTWlzY1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cclxuICovXHJcblxyXG50ZW1wbGF0ZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxyXG4gKi9cclxuXHJcbltoaWRkZW5dIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIjpyb290IHtcclxuICAgIC0tcHJpbWFyeTogICAgIHJnYigzLDE1NSwyMjkpO1xyXG4gICAgLS1wcmltYXJ5TGlnaHQ6cmdiKDE3OCwyMjUsMjQ3KTtcclxuICAgIC0tcHJpbWFyeURhcms6IHJnYigwLCA2MCwgMTQzKTtcclxuICAgIC0tc2Vjb25kYXJ5OiAgIHJnYigyNTUsMTUyLDApO1xyXG4gICAgLS1lcnJvcjogICAgICAgcmdiKDIzNywyOCwzNik7XHJcbiAgICAtLXRlcmNpYXJ5RGFyazpyZ2IoMjQxLDI0MSwyNDEpO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogIHJnYigyNDksMjQ5LDI0OSk7XHJcblxyXG4gICAgLS1wcmltYXJ5VGV4dDogIHJnYig2Nyw2Nyw2Nyk7XHJcbiAgICAtLXNlY29uZGFyeVRleHQ6IzcwNzA3MDtcclxuXHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeVRleHQpO1xyXG5cclxuICAgIC0tc2hhZG93MTogMCAxcHggIDNweCAgcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4ICAgcmdiYSgwLDAsMCwwLjI0KTtcclxuICAgIC0tc2hhZG93MjogMCAzcHggIDZweCAgcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4ICAgcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIC0tc2hhZG93MzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4ICAgcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIC0tc2hhZG93NDogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgIC0tc2hhZG93NTogMCAxOXB4IDM4cHggcmdiYSgwLDAsMCwwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLDAsMCwwLjIyKTtcclxuXHJcbiAgICAtLXRyYXNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbn0iLCIuc2l0ZXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMuNXJlbSBhdXRvO1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibWFpbl9oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJtYWluQ29udGVudFwiO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59IiwiLm1haW5faGVhZGVye1xyXG4gICAgbWluLWhlaWdodDogMy41cmVtO1xyXG4gICAgbWF4LWhlaWdodDogMy41cmVtO1xyXG4gICAgZ3JpZC1hcmVhOiBcIm1haW5faGVhZGVyXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdzIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnRhYntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgbWFyZ2luOiAtLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1haW5faGVhZGVyIC5zZXBhcmF0b3J7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5tYWluX2hlYWRlciAuYWNvdW50TWVudXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1haW5faGVhZGVyIC5hY291bnRNZW51IC5hY291bnR7XHJcbiAgICBjb2xvcjogd2hpdGU7ICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLjByZW07XHJcbiAgICByaWdodDogLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiA1MG1zO1xyXG59XHJcblxyXG5cclxuLm1haW5faGVhZGVyIC5hY291bnRNZW51IC5hY291bnQ6aG92ZXIsIC5tYWluX2hlYWRlciAuYWNvdW50TWVudTpob3ZlciAuYWNvdW50e1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnlUZXh0KSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluX2hlYWRlciAuYWNvdW50TWVudSAuY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAwcmVtO1xyXG4gICAgd2lkdGg6IDByZW07XHJcbn1cclxuXHJcbi5tYWluX2hlYWRlciAuYWNvdW50TWVudSAuYWNvdW50OmhvdmVyICsgLmNvbnRhaW5lciwgLm1haW5faGVhZGVyIC5hY291bnRNZW51IC5jb250YWluZXI6aG92ZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgd2lkdGg6IDE1cmVtOyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cyKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW4tdG9wOiAtLjVyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLm1haW5faGVhZGVyIC5hY291bnRNZW51IC5jb250YWluZXI6aG92ZXIgKntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgXHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeVRleHQpO1xyXG59XHJcblxyXG4ubWFpbl9oZWFkZXIgLmFjb3VudE1lbnUgLmNvbnRhaW5lciAqe1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDE1MG1zO1xyXG59XHJcblxyXG4ubWFpbl9oZWFkZXIgLmFjb3VudE1lbnUgLmNvbnRhaW5lcjpob3ZlciAubm9tYnJleyAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeVRleHQpO1xyXG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xyXG59XHJcblxyXG4uZHJvcERvd25TZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xyXG59XHJcblxyXG4uZHJvcERvd25TZWxlY3Q6aG92ZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxufVxyXG5cclxuLm1haW5faGVhZGVyIC5kcm9wRG93blNlbGVjdHtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59IiwiXHJcbi5zZWFyY2hfYm94e1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICAgICBcclxufVxyXG5cclxuLmJhY2tEcm9weyAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnNlYXJjaF9ib3ggLm5leHRXb3Jke1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeVRleHQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoX2JveCAubmV4dFdvcmQgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5TGlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeVRleHQpO1xyXG4gICAgcGFkZGluZzogLjJyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59XHJcblxyXG4uc2VhcmNoX2JveF9pbnB1dHtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1heC13aWR0aDogMjByZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaF9ib3hfc3VnZ2VzdGlvbjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSAgICBcclxuLnNlYXJjaF9ib3hfc3VnZ2VzdGlvbnsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5VGV4dCk7ICAgIFxyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4uc2VhcmNoX2JveF9zdWdnZXN0aW9uLnNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVyY2lhcnlEYXJrKTtcclxufVxyXG5cclxuLnNlYXJjaF9ib3hfc3VnZ2VzdGlvbnN7IFxyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNlYXJjaF9ib3hfc3VnZ2VzdGlvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcmNpYXJ5RGFyayk7XHJcbn0iLCIubWFpbkNvbnRlbnR7XHJcbiAgICBncmlkLWFyZWE6IFwibWFpbkNvbnRlbnRcIjtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufSIsIi5zZWFyY2hDb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59IiwiLmV4cGxvcmVDb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG59XHJcblxyXG4uYXJ0aWNsZXNfY29udGFpbmVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59IiwiLmNhdGVnb3JpZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmFwcC1jYXRlZ29yaWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJjaWFyeURhcmspO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuXHJcbmFwcC1jYXRlZ29yaWUgYXBwLWNhdGVnb3JpZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuXHJcbmFwcC1jYXRlZ29yaWUgLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtOyBcclxufVxyXG5cclxuYXBwLWNhdGVnb3JpZSAuaGVhZGVyIC50aXRsZXtcclxuICAgIG1hcmdpbjogMDsgICAgXHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYXBwLWNhdGVnb3JpZSAuaGVhZGVyIGk6aG92ZXIsIGFwcC1jYXRlZ29yaWUgLmhlYWRlciAudGl0bGV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmFwcC1jYXRlZ29yaWUgLmJvZHkuZGVzcGxlZ2Fkb3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5hcHAtY2F0ZWdvcmllIC5ib2R5eyAgICBcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iLCIubmV3c0NvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbn0iLCJhcHAtYXJ0aWNsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdzIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmltZ19oZWFkZXIgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFydGljbGVfYm9keXtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmFydGljbGVfYm9keSAucmVzdW1tZSBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuYXBwLWFydGljbGUgLnRpdGxle1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hcnRpY2xlX2JvZHkgLmxpbmtze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hcnRpY2xlX2JvZHkgLmxpbmtzIGE6aG92ZXI6YmVmb3JlLCAuYXJ0aWNsZV9ib2R5IC5saW5rcyBhOmhvdmVyLCAuYXJ0aWNsZV9ib2R5IC5saW5rcyBhOmhvdmVyICp7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFydGljbGVfYm9keSAubGlua3MgYTpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcclxuICAgIGNvbnRlbnQ6IFwibGlua1wiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5hcnRpY2xlX2JvZHkgLmxpbmtzIGEgKntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFydGljbGVfYm9keSAubGlua3MgYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNyk7XHJcbiAgICBwYWRkaW5nOiAuMnJlbSAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC4ycmVtO1xyXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFydGljbGVfYm9keSAqe1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnlUZXh0KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3NtaXNzTGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBmb250LXNpemU6IC43cmVtO1xyXG59XHJcblxyXG4uZGlzc21pc3NMaXN0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgICBcclxuLmZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC43cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5mb290ZXIgLnRhZ3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmZvb3RlciAudGFne1xyXG4gICAgcGFkZGluZzogLjRyZW0gMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5TGlnaHQpO1xyXG4gICAgZm9udC1zaXplOiAuODVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC4zcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjNyZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmZvb3RlciAudm90ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uZm9vdGVyIC52b3RlcyAudm90ZUNvdW50e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAuM3JlbTtcclxufVxyXG5cclxuLmZvb3RlciAudm90ZXMgaTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLmZvb3RlciAudm90ZXMgaTpudGgtY2hpbGQoMyl7XHJcbiAgICBtYXJnaW4tdG9wOiAuM3JlbTtcclxufVxyXG5cclxuLmZvb3RlciAudm90ZXMgaS5saWtlZHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLmZvb3RlciAudm90ZXMgaS5kaXNMaWtlZHtcclxuICAgIGNvbG9yOiB2YXIoLS1lcnJvcik7XHJcbn1cclxuXHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbi5ib3VuY2Uge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Uge1xyXG4gICAgZnJvbSxcclxuICAgIDIwJSxcclxuICAgIDUzJSxcclxuICAgIDgwJSxcclxuICAgIHRvIHtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIDQwJSxcclxuICAgIDQzJSB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIDcwJSB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIDkwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC00cHgsIDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICAgIGZyb20sXHJcbiAgICAyMCUsXHJcbiAgICA1MyUsXHJcbiAgICA4MCUsXHJcbiAgICB0byB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICA0MCUsXHJcbiAgICA0MyUge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICA3MCUge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICA5MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC00cHgsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nIHtcclxuICAgIDIwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDYwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDgwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XHJcbiAgICB9XHJcbn1cclxuICBcclxuQGtleWZyYW1lcyBzd2luZyB7XHJcbiAgICAyMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDQwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA2MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA4MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbi5zd2luZyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc3dpbmc7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc3dpbmc7XHJcbn1cclxuICBcclxuIiwiYXBwLWFydGljbGUtdmlld3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMnJlbSAzcmVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxufVxyXG5cclxuYXBwLWFydGljbGUtdmlldyAuYXJ0aWNsZUNvbnRhaW5lcntcclxuICAgIGdyaWQtcm93OiAxIC8gMztcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93Mik7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gYXV0byAzcmVtO1xyXG59XHJcblxyXG5hcHAtYXJ0aWNsZS12aWV3IC5hcnRpY2xlQ29udGFpbmVyIC5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJjaWFyeURhcmspO1xyXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG59XHJcblxyXG5hcHAtYXJ0aWNsZS12aWV3IC5hcnRpY2xlQ29udGFpbmVyIC5jb250ZW50e1xyXG4gICAgZ3JpZC1yb3c6IDIgLyAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG59XHJcblxyXG5hcHAtYXJ0aWNsZS12aWV3IC5hcnRpY2xlQ29udGFpbmVyIC5mb290ZXJ7XHJcbiAgICBncmlkLXJvdzogMyAvIDQ7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJjaWFyeURhcmspO1xyXG59XHJcblxyXG5hcHAtYXJ0aWNsZS12aWV3IC5hcnRpY2xlQ29udGFpbmVyIC5jb250ZW50IGlmcmFtZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5hcHAtYXJ0aWNsZS12aWV3IC5hcnRpY2xlQ29udGFpbmVyIC5jb250ZW50IGlmcmFtZSAqe1xyXG4gICAgY29sb3I6IHJlZDtcclxufSIsImFwcC1hcnRpY2xlLWxpc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7ICAgIFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIGNvbHVtbi1nYXA6IDFyZW07XHJcbn1cclxuXHJcbi5jb2x1bW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\julian.vargas.a\Documents\multiConsulta\front-end\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map