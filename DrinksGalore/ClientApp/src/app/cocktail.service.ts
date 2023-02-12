import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './cocktail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  endpoint:string = "api/Mixer";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  GetCocktails(drinkName:string):Observable<Cocktail>
  {
    return this.http.get<Cocktail>(this.baseUrl +this.endpoint+"?drinkName="+drinkName);
  }

}
