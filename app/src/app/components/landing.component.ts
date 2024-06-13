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
  selector: 'bh-landing',
  templateUrl: './landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class landingComponent {
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
      this.sd_1szriGhfFxO2OvwH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1szriGhfFxO2OvwH(bh) {
    try {
      bh = this.sd_hllYKuHYxCZoHnCY(bh);
      //appendnew_next_sd_1szriGhfFxO2OvwH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1szriGhfFxO2OvwH');
    }
  }

  getCustomers(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3PkbG2LWJ8xSO8xB(bh);
      //appendnew_next_getCustomers
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z8JVDOTd7lAQS4A8');
    }
  }

  getLoans(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_XQurMrIN91FLcbaR(bh);
      //appendnew_next_getLoans
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wGZW6n5fuQrm43mN');
    }
  }
  //appendnew_flow_landingComponent_start

  sd_hllYKuHYxCZoHnCY(bh) {
    try {
      this.page.numApproved = [];
      this.page.numRejected = [];
      this.page.numPending = [];
      this.page.pieChartLabels = undefined;
      this.page.pieChartOptions = undefined;
      this.page.pieChartData = undefined;
      this.page.numApprovedLoans = [];
      this.page.numPendingLoans = [];
      this.page.numRejectedLoans = [];
      this.page.barChartLabels = undefined;
      this.page.barChartData = undefined;
      this.page.barChartOptions = undefined;
      bh = this.sd_V7qhIRg2eonsJxFU(bh);
      //appendnew_next_sd_hllYKuHYxCZoHnCY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hllYKuHYxCZoHnCY');
    }
  }

  sd_V7qhIRg2eonsJxFU(bh) {
    try {
      let outputVariables = this.getCustomers();

      bh = this.sd_MQn8KrlEQviMqFdV(bh);
      //appendnew_next_sd_V7qhIRg2eonsJxFU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V7qhIRg2eonsJxFU');
    }
  }

  sd_MQn8KrlEQviMqFdV(bh) {
    try {
      let outputVariables = this.getLoans();

      //appendnew_next_sd_MQn8KrlEQviMqFdV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MQn8KrlEQviMqFdV');
    }
  }

  sd_3PkbG2LWJ8xSO8xB(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_nPcHVjsGOG2mqF7R(bh);
      //appendnew_next_sd_3PkbG2LWJ8xSO8xB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3PkbG2LWJ8xSO8xB');
    }
  }

  sd_nPcHVjsGOG2mqF7R(bh) {
    try {
      const page = this.page;
      bh.url = bh.url + 'get-customers';
      bh = this.sd_Ik2tN4JknDPyTHZJ(bh);
      //appendnew_next_sd_nPcHVjsGOG2mqF7R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nPcHVjsGOG2mqF7R');
    }
  }

  async sd_Ik2tN4JknDPyTHZJ(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_dQjI7MYio1Ns712v(bh);
      //appendnew_next_sd_Ik2tN4JknDPyTHZJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ik2tN4JknDPyTHZJ');
    }
  }

  sd_dQjI7MYio1Ns712v(bh) {
    try {
      const page = this.page;
      page.numApproved = page.result.filter(
        (user: any) => user.status === 'approved'
      ).length;
      page.numRejected = page.result.filter(
        (user: any) => user.status === 'rejected'
      ).length;
      page.numPending = page.result.filter(
        (user: any) => user.status === 'pending'
      ).length;
      console.log('count account', page.result);
      console.log('count approved account', page.numApproved);
      console.log('count pending account', page.numPending);
      console.log('count rejected account', page.numRejected);
      page.pieChartLabels = ['Approved', 'Rejected', 'Pending'];

      page.pieChartData = [
        {
          data: [page.numApproved, page.numRejected, page.numPending],
          label: 'Status',
        },
      ];

      page.pieChartOptions = {
        responsive: true,
      };
      //appendnew_next_sd_dQjI7MYio1Ns712v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dQjI7MYio1Ns712v');
    }
  }

  sd_XQurMrIN91FLcbaR(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_vpgDwY50f9TuNU3r(bh);
      //appendnew_next_sd_XQurMrIN91FLcbaR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XQurMrIN91FLcbaR');
    }
  }

  sd_vpgDwY50f9TuNU3r(bh) {
    try {
      const page = this.page;
      bh.url = bh.url + 'get-loans';
      bh = this.sd_jpNGlP8mEEerhNXP(bh);
      //appendnew_next_sd_vpgDwY50f9TuNU3r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vpgDwY50f9TuNU3r');
    }
  }

  async sd_jpNGlP8mEEerhNXP(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.loanResult = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_pkCSxUHKEaXPm207(bh);
      //appendnew_next_sd_jpNGlP8mEEerhNXP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jpNGlP8mEEerhNXP');
    }
  }

  sd_pkCSxUHKEaXPm207(bh) {
    try {
      const page = this.page;
      page.numApprovedLoans = page.loanResult.filter(
        (user: any) => user.status === 'approved'
      ).length;
      page.numRejectedLoans = page.loanResult.filter(
        (user: any) => user.status === 'rejected'
      ).length;
      page.numPendingLoans = page.loanResult.filter(
        (user: any) => user.status === 'pending'
      ).length;
      // console.log('Count LOans:', page.loanResult)
      // console.log("count approved loan", page.numApprovedLoans )
      // console.log("count pending loan", page.numPendingLoans )
      // console.log("count rejected loan", page.numRejectedLoans)
      page.barChartLabels = ['Approved', 'Rejected', 'Pending'];

      page.barChartData = [
        {
          data: [
            page.numApprovedLoans,
            page.numRejectedLoans,
            page.numPendingLoans,
          ],
          label: 'Status',
        },
      ];
      page.barChartBackgroundColor = [
        {
          color: [
            'green',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
        },
      ];

      page.barChartOptions = {
        responsive: true,
      };
      //appendnew_next_sd_pkCSxUHKEaXPm207
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pkCSxUHKEaXPm207');
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
  //appendnew_flow_landingComponent_Catch
}
