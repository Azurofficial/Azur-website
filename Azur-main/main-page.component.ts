import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navItem = document.querySelectorAll('.nav__item');
    const header = document.getElementById('header');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        if (navMenu) {
          navMenu.classList.toggle('nav__menu--open');
          changeIcon();
        }
      });

      navItem.forEach((item) => {
        item.addEventListener('click', () => {
          if (navMenu && navMenu.classList.contains('nav__menu--open')) {
            navMenu.classList.remove('nav__menu--open');
            changeIcon();
          }
        });
      });

      function changeIcon() {
        if (navToggle && navMenu) {
          navToggle.classList.replace('ri-menu-3-line', 'ri-close-line');
        } else {
          console.warn("Element with id 'nav-toggle' or 'nav-menu' not found.");
        }
      }
    } else {
      console.warn("Element with id 'nav-toggle' not found.");
    }

    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          header.classList.add('header--scroll');
        } else {
          header.classList.remove('header--scroll');
        }
      });
    } else {
      console.warn("Element with id 'header' not found.");
    }
  }
}
