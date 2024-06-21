// ==UserScript==
// @name         Remove medium.com paywall without a subscription
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://*.medium.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () { window.location = window.location.toString().replace(/https:\/\/[^.]+\.medium\.com/g, "https://freedium.cfd/"); })();
