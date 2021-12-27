import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {

  constructor() { }

  @Input() animal?: Animal;

  ngOnInit(): void {
  }

}
