import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { MainComponent } from './components/main/main.component';
import { TheTeamComponent } from './components/the-team/the-team.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, LatestNewsComponent, TheTeamComponent, ContactComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html' ,
  styleUrl: './app.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppComponent {
  title = 'Angular-ntt';

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
}


