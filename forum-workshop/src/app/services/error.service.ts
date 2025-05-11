import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  #errorSubject$$ = new Subject<string>();
  error$ = this.#errorSubject$$.asObservable();

  emitError(message: string) {
    this.#errorSubject$$.next(message);
  }
}
