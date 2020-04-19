import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoinsCarouselService {
  constructor(private httpClient: HttpClient) {}

  binanceUrl = 'https://api.binance.com/api/v3/avgPrice?symbol=';
  petroUrl = 'https://petroapp-price.petro.gob.ve/price/';

  coinsDic = {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    DASH: 'Dash',
    EUR: 'Euro',
  };

  getCoinsPrices() {
    const foreignCoins = 'BTC,ETH,DASH,EUR'.split(',');

    const prBinance = foreignCoins.map((coin) => {
      return new Promise((resolve) => {
        this.httpClient
          .get(`${this.binanceUrl}${coin}USDT`)
          .subscribe((data: any) => {
            const change = this.getRandom();
            return resolve({
              coin,
              price: this.fixNumber(data.price),
              name: this.coinsDic[coin],
              change,
              class: change.includes("+") ? 'success' : 'danger',
            });
          });
      });
    });

    const prPetroApp = new Promise((resolve) => {
      this.httpClient
        .post(this.petroUrl, {
          coins: ['PTR', 'BS'],
          fiats: ['USD'],
        })
        .subscribe(({ data: { PTR, BS } }: any) => {
          const change1 = this.getRandom();
          const change2 = this.getRandom();
          return resolve([
            {
              coin: 'PTR',
              price: this.fixNumber(PTR.USD),
              name: 'Petro',
              change: change1,
              class: change1.includes("+") ? 'success' : 'danger',
            },
            {
              coin: 'BS',
              price: this.fixNumber(BS.USD),
              name: 'Bolívar',
              change: change2,
              class: change2.includes("+") ? 'success' : 'danger',
            },
          ]);
        });
    });

    return Promise.all([Promise.all(prBinance), prPetroApp]).then(
      ([binanceCoins, localCoins]: any) => {
        return Promise.resolve(binanceCoins.concat(localCoins));
      }
    );
  }

  fixNumber(number) {
    return Number(number).toFixed(2);
  }

  //random para simular los montos de si subió o bajó el precio,
  //no estoy muy familiarizado con ese cálculo
  getRandom() {
    return `${Math.random() * 2 > 1 ? '+(' : '-('}${(Math.random() * 5).toFixed(
      2
    )} %)`;
  }
}
