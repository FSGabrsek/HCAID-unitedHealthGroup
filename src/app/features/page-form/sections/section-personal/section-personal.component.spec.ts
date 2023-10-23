import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPersonalComponent } from './section-personal.component';

describe('SectionPersonalComponent', () => {
  let component: SectionPersonalComponent;
  let fixture: ComponentFixture<SectionPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPersonalComponent]
    });
    fixture = TestBed.createComponent(SectionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
