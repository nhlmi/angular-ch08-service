import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit  {
  public stocks!: Stock[];
  
  constructor(){}

  ngOnInit(): void {
    this.stocks =[
      new Stock('Test Stock List Company', 'TSCL', 85, 80, 'NYSE'),
      new Stock('Second Stock List Company', 'SSCL', 185, 80, 'NYSE'),
      new Stock('Third Stock List Company', 'TS3L', 85, 180, 'NYSE')
    ]
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock list ', stock, ' was triggered');
    stock.favorite = !stock.favorite;
  }
}
