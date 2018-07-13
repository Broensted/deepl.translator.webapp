import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Translation} from './translation.model';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()
export class TranslatorService {
  // The different query params of the deepl request url.
  input: string;
  baseUrl = 'https://api.deepl.com/v1/';
  translate = 'translate?text=';
  source_lang = '&source_lang=';
  source_lang_prefix: string;
  target_lang = '&target_lang=';
  target_lang_prefix: string;
  split_sentences = '&split_sentences=1';
  preserve_formatting = '&preserve_formatting=0';
  auth_key = '&auth_key=43f8e228-df61-c032-5046-b21fc7d60f71';

  constructor(
    private http: HttpClient) {
  }

  /**
   * Reading the data out of the input textarea and the two language dropdown menus.
   * Sending the request and returning the response from the deepl api server.
   *
   * @returns {Observable<Translation>} JSON format mapped to Translation.
   */
  getTranslation(): Observable<Translation> {
    /*logic for translation needed*/
    this.input = (document.getElementById('input_textarea') as HTMLTextAreaElement).value;
    this.target_lang_prefix = (document.getElementById('select_target_lang') as HTMLSelectElement).value;
    this.source_lang_prefix = (document.getElementById('select_source_lang') as HTMLSelectElement).value;
    return this.http
      .get<Translation>(this.baseUrl + this.translate +
        this.input + this.source_lang + this.source_lang_prefix + this.target_lang +
        this.target_lang_prefix + this.auth_key);
  }
}
