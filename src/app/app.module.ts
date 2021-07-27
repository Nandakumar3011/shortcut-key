import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HelloComponent } from './hello/hello.component';
import { ShortkeyDialogComponent } from './shortkey-dialog/shortkey-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ShortkeyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [ShortkeyDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
