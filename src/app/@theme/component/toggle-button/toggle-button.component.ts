import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {
  ToggleButton: boolean = false
  @Input() ActiveWork: boolean = false
  @Input()  text: string=''

  @Output() statusButton=new EventEmitter<boolean>()

  constructor(){}

  StatusChange(){
    this.statusButton.emit(this.ToggleButton)
  }

}
