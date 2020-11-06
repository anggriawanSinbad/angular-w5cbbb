import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodicElement, AppState } from './store/state';
import { Store, select } from '@ngrx/store';
import { toggleActiveStatus } from './store/actions';
import { selectPeriodicElements } from './store/selectors';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'activate', 'toggle'];
  dataSource: Observable<PeriodicElement[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.dataSource = this.store.pipe(select(selectPeriodicElements));
  }

  updateActiveStatus(element: PeriodicElement) {
    this.store.dispatch(toggleActiveStatus({id: element.id}));
  }
}
