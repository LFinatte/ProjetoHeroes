import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

// acessa o service
  heroes: Hero[] = [];

//injeção do serviço para chamar o metodo
  constructor(private heroService: HeroService, private messageService: MessageService) {}

//ao iniciar chama a função que pega os herois no service
  ngOnInit(): void {
    this.getHeroes();
  }

//função que pega os herois no serviço e guarda no array
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }





}
