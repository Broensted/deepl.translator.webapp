import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Translation} from './translation.model';


@Injectable()
export class TranslatorService {
  input: string;
  baseUrl = 'https://api.deepl.com/v1/';
  translate = 'translate?text=';
  source_lang = '&source_lang=DE';
  target_lang = '&target_lang=EN';
  auth_key = '&auth_key=43f8e228-df61-c032-5046-b21fc7d60f71';

  constructor(
    private http: HttpClient) { }

  getTranslation(): Observable<Translation> {
    /*logic for translation needed*/
    this.input = (document.getElementById('input_textarea') as HTMLTextAreaElement).value;
    return this.http
      .get<Translation>(this.baseUrl + this.translate + this.input + this.source_lang + this.target_lang + this.auth_key);
  }
}
