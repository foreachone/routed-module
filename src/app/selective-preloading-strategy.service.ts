import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class SelectivePreloadingStrategyService implements PreloadingStrategy{

  preloadedModules: string[] = [];
  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log('Preloading... ' + route.path)
    if(route.canMatch === undefined && route.data?.['preload']&& route.path != null) {
      // add the route path to the preloaded module array
      this.preloadedModules.push(route.path)
      console.log('Preloaded: ' + route.path)
      return load()
    }
    return of(null)
  }
}
