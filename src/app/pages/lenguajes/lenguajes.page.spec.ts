import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeguajesPage } from './lenguajes.page';

describe('LeguajesPage', () => {
  let component: LeguajesPage;
  let fixture: ComponentFixture<LeguajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeguajesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeguajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
