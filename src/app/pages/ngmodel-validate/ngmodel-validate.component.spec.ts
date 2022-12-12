import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelValidateComponent } from './ngmodel-validate.component';

describe('NgmodelValidateComponent', () => {
  let component: NgmodelValidateComponent;
  let fixture: ComponentFixture<NgmodelValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodelValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
