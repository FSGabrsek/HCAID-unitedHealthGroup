import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisclaimerComponent } from './page-disclaimer.component';

describe('PageDisclaimerComponent', () => {
  let component: PageDisclaimerComponent;
  let fixture: ComponentFixture<PageDisclaimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDisclaimerComponent]
    });
    fixture = TestBed.createComponent(PageDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
