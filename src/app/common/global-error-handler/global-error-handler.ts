import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, NgZone } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ChangeNavigationService } from '../services/change-navigation.service';



export class GlobalErrorHandler implements ErrorHandler {

  constructor(private ngZone: NgZone,
    private changeNavigationService: ChangeNavigationService) {}

  handleError(error: HttpErrorResponse | any) {

    let navigationExtras: NavigationExtras = {
      state: {
        ErrorMessage: null,
        ErrorCode: null,
        Title: null
      }
    }

    console.log("Error: GlobalError: ");
    console.log(error);

    if (false) {

      navigationExtras.state.Title = error.originalError.statusText;
      navigationExtras.state.ErrorCode = error.originalError.status;
      navigationExtras.state.ErrorMessage =
        "Server error occured in "
        + error.originalError.url.substring((error.originalError.url.indexOf('api') + 4))
        + ". Error -  " + error.originalError.statusText
        + " (" + error.originalError.status + ")";

      this.ngZone.run(() => {
        this.changeNavigationService.navigate("common-error", navigationExtras);
      });

    }

    else {
      navigationExtras.state.Title = "Generic Error";
      navigationExtras.state.ErrorCode = "General error occured";
      navigationExtras.state.ErrorMessage = "Some error has occured. Sorry for inconvenicence.";
    }
  }
}
