// ==UserScript==
// @name         Team Spirit!
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Actually hate eachother for no reason.
// @author       Teh Flamin' Taco
// @match        *://*chat.stackexchange.com/*
// @match        *://*chat.stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
	setInterval(function(){
	var x=$(".user-container");
	for(var i=0; i < x.length; i++){
	    $(x[i]).find(".messages").css({["background-color"] : x[i].getAttribute("class").match(/\d+/)[0]%2==0 ? "#FAA" : "#AAF"})
	}},100)

})();