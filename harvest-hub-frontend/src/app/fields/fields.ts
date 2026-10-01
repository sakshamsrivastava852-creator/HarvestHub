import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Field } from './field';

@Component({
  selector: 'app-fields',
  imports: [CommonModule],
  templateUrl: './fields.html',
  styleUrl: './fields.css'
})
export class Fields implements OnInit {

  fields: any[] = [];

  constructor(private fieldService: Field) {}

  ngOnInit(): void {
    this.fieldService.getFields().subscribe(data => {
      this.fields = data;
    });
  }
}