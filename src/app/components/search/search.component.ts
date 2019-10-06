import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'adz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    word: new FormControl('', Validators.required), // obligatoire de saisir une valeur
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // la méthode envoyer du formulaire
  onSubmit() {
    // la valeur saisi dans le formulaire
    const searchValue = this.searchForm.get('word').value;
    // Rédirection vers le(s) resultat(s) de la recherche
    this.router.navigate(['/results', {word: searchValue}]);
  }
}
