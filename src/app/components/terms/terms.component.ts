import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {

}
