import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCoursMarcheComponent } from './en-cours-marche.component';

describe('EnCoursMarcheComponent', () => {
  let component: EnCoursMarcheComponent;
  let fixture: ComponentFixture<EnCoursMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnCoursMarcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnCoursMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
