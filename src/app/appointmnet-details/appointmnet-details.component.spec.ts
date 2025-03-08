import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmnetDetailsComponent } from './appointmnet-details.component';

describe('AppointmnetDetailsComponent', () => {
  let component: AppointmnetDetailsComponent;
  let fixture: ComponentFixture<AppointmnetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmnetDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmnetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
