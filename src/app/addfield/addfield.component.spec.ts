import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddfieldComponent } from './addfield.component';

describe('AddfieldComponent', () => {
  let component: AddfieldComponent;
  let fixture: ComponentFixture<AddfieldComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
