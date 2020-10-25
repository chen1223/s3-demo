import { Component, OnInit } from '@angular/core';
import { DogWikiService } from '../dog-wiki.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options = [];

  constructor(private dogWikiService: DogWikiService) { }

  ngOnInit() {
    this.loadOptions();
  }

  loadOptions(): void {
    this.options = [...this.dogWikiService.getDogs()];
  }

}
