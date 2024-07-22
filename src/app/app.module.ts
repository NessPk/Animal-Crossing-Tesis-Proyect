import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VillagerListComponent } from './Components/villager-list/villager-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VillagerListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }