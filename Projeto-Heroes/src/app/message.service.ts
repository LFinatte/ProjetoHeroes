import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MessageService {

//armazena a mensagem
  messages: string[] = [];

// guarda no array a proxima mensagem a ser mostrada 
  add(message: string) {
    this.messages.push(message);
  }

//zera as informações do array
  clear() {
    this.messages = [];
  }
}