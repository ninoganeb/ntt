import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselteamComponent } from './carouselteam.component';

describe('CarouselteamComponent', () => {
  let component: CarouselteamComponent;
  let fixture: ComponentFixture<CarouselteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
