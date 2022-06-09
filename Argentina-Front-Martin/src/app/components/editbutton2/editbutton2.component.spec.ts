import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editbutton2Component } from './editbutton2.component';

describe('Editbutton2Component', () => {
  let component: Editbutton2Component;
  let fixture: ComponentFixture<Editbutton2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editbutton2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editbutton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
