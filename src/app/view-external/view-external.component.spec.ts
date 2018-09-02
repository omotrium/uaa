import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExternalComponent } from './view-external.component';

describe('ViewExternalComponent', () => {
  let component: ViewExternalComponent;
  let fixture: ComponentFixture<ViewExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
