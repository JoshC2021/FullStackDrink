import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavoriteDrink } from './favorite-drink';

@Injectable({
  providedIn: 'root'
})

export class FavoriteDrinkService 
{

  endpoint:string = "api/FavDrinks";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  GetUserFavs(authId:string):Observable<FavoriteDrink[]>
  {
    return this.http.get<FavoriteDrink[]>(this.baseUrl +this.endpoint+"/UserFavs?authId="+authId);
  }

  AddUserFav(favDrink:FavoriteDrink):Observable<FavoriteDrink>
  {
    return this.http.post<FavoriteDrink>(this.baseUrl +this.endpoint,favDrink);
  }

  RemoveUserFav(drinkId:number):Observable<FavoriteDrink>
  {
    return this.http.delete<FavoriteDrink>(this.baseUrl +this.endpoint+`/${drinkId}`);
  }

}

