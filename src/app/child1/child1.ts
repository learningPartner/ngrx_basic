import { Component, inject } from '@angular/core';
import { CommonService } from '../common-service';
import { select, Store } from '@ngrx/store';
import { Istore } from '../store.modal';
import { onIncrementCounter } from '../store/counter.action';
import { selectLoading, selectLocationArray } from '../store/location.selector';

@Component({
  imports: [],
  selector: 'app-child1',
  styleUrl: './child1.css',
  templateUrl: './child1.html',
})
export class Child1 {

  commonSrv = inject(CommonService);

  store = inject(Store<Istore>)

  constructor() {
     this.getLocationLoadingFalg();
  }

  onIncrement() { 
   
    debugger;
    this.store.dispatch(onIncrementCounter());
    // this.commonSrv.counterState++;
    // this.commonSrv.counter$.next(this.commonSrv.counterState);


  }

  getLocations() {
    this.store.pipe(
      select(selectLocationArray)
    ).subscribe({
      next:(res:any) =>{
        debugger;
      }
    })
  }

  getLocationLoadingFalg() {
    this.store.pipe(
      select(selectLoading)
    ).subscribe({
      next:(loading:boolean) =>{
        debugger;
      }
    })
  }
}
