import { Component, inject } from '@angular/core';
import { CommonService } from '../common-service';
import { Store } from '@ngrx/store';
import { Istore } from '../store.modal';
import { onIncrementCounter } from '../store/counter.action';

@Component({
  imports: [],
  selector: 'app-child1',
  styleUrl: './child1.css',
  templateUrl: './child1.html',
})
export class Child1 {

  commonSrv = inject(CommonService);

  store = inject(Store<Istore>)


  onIncrement() { 
    debugger;
    this.store.dispatch(onIncrementCounter());
    // this.commonSrv.counterState++;
    // this.commonSrv.counter$.next(this.commonSrv.counterState);


  }
}
