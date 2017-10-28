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
  <li *ngFor='let currentAnimal of childAnimalList | age:filterByAge'><h3>Animal Type: {{currentAnimal.species}}</h3>
  <h4>Name: {{currentAnimal.name}}</h4><h4>Age: {{currentAnimal.age}}</h4><h4>Diet: {{currentAnimal.diet}}</h4><h4>Location: {{currentAnimal.location}}</h4><h4>Number of Caretaker: {{currentAnimal.caretakers}}</h4><h4>Sex: {{currentAnimal.sex}}</h4><h4>Likes: {{currentAnimal.likes}}</h4><h4>Dislikes: {{currentAnimal.dislikes}}</h4>
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
