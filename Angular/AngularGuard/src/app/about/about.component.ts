import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

ngOnInit(): void {
  localStorage.removeItem('form');
}

submitData(){
  localStorage.setItem('form','done');
  console.log(localStorage.getItem('form'));
}
  



};

  

 





