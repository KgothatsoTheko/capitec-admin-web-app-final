// _neu_generated_code__dont_modify_directly_
export class Utility {

    generateUUID() {
      return `${this.__s4()}${this.__s4()}-${this.__s4()}-${this.__s4()}-${this.__s4()}-${this.__s4()}${this.__s4()}${this.__s4()}`;
    }

    __s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  }
