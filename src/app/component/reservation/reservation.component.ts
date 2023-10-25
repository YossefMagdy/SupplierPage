import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CurrentLangService } from 'src/app/@core/service/CurrentLange-service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  counter:number=0
  NumOfPerson:number=0
  Timer:number=30;
  ReservationPerson!:string
  choseTime!:string
  Sat:number[]=[]
  sun:number[]=[]
  mon:number[]=[]
  tue:number[]=[]
  wed:number[]=[]
  thurs:number[]=[]
  fri:number[]=[]
  currentLang:string='ar'

  constructor(private TranslateService:TranslateService,private CurrentLangService:CurrentLangService){
    if(localStorage.getItem('lang')!=null){

      this.TranslateService.setDefaultLang(CurrentLangService.getCurrentLang());
    }else{
      this.TranslateService.setDefaultLang('ar')
    }
  }

  addMore(event:any){
    if(event.day=='السبت'){
      this.Sat.push(event.counter);
    }else if(event.day=='الاحد'){
      this.sun.push(event.counter)
    }else if(event.day=='الاتنين'){
      this.mon.push(event.counter)
    }else if(event.day=='الثلاثاء'){
      this.tue.push(event.counter)
    }else if(event.day=='الاربعاء'){
      this.wed.push(event.counter)
    }else if(event.day=='الخميس'){
      this.thurs.push(event.counter)
    }else if(event.day=='الجمعه'){
      this.fri.push(event.counter)
    }
  }
  remove(event:any,i?:any){
  
    if(event.day=='السبت'){
      this.Sat.splice(i,1);
    }else if(event.day=='الاحد'){
      this.sun.splice(i,1)
    }else if(event.day=='الاتنين'){
      this.mon.splice(i,1)
    }else if(event.day=='الثلاثاء'){
      this.tue.splice(i,1)
    }else if(event.day=='الاربعاء'){
      this.wed.splice(i,1)
    }else if(event.day=='الخميس'){
      this.thurs.splice(i,1)
    }else if(event.day=='الجمعه'){
      this.fri.splice(i,1)
    }
  }

  changeLangage(lang: string) {
    localStorage.setItem('lang',lang)
    this.TranslateService.setDefaultLang(lang);
    this.TranslateService.use(lang);
 }
}
