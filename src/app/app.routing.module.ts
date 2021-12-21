import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TableComponent } from './components/table/table.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full'
    },
    {
        path: 'blocks',
        component: BlocksComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'users/:login',
        component: UserCardComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
