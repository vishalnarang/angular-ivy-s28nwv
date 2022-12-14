import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Child2ComponentComponent } from './child2-component/child2-component.component';
import { SharedService } from './shared.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    Child2ComponentComponent,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
