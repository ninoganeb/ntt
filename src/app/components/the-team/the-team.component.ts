import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { QueryList } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-the-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './the-team.component.html',
  styleUrl: './the-team.component.css'
})
export class TheTeamComponent {

  teamMembersVisible: boolean = false; // Property to track visibility of team members

  // Method to toggle visibility of team members
  toggleTeamMembersVisibility() {
    this.teamMembersVisible = !this.teamMembersVisible;
  }


  navigateToFacebookJap(): void {
    window.location.href = "https://www.facebook.com/japsparrow16"
  }

  navigateToFacebookJapee(): void {
    window.location.href = "https://www.facebook.com/japee.ipswitch"
  }

  navigateTOFacebookRendy(): void {
    window.location.href = "https://www.facebook.com/rendy.miguel"
  }

  navigateToFacebookMark(): void {
    window.location.href = "https://www.facebook.com/mark.bassig"
  }

  navigateFacebookAngelo(): void {
    window.location.href = "https://www.facebook.com/angelobuslig"
  }

  navigateFacebookKantaru(): void {
    window.location.href = "https://www.facebook.com/kantaru.diego"
  }

  navigateFacebookMara(): void {
    window.location.href = "https://www.facebook.com/MsEniala"
  }

  naviagateFacebookCyril(): void {
    window.location.href = "https://www.facebook.com/cyril.rei"
  }
  
  naviagateFacebookKules(): void {
    window.location.href = "https://www.facebook.com/sicsic6.kules"
  }

  navigateFacebookRawah(): void {
    window.location.href = "https://www.facebook.com/rawah.skywalker"
  }

  navigationFacebookJm(): void {
    window.location.href = "https://www.facebook.com/jmnczo"
  }

  navigationFacebookNj(): void {
    window.location.href = "https://www.facebook.com/nicolejohn.saber"
  }

  navigationFacebookIrish(): void {
    window.location.href = "https://www.facebook.com/shiribels"
  }

  navigationFacebookNino(): void {
    window.location.href = "https://www.facebook.com/ganebnino"
  }

  

}

