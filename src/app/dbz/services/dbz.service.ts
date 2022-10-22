import { Injectable } from "@angular/core";

import { Character } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {    

    private _characters: Character[] = [
        {
        name: 'Goku',
        power: 8000
        },
        {
        name: 'Vegeta',
        power: 15000
        } 
    ]

    get characters(): Character[]{
        return [...this._characters]; //las llaves marcan que es un array y los ... son un operador spread que hace que separe los elementos del array y cree uno nuevo
    }

    constructor (){ }

    addCharacter( data: Character){
        this._characters.push( data );
    }
}