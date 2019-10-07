import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingrequestsComponent } from './buyingrequests.component';

describe('BuyingrequestsComponent', () => {
  let component: BuyingrequestsComponent;
  let fixture: ComponentFixture<BuyingrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
