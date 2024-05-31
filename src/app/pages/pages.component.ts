import {Component} from "@angular/core";
import {DomainTypes} from "../types/domain.types";
import {DomainService} from "../services/domain.service";

@Component({
  selector: 'app-pages',
  template: `
    <h1>Multi domain</h1>
  `
})
export class PagesComponent{
  domain: DomainTypes = 'dr';

  constructor() {
    const url : string = window.location.href;
    if(url.includes('.dr')){
      DomainService.setDomain('dr')
    }
    if(url.includes('.de')){
      DomainService.setDomain('de')
    }
    this.domain = DomainService.domain()
  }
}
