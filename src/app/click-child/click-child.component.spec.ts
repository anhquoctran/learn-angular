import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickChildComponent } from './click-child.component';

describe('ClickChildComponent', () => {
  let component: ClickChildComponent;
  let fixture: ComponentFixture<ClickChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
