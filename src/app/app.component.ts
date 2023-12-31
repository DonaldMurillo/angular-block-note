import { Component } from '@angular/core';
import { BlockNoteComponent } from './block-note/block-note.component';

@Component({
  standalone: true,
  imports: [BlockNoteComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-block-note';
}
