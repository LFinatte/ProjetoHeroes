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

/* antes funcionava de forma bloqueante, esperando o fim da requisisção (sincrono)
  getHeroes(): Hero[] {
  return HEROES;
  }
*/


  

}
