// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class shared {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_shared

  async goBack(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_fF9FKnig0FZmWAK6(bh);
      //appendnew_next_goBack
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NRzQzuFnzCxCjA8J');
    }
  }

  async getId(email: any = undefined, ...others) {
    let bh: any = {
      input: {
        email,
      },
      local: {
        url: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_lWIaIwhSOI46vTH8(bh);
      //appendnew_next_getId
      return (
        // formatting output variables
        {
          input: {},
          local: {
            url: bh.local.url,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jBUAmyuWdw4rFkBG');
    }
  }

  async getPic(email: any = undefined, ...others) {
    let bh: any = {
      input: {
        email,
      },
      local: {
        image: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_YcLasrcc8CbCjFFC(bh);
      //appendnew_next_getPic
      return (
        // formatting output variables
        {
          input: {},
          local: {
            image: bh.local.image,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GX9X1JNAIIN6IZcd');
    }
  }
  //appendnew_flow_shared_start

  async sd_fF9FKnig0FZmWAK6(bh) {
    try {
      bh.location = this.__service_injector__.get(Location);
      bh = await this.sd_SwdPtET0uE7kTbKA(bh);
      //appendnew_next_sd_fF9FKnig0FZmWAK6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fF9FKnig0FZmWAK6');
    }
  }

  async sd_SwdPtET0uE7kTbKA(bh) {
    try {
      bh.location.back();
      //appendnew_next_sd_SwdPtET0uE7kTbKA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SwdPtET0uE7kTbKA');
    }
  }

  async sd_lWIaIwhSOI46vTH8(bh) {
    try {
      bh = await this.sd_EwnDtqMslm1cVMCG(bh);
      //appendnew_next_sd_lWIaIwhSOI46vTH8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lWIaIwhSOI46vTH8');
    }
  }

  async sd_EwnDtqMslm1cVMCG(bh) {
    try {
      // let email = page.userData.email;
      // let url = page.ssdUrl + `download_ID/${email}`;
      // bh.local.url = url

      // console.log(bh.local.url)
      //appendnew_next_sd_EwnDtqMslm1cVMCG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EwnDtqMslm1cVMCG');
    }
  }

  async sd_YcLasrcc8CbCjFFC(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_g7rzvoz3buLe8UGH(bh);
      //appendnew_next_sd_YcLasrcc8CbCjFFC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YcLasrcc8CbCjFFC');
    }
  }

  async sd_g7rzvoz3buLe8UGH(bh) {
    try {
      bh.url = bh.ssdUrl + `download-picture/${bh.input.email}`;
      // bh.local.url = url

      console.log(bh.url);
      bh = await this.sd_8y7cPWaJtVQ6ecJS(bh);
      //appendnew_next_sd_g7rzvoz3buLe8UGH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g7rzvoz3buLe8UGH');
    }
  }

  async sd_8y7cPWaJtVQ6ecJS(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.image = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_8y7cPWaJtVQ6ecJS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8y7cPWaJtVQ6ecJS');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_shared_Catch
}
