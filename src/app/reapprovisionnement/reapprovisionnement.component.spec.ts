import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReapprovisionnementComponent } from './reapprovisionnement.component';

describe('ReapprovisionnementComponent', () => {
  let component: ReapprovisionnementComponent;
  let fixture: ComponentFixture<ReapprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReapprovisionnementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReapprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
