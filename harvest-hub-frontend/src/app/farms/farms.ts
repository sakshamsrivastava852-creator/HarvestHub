import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Farm } from './farm';

@Component({
  selector: 'app-farms',
  imports: [CommonModule],
  templateUrl: './farms.html',
  styleUrl: './farms.css'
})
export class Farms implements OnInit {

  farms: any[] = [];

  constructor(private farmService: Farm) {}

  ngOnInit(): void {
    this.farmService.getFarms().subscribe(data => {
      this.farms = data;
    });
  }
}
