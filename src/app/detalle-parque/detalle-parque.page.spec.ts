import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleParquePage } from './detalle-parque.page';

describe('DetalleParquePage', () => {
  let component: DetalleParquePage;
  let fixture: ComponentFixture<DetalleParquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleParquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleParquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
