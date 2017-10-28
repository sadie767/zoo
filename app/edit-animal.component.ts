import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
  <hr>
  <div *ngIf='childSelectedAnimal'>
    <h3>Edit Animal's Name, Age, or Number of Caretakers</h3>
    <p>{{childSelectedAnimal.name}}</p>
    <p>{{childSelectedAnimal.age}}</p>
    <p>{{childSelectedAnimal.caretakers}}</p>
    <label>Enter New Name:</label>
    <br>
    <input [(ngModel)]="childSelectedAnimal.name">
    <br>
    <label>Enter New Age:</label>
    <br>
    <input [(ngModel)]="childSelectedAnimal.age">
    <br>
    <label>Enter Number of Caretakers:</label>
    <br>
    <input [(ngModel)]="childSelectedAnimal.caretakers">
    <br>
  <button (click)="doneButtonClicked()">Edit</button>
  <br><br>
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
