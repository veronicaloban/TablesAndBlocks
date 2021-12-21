import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ReplaySubject, takeUntil } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { SearchService } from 'src/app/services/search/search.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'login'];
  public usersData: IUser[] = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private searchService: SearchService,
    private stateService: StateService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.stateService.state
      .pipe(takeUntil(this.destroyed$))
      .subscribe(userState => this.usersData = userState.users)
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public setSearchValue(searchValue: string): void {
    this.searchService.sendSearch(searchValue)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(searchResp => this.stateService.setUsers(searchResp.items))
  }

  public selectUser(user: IUser) {
    this.stateService.setCurrentlySelectedUser(user);
    this.router.navigate(['/users', user.login]);
  }
}
