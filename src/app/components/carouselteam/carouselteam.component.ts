import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carouselteam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carouselteam.component.html',
  styleUrl: './carouselteam.component.css'
})
export class CarouselteamComponent {

  scrollToComponent(sectionId: string) {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

}
