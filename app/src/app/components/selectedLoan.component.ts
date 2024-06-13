// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-selectedLoan',
  templateUrl: './selectedLoan.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class selectedLoanComponent {
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
      this.sd_ZJxIlh6PeVoj3K3v(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ZJxIlh6PeVoj3K3v(bh) {
    try {
      bh = this.sd_2ZNYiUUvCH84ctHU(bh);
      //appendnew_next_sd_ZJxIlh6PeVoj3K3v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZJxIlh6PeVoj3K3v');
    }
  }

  update(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_ssfyh38o8yOK0Gme(bh);
      //appendnew_next_update
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2J0mYpWppmiIyBdy');
    }
  }
  //appendnew_flow_selectedLoanComponent_start

  sd_2ZNYiUUvCH84ctHU(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_j1Up3S7Lu7uXeilp(bh);
      //appendnew_next_sd_2ZNYiUUvCH84ctHU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2ZNYiUUvCH84ctHU');
    }
  }

  sd_j1Up3S7Lu7uXeilp(bh) {
    try {
      this.page.name = undefined;
      this.page.surname = undefined;
      this.page.idNumber = undefined;
      this.page.cellNumber = undefined;
      this.page.email = undefined;
      this.page.status = undefined;
      this.page.doc = undefined;
      this.page.currentAccount = undefined;
      this.page.selected = undefined;
      this.page.update_ = false;
      this.page.userInfos = undefined;
      this.page.userData = undefined;
      this.page.time = undefined;
      this.page.profileImage = undefined;
      this.page.image = undefined;
      this.page.showImage = false;
      bh = this.sd_H299LlXOjbeNbUX2(bh);
      //appendnew_next_sd_j1Up3S7Lu7uXeilp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j1Up3S7Lu7uXeilp');
    }
  }

  sd_H299LlXOjbeNbUX2(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_72Ms36Z0Eb1BOYML(bh);
      //appendnew_next_sd_H299LlXOjbeNbUX2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H299LlXOjbeNbUX2');
    }
  }

  sd_72Ms36Z0Eb1BOYML(bh) {
    try {
      const page = this.page;
      let userDataString = sessionStorage.getItem('userLoan');

      let userData = JSON.parse(userDataString || '[]');
      page.userData = userData;
      page.userData.interestRate = 13;

      console.log('recived', page.userData);

      page.profileImage =
        page.ssdUrl + `download-picture/${page.userData.email}`;

      //appendnew_next_sd_72Ms36Z0Eb1BOYML
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_72Ms36Z0Eb1BOYML');
    }
  }

  sd_ssfyh38o8yOK0Gme(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_EF4Oha4eQkQI0Lm9(bh);
      //appendnew_next_sd_ssfyh38o8yOK0Gme
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ssfyh38o8yOK0Gme');
    }
  }

  sd_EF4Oha4eQkQI0Lm9(bh) {
    try {
      const page = this.page;
      page.update_ = true;
      page.userData.date = new Date();
      page.userData.comeFrom = 'Loan';
      bh.url = page.ssdUrl + 'update-loan';
      bh.collection = 'loans';

      bh = this.sd_R58AMsRVn4rtPf3y(bh);
      //appendnew_next_sd_EF4Oha4eQkQI0Lm9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EF4Oha4eQkQI0Lm9');
    }
  }

  sd_R58AMsRVn4rtPf3y(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_qOSoJ8UqSZhdqf4b(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R58AMsRVn4rtPf3y');
    }
  }

  async sd_qOSoJ8UqSZhdqf4b(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.userData,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_YEqgpwm13ln3udN7(bh);
      //appendnew_next_sd_qOSoJ8UqSZhdqf4b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qOSoJ8UqSZhdqf4b');
    }
  }

  sd_YEqgpwm13ln3udN7(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('User status update', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_48CKw2af704RvPyl(bh);
      //appendnew_next_sd_YEqgpwm13ln3udN7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YEqgpwm13ln3udN7');
    }
  }

  async sd_48CKw2af704RvPyl(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/Loan management');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_48CKw2af704RvPyl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_48CKw2af704RvPyl');
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
  //appendnew_flow_selectedLoanComponent_Catch
}
