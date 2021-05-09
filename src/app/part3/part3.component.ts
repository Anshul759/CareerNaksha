import { Component } from '@angular/core';


@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css']
})

export class Part3Component 
{
  cities = [
    {id: 1, name: "Bhubaneshwar"},
    {id: 2, name: "Chennai"},
    {id: 3, name: "Delhi"},
    {id: 4, name: "Bangalore"},
    {id: 5, name: "Kolkata"}
  ];
  submitJoin(form: { value: any; reset: () => void; })
  {
    console.log(form.value);
    alert("The form was submitted");
    form.reset();
  }
}
 
