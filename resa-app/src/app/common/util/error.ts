export function extractErrorMessage(err:any):string{
   let message="error";
   console.log("err:"+JSON.stringify(err));
   if(err){
       let error = err.error;
       if(error){
           //console.log("error:"+JSON.stringify(error));
           let msg = error.message;
           if(msg) message=error.message;
           else message = JSON.stringify(error);
       }
       else{
           let statusText = err.statusText;
           if(statusText) message = statusText;
       }
   }
   return message;
}