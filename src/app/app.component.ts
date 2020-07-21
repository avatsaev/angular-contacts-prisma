import { Component } from '@angular/core';
import {GetAllContactsGQL} from './core/models/generated/graphql';
import {map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contacts$ = this.getAllContactsGQL.watch().valueChanges.pipe(
      pluck('data', 'contacts')
  )


  constructor(private getAllContactsGQL: GetAllContactsGQL) {

  }

}
