import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/user.model';

export interface ISearchUsersResponse {
  items: IUser[]
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly RESULTS_PER_PAGE = 20;

  constructor(
    private http: HttpClient
  ) { }

  public sendSearch(value: string): Observable<ISearchUsersResponse> {
    const params = {
      q: value,
      per_page: this.RESULTS_PER_PAGE
    }

    return this.http.get<ISearchUsersResponse>('https://api.github.com/search/users', { params })
  }
}
