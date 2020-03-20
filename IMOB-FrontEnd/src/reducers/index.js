import {combineReducers} from 'redux'
import { connectRouter } from "connected-react-router";
import {properties} from "./properties";
import {general} from "./general";


export const rootReducer = history =>
  combineReducers({
      router: connectRouter(history),
      properties,
      general,
  });

