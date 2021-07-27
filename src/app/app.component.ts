import { Component } from '@angular/core';
import { shortKeysService } from './shortkeys.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Shortcut-Key';

  constructor(shortkeys: shortKeysService) {
    shortkeys.addShortcut({ keys: 'meta.z', description: 'Add Widget' })
    .pipe(take(2)).subscribe(console.log);

    shortkeys.addShortcut({ keys: 'meta.j', description: 'Open Settings' })
    .subscribe(console.log);
  }

  log($event) {
    console.log($event)
  }
}