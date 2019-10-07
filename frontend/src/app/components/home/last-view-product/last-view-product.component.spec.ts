import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastViewProductComponent } from './last-view-product.component';

describe('LastViewProductComponent', () => {
  let component: LastViewProductComponent;
  let fixture: ComponentFixture<LastViewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastViewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
