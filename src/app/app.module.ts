import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SortByPricePipe } from './sort-by-price.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterByNamePipe,
    SortByPricePipe,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }