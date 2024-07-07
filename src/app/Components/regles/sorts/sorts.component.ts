import { Component } from '@angular/core';
import { Spells } from '../../../Models/Spells';
import { SpellsService } from '../../../Services/spells.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sorts',
  templateUrl: './sorts.component.html',
  styleUrl: './sorts.component.css',
})
export class SortsComponent {
  listSpells: Spells[] = [];
  listSchool: string[] = [];
  selectedSchoolsMap: { [key: string]: boolean } = {};
  filteredSpells: Spells[] = [];
  sortBy!: keyof Spells;
  sortDirection: 'asc' | 'desc' = 'asc';
  levelMin: number | undefined;
  levelMax: number | undefined;

  constructor(private spellsService: SpellsService, private router: Router) {
    this.loadData();
  }

  loadData() {
    this.spellsService.GetAll().subscribe({
      next: (data: Spells[]) => {
        this.listSpells = data;
        this.getSchool();
        this.applyFilter();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getSchool() {
    const schoolsSet = new Set<string>();

    this.listSpells.forEach((spell) => {
      schoolsSet.add(spell.school);
    });

    this.listSchool = Array.from(schoolsSet);
    this.listSchool.forEach((school) => {
      this.selectedSchoolsMap[school] = false;
    });
  }

  toggleFilter(school: string): void {
    this.selectedSchoolsMap[school] = !this.selectedSchoolsMap[school];
    this.applyFilter();
  }

  isSelected(school: string): boolean {
    return this.selectedSchoolsMap[school];
  }

  applyFilter() {
    const selectedSchools = Object.keys(this.selectedSchoolsMap).filter(
      (school) => this.selectedSchoolsMap[school]
    );
    if (selectedSchools.length === 0) {
      this.filteredSpells = this.listSpells;
    } else {
      this.filteredSpells = this.listSpells.filter((spell) =>
        selectedSchools.includes(spell.school)
      );
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  setSortBy(property: keyof Spells) {
    if (this.sortBy === property) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'; // Inverse la direction du tri si on clique à nouveau sur la même colonne
    } else {
      this.sortBy = property;
      this.sortDirection = 'asc'; // Par défaut, commence par un tri ascendant
    }
    this.sortFilteredSpells();
  }

  sortFilteredSpells() {
    if (this.sortBy) {
      this.filteredSpells.sort((a, b) => {
        const valueA = a[this.sortBy] as any;
        const valueB = b[this.sortBy] as any;
        if (valueA < valueB) {
          return this.sortDirection === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
          return this.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
  }

  filterByLevelRange() {
    this.filteredSpells = this.filteredSpells.filter(
      (spell) =>
        (this.levelMin === undefined || spell.level >= this.levelMin) &&
        (this.levelMax === undefined || spell.level <= this.levelMax)
    );
  }

  clearFilters() {
    this.levelMin = undefined;
    this.levelMax = undefined;
    this.filteredSpells = this.listSpells;
    this.applyFilter();
  }
}
