import { Service } from '@angular/core';
import { Subject } from 'rxjs';

@Service()
export class CommonService {

    counterState: number = 0;

    counter$ : Subject< number> = new Subject<number>();


}
