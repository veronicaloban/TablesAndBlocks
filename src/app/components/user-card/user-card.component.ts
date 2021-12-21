import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public user: IUser | null = null;

  private subscriptions: Subscription[] = [];

  constructor(
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.stateService.state.subscribe(state => {
        this.user = state.currentlySelectedUser
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( subscription => subscription.unsubscribe() )
  }
}
