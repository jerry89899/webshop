import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtowinkelmandComponent } from './addtowinkelmand.component';

describe('AddtowinkelmandComponent', () => {
  let component: AddtowinkelmandComponent;
  let fixture: ComponentFixture<AddtowinkelmandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtowinkelmandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtowinkelmandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
