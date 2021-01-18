import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnChanges {
  @Input() quantidadeNoCarrinho: number;

  constructor() {
    this.quantidadeNoCarrinho = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.quantidadeNoCarrinho = changes.quantidadeNoCarrinho.currentValue;
  }

}
