import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeWiseGraphComponent } from './age-wise-graph.component';

describe('AgeWiseGraphComponent', () => {
  let component: AgeWiseGraphComponent;
  let fixture: ComponentFixture<AgeWiseGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeWiseGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeWiseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
