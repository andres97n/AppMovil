import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosVirtualesPage } from './cursos-virtuales.page';

describe('CursosVirtualesPage', () => {
  let component: CursosVirtualesPage;
  let fixture: ComponentFixture<CursosVirtualesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosVirtualesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosVirtualesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
