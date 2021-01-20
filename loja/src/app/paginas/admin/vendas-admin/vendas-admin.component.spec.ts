import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasAdminComponent } from './vendas-admin.component';

describe('VendasAdminComponent', () => {
  let component: VendasAdminComponent;
  let fixture: ComponentFixture<VendasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
