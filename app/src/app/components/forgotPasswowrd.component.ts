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
  selector: 'bh-forgotPasswowrd',
  templateUrl: './forgotPasswowrd.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class forgotPasswowrdComponent {
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
      this.sd_PsOyi5kSzjhJ2DrJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PsOyi5kSzjhJ2DrJ(bh) {
    try {
      bh = this.sd_WjiIzzwjZaoJXURi(bh);
      //appendnew_next_sd_PsOyi5kSzjhJ2DrJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PsOyi5kSzjhJ2DrJ');
    }
  }

  forgotPassword(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_ajo2bp8f9UKLyAbu(bh);
      //appendnew_next_forgotPassword
      return bh.input.form;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YIrGoHpekiUg6eP9');
    }
  }

  generateRandomCode(email: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { email };
      bh.local = { random: undefined };
      bh = this.sd_fTS0qDBIzPc53QXg(bh);
      //appendnew_next_generateRandomCode
      return bh.local.random;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VkeXD9PznT7SlhFC');
    }
  }

  callGoBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_UrZmMsaEsn2VZSap(bh);
      //appendnew_next_callGoBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pukoZh0c2NDIRwZT');
    }
  }
  //appendnew_flow_forgotPasswowrdComponent_start

  sd_WjiIzzwjZaoJXURi(bh) {
    try {
      this.page.emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
      this.page.submitted = false;
      this.page.userDetails = { email: '', collection: '' };
      this.page.url = undefined;
      //appendnew_next_sd_WjiIzzwjZaoJXURi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WjiIzzwjZaoJXURi');
    }
  }

  sd_ajo2bp8f9UKLyAbu(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_yYwROCU8jNgaD8Ub(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ajo2bp8f9UKLyAbu');
    }
  }

  sd_yYwROCU8jNgaD8Ub(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_AanO8EACgAAmpCL4(bh);
      //appendnew_next_sd_yYwROCU8jNgaD8Ub
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yYwROCU8jNgaD8Ub');
    }
  }

  sd_AanO8EACgAAmpCL4(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh.url = bh.url + 'admin-forgot';
      // page.loader = true;
      // console.log(bh.input.form)
      console.log(page.userDetails);

      bh = this.sd_EdV2gDVguxJSbGCs(bh);
      //appendnew_next_sd_AanO8EACgAAmpCL4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AanO8EACgAAmpCL4');
    }
  }

  sd_EdV2gDVguxJSbGCs(bh) {
    try {
      let outputVariables = this.generateRandomCode(
        this.page.userDetails.email
      );
      this.page.userDetails.code = outputVariables;

      bh = this.sd_L1QgRt7XT495Ri4j(bh);
      //appendnew_next_sd_EdV2gDVguxJSbGCs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EdV2gDVguxJSbGCs');
    }
  }

  async sd_L1QgRt7XT495Ri4j(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.userDetails,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_naM3sEiS48Zg45pZ(bh);
      //appendnew_next_sd_L1QgRt7XT495Ri4j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L1QgRt7XT495Ri4j');
    }
  }

  sd_naM3sEiS48Zg45pZ(bh) {
    try {
      localStorage.setItem(
        'userGenerate',
        JSON.stringify(this.page.userDetails)
      );
      bh = this.sd_0kk2ZDroPPlcmYQR(bh);
      //appendnew_next_sd_naM3sEiS48Zg45pZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_naM3sEiS48Zg45pZ');
    }
  }

  sd_0kk2ZDroPPlcmYQR(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Verification code sent to your email', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_jNPe6TJ5kBr51BUJ(bh);
      //appendnew_next_sd_0kk2ZDroPPlcmYQR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0kk2ZDroPPlcmYQR');
    }
  }

  async sd_jNPe6TJ5kBr51BUJ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/verification');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_jNPe6TJ5kBr51BUJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jNPe6TJ5kBr51BUJ');
    }
  }

  sd_fTS0qDBIzPc53QXg(bh) {
    try {
      const page = this.page; // Generates a random number between 1000 (inclusive) and 10000 (exclusive)
      bh.local.random = Math.floor(1000 + Math.random() * 9000);

      // Math.floor(1000 + Math.random() * 9000);
      //appendnew_next_sd_fTS0qDBIzPc53QXg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fTS0qDBIzPc53QXg');
    }
  }

  async sd_UrZmMsaEsn2VZSap(bh) {
    try {
      const sharedInstance: shared = this.__page_injector__.get(shared);

      let outputVariables = await sharedInstance.goBack();

      //appendnew_next_sd_UrZmMsaEsn2VZSap
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UrZmMsaEsn2VZSap');
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
  //appendnew_flow_forgotPasswowrdComponent_Catch
}
