import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child2 } from './child2/child2';
import { Child1 } from './child1/child1';
import { CommonService } from './common-service';
import { select, Store } from '@ngrx/store';
import {Istore} from './store.modal'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child2, Child1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter : number = 0;

  commonService = inject(CommonService);

  store = inject(Store<Istore>)

  constructor() {
    this.store.pipe(
      select('counter')
    ).subscribe({
      next:(count:number)=>{
        debugger;
        this.counter =  count;
      }
    })

    this.commonService.counter$.subscribe({
      next:(res:number)=>{
        debugger;
        this.counter =  res;
      }
    })
  }

}
