// ==UserScript==
// @name         quick_summon_refersh
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reload the web when push the quick summon botton
// @author       NatsuMatsu
// @match        https://game.granbluefantasy.jp/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=granbluefantasy.jp
// @grant        none
// ==/UserScript==

(function() {
    var qsum_btn = null
    var used = 0
    setInterval(() => {
         if(used == 1)
         {
             location.reload()
         }
         qsum_btn = document.getElementById('js-btn-quick-summon')
         if (qsum_btn)
         {
             if (qsum_btn.className === "btn-quick-summon qs-ready")
             {
                 used = -1
             }
             else if (used == -1 && (qsum_btn.className === "btn-quick-summon qs-used" || qsum_btn.className === "btn-quick-summon qs-recast"))
             {
                 used = 1
             }
         }
     }, 100)


    // Your code here...
})();