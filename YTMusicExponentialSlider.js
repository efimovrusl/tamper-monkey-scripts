// ==UserScript==
// @name         Youtube Music Logarithmic/Exponential volume
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Лёша хуй соси
// @author       pen_is_wise efimovrusl@gmail.com
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const sliderWidth = '250px'; // default: 100px

    function myScale (volume) {
        if (volume === 0) return 0;
        return Math.pow(volume, 2) / 0.729195; // magic value
    }

    const {get, set} = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'volume');
    Object.defineProperty(HTMLMediaElement.prototype, 'volume', {
        get () {
            const volume = get.call(this);
            const newVolume = myScale(volume);
            //console.log([YoutubeMusic Volume Fix] volume: ${volume} newVolume ${newVolume.toFixed(5)});
            return newVolume;
        },
        set (volume) {
            const newVolume = myScale(volume);
            //console.log([YoutubeMusic Volume Fix] volume: ${volume} newVolume ${newVolume.toFixed(5)});
            return set.call(this, newVolume);
        }
    });

    const volumeSlider = document.querySelector("#volume-slider");
    volumeSlider.setAttribute("step", "1");

    if (volumeSlider) {
        volumeSlider.style.width = sliderWidth;
    } else {
        console.error('[YoutubeMusic Volume Fix] couldn\'t find the slider element');
    }
})();

