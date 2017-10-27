import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({

selector: 'animal-list',
template:
`
<select (change)="onChange($event.target.value)">
  <option value="allAnimals" selected="selected">View All Animals</option>
  <option value="youngAnimals">Animals Under 2 Years</option>
  <option value="matureAnimals">Animals 2 Years and Older</option>
</select>
<ul>
  <li *ngFor='let currentAnimal of childAnimalList | age:filterByAge'><h3>{{currentAnimal.species}}</h3>
  <h4>{{currentAnimal.name}}</h4>
  <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
  </li>
</ul>
<hr>
`

})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals"

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
    }

  onChange(animalAge) {
    this.filterByAge = animalAge;
  }

}
