import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  input: string;
  baseUrl = 'https://api.deepl.com/v1/';
  translate = 'translate?text=';
  source_lang = '&source_lang=DE';
  target_lang = '&target_lang=EN';
  auth_key = '&auth_key=43f8e228-df61-c032-5046-b21fc7d60f71';


  constructor() {
  }

  ngOnInit() {
  }

  onClickTranslate(): void {
    this.input = (document.getElementById('input_textarea') as HTMLTextAreaElement).value;
    const deeplUrl = this.buildDeepLUrl(this.input);
    const translation = this.getTranslation(deeplUrl);
    /*logic for translation needed*/
    (document.getElementById('output_textarea') as HTMLTextAreaElement).value = deeplUrl.toString();
  }

  private getUserInput(): String {
    return null;
  }

  private buildDeepLUrl(userInput: string): URL {
    const deeplUrl = new URL(this.baseUrl + this.translate + userInput + this.source_lang + this.target_lang + this.auth_key);
    return deeplUrl;
  }

  private getTranslation(deeplUrl: URL): String {
    return null;
  }
}
