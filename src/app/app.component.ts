import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment';
  textDir: String = 'rtl';

  constructor(private translate:TranslateService){
    if(localStorage.getItem('lang')!=null){
      if(localStorage.getItem('lang') == 'ar')
      {
        this.textDir = 'rtl';
      } 
      else
      {
        this.textDir = 'ltr';
      }

    }
    
    this.translate.onLangChange.subscribe((event:LangChangeEvent)=>{

      if(event.lang == 'ar')
      {
        this.textDir = 'rtl';
      } 
      else
      {
        this.textDir = 'ltr';
      }
    })
  }

}
