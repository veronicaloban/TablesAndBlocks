import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './shared/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlocksComponent } from './components/blocks/blocks.component';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { TableItemComponent } from './shared/table-item/table-item.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    SearchComponent,
    BlocksComponent,
    TableComponent,
    TableItemComponent,
    HeaderComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
