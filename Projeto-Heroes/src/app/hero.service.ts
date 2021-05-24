import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//pode ser injetado em qualquer parte do projeto -root-
@Injectable({
  providedIn: 'root',
})

// quem injetar esse serviço podera acessar as funções/banco de dados/mockup
export class HeroService {

/*sem injetar a mensagem
  constructor() { }
*/

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

/* antes funcionava de forma bloqueante, esperando o fim da requisisção (sincrono)
  getHeroes(): Hero[] {
  return HEROES;
  }
*/


  

}
