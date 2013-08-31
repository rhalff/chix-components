/// <reference path="../../node.d.ts" />
/// <reference path="../../express.d.ts" />

/**
  *
  * config: { collection: 'components', db: 'exampledb' }
  *
 */

export module Template {

  export function handlebars(req: ExpressServerRequest, res: ExpressServerResponse) {

    res.send('Hi from Template.handlebars');

  };

}
