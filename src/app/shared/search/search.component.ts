import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();

  public searchForm = this.fb.group({
    searchFormControl: ['', Validators.required]
  })

  private inputValue: string = '';
  private subscriptions: Subscription[] = []

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.searchForm.valueChanges.subscribe( form => {
        this.inputValue = form.searchFormControl
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( subscription => subscription.unsubscribe() )
  }

  public onClickSearch(): void {
    this.searchValue.emit(this.inputValue);
  }
}
