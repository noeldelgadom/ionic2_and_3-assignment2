import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: 'reset.component.html'
})
export class ResetComponent {
  @Output() didReset = new EventEmitter<string>();

  onReset(type: string) {
    this.didReset.emit(type);
  }
}
