import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({

selector: 'animal-list',
template:
`
<ul *ngFor='let currentAnimal of childAnimalList'>
  <li><h4>{{currentAnimal.name}}</h4></li>
  <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
</ul>
<hr>
`

})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
    }
}
