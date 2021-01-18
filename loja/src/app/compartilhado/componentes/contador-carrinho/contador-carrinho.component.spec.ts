import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorCarrinhoComponent } from './contador-carrinho.component';

describe('ContadorCarrinhoComponent', () => {
  let component: ContadorCarrinhoComponent;
  let fixture: ComponentFixture<ContadorCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorCarrinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
