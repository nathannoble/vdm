import React, { Component } from "react";

import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const uiSchema =  {
    done: {
      "ui:widget": "radio" // could also be "select"
    }
  };

// const schema = {
//     type: "object",
//     properties: {
//       foo: {
//         type: "object",
//         properties: {
//           bar: {type: "string"}
//         }
//       },
//       baz: {
//         type: "array",
//         items: {
//           type: "object",
//           properties: {
//             description: {
//               "type": "string"
//             }
//           }
//         }
//       }
//     }
//   }

// const uiSchema = {
//     foo: {
//       bar: {
//         "ui:widget": "textarea"
//       },
//     },
//     baz: {
//       // note the "items" for an array
//       items: {
//         description: {
//           "ui:widget": "textarea"
//         }
//       }
//     }
//   }

const log = (type) => console.log.bind(console, type);

class PropertyPage extends Component{
    render(){
        return (
            <div>
                <Form schema={schema}
                uiSchema={uiSchema}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                onError={log("errors")} />
            </div>
        )
    }
      
}

export default PropertyPage