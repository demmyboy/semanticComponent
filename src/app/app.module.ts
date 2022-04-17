import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//removing this while trying to implement laxy loading 
// import { ElementsModule } from './elements/elements.module';
// import { CollectionsModule } from './collections/collections.module';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent
  ],
  // AppRouting is below angular checks its last incase of notFound scenarios
  imports: [
    BrowserModule,
   // ElementsModule, 
    // CollectionsModule, 
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
