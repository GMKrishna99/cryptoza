"use strict";

// add event on elements

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// navbar toggle for mobile view
const navbar = document.querySelector("[data-navbar]");
const navbarToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElem(navbarToggler, "click", toggleNavbar);
// navbar toggle for mobile view

// active heder when window scroll down to 100px

const header = document.querySelector("[data-header]");
const activeElemScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// active heder when window scroll down to 100px
addEventOnElem(window, "scroll", activeElemScroll);
