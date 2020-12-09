import { ErrorHandler } from "@angular/core";

export class NotFoundError implements ErrorHandler {
    handleError(error){
        alert("An unexpected error occured.");
        console.log(error);
    }
}