import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedRequestsComponent } from './declined-requests.component';

describe('DeclinedRequestsComponent', () => {
  let component: DeclinedRequestsComponent;
  let fixture: ComponentFixture<DeclinedRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclinedRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
