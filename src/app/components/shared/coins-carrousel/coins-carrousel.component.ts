import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { SimpleTimer } from 'ng2-simple-timer';

import { CoinsCarouselService } from './coins-carrousel.service';

import {
  faChevronCircleUp,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-coins-carrousel',
  templateUrl: './coins-carrousel.component.html',
  styleUrls: ['./coins-carrousel.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CoinsCarrouselComponent implements OnInit {
  constructor(
    config: NgbCarouselConfig,
    private st: SimpleTimer,
    private coinsCarouselService: CoinsCarouselService
  ) {
    config.interval = 10000;
    config.keyboard = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  iconUp = faChevronCircleUp;
  iconDown = faChevronCircleDown;

  prices = [];

  ngOnInit() {
    //seteo un timer para la consulta cada 30 segundos
    this.st.newTimer('30sec', 30);
    this.st.subscribe('30sec', () => this.getPrices());
  }

  getPrices() {
    this.coinsCarouselService.getCoinsPrices().then((_newPrices: any) => {
      if (!this.prices.length) {
        return (this.prices = _newPrices);
      }
      _newPrices.forEach((_new) => {
        this.prices.forEach((_old, i) => {
          if (_old.coin == _new.coin) {
            this.prices[i] = _new;
          }
        });
      });
    });
  }

  //Modifico el arreglo cuando se lanza el evento del slide
  onSlide(slideEvent: NgbSlideEvent) {
    const aux = this.prices.shift();
    this.prices = this.prices.concat(aux);
  }


}
