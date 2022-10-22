import { Component, Input } from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  //@Input() characters: Character[] = [] // no es necesario con el servicio

  get characters(){
    return this.dbzService.characters;
  }

  constructor( private dbzService: DbzService){
  }
    
}
