'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const notice = document.querySelector('.notice');
function setMenu(open){toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');nav.classList.toggle('open',open);}
toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
document.addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false);});
window.matchMedia('(min-width: 801px)').addEventListener('change',()=>setMenu(false));
let noticeTimer;
document.querySelectorAll('[data-section]').forEach(button=>button.addEventListener('click',()=>{setMenu(false);notice.textContent='Esta sección estará disponible en la siguiente versión.';clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>notice.textContent='',3500);}));
