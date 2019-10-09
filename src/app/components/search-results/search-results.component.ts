import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material';
import { BooksService } from 'src/app/services/books.service';
import { DetailViewComponent } from '../detail-view/detail-view.component';

@Component({
  selector: 'adz-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchValue: string; // variable pour la valeur saisi envoyé de la page de recherche
  books: any; // variable pour les livres récupérer
  booksPost: any; // variable afficher les livres filtrer
  cols: number; // pour rendre responsive l'affichage
  rowHeight: any;

  // recuperer la liste des livres depuis le composant parent
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // Récupération de la valeur saisi
    this.searchValue = this.route.snapshot.paramMap.get('word');

    // Reqêtage pour récupérer des livres dans l'API
    this.booksService
      .getBooks(this.searchValue)
      .then((res: any) => {
        this.books = res.items;
        this.booksPost = this.books;
      })
      .catch(err => console.error(err));

    // le nombre de livre selon la taille de l'écran
    this.cols = window.innerWidth <= 500 ? 1 : 3;
    this.rowHeight = window.innerWidth <= 900 ? '3:2' : '4:3';
  }

  // le nombre de livre selon la taille de l'écran dynamiquement
  onResize(event) {
    this.cols = event.target.innerWidth <= 500 ? 1 : 3;
    this.rowHeight = window.innerWidth <= 900 ? '3:2' : '4:3';
  }

  // filtrer les livres afficher
  applyFilter(filterValue: string) {
    // tslint:disable-next-line: prefer-const
    let randBook = []; // variable dans lequelle sera rajouter dynamiquement
    // tous les livres filter
    // parcours des livres
    for (const book of this.books) {
      // verifie si le mot de filtrage n'est pas vide
      if (filterValue !== ''.trim()) {
        // vérifie si les objets existes
        if (book.volumeInfo.title && book.volumeInfo.authors) {
          // verifie si le mot saisi se trouve dans le titre du livre parcourue
          if (
            book.volumeInfo.title
              .toLowerCase()
              .includes(filterValue.trim().toLowerCase()) ||
            book.volumeInfo.authors[0]
              .toLowerCase()
              .includes(filterValue.trim().toLowerCase())
          ) {
            randBook.push(book); // si le mot saisi se trouve dasn cet livre, il est rajouter
          }
        }
      } else {
        randBook = this.books; // si le champs, réafficher les resultats initiale
        break;
      }
    }
    this.booksPost = randBook;
  }

  // La fonction pour retourner sur la page de recherche
  goBack(): void {
    this.router.navigate(['/search']);
  }

  // pop-up d'affichage des details des livres selectionnés
  openDialog(descr: any): void {
    const dialogRef = this.dialog.open(DetailViewComponent, {
      width: '50%',
      data: { val: descr }
    });
  }
}
