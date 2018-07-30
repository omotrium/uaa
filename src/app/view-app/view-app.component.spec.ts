import { fakeAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { ViewAppComponent } from "./view-app.component";

describe("ViewAppComponent", () => {
  let component: ViewAppComponent;
  let fixture: ComponentFixture<ViewAppComponent>;

  beforeEach(
    fakeAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ViewAppComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(ViewAppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
