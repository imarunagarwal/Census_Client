import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseGraphComponent } from './state-wise-graph.component';

describe('StateWiseGraphComponent', () => {
  let component: StateWiseGraphComponent;
  let fixture: ComponentFixture<StateWiseGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateWiseGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWiseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
