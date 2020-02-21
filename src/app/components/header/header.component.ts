import { Component, OnInit } from '@angular/core';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faRegistered = faRegistered;

  constructor() { }

  ngOnInit(): void {
  }

}
