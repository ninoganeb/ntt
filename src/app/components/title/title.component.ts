import { Component, OnInit, ElementRef, NgModule, asNativeElements } from '@angular/core';
import { Carousel } from 'flowbite';
import { AnimationBuilder, AnimationFactory, animate, style } from '@angular/animations';
import { HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import type { DropdownOptions, DropdownInterface } from 'flowbite';
import {  Dropdown } from 'flowbite';
import { InstanceOptions } from 'flowbite';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  // click to scroll
  carousel: Carousel | undefined;

  constructor(private elementRef: ElementRef) { }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
  }

  scrollToComponent(sectionId: string) {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({behavior: 'smooth'})
    }
  }


  ngOnInit(): void {
    this.setupCarousel();
  }

  setupCarousel(): void {
    const carouselElement = this.elementRef.nativeElement.querySelector('#carousel-example');
    const item1 = this.elementRef.nativeElement.querySelector('#carousel-item-1');
    const item2 = this.elementRef.nativeElement.querySelector('#carousel-item-2');
    const item3 = this.elementRef.nativeElement.querySelector('#carousel-item-3');
    const item4 = this.elementRef.nativeElement.querySelector('#carousel-item-4');
    const item5 = this.elementRef.nativeElement.querySelector('#carousel-item-5');
    const item6 = this.elementRef.nativeElement.querySelector('#carousel-item-6');
    const item7 = this.elementRef.nativeElement.querySelector('#carousel-item-7');

    if (!carouselElement || !item1 || !item2 || !item3 || !item4 || !item5 || !item6 || !item7) {
      console.error('One or more carousel items not found.');
      return;
    }

    const items = [
      { position: 0, el: item1 },
      { position: 1, el: item2 },
      { position: 2, el: item3 },
      { position: 3, el: item4 },
      { position: 4, el: item5 },
      { position: 5, el: item6 },
      { position: 6, el: item7 },
    ];

    const options = {
      defaultPosition: 0,
      interval: 3000,
      // other options...
    };
    const instanceOptions = { id: 'carousel-example', override: true };

    this.carousel = new Carousel(carouselElement, items, options, instanceOptions);
    this.carousel.cycle();
  }

  prev(): void {
    if (this.carousel) {
      this.carousel.prev();
    }
  }

  next(): void {
    if (this.carousel) {
      this.carousel.next();
    }
  }

  // ==========================================================================================

  
}
