// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { shared } from 'app/sd-services/shared'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-newPassword',
  templateUrl: './newPassword.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class newPasswordComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_vHob28e7NgLESG0D(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_vHob28e7NgLESG0D(bh) {
    try {
      bh = this.sd_yIGKcM74z7JtqpOZ(bh);
      //appendnew_next_sd_vHob28e7NgLESG0D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vHob28e7NgLESG0D');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_AulS8i1vA45hl0ZY(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_amC2CUsJo3syfQZe');
    }
  }

  newPasswordCall(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_mOFPeQOfgzFGp16Q(bh);
      //appendnew_next_newPasswordCall
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5H8HwAdPcWF3Yp5W');
    }
  }
  //appendnew_flow_newPasswordComponent_start

  sd_yIGKcM74z7JtqpOZ(bh) {
    try {
      this.page.submit = false;
      this.page.ConfirmPassword = undefined;
      this.page.userDetails = { email: '', password: '' };
      bh = this.sd_eKUExvdRyneC3q5f(bh);
      //appendnew_next_sd_yIGKcM74z7JtqpOZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yIGKcM74z7JtqpOZ');
    }
  }

  sd_eKUExvdRyneC3q5f(bh) {
    try {
      this.page.recievedUserDetials = JSON.parse(
        localStorage.getItem('userGenerate')
      );
      //appendnew_next_sd_eKUExvdRyneC3q5f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eKUExvdRyneC3q5f');
    }
  }

  async sd_AulS8i1vA45hl0ZY(bh) {
    try {
      const sharedInstance: shared = this.__page_injector__.get(shared);

      let outputVariables = await sharedInstance.goBack();

      //appendnew_next_sd_AulS8i1vA45hl0ZY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AulS8i1vA45hl0ZY');
    }
  }

  async sd_mOFPeQOfgzFGp16Q(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.userDetails.password,
          this.page.ConfirmPassword,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_IpKU2ZdW5JGaNgfh(bh);
      } else {
        bh = await this.sd_Zt7VtRtKheWB0BSw(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mOFPeQOfgzFGp16Q');
    }
  }

  sd_IpKU2ZdW5JGaNgfh(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_Vc9WSQT8xNY5fTvg(bh);
      //appendnew_next_sd_IpKU2ZdW5JGaNgfh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IpKU2ZdW5JGaNgfh');
    }
  }

  sd_Vc9WSQT8xNY5fTvg(bh) {
    try {
      const page = this.page;
      page.submit = true;
      bh.url = bh.url + 'update-admin-details';
      bh.collection = 'admin';
      page.userDetails.email = page.recievedUserDetials.email;

      // bh.body = {
      //     email: page.recievedUserDetials.email,
      //     password: page.userDetails.password
      // }

      console.log('email recieved', page.userDetails.email);
      bh = this.sd_VCA63cKJpQgB1gQK(bh);
      //appendnew_next_sd_Vc9WSQT8xNY5fTvg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vc9WSQT8xNY5fTvg');
    }
  }

  async sd_VCA63cKJpQgB1gQK(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.userDetails,
      };
      this.page.userDetails = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_NoDjoMwchA3zc8uZ(bh);
      //appendnew_next_sd_VCA63cKJpQgB1gQK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VCA63cKJpQgB1gQK');
    }
  }

  sd_NoDjoMwchA3zc8uZ(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Password has been changed', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_oBJwzJSPtrNrCHeF(bh);
      //appendnew_next_sd_NoDjoMwchA3zc8uZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NoDjoMwchA3zc8uZ');
    }
  }

  async sd_oBJwzJSPtrNrCHeF(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sign-in');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_oBJwzJSPtrNrCHeF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oBJwzJSPtrNrCHeF');
    }
  }

  sd_Zt7VtRtKheWB0BSw(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("Password doesn't match", 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Zt7VtRtKheWB0BSw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zt7VtRtKheWB0BSw');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_newPasswordComponent_Catch
}
