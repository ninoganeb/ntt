import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TitleComponent } from '../components/title/title.component';
import { ProductComponent } from '../components/product/product.component';
import { CeoComponent } from '../components/ceo/ceo.component';
import { CarouselteamComponent } from '../components/carouselteam/carouselteam.component';
import { ServicesComponent } from '../components/services/services.component';
import { MobileComponent } from '../components/mobile/mobile.component';
import { WebComponent } from '../components/web/web.component';
import { DesktopComponent } from '../components/desktop/desktop.component';
import { LogosComponent } from '../components/logos/logos.component';
import { TheTeamComponent } from '../components/the-team/the-team.component';
import { NewsupdateComponent } from '../components/newsupdate/newsupdate.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { WhoweareComponent } from '../components/whoweare/whoweare.component';
import { CorevaluesComponent } from '../components/corevalues/corevalues.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, TitleComponent, ProductComponent, CeoComponent, CarouselteamComponent, ServicesComponent, MobileComponent, WebComponent, DesktopComponent, LogosComponent, TheTeamComponent, NewsupdateComponent, ContactComponent, AboutComponent, WhoweareComponent, CorevaluesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {



  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    // Check if document is defined (for server-side rendering compatibility)
    if (typeof document !== 'undefined') {
      // Get the 'to top' button element by ID
      const toTopButton: HTMLElement | null = document.getElementById("to-top-button");

      // Check if the button exists
      if (toTopButton) {

          // On scroll event, toggle button visibility based on scroll position
          window.addEventListener('scroll', () => {
              if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                  toTopButton.classList.remove("hidden");
              } else {
                  toTopButton.classList.add("hidden");
              }
          });

          // Function to scroll to the top of the page smoothly
          (window as any).goToTop = () => {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
              });
          };
      }
    }
  }
}