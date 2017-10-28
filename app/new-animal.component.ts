import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Enter New Family Members Here:</h1>
   <div>
     <label>Animal Type:</label>
     <br>
     <input #newSpecies class="txtfield">
    </div>
    <div>
     <label>Name:</label>
     <br>
     <input #newName class="txtfield">
   </div>
   <div>
     <label>Age:</label>
     <br>
     <input #newAge class="txtfield">
   </div>
   <br>
   <label>Diet:</label>
   <select #newDiet (change)="$event.target.value">
      <option value="carni">Carnivore</option>
      <option value="omni">Ominivore</option>
      <option value="herbi">Herbivore</option>
    </select>
     <label>Location:</label>
     <select #newLocation (change)="$event.target.value">
        <option value="grass">Grasslands</option>
        <option value="polar">Polar Ice Caps</option>
        <option value="underwater">Underwater</option>
        <option value="forest">Forest</option>
        <option value="tropical">Tropical Rainforest</option>
      </select>
     <label>Number of Caretakers:</label>
     <select #newCaretakers (change)="$event.target.value">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
     <label>Sex:</label>
     <select #newSex (change)="$event.target.value">
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="undetermined">Undetermined</option>
      </select>
   <br>
   <br>
   <div>
     <label>Likes:</label>
     <br>
     <input #newLikes class="txtfield2">
   </div>
   <br>
   <div>
     <label>Dislikes:</label>
     <br>
     <input #newDislikes class="txtfield2">
   </div>
    <br>
   <div>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)">Add</button>
   </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string,  name: string,  age: number,  diet: string,  location: string,  caretakers: number,  sex: string,  likes: string,  dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
