// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-open_file',
  templateUrl: './open_file.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class open_fileComponent {
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
      this.sd_bvajIKkzdgOCd4ZS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bvajIKkzdgOCd4ZS(bh) {
    try {
      bh = this.sd_loDk8Ew4dbMgSNNV(bh);
      //appendnew_next_sd_bvajIKkzdgOCd4ZS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bvajIKkzdgOCd4ZS');
    }
  }

  //appendnew_flow_open_fileComponent_start

  sd_loDk8Ew4dbMgSNNV(bh) {
    try {
      this.page.userData = undefined;
      bh = this.sd_dg9zWiB8FTsboJLo(bh);
      //appendnew_next_sd_loDk8Ew4dbMgSNNV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_loDk8Ew4dbMgSNNV');
    }
  }

  sd_dg9zWiB8FTsboJLo(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_DUJH3XaMPRKBSYFA(bh);
      //appendnew_next_sd_dg9zWiB8FTsboJLo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dg9zWiB8FTsboJLo');
    }
  }

  sd_DUJH3XaMPRKBSYFA(bh) {
    try {
      this.page.userData = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_cRFjHf1S04mTRyqK(bh);
      //appendnew_next_sd_DUJH3XaMPRKBSYFA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DUJH3XaMPRKBSYFA');
    }
  }

  sd_cRFjHf1S04mTRyqK(bh) {
    try {
      const page = this.page;
      console.log(page.userData);

      bh.url = page.ssdUrl + `download_ID/${page.userData.email}`;
      page.image = bh.url;

      console.log(bh.url);
      //appendnew_next_sd_cRFjHf1S04mTRyqK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cRFjHf1S04mTRyqK');
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
  //appendnew_flow_open_fileComponent_Catch
}
