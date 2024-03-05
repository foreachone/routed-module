import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SelectivePreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
