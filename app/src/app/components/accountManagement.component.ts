// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-accountManagement',
  templateUrl: './accountManagement.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class accountManagementComponent implements AfterViewInit {
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
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
      this.sd_6r7qmumVVkInGdV9(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6r7qmumVVkInGdV9(bh) {
    try {
      bh = this.sd_fDHN0mNPVi1zaQ6s(bh);
      //appendnew_next_sd_6r7qmumVVkInGdV9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6r7qmumVVkInGdV9');
    }
  }

  selectedRow(row: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row };
      bh.local = {};
      bh = this.sd_QIEh3TtuD6YXjx8j(bh);
      //appendnew_next_selectedRow
      return bh.input.row;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CkQ2jRDyupuM2qfC');
    }
  }
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_2(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0oIRNskh5autPNqN');
    }
  }

  getPicute(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WRHCaMdR1UFbxZ23(bh);
      //appendnew_next_getPicute
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ofk9GBQWEkXXhPZr');
    }
  }
  //appendnew_flow_accountManagementComponent_start

  sd_fDHN0mNPVi1zaQ6s(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_HZ79ko57J8XRbUn2(bh);
      //appendnew_next_sd_fDHN0mNPVi1zaQ6s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fDHN0mNPVi1zaQ6s');
    }
  }

  sd_HZ79ko57J8XRbUn2(bh) {
    try {
      this.page.dataArray = 'http://localhost:8081/api/get-customers';
      this.page.profileImage = undefined;
      this.page.image = undefined;
      this.page.showImage = false;
      this.page.email = undefined;
      this.page.pictureUrl = 'http://localhost:8081/api/download-picture/';
      bh = this.sd_rE7SXZMEPMi9S8s3(bh);
      //appendnew_next_sd_HZ79ko57J8XRbUn2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HZ79ko57J8XRbUn2');
    }
  }

  async sd_rE7SXZMEPMi9S8s3(bh) {
    try {
      let requestOptions = {
        url: this.page.dataArray,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_KfAwo11d4CCCFiA3(bh);
      //appendnew_next_sd_rE7SXZMEPMi9S8s3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rE7SXZMEPMi9S8s3');
    }
  }

  sd_KfAwo11d4CCCFiA3(bh) {
    try {
      const page = this.page;
      page.result = page.result.filter((res) => {
        if (res.fullName) {
          res.firstName = res.fullName.split(' ')[0];
          res.lastName =
            res.fullName.split(' ')[res.fullName.split(' ').length - 1];
          return res;
        } else {
          return res;
        }
      });

      bh.local.dataSource = new MatTableDataSource(page.result);

      bh = this.sd_7up3TRSLj4LZG2JP(bh);
      //appendnew_next_sd_KfAwo11d4CCCFiA3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KfAwo11d4CCCFiA3');
    }
  }

  sd_7up3TRSLj4LZG2JP(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      bh = this.sd_of9VHXkqb0lWWmeW(bh);
      //appendnew_next_sd_7up3TRSLj4LZG2JP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7up3TRSLj4LZG2JP');
    }
  }

  sd_of9VHXkqb0lWWmeW(bh) {
    try {
      let outputVariables = this.getPicute();

      //appendnew_next_sd_of9VHXkqb0lWWmeW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_of9VHXkqb0lWWmeW');
    }
  }

  sd_QIEh3TtuD6YXjx8j(bh) {
    try {
      const page = this.page;
      page.user = bh.input.row;
      page.router.navigate(['/home/Selected Account']);
      bh = this.sd_HGurTGh0PaCNeEsH(bh);
      //appendnew_next_sd_QIEh3TtuD6YXjx8j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QIEh3TtuD6YXjx8j');
    }
  }

  sd_HGurTGh0PaCNeEsH(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.user));
      //appendnew_next_sd_HGurTGh0PaCNeEsH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HGurTGh0PaCNeEsH');
    }
  }

  sd_xKCCTWKzvgDN0rx7_2(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_2(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oIpHpgW0jwD4qfkt');
    }
  }

  sd_2VNGqvcKee34lvOz_2(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y5CBJBcbFQWHNuoZ');
    }
  }

  sd_WRHCaMdR1UFbxZ23(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_ak5aJhC0PMJ8xPez(bh);
      //appendnew_next_sd_WRHCaMdR1UFbxZ23
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WRHCaMdR1UFbxZ23');
    }
  }

  sd_ak5aJhC0PMJ8xPez(bh) {
    try {
      const page = this.page;

      bh.url = page.ssdUrl + `download-picture/${page.result[0].email}`;
      // page.profileImage = page.ssdUrl + `download-picture/${page.result.email}`

      console.log('page.result', page.result);
      bh = this.sd_YYVX8PDfobDhFO1r(bh);
      //appendnew_next_sd_ak5aJhC0PMJ8xPez
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ak5aJhC0PMJ8xPez');
    }
  }

  async sd_YYVX8PDfobDhFO1r(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.result.email,
      };
      this.page.resultPicture = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_YYVX8PDfobDhFO1r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YYVX8PDfobDhFO1r');
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
  //appendnew_flow_accountManagementComponent_Catch
}
