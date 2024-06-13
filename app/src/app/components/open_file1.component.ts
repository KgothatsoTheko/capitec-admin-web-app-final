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
  selector: 'bh-open_file1',
  templateUrl: './open_file1.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class open_file1Component {
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
      this.sd_EcDqqb4g6jk8FtTM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EcDqqb4g6jk8FtTM(bh) {
    try {
      bh = this.sd_kZ7GTdO0aHPvXqa9(bh);
      //appendnew_next_sd_EcDqqb4g6jk8FtTM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EcDqqb4g6jk8FtTM');
    }
  }

  //appendnew_flow_open_file1Component_start

  sd_kZ7GTdO0aHPvXqa9(bh) {
    try {
      this.page.userData = undefined;
      bh = this.sd_2eEzzTp0Lue7aM1N(bh);
      //appendnew_next_sd_kZ7GTdO0aHPvXqa9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kZ7GTdO0aHPvXqa9');
    }
  }

  sd_2eEzzTp0Lue7aM1N(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_i5IMNxINF3QtaVgP(bh);
      //appendnew_next_sd_2eEzzTp0Lue7aM1N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2eEzzTp0Lue7aM1N');
    }
  }

  sd_i5IMNxINF3QtaVgP(bh) {
    try {
      this.page.userData = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_LhubeHQ2pw3FPwPV(bh);
      //appendnew_next_sd_i5IMNxINF3QtaVgP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i5IMNxINF3QtaVgP');
    }
  }

  sd_LhubeHQ2pw3FPwPV(bh) {
    try {
      const page = this.page;
      console.log(page.userData);

      bh.url = page.ssdUrl + `download-residence/${page.userData.email}`;
      page.image = bh.url;

      console.log(bh.url);
      //appendnew_next_sd_LhubeHQ2pw3FPwPV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LhubeHQ2pw3FPwPV');
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
  //appendnew_flow_open_file1Component_Catch
}
