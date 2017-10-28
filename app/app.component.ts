import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <h1 id="large">Animal House</h1>
        <br><br><br>
        <h1>Our Family Members:</h1>
        <img src="img/' + images[Math.floor(Math.random() * images.length)] + '">
      </div>
      <br>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    </div>
  `
})

export class AppComponent {

  selectedAnimal = null;

  masterAnimalList: Animal[] = [

  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
    // images: string[] = [elephant.jpg, baby.jpg, elephant2.jpg, crocodile.jpg, giraffe.jpg, hippo.jpg];
}
