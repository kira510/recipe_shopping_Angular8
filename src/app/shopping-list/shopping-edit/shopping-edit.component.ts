import { Component, OnInit, EventEmitter, ViewChild, ElementRef, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInputref', {static: true}) nameRef: ElementRef;
  @ViewChild('amountInputref', {static: true}) amountRef: ElementRef; 

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    
    const newIng = new Ingredient(ingName, ingAmount);

    this.ingredientAdded.emit(newIng);
  }

}
