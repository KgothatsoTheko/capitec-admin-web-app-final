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
  selector: 'bh-Support',
  templateUrl: './Support.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class SupportComponent {
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
      this.sd_giFlQaukemdmmLNI(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_giFlQaukemdmmLNI(bh) {
    try {
      bh = this.sd_p2hWX18w0WHhAySD(bh);
      //appendnew_next_sd_giFlQaukemdmmLNI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_giFlQaukemdmmLNI');
    }
  }

  sendTicket(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9z1LpTz8pK2Z1toT(bh);
      //appendnew_next_sendTicket
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NvLevMUweWKjhMl8');
    }
  }
  //appendnew_flow_SupportComponent_start

  sd_p2hWX18w0WHhAySD(bh) {
    try {
      this.page.submit = false;
      this.page.ticket = undefined;
      //appendnew_next_sd_p2hWX18w0WHhAySD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p2hWX18w0WHhAySD');
    }
  }

  sd_9z1LpTz8pK2Z1toT(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_KtzrkgaiP8juSPwP(bh);
      //appendnew_next_sd_9z1LpTz8pK2Z1toT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9z1LpTz8pK2Z1toT');
    }
  }

  sd_KtzrkgaiP8juSPwP(bh) {
    try {
      const page = this.page;
      bh.sumbit = true;
      bh.url = bh.ssdUrl + 'ticket';

      // page.loader = true;
      // console.log(bh.input.form)
      bh = this.sd_6jYGDl18iA224wPR(bh);
      //appendnew_next_sd_KtzrkgaiP8juSPwP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KtzrkgaiP8juSPwP');
    }
  }

  async sd_6jYGDl18iA224wPR(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          this.page.ticket,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_e1xT4wGIE7TScJuX(bh);
      } else {
        bh = await this.sd_9PCHjpaC9Y43DCfy(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6jYGDl18iA224wPR');
    }
  }

  async sd_e1xT4wGIE7TScJuX(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.ticket,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_PLqGm5rhTK3dj9P6(bh);
      //appendnew_next_sd_e1xT4wGIE7TScJuX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e1xT4wGIE7TScJuX');
    }
  }

  sd_PLqGm5rhTK3dj9P6(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Ticket has been sent to support', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_va7TLJILu5919Aor(bh);
      //appendnew_next_sd_PLqGm5rhTK3dj9P6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PLqGm5rhTK3dj9P6');
    }
  }

  async sd_va7TLJILu5919Aor(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_va7TLJILu5919Aor
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_va7TLJILu5919Aor');
    }
  }

  sd_9PCHjpaC9Y43DCfy(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Ticket is empty', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_9PCHjpaC9Y43DCfy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9PCHjpaC9Y43DCfy');
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
  //appendnew_flow_SupportComponent_Catch
}
