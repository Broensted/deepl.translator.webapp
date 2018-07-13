import {Component, OnInit} from '@angular/core';
import {TranslatorService} from '../translator.service';
import {Translation} from '../translation.model';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  translation: Translation;

  constructor(private translatorService: TranslatorService) {
  }

  ngOnInit() {
  }

  /**
   * Calling the getTranslation method of the translator.service and mapping the data to
   * the variable. Variable is needed to display the result in html.
   */
  onClickTranslate() {
    this.translatorService.getTranslation().subscribe(
      data => this.translation = data,
      err => console.error(err),
      () => console.log('done loading translations'));
  }
}
