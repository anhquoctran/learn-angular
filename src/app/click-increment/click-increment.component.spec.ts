import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickIncrementComponent } from './click-increment.component';

describe('ClickIncrementComponent', () => {
  let component: ClickIncrementComponent;
  let fixture: ComponentFixture<ClickIncrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickIncrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
