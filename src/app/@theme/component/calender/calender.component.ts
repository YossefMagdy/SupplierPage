import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {

  CalenderWork:boolean=false
  @Input() text:string='';
  @Output() addMore=new EventEmitter<any>()
  @Output() remove=new EventEmitter<any>()
  @Input()  HideTogglebutton:boolean=false
  @Input()  canRemove:boolean=false
  @Input()  UseCopy:boolean=false
  copyActive:boolean=false
  
  counter=0

  statusButton(event:boolean){
    this.CalenderWork=event
  }


  addMoreThisDay(){
    this.counter++
    this.addMore.emit({day:this.text,counter:this.counter})
  }
  Remove(){
    this.remove.emit({day:this.text,counter:this.counter})

  }
}
