import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByCol'
})
export class FilterByColPipe implements PipeTransform {
    transform(items: any[], col: string, searchText: any): any {
      console.log(searchText);

        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText?.toString();

        return items.filter(item => {
            return Object.keys(item).some(key => {
                return String(item[col])?.toLowerCase().includes(searchText?.toLowerCase());
            });
        });
    }
}
