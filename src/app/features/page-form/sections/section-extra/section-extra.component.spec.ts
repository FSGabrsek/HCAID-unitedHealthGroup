import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExtraComponent } from './section-extra.component';

describe('SectionExtraComponent', () => {
  let component: SectionExtraComponent;
  let fixture: ComponentFixture<SectionExtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionExtraComponent]
    });
    fixture = TestBed.createComponent(SectionExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
