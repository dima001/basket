import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticComponent } from './tactic.component';

describe('TacticComponent', () => {
  let component: TacticComponent;
  let fixture: ComponentFixture<TacticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
