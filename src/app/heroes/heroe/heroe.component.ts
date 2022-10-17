import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent{
    public name: string = "Ironman";
    public age: number = 45;
    
    description(): string{
        return `${ this.name } tiene ${ this.age } años`; 
    }

    getName(){
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }

    setAge(age: number){
        this.age = age;
    }
}