import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})
export class CounterComponent{
    public title: string = 'Contador App';
    public counterValue: number = 10;
    public base :number = 5;

    counter(operation: string){
        if (operation == "increment"){
        this.counterValue = this.counterValue+this.base;
        }
        if (operation == "decrement"){
        this.counterValue = this.counterValue-this.base;
        }
        return  this.counterValue;
    }

    accumulate (value: number){
        this.counterValue+=value;
    }

    decrement(){
        this.counterValue = this.counterValue-1;
    }
}