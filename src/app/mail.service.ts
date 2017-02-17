import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messege = [
    'You have a mail',
    'John liked your tweet',
    'You wont believe what john said']

  constructor() { }

}
