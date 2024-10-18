import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseA1SecondComponent } from './course-a1-second.component';

describe('CourseA1SecondComponent', () => {
  let component: CourseA1SecondComponent;
  let fixture: ComponentFixture<CourseA1SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseA1SecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseA1SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
