// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_a0xrdEeKPIYaTwl1 from 'app/sd-services/shared'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(private sd_a0xrdEeKPIYaTwl1: sd_a0xrdEeKPIYaTwl1.shared) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
