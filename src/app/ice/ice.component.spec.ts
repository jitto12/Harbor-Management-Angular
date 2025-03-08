import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceComponent } from './ice.component';

describe('IceComponent', () => {
  let component: IceComponent;
  let fixture: ComponentFixture<IceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
