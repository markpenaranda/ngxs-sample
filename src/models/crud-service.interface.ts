import { FilterModel } from './filter.model';
import { Observable } from 'rxjs';

export interface CrudServiceInterface<T> {
    currentPage: number 
    totalPageCount: number 
    itemsPerPage: number 

    $all: (filter?: FilterModel, page?: number, sort?: string, limit?: number) => Observable<T []>
    create: (item: T) => Observable<T>
    get: (uuid: string) => Observable<T>
    update: (uuid: string, item: T) => Observable<T>

}