import { TestBed } from '@angular/core/testing';

import { CarregarProdutosResolver } from './carregar-produtos.resolver';

describe('CarregarProdutosResolver', () => {
  let resolver: CarregarProdutosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CarregarProdutosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
