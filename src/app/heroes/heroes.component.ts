import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Animal } from '../animal';
import { ANIMALS } from '../mock-animals';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  selectedAnimal?: Animal;
  onSelectAnimal(animal: Animal): void {
    this.selectedAnimal = animal
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  heroes: Hero[] = [];
  animals = ANIMALS;
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
