// ==UserScript==
// @name         Auto-open medium.com articles without paywall in new tab
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Automatically opens medium.com articles in a new tab using freedium.cfd
// @author       You
// @match        https://*.medium.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to check if the current page is an article
    function isArticlePage() {
        // This is a basic check. You might need to adjust it based on Medium's URL structure
        return window.location.pathname.split('/').length > 2;
    }

    // Only proceed if this is an article page
    if (isArticlePage()) {
        // Generate the new URL
        var newUrl = window.location.href.replace(/https:\/\/([^.]*\.)?medium\.com/g, "https://freedium.cfd/");

        // Open the new URL in a new tab
        window.open(newUrl, '_blank');
    }
})();
