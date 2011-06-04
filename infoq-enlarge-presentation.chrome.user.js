// ==UserScript==
// @name InfoQ Presentation Video Enlarger
// @description Stretches InfoQ presentation window
// @version 0.0.5
// @match http://www.infoq.com/presentations/*
// ==/UserScript==

// By Ivar Abrahamsen http://flurdy.com

// Version 0.0.5: Debugged
// Version 0.0.1: Initial version

var videoWidth = 480;
var videoHeight = 320;

var wrapper = document.getElementById("playerComponent");
wrapper.style.height=videoHeight+"px";
var scrubber = document.getElementById("FLVScrubber");
scrubber.setAttribute("width",videoWidth);
scrubber.setAttribute("height",videoHeight);
var scrubberEmbed = scrubber.getElementsByTagName("embed")[0];
scrubberEmbed.setAttribute("width",videoWidth);
scrubberEmbed.setAttribute("height",videoHeight);

