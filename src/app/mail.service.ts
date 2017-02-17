import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text:'You have a mail'},
    {id: 1, text:'John liked your tweet'},
    {id: 2, text:'You wont believe what john said'}];


    update(id, text){
      this.messages = this.messages.map(m =>
        m.id === id
        ? {id, text}
        : m)
    }

  constructor() { }

}
