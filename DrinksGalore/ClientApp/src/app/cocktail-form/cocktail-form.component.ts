import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';
import { FavoriteDrink } from '../favorite-drink';
import { FavoriteDrinkService } from '../favorite-drink.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.css']
})
export class CocktailFormComponent implements OnInit {


  searchList:Cocktail[] = [];
  resultCount:number = 1;
  searchCocktail:Cocktail = {} as Cocktail;
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;


  constructor(private cocktailApi:CocktailService,private authService: SocialAuthService, private favService:FavoriteDrinkService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  
  }

  SearchDrinks(form:NgForm){
    let queryString:string = form.form.value.DrinkName;
    this.cocktailApi.GetCocktails(queryString).subscribe((result:Cocktail) =>
    {
      console.log(result);
      this.resultCount = result.drinks.length;
      this.searchCocktail = result;
    })
  }

  AddToFavorites(index:number){

    // create favorite entry based on selected item
    let selectedDrink:FavoriteDrink = {
    name:this.searchCocktail.drinks[index].strDrink!,
    thumbNail:this.searchCocktail.drinks[index].strDrinkThumb!,
    apiId:this.searchCocktail.drinks[index].idDrink!,
    authId:this.user.id
    }
    this.favService.AddUserFav(selectedDrink).subscribe((result:FavoriteDrink)=> {
      console.log(result);
    })
  }


}
