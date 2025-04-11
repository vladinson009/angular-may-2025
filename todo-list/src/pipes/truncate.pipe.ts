import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export default class ТruncatePipe implements PipeTransform {
  transform(
    value: string,
    limit: number = 25,
    completeWords: boolean = false,
    trail: string = '...'
  ): string {
    if (!value) {
      return '';
    }
    if (completeWords) {
      limit = value.substring(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
