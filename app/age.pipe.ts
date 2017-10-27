import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class AgePipe implements PipeTransform {


  transform(input: Animal[], desiredAge) {
    var output: Animal[] = [];
    if(desiredAge === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
          output.push(input[i]);
      }
      return output;
    } else if (desiredAge === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
          output.push(input[i]);
      }
      return output;
    } else {
      return input;
    }
  }


}
