import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauMarcheComponent } from './nouveau-marche.component';

describe('NouveauMarcheComponent', () => {
  let component: NouveauMarcheComponent;
  let fixture: ComponentFixture<NouveauMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveauMarcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
