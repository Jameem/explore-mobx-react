import { observable, action, makeAutoObservable } from "mobx";

export class NoteStore {
  @observable
  notes: string[] = [];
  newNote: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public addNote() {
    this.notes.push(this.newNote);

    this.newNote = "";
  }

  @action
  public removeNote(noteToDelete: string) {
    const newNotes = this.notes.filter((note) => note !== noteToDelete);

    this.notes = newNotes;
  }

  //STEP1: This is to test merging
  //STEP2: This is to test merging
}

const noteStore = new NoteStore();

export default noteStore;
