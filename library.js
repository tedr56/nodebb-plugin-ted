(function(module) {
	"use strict";

	var Ted = {},
		embed = '<iframe src="https://embed-ssl.ted.com/talks/$1.html" width="560" height="315" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';



https://www.ted.com/talks/glenn_greenwald_why_privacy_matters

	Ted.parse = function(postContent, callback) {
		postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:ted\.com\/talks)\/?(.+)">.+<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = Ted;
}(module));
