import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() usersData: IUser[] = [];

  @Output() selectUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  public selectRow(user: IUser): void {
    this.selectUser.emit(user);
  }
}
