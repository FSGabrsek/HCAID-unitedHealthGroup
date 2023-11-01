import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAidComponent } from './section-aid.component';

describe('SectionAidComponent', () => {
  let component: SectionAidComponent;
  let fixture: ComponentFixture<SectionAidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAidComponent]
    });
    fixture = TestBed.createComponent(SectionAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
