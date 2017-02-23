import { NgModule } from '@angular/core'
import {Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { ShopComponent } from './content/shop/shop.component';
import { JournalComponent } from './content/journal/journal.component';
import { AdventureComponent } from './content/adventure/adventure.component';
import { AboutComponent } from './header/about/about.component';
import { FindusComponent } from './header/findus/findus.component';

const appRoutes: Routes = [
    { path: '', component: ContentComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'journal', component: JournalComponent },
    { path: 'adventure', component: AdventureComponent },
    { path: 'about', component:AboutComponent },
    { path: 'findus', component:FindusComponent}
];

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule]
})

export class AppRouting {}
