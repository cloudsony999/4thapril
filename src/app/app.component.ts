import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="AMITAVA";
  company="Anudip";
  uname=new FormControl("")
  display(){
    alert('How are You???')
  }
  updateName()
  {
    this.uname.setValue('AMITAVA')
  }
}
