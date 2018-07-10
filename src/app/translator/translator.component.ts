import {Component, OnInit} from '@angular/core';
import {TranslatorService} from '../translator.service';
import {Translation} from '../translation.model';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  arrTranslations: Translation[];
  value: string;


  constructor(private translatorService: TranslatorService) {
  }

  ngOnInit() {
    this.onClickTranslate();
    const obj = JSON.parse(this.arrTranslations.toString());
    this.value = obj.toString();
  }

  onClickTranslate() {
    this.translatorService.getTranslation().subscribe(
      data => this.arrTranslations = data,
      err => console.error(err),
      () => console.log('done loading translations'));
  }
}
