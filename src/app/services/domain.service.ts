import {Injectable} from "@angular/core";
import {DomainTypes} from "../types/domain.types";


@Injectable({
  providedIn:'root'
})
export class DomainService{
  static domain():DomainTypes{
    return <DomainTypes>localStorage.getItem('domain') ?? 'de'
  }
  static setDomain(domain: DomainTypes){
    localStorage.setItem('domain',domain)
  }
}
