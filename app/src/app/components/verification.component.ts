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
  selector: 'bh-verification',
  templateUrl: './verification.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class verificationComponent {
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
      this.sd_VRZWmEy3WS0Kf2rr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_VRZWmEy3WS0Kf2rr(bh) {
    try {
      bh = this.sd_CKhE5zJbVp0IIhs9(bh);
      //appendnew_next_sd_VRZWmEy3WS0Kf2rr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VRZWmEy3WS0Kf2rr');
    }
  }

  verification(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_FwzR1CsJIM4L36MS(bh);
      //appendnew_next_verification
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7sdGI3ezxgLoICTx');
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
      bh = this.sd_f2r59rK2cGoAEpjI(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2hjxxvpMlhG8gHIq');
    }
  }
  //appendnew_flow_verificationComponent_start

  sd_CKhE5zJbVp0IIhs9(bh) {
    try {
      this.page.EnteredCode = undefined;
      //appendnew_next_sd_CKhE5zJbVp0IIhs9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CKhE5zJbVp0IIhs9');
    }
  }

  sd_FwzR1CsJIM4L36MS(bh) {
    try {
      this.page.userGenerate = JSON.parse(localStorage.getItem('userGenerate'));
      bh = this.sd_pxrODP1541jZKL15(bh);
      //appendnew_next_sd_FwzR1CsJIM4L36MS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FwzR1CsJIM4L36MS');
    }
  }

  async sd_pxrODP1541jZKL15(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.EnteredCode,
          this.page.userGenerate.code,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_YV4eSlI4zPNWDsr4(bh);
      } else {
        bh = await this.sd_wDpTUjMiUZw7lwoB(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pxrODP1541jZKL15');
    }
  }

  sd_YV4eSlI4zPNWDsr4(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('verification code correct', '3000', {
          duration: 1000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_1xWUiXzdzIWIxsYl(bh);
      //appendnew_next_sd_YV4eSlI4zPNWDsr4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YV4eSlI4zPNWDsr4');
    }
  }

  async sd_1xWUiXzdzIWIxsYl(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/new Password');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_1xWUiXzdzIWIxsYl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1xWUiXzdzIWIxsYl');
    }
  }

  sd_wDpTUjMiUZw7lwoB(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Incorrect  verification code', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_wDpTUjMiUZw7lwoB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wDpTUjMiUZw7lwoB');
    }
  }

  async sd_f2r59rK2cGoAEpjI(bh) {
    try {
      const sharedInstance: shared = this.__page_injector__.get(shared);

      let outputVariables = await sharedInstance.goBack();

      //appendnew_next_sd_f2r59rK2cGoAEpjI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f2r59rK2cGoAEpjI');
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
  //appendnew_flow_verificationComponent_Catch
}
