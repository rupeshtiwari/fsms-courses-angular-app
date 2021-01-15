import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToolbarComponent implements OnInit {
  @Input() isLoggedIn: any;
  @Input() title: any;
  @Input() sidenav: any;
  @Output() logout = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
