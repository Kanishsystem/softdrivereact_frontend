// apiService.js
import axios from 'axios';
import { from,EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import config from '../config/config';
import { getToken } from './sessionService';


const API = axios.create({
    baseURL:config.REACT_APP_API_URL
});


const processError=(error)=>{
  let msg = "error";
 // console.log("code " , error.code);
  if(error.code=="ERR_BAD_REQUEST"){
   // console.log("entered insaide ");
    // this is bad request error code and to be handled 
    msg = error.response && error.response.data && error.response.data.message ? error.response.data.message : "Invalid Request";
    return msg;
   }
   return msg;
}


// Default error handler
const defaultErrorHandler = (errorMessage,error) => { 
    //console.error('API Request Error:', error);
    alert(errorMessage);
    return EMPTY;
  };

const get = (url, handleError,requiresAuthorization = true, customHeaders = {}) => {
    // Check if authorization is required and if a token is available
  if (requiresAuthorization) {
      customHeaders['Authorization'] = 'Bearer ' + getToken();
  }
  //console.log("custom headers " , customHeaders);
    return from(API.get(url, { headers: customHeaders })).pipe(
      catchError((error) => {
        let errorMessage = processError(error);
        // Use the provided handleError callback or a default handler
        const errorHandler = handleError ?  handleError  : defaultErrorHandler;
       // Call the error handler with the error
        errorHandler(errorMessage,error); 
        // Rethrow the error to propagate it down the observable chain
        //return throwError(error);
        return EMPTY;
      })
    );
};

const post = (url, data,handleError,requiresAuthorization = true, customHeaders = {}) => {
    // Check if authorization is required and if a token is available
  if (requiresAuthorization) {
    customHeaders['Authorization'] = 'Bearer ' + getToken();
  }
    return from(API.post(url,data,{ headers: customHeaders })).pipe(
      catchError((error) => {
       // console.log("error " , error);
       let errorMessage = processError(error);
       const errorHandler = handleError ?  handleError  : defaultErrorHandler;
       errorHandler(errorMessage,error);     
       return EMPTY;
      })
    );
};

export{get,post};