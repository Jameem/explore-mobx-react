import {observable, action, makeAutoObservable} from  "mobx"

export class NoteStore {
    @observable 
    notes: string[] = []
    newNote: string = ''

    constructor(){
        makeAutoObservable(this)
    }

    @action
    public addNote() {
        this.notes.push(this.newNote)

        this.newNote=""
    }

    @action
    public removeNote(noteToDelete:string) {

        const newNotes = this.notes.filter((note)=>note!==noteToDelete);

        this.notes =newNotes
        
    }
}

const noteStore = new  NoteStore()

export default noteStore