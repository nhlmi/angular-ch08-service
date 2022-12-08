import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks!: Stock[];

  constructor() { 
    this.stocks =[
      new Stock('Test Stock List Company Svc', 'TSCL', 85, 80, 'NYSE'),
      new Stock('Second Stock List Company Svc', 'SSCL', 185, 80, 'NYSE'),
      new Stock('Third Stock List Company Svc', 'TS3L', 85, 180, 'NYSE')
    ]
   }

   getStock(): Stock[]{
      return this.stocks;
   }

   createStock(stock: Stock){
      let foundStock = this.stocks.find(x => x.code === stock.code);
      if(foundStock){
        return false;
      }

      this.stocks.push(stock);
      return true;
    }

    toggleFavorite(stock: Stock){
      let foundStock: any;
      foundStock = this.stocks.find(x => x.code === stock.code);
      
      foundStock.favorite = !foundStock?.favorite;
    }

}
