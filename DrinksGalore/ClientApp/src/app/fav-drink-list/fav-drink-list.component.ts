import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FavoriteDrink } from '../favorite-drink';
import { FavoriteDrinkService } from '../favorite-drink.service';

@Component({
  selector: 'app-fav-drink-list',
  templateUrl: './fav-drink-list.component.html',
  styleUrls: ['./fav-drink-list.component.css']
})
export class FavDrinkListComponent {

  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  favDrinks:FavoriteDrink[] = [];


  constructor(private favDrinkApi:FavoriteDrinkService, private authService: SocialAuthService) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((user:SocialUser) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn)
      {
        // If the user is logged in, check to see ther list of favorites
        this.favDrinkApi.GetUserFavs(this.user.id).subscribe((result:FavoriteDrink[]) => {
          console.log(result);
          this.favDrinks = result;
        })
      }
    });
  }

  ShowDetails(id:number):void{
    
  }

  RemoveFav(id:number):void 
  {
      this.favDrinkApi.RemoveUserFav(id).subscribe((result:FavoriteDrink) => {
        console.log(result);
      });
  }






}
