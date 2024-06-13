// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-selectedAccount',
  templateUrl: './selectedAccount.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class selectedAccountComponent {
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
      this.sd_ywzz9ome4ipvMLn4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ywzz9ome4ipvMLn4(bh) {
    try {
      bh = this.sd_r0NBfpD9TAbJxxpR(bh);
      //appendnew_next_sd_ywzz9ome4ipvMLn4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywzz9ome4ipvMLn4');
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
      bh = this.sd_hlyQvbb4MWnGm656(bh);
      //appendnew_next_update
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JYu28XuAYGu1EOfQ');
    }
  }

  getDocId(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9ImWXwHwlNMRhfE8(bh);
      //appendnew_next_getDocId
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K3u7M8kehxbDoBjf');
    }
  }

  disable(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_SBptohUjPXKZRm5S(bh);
      //appendnew_next_disable
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zVQThDpovVigGhjw');
    }
  }

  getDocAddress(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_oqp24qj11QzyCeaU(bh);
      //appendnew_next_getDocAddress
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eZd6QxMBhnbMcqXf');
    }
  }
  //appendnew_flow_selectedAccountComponent_start

  sd_r0NBfpD9TAbJxxpR(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_Fv3qmbMaRPtyBEe3(bh);
      //appendnew_next_sd_r0NBfpD9TAbJxxpR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r0NBfpD9TAbJxxpR');
    }
  }

  sd_Fv3qmbMaRPtyBEe3(bh) {
    try {
      this.page.sanitizer = this.__page_injector__.get(DomSanitizer);
      bh = this.sd_PusFvhk8A8TLr0It(bh);
      //appendnew_next_sd_Fv3qmbMaRPtyBEe3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fv3qmbMaRPtyBEe3');
    }
  }

  sd_PusFvhk8A8TLr0It(bh) {
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
      this.page.isUpdated = false;
      this.page.image = undefined;
      this.page.showImage = false;
      this.page.routeData = undefined;
      this.page.profileImage = undefined;
      bh = this.sd_g1aU6GcFdfmFLfL3(bh);
      //appendnew_next_sd_PusFvhk8A8TLr0It
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PusFvhk8A8TLr0It');
    }
  }

  sd_g1aU6GcFdfmFLfL3(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_IkUSiGaxwOxOMbuB(bh);
      //appendnew_next_sd_g1aU6GcFdfmFLfL3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g1aU6GcFdfmFLfL3');
    }
  }

  sd_IkUSiGaxwOxOMbuB(bh) {
    try {
      const page = this.page;
      let userDataString = sessionStorage.getItem('user');

      let userData = JSON.parse(userDataString || '[]');

      page.userData = userData;

      page.profileImage =
        page.ssdUrl + `download-picture/${page.userData.email}`;
      console.log('Profile image: ', page.profileImage);
      //appendnew_next_sd_IkUSiGaxwOxOMbuB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IkUSiGaxwOxOMbuB');
    }
  }

  sd_hlyQvbb4MWnGm656(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_t0WrKccwRUxUgDz2(bh);
      //appendnew_next_sd_hlyQvbb4MWnGm656
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hlyQvbb4MWnGm656');
    }
  }

  sd_t0WrKccwRUxUgDz2(bh) {
    try {
      const page = this.page;
      page.update_ = true;
      page.isUpdated = true;
      page.userData.date = new Date();
      page.userData.comeFrom = 'Account';
      page.userData.isUpdated = page.isUpdated;
      bh.url = page.ssdUrl + 'update-admin';
      bh.collection = 'users';

      delete page.userData.firstName;
      delete page.userData.lastName;

      bh = this.sd_F7pMRSznh0ePoEDI(bh);
      //appendnew_next_sd_t0WrKccwRUxUgDz2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t0WrKccwRUxUgDz2');
    }
  }

  sd_F7pMRSznh0ePoEDI(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ZGmTZ5vfJULOXQ9G(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F7pMRSznh0ePoEDI');
    }
  }

  async sd_ZGmTZ5vfJULOXQ9G(bh) {
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
      bh = this.sd_TCMYWfYnqGAdFa9j(bh);
      //appendnew_next_sd_ZGmTZ5vfJULOXQ9G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZGmTZ5vfJULOXQ9G');
    }
  }

  sd_TCMYWfYnqGAdFa9j(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('User status update', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_qZOHqHvyD1ikeojM(bh);
      //appendnew_next_sd_TCMYWfYnqGAdFa9j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TCMYWfYnqGAdFa9j');
    }
  }

  async sd_qZOHqHvyD1ikeojM(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/Account Management');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_qZOHqHvyD1ikeojM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qZOHqHvyD1ikeojM');
    }
  }

  sd_9ImWXwHwlNMRhfE8(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_lPw34e7qulELufJc(bh);
      //appendnew_next_sd_9ImWXwHwlNMRhfE8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9ImWXwHwlNMRhfE8');
    }
  }

  sd_lPw34e7qulELufJc(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + `download_ID/${page.userData.email}`;
      page.image = page.sanitizer.bypassSecurityTrustHtml(bh.url);

      console.log(bh.url);

      page.showImage = true;

      window.open('/file', '_blank');
      //appendnew_next_sd_lPw34e7qulELufJc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lPw34e7qulELufJc');
    }
  }

  sd_SBptohUjPXKZRm5S(bh) {
    try {
      const page = this.page;
      if (page.userData.status == 'pending') {
        page.disabled = true;
      } else {
        page.disabled = false;
      }
      //appendnew_next_sd_SBptohUjPXKZRm5S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SBptohUjPXKZRm5S');
    }
  }

  sd_oqp24qj11QzyCeaU(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_6FwgnIhqGRYao15L(bh);
      //appendnew_next_sd_oqp24qj11QzyCeaU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oqp24qj11QzyCeaU');
    }
  }

  sd_6FwgnIhqGRYao15L(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + `download-residence/${page.userData.email}`;
      page.image = page.sanitizer.bypassSecurityTrustHtml(bh.url);

      console.log(bh.url);

      page.showImage = true;

      window.open('/open_proof', '_blank');
      //appendnew_next_sd_6FwgnIhqGRYao15L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6FwgnIhqGRYao15L');
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
  //appendnew_flow_selectedAccountComponent_Catch
}
