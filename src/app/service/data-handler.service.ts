import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../data/TestData';
import { Task } from '../model/Task';
import { BehaviorSubject } from 'rxjs';
import { CategoriesComponent } from '../views/categories/categories.component';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    this.fillTasks();
  }

  //fillCategories(): Category[] {
  //  return TestData.categories;
  //}

  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter((task) => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
