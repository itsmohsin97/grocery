import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2OrderModule,
    // Ng2SearchPipeModule,
    // NgxPaginationModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
