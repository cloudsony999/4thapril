import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {

  mobiles=[
    {
      name:'Samsung',
      price:20000,
      stock:100
    },
    {
      name:'Xaomi',
      price:25000,
      stock:200
    },
    { name:'Nokia',
    price:30000,
    stock:60},
    {
      name:'MI',
      price:15000,
      stock:80
    },
    {
      name:'Apple',
      price:50000,
      stock:20
    }
  ]

}
