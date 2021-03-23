import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-detail',
  templateUrl: './composer-detail.component.html',
  styleUrls: ['./composer-detail.component.css']
})
export class ComposerDetailComponent implements OnInit {

  composers =  [
    { id: 1,
      firstName: "Wolfgang Amadeus",
      lastName: "Mozart",
      birthYear: 1756,
      deathYear: 1791,
      country: "Austria" },
    { id: 2,
      firstName: "Richard",
      lastName: "Wagner",
      birthYear: 1813,
      deathYear: 1886,
      country: "Germany" },
    { id: 3,
      firstName: "Giuseppe",
      lastName: "Verdi",
      birthYear: 1813,
      deathYear: 1901,
      country: "Italy" },
    { id: 4,
      firstName: "Giacomo",
      lastName: "Puccini",
      birthYear: 1856,
      deathYear: 1924,
      country: "Italy" },
    { id: 5, firstName: "Benjamin",
      lastName: "Britten",
      birthYear: 1913,
      deathYear: 1976,
      country: "Great Britain" },
    { id: 6,
      firstName: "Richard",
      lastName: "Strauss",
      birthYear: 1864,
      deathYear: 1949,
      country: "Germany" },
    { id: 7,
      firstName: "Sergei",
      lastName: "Prokofiev",
      birthYear: 1891,
      deathYear: 1953,
      country: "Russia" }
  ];


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      console.log(params);
    })
  }



}