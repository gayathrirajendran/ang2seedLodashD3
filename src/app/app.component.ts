import {Component} from '@angular/core';

import * as _ from 'lodash';
import * as d3 from 'd3';

@Component({
  selector: 'app',
  template: '<div></div>',
})
export class AppComponent {

  constructor(){
    var arr = [11, 88, 90, 78, 22];
    _.forEach(arr, element => {
      console.log(element);
    });
  }
}
