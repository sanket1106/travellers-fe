import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-link-button',
  templateUrl: './header-link-button.component.html',
  styleUrls: ['./header-link-button.component.css']
})
export class HeaderLinkButtonComponent implements OnInit {

  @Input('buttonText') buttonText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
