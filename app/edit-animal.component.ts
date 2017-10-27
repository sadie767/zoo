import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
  <hr>
  <div>
    <div *ngIf='childSelectedAnimal'>
      <h3>Edit Animal's Name, Age, or Number of Caretakers</h3>
      <h4>{{childSelectedAnimal.name}}</h4>
      <h4>{{childSelectedAnimal.age}}</h4>
      <h4>{{childSelectedAnimal.caretakers}}</h4>
    </div>
    <div>
    <label>Enter New Name:</label>
    <input [(ngModel)]="childSelectedAnimal.name">
    </div>
    <div>
    <label>Enter New Age:</label>
    <input [(ngModel)]="childSelectedAnimal.age">
    </div>
    <div>
    <label>Enter Number of Caretakers:</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers">
  </div>
  <button (click)="doneButtonClicked()">Edit</button>
</div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked () {
    this.doneButtonClickedSender.emit();
  }

}
