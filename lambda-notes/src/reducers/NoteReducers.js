import { GETTING_NOTES, 
        RECEIVED_NOTES, 
        GET_FAILED,
        GETTING_SINGLE_NOTE,
        RECEIVED_SINGLE_NOTE,
        GET_SINGLE_FAILED,
        CREATING_NOTE,
        NOTE_CREATED,
        CREATE_FAILED,
        UPDATING_NOTE,
        NOTE_UPDATED,
        UPDATE_FAILED,
        DELETING_NOTE,
        NOTE_DELETED,
        DELETE_FAILED } from './../actions';



        const initialState = {
            notes: [],
            note: {},
            gettingNotes: false,
            receivedNotes: false,
            gettingNote: false,
            receivedNote: false,
            creatingNote: false,
            noteCreated: false,
            updatingNote: false,
            noteUpdated: false,
            deletingNote: false,
            noteDeleted: false,
            error: null
        }

        export const noteReducers = (state = initialState, {type, payload}) => {
            switch(type){
                case GETTING_NOTES:
                    return {...state, gettingNotes: true}
                case RECEIVED_NOTES:
                    return {...state, gettingNotes: false, receivedNotes: true, notes: payload}
                case GET_FAILED:
                    return {...state, gettingNotes: false, error: payload}

                case GETTING_SINGLE_NOTE:
                    return {...state, gettingNote: true}
                case RECEIVED_SINGLE_NOTE:
                    return {...state, gettingNote: false, receivedNote: true, note: payload}
                case GET_SINGLE_FAILED:
                    return {...state, gettingNote: false, error: payload}

                case CREATING_NOTE:
                    return {...state, creatingNote: true}
                case NOTE_CREATED:
                    return {...state, creatingNote: false, noteCreated: true, notes: payload}
                case CREATE_FAILED:
                    return {...state, creatingNote: false, error: payload}

                case UPDATING_NOTE:
                    return {...state, updatingNote: true}
                case NOTE_UPDATED:
                    return {...state, updatingNote: false, noteUpdated: true, notes: payload}
                case UPDATE_FAILED:
                    return {...state, updatingNote: false, error: payload}

                case DELETING_NOTE:
                    return {...state, deletingNote: true}
                case NOTE_DELETED:
                    return {...state, deletingNote: false, noteDeleted: true, notes: payload}
                case DELETE_FAILED:
                    return {...state, deletingNote: false, error: payload}


                default: 
                    return state;
            }
        }