import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaalwizardComponent } from './betaalwizard.component';

describe('BetaalwizardComponent', () => {
  let component: BetaalwizardComponent;
  let fixture: ComponentFixture<BetaalwizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaalwizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaalwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
