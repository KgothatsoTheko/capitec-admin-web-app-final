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
//append_imports_end

@Component({
  selector: 'bh-signIn',
  templateUrl: './signIn.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class signInComponent {
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
      this.sd_nxyIcayG3VA48S4s(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_nxyIcayG3VA48S4s(bh) {
    try {
      bh = this.sd_X8SiOUTGlq4CHJep(bh);
      //appendnew_next_sd_nxyIcayG3VA48S4s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nxyIcayG3VA48S4s');
    }
  }

  signIn(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_W9CgrjxdV7x2VmRc(bh);
      //appendnew_next_signIn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dDa8Y4LvJX9QDYfr');
    }
  }
  //appendnew_flow_signInComponent_start

  sd_X8SiOUTGlq4CHJep(bh) {
    try {
      this.page.userDetails = { email: '', password: '' };
      this.page.hideIcon = true;
      this.page.submitted = false;
      this.page.emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
      bh = this.sd_2LEczkYxQur0plUe(bh);
      //appendnew_next_sd_X8SiOUTGlq4CHJep
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X8SiOUTGlq4CHJep');
    }
  }

  sd_2LEczkYxQur0plUe(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_mmOwDDCaEwmDwSEy(bh);
      //appendnew_next_sd_2LEczkYxQur0plUe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2LEczkYxQur0plUe');
    }
  }

  sd_mmOwDDCaEwmDwSEy(bh) {
    try {
      const page = this.page;
      bh.url = bh.url + 'add-admin';
      // console.log(bh.url)
      bh.collection = { collection: 'admin' };
      bh = this.sd_MSD4NtemhFTzxYES(bh);
      //appendnew_next_sd_mmOwDDCaEwmDwSEy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mmOwDDCaEwmDwSEy');
    }
  }

  async sd_MSD4NtemhFTzxYES(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.collection,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_MSD4NtemhFTzxYES
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MSD4NtemhFTzxYES');
    }
  }

  sd_W9CgrjxdV7x2VmRc(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_DuJom0jpHdUK33ds(bh);
      //appendnew_next_sd_W9CgrjxdV7x2VmRc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W9CgrjxdV7x2VmRc');
    }
  }

  sd_DuJom0jpHdUK33ds(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh.url = bh.url + 'admin-log-in';
      // page.loader = true;
      console.log(bh.input.form);
      console.log(page.userDetails);

      bh = this.sd_gNR1b9c1Ugt2LbrH(bh);
      //appendnew_next_sd_DuJom0jpHdUK33ds
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DuJom0jpHdUK33ds');
    }
  }

  sd_gNR1b9c1Ugt2LbrH(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_bfsbF7gCB0nskEOk(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gNR1b9c1Ugt2LbrH');
    }
  }

  async sd_bfsbF7gCB0nskEOk(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.userDetails,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_aqQu9w6pER2RNoev(bh);
      //appendnew_next_sd_bfsbF7gCB0nskEOk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bfsbF7gCB0nskEOk');
    }
  }

  sd_aqQu9w6pER2RNoev(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Logged In successfully', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_5cyvDjiNdvfoWqZ9(bh);
      //appendnew_next_sd_aqQu9w6pER2RNoev
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aqQu9w6pER2RNoev');
    }
  }

  sd_5cyvDjiNdvfoWqZ9(bh) {
    try {
      sessionStorage.setItem(this.page.loggedInUser, JSON.stringify(bh.result));
      bh = this.sd_F8TqpZLD45b0eL3l(bh);
      //appendnew_next_sd_5cyvDjiNdvfoWqZ9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5cyvDjiNdvfoWqZ9');
    }
  }

  async sd_F8TqpZLD45b0eL3l(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_F8TqpZLD45b0eL3l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F8TqpZLD45b0eL3l');
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
  //appendnew_flow_signInComponent_Catch
}
