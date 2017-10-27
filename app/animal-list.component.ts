import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({

selector: 'animal-list',
template:
`
<ul>
  <li *ngFor= 'let currentAnimal of childAnimalList'>{{currentAnimal.species}}</li>
</ul>
<hr>
`

})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
