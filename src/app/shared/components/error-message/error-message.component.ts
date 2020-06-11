import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() haveErrors = false;
  @Input() isRequired = false;
  @Input() havePattern = false;
  @Input() haveMaxLength = false;
  @Input() type = '';
  constructor() { }

  ngOnInit() {
  }

}
