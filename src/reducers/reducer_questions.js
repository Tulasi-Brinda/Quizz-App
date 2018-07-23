import { FETCH_QUESTIONS, FETCH_NEXT_QUESTIONS, FETCH_PREV_QUESTIONS, FETCH_SELECTED_OPTION, FINAL_RESULT  } from '../actions/index';
const INITIAL_STATE = {all:[], curr:0, option:'', score:null};


export default function(state = INITIAL_STATE,action){

  switch (action.type){
    case FETCH_QUESTIONS:
    return {...state,all:action.payload};
    case FETCH_NEXT_QUESTIONS:
    return {...state,curr:action.payload};
    case FETCH_PREV_QUESTIONS:
    return {...state,curr:action.payload};
    case FETCH_SELECTED_OPTION:
    return {...state,option:action.payload};
    case FINAL_RESULT:
    return {...state,score:action.payload};
    default:
    return state;
  }
}





 






