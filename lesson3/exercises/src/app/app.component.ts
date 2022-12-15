import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  status:string = "Space shuttle ready for takeoff!";
  color:string = 'green';
  takenOff:boolean = false;

  height = 400;
  width = 400;
  message = 'Space shuttle ready for takeoff!';

  horizontal:string = "0px";
  vertical:string = "0px";

  takeOff() {
    this.takenOff = window.confirm("Confirm that the shuttle is ready for takeoff");
    if (this.takenOff) {
      this.status = "Shuttle in flight";
      this.color = "blue";
      this.height += 10000;
    }
  }

  land() {
    let response = window.confirm("The shuttle is landing. Landing gear engaged.");
    if (response) {
      this.status = "The shuttle has landed.";
      this.color = "green";
      this.height = 0;
      this.takenOff = false;
    }
  }

  abortMission() {
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response) {
      this.status = "Mission aborted.";
      this.color = "red";
      this.height = 0;
      this.takenOff = false;
    }
  }

  up() {
    if (this.takenOff && parseInt(this.vertical) <= this.height-40) {
      this.vertical = (parseInt(this.vertical) + 10 ) + 'px';
    this.height += 10000;
    }
  }

  down() {
    if (this.takenOff) {
    this.vertical = (parseInt(this.vertical) - 10 ) + 'px';
    this.height -= 10000;
    }
  }

  left() {
    if (this.takenOff) {
    this.horizontal =  (parseInt(this.horizontal) - 10 ) + 'px';
    }
  }

  right() {
    this.horizontal =  (parseInt(this.horizontal) + 10 ) + 'px';
  }
}
