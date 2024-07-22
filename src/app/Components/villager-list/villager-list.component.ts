import { Component, OnInit } from '@angular/core';
import { AnimalCrossingService } from '../../ACService/animal-crossing.service';
import { map, Observable, pipe, catchError } from 'rxjs';
import { Villager } from './Villager';

@Component({
  selector: 'app-villager-list',
  templateUrl: './villager-list.component.html',
  styleUrls: ['./villager-list.component.css']
})
export class VillagerListComponent implements OnInit {
  villagers: Villager[] = [];
  filteredVillagers: Villager[] = [];
  error: string | null = null;
  searchQuery: string = '';

  constructor(private NookiAPI: AnimalCrossingService) {}

  ngOnInit() {
    this.NookiAPI.obtainVillager().pipe(
      map(data => data.slice(0, 20)),
      catchError(error => {
        this.error = error.message || 'An error occurred.';
        return [];
      })
    ).subscribe(villagers => {
      this.villagers = villagers;
    });
  }
  
  filterVillagers(): void {
    if (!this.searchQuery) {
      this.filteredVillagers = this.villagers;
      return;
    }
    const term = this.searchQuery.toLowerCase();
    this.filteredVillagers = this.villagers.filter(villager =>
      villager.name.toLowerCase().includes(term) ||
      villager.personality.toLowerCase().includes(term)
    );
  }

  handleSearchInput(): void {
    this.filterVillagers();
  }
}
