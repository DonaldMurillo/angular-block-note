import { Component, ElementRef, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { BlockNoteEditor } from '@blocknote/core';
import { addFormattingToolbar } from './plugins/add-formatting-toolbar';
import { addHyperlinkToolbar } from './plugins/add-hyper-link-toolbar';
import { addSideMenu } from './plugins/add-sdie-menut';
import { addSlashMenu } from './plugins/add-slash-menu';

@Component({
	selector: 'app-block-note',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './block-note.component.html',
	styleUrls: ['./block-note.component.scss'],
})
export class BlockNoteComponent {

	private document = inject(DOCUMENT);
	private elementRef = inject(ElementRef);
	private editor: BlockNoteEditor;

	constructor() {
		this.editor = new BlockNoteEditor({
			parentElement: this.elementRef.nativeElement,
			onEditorContentChange: (editor) => {
				console.log(editor);
			},
			onEditorReady: (editor) => console.log(editor),
			editorDOMAttributes: {
				class: "editor",
			},
		});

		addSideMenu(this.editor, this.elementRef.nativeElement);
		addFormattingToolbar(this.editor, this.elementRef.nativeElement);
		addSlashMenu(this.editor, this.elementRef.nativeElement);
		addHyperlinkToolbar(this.editor, this.elementRef.nativeElement);
	}

}
