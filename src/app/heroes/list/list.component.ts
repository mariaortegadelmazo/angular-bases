import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Batman'];
  deletedHeroe :string = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    console.log(">>>"+this.deletedHeroe.length);
  }

  deleteHeroe(index: number){
    this.deletedHeroe = this.heroes.splice(index-1,1)[0];
    console.log(this.deletedHeroe); 
  }
}
