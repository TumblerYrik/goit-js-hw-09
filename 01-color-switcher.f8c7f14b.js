!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body,o=null;t.addEventListener("click",(function(){o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o),n.style.backgroundColor="",t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.f8c7f14b.js.map
