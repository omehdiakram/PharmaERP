import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelOffreMarcheComponent } from './appel-offre-marche.component';

describe('AppelOffreMarcheComponent', () => {
  let component: AppelOffreMarcheComponent;
  let fixture: ComponentFixture<AppelOffreMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppelOffreMarcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelOffreMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
