import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestsComponent } from './section-tests.component';

describe('SectionTestsComponent', () => {
  let component: SectionTestsComponent;
  let fixture: ComponentFixture<SectionTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionTestsComponent]
    });
    fixture = TestBed.createComponent(SectionTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
