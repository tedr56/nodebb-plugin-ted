(function(module) {
	"use strict";

	var Ted = {},
		embed = '<iframe src="https://embed-ssl.ted.com/talks/$1.html" width="560" height="315" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

    var embedUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:ted\.com\/talks)\/?(.+)">.+<\/a>/g;

https://www.ted.com/talks/glenn_greenwald_why_privacy_matters

	Ted.parse = function(data, callback) {
	    if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(embedUrl)) {
            data.postData.content = data.postData.content.replace(embedUrl, embed);
        }
        callback(null, data);
	};

	module.exports = Ted;
}(module));
