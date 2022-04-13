import { Component, Input, OnInit } from '@angular/core';
import { Trending } from 'src/app/interface/Trending';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

   @Input() movies_series : Trending | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
