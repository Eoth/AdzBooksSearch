import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'adz-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchValue: string; // variable pour la valeur saisi envoyé de la page de recherche
  books: any; // variable pour les livres récupérer

  // recuperer la liste des livres depuis le composant parent
  constructor(private route: ActivatedRoute,
              private router: Router,
              private booksService: BooksService,
              public dialog: MatDialog) { }

  ngOnInit() {
    // Récupération de la valeur saisi
    this.searchValue = this.route.snapshot.paramMap.get('word');

    // Reqêtage pour récupérer des livres dans l'API
    this.booksService.getBooks(this.searchValue)
    .then((res: any) => {
      this.books = res.items;
    })
    .catch(err => console.error(err));
  }

  // La fonction pour retourner sur la page de recherche
  goBack(): void {
    this.router.navigate(['/search']);
  }
  // pop-up d'affichage des details des livres selectionnés
  openDialog(descr: any): void {
    const dialogRef = this.dialog.open(DetailViewComponent, {
      width: '50%',
      data: {val: descr}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
