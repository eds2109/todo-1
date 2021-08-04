import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../service/data-handler.service';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories!: Category[];

  constructor(private DataHandler: DataHandlerService) {}

  // Метод вызвается автоматически после инициализации компонента
  ngOnInit() {
    this.categories = this.DataHandler.getCategories();
  }
}
