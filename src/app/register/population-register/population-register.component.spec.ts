import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationRegisterComponent } from './population-register.component';

describe('PopulationRegisterComponent', () => {
  let component: PopulationRegisterComponent;
  let fixture: ComponentFixture<PopulationRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
