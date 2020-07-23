// Import stylesheets
import './style.css';
import * as fingerprint2 from 'fingerprintjs2';
import * as jQuery from 'jquery';

import Bowser from "bowser"; 

console.log(jQuery.support)
import * as sha from 'sha.js'
var  browser1 = Bowser.getParser(window.navigator.userAgent);
var  browser1 = Bowser.getParser(window.navigator.userAgent);

console.log(browser1.getBrowserName())
console.log(browser1.getEngine())
console.log(browser1.getBrowserVersion())

const appDiv: HTMLElement = document.getElementById('app');


    setTimeout(function () {
        fingerprint2.get(function (components) {
        const adBlockIndex = 21;
    const hashValue = 31;
 
    if (components[adBlockIndex] && components[adBlockIndex].key === 'adBlock') {
      components.splice(adBlockIndex, 1);
    }
    const values = components.map((component) => component.value);
    console.log('Val1', components)

         document.getElementById('dupa').innerText = fingerprint2.x64hash128(values.join(''), hashValue)
            })  

    var options = {excludeUserAgent: true}
    fingerprint2.get(function ( components) {
    var values = components.map(function (component) { return component.value })
    console.log('Val', components)
    var murmur = fingerprint2.x64hash128(values.join(''), 31)
    console.log('murmur', murmur)
    //  document.getElementById('dupa').innerText = murmur;
})

fingerprint2.getV18({excludes: {adBlock: true}}, function (result, components) {
  console.log('result', result)
})
        


    }, 500)

    var matched, browser;

    var uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie)[\s?]([\w.]+)/.exec( ua ) ||       
        /(trident)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};

matched = uaMatch( navigator.userAgent );
//IE 11+ fix (Trident) 
matched.browser = matched.browser == 'trident' ? 'msie' : matched.browser;
browser = {};

if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
    browser.webkit = true;
} else if ( browser.webkit ) {
    browser.safari = true;
}

// console.log(browser)



