import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { InstanceOptions } from 'flowbite';
import {Dropdown} from 'flowbite';
import { DropdownOptions, DropdownInterface } from 'flowbite';
import { CollapseOptions } from 'flowbite';
import { Collapse } from 'flowbite';





@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
img :string = '../assets/img/logo.png'
img_ :string = '../assets/img/final_background.png'
laptop :string = '../assets/img/laptop.jpeg'
laptop2 :string = '../assets/img/laptop2.jpeg'
laptop3 :string = '../assets/img/laptop3.jpeg'

@ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
@ViewChild('dropdownButton') dropdownButton!: ElementRef;
@ViewChild('nav') nav!: ElementRef;

dropdown!: DropdownInterface

// =======================================

scrollToSectionCenter(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
}

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

  // dropdown navigator
  ngAfterViewInit(): void {
  if (typeof document !== 'undefined') {
    // Access the native DOM elements after the view has been initialized
    const $targetEl: HTMLElement | null = this.dropdownMenu.nativeElement;
    const $triggerEl: HTMLElement | null = this.dropdownButton.nativeElement;

      if ($targetEl && $triggerEl) {
        // options with default values
        const options: DropdownOptions = {
          placement: 'bottom',
          triggerType: 'click',
          offsetSkidding: 0,
          offsetDistance: 10,
          delay: 300,
          onHide: () => {
            console.log('dropdown has been hidden');
          },
          onShow: () => {
            console.log('dropdown has been shown');
          },
          onToggle: () => {
            console.log('dropdown has been toggled');
          },
        };

        // instance options object
        const instanceOptions: InstanceOptions = {
          id: 'dropdownMenu',
          override: true
        };

        // Initialize the dropdown
        this.dropdown = new Dropdown(
          $targetEl,
          $triggerEl,
          options,
          instanceOptions
        );

        // show the dropdown
        this.dropdown.show();
      } else {
        console.error("Dropdown menu element or trigger element not found.");
      }
    }

  }

  // burger responsive

  



}



