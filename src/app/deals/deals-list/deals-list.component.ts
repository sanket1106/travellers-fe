import { Component, OnInit } from '@angular/core';
import { Deal } from '../deal.model';

@Component({
  selector: 'app-deals-list',
  templateUrl: './deals-list.component.html',
  styleUrls: ['./deals-list.component.css']
})
export class DealsListComponent implements OnInit {

  deals: Deal[] = [
    new Deal('Wonderful Bahamas', 'Bahama', 'sample state', 'Bahama Islands', 'Enjoy 7 days in Bahamas', 1400, 'CAD'),
    new Deal('Wonderful Bahamas', 'Bahama', 'sample state', 'Bahama Islands', 'Enjoy sandy beaches of Bahams in 5 star luxury', 1600, 'CAD'),
    new Deal('Amazing Jamaica', 'Montego Bay', 'Jamaica', 'Jamaica', 'Enjoy serene beaches at Jamaica', 1500, 'CAD')
];

  constructor() { }

  ngOnInit(): void {
  }

}
