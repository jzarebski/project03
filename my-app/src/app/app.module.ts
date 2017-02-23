import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouting } from './app.routing';

import { JournalService } from './content/journal/journal.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ShopComponent } from './content/shop/shop.component';
import { JournalComponent } from './content/journal/journal.component';
import { AdventureComponent } from './content/adventure/adventure.component';
import { FindusComponent } from './header/findus/findus.component';
import { AboutComponent } from './header/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ShopComponent,
    JournalComponent,
    AdventureComponent,
    AboutComponent,
    FindusComponent,
    FindusComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
