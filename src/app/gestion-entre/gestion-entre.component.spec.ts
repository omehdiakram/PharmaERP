import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEntreComponent } from './gestion-entre.component';

describe('GestionEntreComponent', () => {
  let component: GestionEntreComponent;
  let fixture: ComponentFixture<GestionEntreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEntreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEntreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
