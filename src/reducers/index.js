import { combineReducers } from 'redux';
import keyEventsReducer from './keyEvents_reducer';
import targetNoteReducer from './targetNote_reducer';
import targetNoteIndexReducer from './targetNoteIndex_reducer';
import sungNoteReducer from './sungNote_reducer';
import vocalInputReducer from './vocalInputResults_reducer';
import recordingStatusReducer from './recordingStatus_reducer';
import greenTimeReducer from './greenTime_reducer';
import scoreReducer from './score_reducer';
import exerciseScoresReducer from './exerciseScores_reducer';
import { captureReducer, octaveReducer, currentNoteReducer } from './interface';
import { Field, reduxForm } from 'redux-form';
import { reducer as formReducer } from 'redux-form';
import  signup  from './signUp';
import login from './login';


const rootReducer = combineReducers({
  form: formReducer,
  currentNoteReducer,
  captureReducer,
  octaveReducer,
  greenTimeReducer,
  scoreReducer,
  exerciseScoresReducer,
  keyEventsReducer,
  targetNoteReducer,
  targetNoteIndexReducer,
  sungNoteReducer,
  vocalInputReducer,
  recordingStatusReducer,
  signup: signup,
  login: login,
});


export default rootReducer;
