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
  selector: 'bh-loanManagement',
  templateUrl: './loanManagement.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loanManagementComponent implements AfterViewInit {
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
      this.sd_98OB3yKjYCgQarsH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_98OB3yKjYCgQarsH(bh) {
    try {
      bh = this.sd_RDfAqbVudXw5QIZB(bh);
      //appendnew_next_sd_98OB3yKjYCgQarsH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_98OB3yKjYCgQarsH');
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
      bh = this.sd_cp51nYJledlKqY8f(bh);
      //appendnew_next_selectedRow
      return bh.input.row;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ONSQD6hfY6OrYfxB');
    }
  }
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SWtmuvSnszPBqn2w');
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
      bh = this.sd_FsVugZqlYo9xbau4(bh);
      //appendnew_next_getPicute
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OJFPkAnhr3RPztSP');
    }
  }
  //appendnew_flow_loanManagementComponent_start

  sd_RDfAqbVudXw5QIZB(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_hiqKaTtMWsdupDDk(bh);
      //appendnew_next_sd_RDfAqbVudXw5QIZB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RDfAqbVudXw5QIZB');
    }
  }

  sd_hiqKaTtMWsdupDDk(bh) {
    try {
      this.page.pictureUrl = 'http://localhost:8081/api/download-picture/';
      bh = this.sd_PcRtxjnphRGiS4RN(bh);
      //appendnew_next_sd_hiqKaTtMWsdupDDk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hiqKaTtMWsdupDDk');
    }
  }

  sd_PcRtxjnphRGiS4RN(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_l6BcaEy5SYxBnEvo(bh);
      //appendnew_next_sd_PcRtxjnphRGiS4RN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PcRtxjnphRGiS4RN');
    }
  }

  sd_l6BcaEy5SYxBnEvo(bh) {
    try {
      const page = this.page;
      bh.url = bh.url + 'get-loans';
      bh = this.sd_UytWztde1wEm86Jb(bh);
      //appendnew_next_sd_l6BcaEy5SYxBnEvo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l6BcaEy5SYxBnEvo');
    }
  }

  async sd_UytWztde1wEm86Jb(bh) {
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
      bh = this.sd_293CVRDbGTUuzejv(bh);
      //appendnew_next_sd_UytWztde1wEm86Jb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UytWztde1wEm86Jb');
    }
  }

  sd_293CVRDbGTUuzejv(bh) {
    try {
      const page = this.page; // page.loanResult.interestRate = 13.5
      page.loanResult = page.loanResult.filter((res) => {
        if (res.fullName) {
          res.firstName = res.fullName.split(' ')[0];
          res.lastName =
            res.fullName.split(' ')[res.fullName.split(' ').length - 1];
          return res;
        } else {
          return res;
        }
      });
      bh.local.dataSource = new MatTableDataSource(page.loanResult);
      bh = this.sd_OYUtQnmOwCjLj1ir(bh);
      //appendnew_next_sd_293CVRDbGTUuzejv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_293CVRDbGTUuzejv');
    }
  }

  sd_OYUtQnmOwCjLj1ir(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      bh = this.sd_5T0s6I7xXD9OhB1G(bh);
      //appendnew_next_sd_OYUtQnmOwCjLj1ir
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OYUtQnmOwCjLj1ir');
    }
  }

  sd_5T0s6I7xXD9OhB1G(bh) {
    try {
      let outputVariables = this.getPicute();

      //appendnew_next_sd_5T0s6I7xXD9OhB1G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5T0s6I7xXD9OhB1G');
    }
  }

  sd_cp51nYJledlKqY8f(bh) {
    try {
      const page = this.page;
      page.user = bh.input.row;

      console.log('loan user', page.user);
      page.router.navigate(['/home/Selected Loan']);
      bh = this.sd_7Wn8jGUwjkgLP2Hj(bh);
      //appendnew_next_sd_cp51nYJledlKqY8f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cp51nYJledlKqY8f');
    }
  }

  sd_7Wn8jGUwjkgLP2Hj(bh) {
    try {
      sessionStorage.setItem('userLoan', JSON.stringify(this.page.user));
      //appendnew_next_sd_7Wn8jGUwjkgLP2Hj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7Wn8jGUwjkgLP2Hj');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hGGHPBl3keWg9h5b');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mIfbYxPuiTq1KzlX');
    }
  }

  sd_FsVugZqlYo9xbau4(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_hoEjtrytezjSkMsp(bh);
      //appendnew_next_sd_FsVugZqlYo9xbau4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FsVugZqlYo9xbau4');
    }
  }

  sd_hoEjtrytezjSkMsp(bh) {
    try {
      const page = this.page;

      bh.url = page.ssdUrl + `download-picture/${page.result[0].email}`;
      // page.profileImage = page.ssdUrl + `download-picture/${page.result.email}`

      console.log('page.result', page.result);
      bh = this.sd_JNLRaRncA1zz8vYQ(bh);
      //appendnew_next_sd_hoEjtrytezjSkMsp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hoEjtrytezjSkMsp');
    }
  }

  async sd_JNLRaRncA1zz8vYQ(bh) {
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
      //appendnew_next_sd_JNLRaRncA1zz8vYQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JNLRaRncA1zz8vYQ');
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
  //appendnew_flow_loanManagementComponent_Catch
}
