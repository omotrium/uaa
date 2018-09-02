import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationTypeComponent } from './authentication-type.component';

describe('AuthenticationTypeComponent', () => {
  let component: AuthenticationTypeComponent;
  let fixture: ComponentFixture<AuthenticationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
