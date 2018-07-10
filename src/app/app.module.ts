import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TranslatorComponent } from './translator/translator.component';
import { UiModule } from './ui/ui.module';
import {HttpClientModule} from '@angular/common/http';
import {TranslatorService} from './translator.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    UiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TranslatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
