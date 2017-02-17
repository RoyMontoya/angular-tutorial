import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
  <input
  #myInput
  type="text"
  [(ngModel)]="message"
  [ngClass]="{mousedown:isMouseDown}"
  (mousedown)="isMouseDown = true"
  (mouseup)="isMouseDown = false"
  (mouseleave)="isMouseDown = false"
  >
  <button (click)="update.emit({text:message})">Click me!</button>
  `,
  styles: [':host{display: flex; flex-direction: column;} input: focus{font-weight: bold; outline: none;} .mousedown{border: 2px solid green} button{border: none;}']
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  isMouseDown;

  constructor() {

  }

  ngOnInit() {
  }

}
