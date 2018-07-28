import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuTopComponent } from './user-menu-top.component';

describe('UserMenuTopComponent', () => {
  let component: UserMenuTopComponent;
  let fixture: ComponentFixture<UserMenuTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenuTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
