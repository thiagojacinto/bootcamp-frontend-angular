import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresAdminComponent } from './fornecedores-admin.component';

describe('FornecedoresAdminComponent', () => {
  let component: FornecedoresAdminComponent;
  let fixture: ComponentFixture<FornecedoresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
