'use strict';
(function() {
// Make sure animation doesn't happen when the page loads
window.setTimeout(function() {
    document.querySelector('.modalDialog').className += ' transition';
}, 1000);

// Replace placeholder with working URL
let placeholder = document.getElementById('placeholder');
let email = placeholder.textContent.replace(/\s/g, '').replace('at', '@');
placeholder.innerHTML = "<a href='mailto:" + email + "'>" + email + "</a>";
})();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-242605-6', 'auto');
ga('send', 'pageview');
