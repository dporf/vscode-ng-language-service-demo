import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'child',
    standalone: true,
    templateUrl: './child.component.html',
  })
  export class ChildComponent {
    @Output() output = new EventEmitter<string>
  }
  