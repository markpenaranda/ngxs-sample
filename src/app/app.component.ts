import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TestState } from 'src/store/test/test.state';
import { Observable } from 'rxjs';
import { Test } from 'src/models/test.model';
import { LoadTestAction } from 'src/store/test/test.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngxs-sample'

  @Select(TestState.data) data$: Observable<Test>

  constructor (private store: Store) {

  }

  ngOnInit() {
    this.store.dispatch(new LoadTestAction())
  }

}
