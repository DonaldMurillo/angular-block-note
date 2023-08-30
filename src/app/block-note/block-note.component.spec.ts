import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockNoteComponent } from './block-note.component';

describe('BlockNoteComponent', () => {
  let component: BlockNoteComponent;
  let fixture: ComponentFixture<BlockNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
