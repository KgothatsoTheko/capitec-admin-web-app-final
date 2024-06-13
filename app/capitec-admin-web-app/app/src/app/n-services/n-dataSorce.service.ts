// _neu_generated_code__dont_modify_directly_
import { Injectable } from '@angular/core';

@Injectable()
export class NDataSourceService {
    getDataSource() {
        return fetch('constants/app.const.json')
            .then((response) => response.json())
            .then((result) => {
                window.neutrinos['dataSource'] = result['dataSource'];
                return result;
            });
    }
    
}
