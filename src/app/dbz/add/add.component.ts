import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent {

  @Input() new: Character = {
    name:'',
    power:0
  }

  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  constructor( private dbzService: DbzService){ }
  characterForm(){
    if (this.new.name.trim().length == 0){
      return;
    }
    this.dbzService.addCharacter( this.new);
    //this.onNewCharacter.emit(this.new);



    console.log(this.new);

    this.new={
      name: '',
      power:0
    }
  }

}
