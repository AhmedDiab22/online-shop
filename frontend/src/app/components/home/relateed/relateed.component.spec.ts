import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelateedComponent } from './relateed.component';

describe('RelateedComponent', () => {
  let component: RelateedComponent;
  let fixture: ComponentFixture<RelateedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelateedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelateedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
