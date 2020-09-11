import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { MultiFilterUserContainerComponent } from './multi-filter-user-container/multi-filter-user-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    MultiFilterUserContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
