import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ContactFlatFragment} from '../../models/generated/graphql';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactItemComponent implements OnInit {

  @Input() contact: ContactFlatFragment

  constructor() { }

  ngOnInit(): void {
  }

}
