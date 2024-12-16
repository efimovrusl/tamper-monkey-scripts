// ==UserScript==
// @name         Wikipedia Donations Be Gone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the nagging request for a donation when looking at articles on Wikipedia
// @author       Ruslan Yefimov
// @match        *://*.wikipedia.org/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    if (document.cookie.includes('centralnotice_hide_fundraising')) {
        console.log("wikipedia donation cookie already set");
    } else {
        console.log("wikipedia donation setting cookie");

        var now = new Date();
        var cookieData = {
            "v": 1,
            "created": Math.round(now.getTime() / 1000),
            "reason": "donate"
        };
        var cookie = [
            encodeURIComponent('centralnotice_hide_fundraising'),
            "=",
            JSON.stringify(cookieData),
            "; path=/",
            "; domain=.wikipedia.org",
            "; SameSite=None",
            "; Secure",
        ].join("");
        document.cookie = cookie;
        location.reload(true);
    }
})();
