import { Component, OnInit } from '@angular/core';
import { List } from '../List';

import { Observable } from 'rxjs';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { AddFormComponent } from '../add-form/add-form.component';
import { NameService } from '../services/name.service';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.css'],
})
export class ExampleListComponent implements OnInit {
  persons: List[] = [
    {
      name: 'Alan',
      Sername: 'Coolen',
      Sex: 'M',
      Phone: '+372653745',
      info: 'Their playful nature and intelligence have brought dolphins',
    },
    {
      name: 'Pablo',
      Sername: 'Picasso',
      Sex: 'M',
      Phone: '+3725845367',
      info: ' Their playful nature and intelligence have brought dolphins into close contact with humans, not always to their benefit.',
    },
    {
      name: 'Rose',
      Sername: 'Loa',
      Sex: 'N',
      Phone: '+3725845367',
      info: 'Scientists have learned that dolphins live longer, happier lives when they are not in captivity, so you are less likely to see dolphins at an aquarium than in the past.',
    },
    {
      name: 'Fred',
      Sername: 'Smith',
      Sex: 'M',
      Phone: '+3725845367',
      info: 'Dolphins are one of the most commonly recognized and beloved sea creatures, in part because they are gregarious and friendly. ',
    },
    {
      name: 'Rose',
      Sername: 'Loa',
      Sex: 'N',
      Phone: '+3725845367',
      info: 'Scientists have learned that dolphins live longer, happier lives when they are not in captivity, so you are less likely to see dolphins at an aquarium than in the past.',
    },
    {
      name: 'Rose',
      Sername: 'Loa',
      Sex: 'N',
      Phone: '+3725845367',
      info: 'Scientists have learned that dolphins live longer, happier lives when they are not in captivity, so you are less likely to see dolphins at an aquarium than in the past.',
    },
    {
      name: 'Rose',
      Sername: 'Loa',
      Sex: 'N',
      Phone: '+3725845367',
      info: 'Scientists have learned that dolphins live longer, happier lives when they are not in captivity, so you are less likely to see dolphins at an aquarium than in the past.',
    },
    {
      name: 'Rose',
      Sername: 'Loa',
      Sex: 'N',
      Phone: '+3725845367',
      info: 'Scientists have learned that dolphins live longer, happier lives when they are not in captivity, so you are less likely to see dolphins at an aquarium than in the past.',
    },
    {
      name: 'Rose',
      Sername: 'Loa',
      Sex: 'N',
      Phone: '+3725845367',
      info: 'Scientists have learned that dolphins live longer, happier lives when they are not in captivity, so you are less likely to see dolphins at an aquarium than in the past.',
    },
    {
      name: 'Rose',
      Sername: 'Loa',
      Sex: 'N',
      Phone: '+3725845367',
      info: 'Scientists have learned that dolphins live longer, happier lives when they are not in captivity, so you are less likely to see dolphins at an aquarium than in the past.',
    },
  ];
  selectedPerson?: List;

  filterSearch: string = '';

  onSelect(person: List) {
    this.selectedPerson = person;
  }

  constructor(private nameService: NameService) {}

  ngOnInit() {}
}
