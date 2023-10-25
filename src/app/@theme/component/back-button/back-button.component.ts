import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { CurrentLangService } from 'src/app/@core/service/CurrentLange-service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {

  currentLang:string='ar'
  constructor(private translate:TranslateService,private CurrentLangService:CurrentLangService){
    this.currentLang= this.CurrentLangService.getCurrentLang()
    this.translate.onLangChange.subscribe((event:LangChangeEvent)=>{

      if(event.lang == 'ar')
      {
        this.currentLang='ar'
      } 
      else
      {
        this.currentLang='en'
      }
    })
  }

}
