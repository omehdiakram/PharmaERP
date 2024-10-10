import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSortiesComponent } from './gestion-sorties.component';

describe('GestionSortiesComponent', () => {
  let component: GestionSortiesComponent;
  let fixture: ComponentFixture<GestionSortiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionSortiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionSortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
