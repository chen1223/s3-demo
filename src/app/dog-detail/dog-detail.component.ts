import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogWikiService } from '../dog-wiki.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})
export class DogDetailComponent implements OnInit {
  selectedDog = '';
  dogDetail = null;

  constructor(private activatedRoute: ActivatedRoute,
              private dogWikiService: DogWikiService) { }

  ngOnInit() {
    this.loadKey();
  }

  loadKey(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedDog = params.get('name');
      this.loadDetail();
    });
  }

  loadDetail(): void {
    this.dogDetail = this.dogWikiService.dictionary[this.selectedDog];
  }
}
