import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = "ironMan";
  public age:number =45;

  get CapitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

changeHero():void {
  this.name="Spiderman";
}

changeAge():void {
  this.age=40;
}

resetForm():void{
  this.name="ironMan";
  this.age=45;
}

}
