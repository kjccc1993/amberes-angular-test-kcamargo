import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsCarrouselComponent } from './coins-carrousel.component';

describe('CoinsCarrouselComponent', () => {
  let component: CoinsCarrouselComponent;
  let fixture: ComponentFixture<CoinsCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinsCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinsCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
