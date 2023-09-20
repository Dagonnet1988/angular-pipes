import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18 Select
  public name: string = 'Diego';
  public gender: 'male' | 'female' = 'male';
  public invitationMap =  {
    male: 'invitarlo',
    female: 'invitarla'
  }
  changeClient(): void {
    this.name = 'Juliana',
    this.gender = 'female';
  }

  // i18 plural

  public clients: string[] = [ 'Maria', 'Pedro', 'Fernando',
                  'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }




}
