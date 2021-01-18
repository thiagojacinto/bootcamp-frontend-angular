import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPadraoComponent } from './pagina-padrao.component';

describe('PaginaPadraoComponent', () => {
  let component: PaginaPadraoComponent;
  let fixture: ComponentFixture<PaginaPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPadraoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
