/// <reference path="../../node.d.ts" />
/// <reference path="../../express.d.ts" />

/**
  *
  * config: { collection: 'components', db: 'exampledb' }
  *
 */

export module Module {

  export function jsonform(req: ExpressServerRequest, res: ExpressServerResponse) {


    console.log('Hi from Module.jsonform');


  };

}
