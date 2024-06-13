// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-toolbar',
  templateUrl: './toolbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class toolbarComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_yHcANpDxhwcWTqno(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_yHcANpDxhwcWTqno(bh) {
    try {
      bh = this.sd_7rMHc8E2NydyX5JC(bh);
      //appendnew_next_sd_yHcANpDxhwcWTqno
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yHcANpDxhwcWTqno');
    }
  }

  accountManagement(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4kwcIzGBV0p7pp8F(bh);
      //appendnew_next_accountManagement
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cAh25CEmi4c4Mbhn');
    }
  }

  loanManagement(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_K4FYNWiJobN14VrC(bh);
      //appendnew_next_loanManagement
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NvwjAEs5AabXZf7L');
    }
  }

  reports(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wbthoiSi2Q6cVxBw(bh);
      //appendnew_next_reports
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lfphhjGmRwyla3dZ');
    }
  }

  settings(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_n8urGpIRbDRCAfrY(bh);
      //appendnew_next_settings
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3iW36Q8qFn7OZCUJ');
    }
  }

  support(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_n1buGrglMWElhtbP(bh);
      //appendnew_next_support
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qDMdLYc2otJGBLJD');
    }
  }
  //appendnew_flow_toolbarComponent_start

  sd_7rMHc8E2NydyX5JC(bh) {
    try {
      this.page.buttons = [
        { value: 'Bold' },
        { value: 'italic' },
        { value: 'strike' },
      ];
      bh = this.sd_ZNjZXvXLdFvJIFbD(bh);
      //appendnew_next_sd_7rMHc8E2NydyX5JC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7rMHc8E2NydyX5JC');
    }
  }

  sd_ZNjZXvXLdFvJIFbD(bh) {
    try {
      this.page.numChanges = JSON.parse(localStorage.getItem('numChanges'));
      bh = this.sd_M4z11HOXX1Ug8f7a(bh);
      //appendnew_next_sd_ZNjZXvXLdFvJIFbD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZNjZXvXLdFvJIFbD');
    }
  }

  sd_M4z11HOXX1Ug8f7a(bh) {
    try {
      const page = this.page;
      console.log('num received', page.numChanges);
      //appendnew_next_sd_M4z11HOXX1Ug8f7a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M4z11HOXX1Ug8f7a');
    }
  }

  async sd_4kwcIzGBV0p7pp8F(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/Account Management');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_4kwcIzGBV0p7pp8F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4kwcIzGBV0p7pp8F');
    }
  }

  async sd_K4FYNWiJobN14VrC(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/Loan management');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_K4FYNWiJobN14VrC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K4FYNWiJobN14VrC');
    }
  }

  async sd_wbthoiSi2Q6cVxBw(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/Reports');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_wbthoiSi2Q6cVxBw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wbthoiSi2Q6cVxBw');
    }
  }

  async sd_n8urGpIRbDRCAfrY(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/Settings');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_n8urGpIRbDRCAfrY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n8urGpIRbDRCAfrY');
    }
  }

  async sd_n1buGrglMWElhtbP(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/Support');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_n1buGrglMWElhtbP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n1buGrglMWElhtbP');
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
  //appendnew_flow_toolbarComponent_Catch
}
