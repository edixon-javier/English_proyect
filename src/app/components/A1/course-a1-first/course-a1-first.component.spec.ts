import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseA1FirstComponent } from './course-a1-first.component';

describe('CourseA1FirstComponent', () => {
  let component: CourseA1FirstComponent;
  let fixture: ComponentFixture<CourseA1FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseA1FirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseA1FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
