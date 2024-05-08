import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ceo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ceo.component.html',
  styleUrl: './ceo.component.css'
})
export class CeoComponent {

  scrollToComponent(sectionId: string) {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

}
