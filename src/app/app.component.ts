import { Component } from '@angular/core';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'routed-module';
  //modules: string[] = [];

  constructor() {
    //this.modules = preloadStrategy.preloadedModules;
  }
}
