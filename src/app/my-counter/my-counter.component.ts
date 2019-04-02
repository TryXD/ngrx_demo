import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActionTypes, Decrement, Reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  no: number;

  ngOnInit(): void {
    this.store.pipe(select('count')).subscribe(
      state => {
        this.no = state;
      });
  }

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    // this.store.dispatch(new Increment());

    this.store.dispatch({
      type: ActionTypes.Increment
    });
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
