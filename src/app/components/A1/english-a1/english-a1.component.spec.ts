import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishA1Component } from './english-a1.component';

describe('EnglishA1Component', () => {
  let component: EnglishA1Component;
  let fixture: ComponentFixture<EnglishA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishA1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
