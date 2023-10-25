import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
@Input() name:string='button'
@Input() color!:string
@Input() Icon!:string
@Input() Addclass!:string
@Input() BackgroundColor!:string
}
