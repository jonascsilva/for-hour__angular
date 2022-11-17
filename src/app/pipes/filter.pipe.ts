import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../pages/for-hour/students/students.component';

@Pipe({ name: 'appFilter', standalone: true })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: Student[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.nome.toLocaleLowerCase().includes(searchText) || it.matricula.toString().includes(searchText);
    });
  }
}
