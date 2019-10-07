import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArreivalComponent } from './new-arreival.component';

describe('NewArreivalComponent', () => {
  let component: NewArreivalComponent;
  let fixture: ComponentFixture<NewArreivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArreivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArreivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
