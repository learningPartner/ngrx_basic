import { Component, inject } from '@angular/core';
import { CommonService } from '../common-service';
import { Store } from '@ngrx/store';
import { Istore } from '../store.modal';
import { onDecrementCounter } from '../store/counter.action';

@Component({
  imports: [],
  selector: 'app-child2',
  styleUrl: './child2.css',
  templateUrl: './child2.html',
})
export class Child2 {

    commonSrv = inject(CommonService)

    store = inject(Store<Istore>);

    onDecrement() {
        debugger;
        this.store.dispatch(onDecrementCounter())
      // this.commonSrv.counterState--
      // this.commonSrv.counter$.next(this.commonSrv.counterState)
    }
}
