import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interfaces/student.interface';

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

    return items.filter((it) => {
      return (
        it.name.toLocaleLowerCase().includes(searchText) ||
        it.registration.toString().includes(searchText)
      );
    });
  }
}
