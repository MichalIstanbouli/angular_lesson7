import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  d= new Date();
  curency=[1,2,6,5,54,52,54];
  title = 'List Of Cars';
  constructor() { }
  
  ngOnInit(): void {
  }

}
