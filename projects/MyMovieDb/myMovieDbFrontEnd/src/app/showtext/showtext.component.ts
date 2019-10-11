import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showtext',
  templateUrl: './showtext.component.html',
  styleUrls: ['./showtext.component.css']
})
export class ShowtextComponent implements OnInit {
  helloText = 'hallo ik ben blij hier te zijn';
  constructor() { }

  ngOnInit() {
  }

}
