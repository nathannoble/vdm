import React, { Component } from "react";

import Form from "react-jsonschema-form";

// const uiSchema =  {
//     done: {
//       "ui:widget": "radio" // could also be "select"
//     }
//   };

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

class PropertyPage extends Component {

    render() {
        const node = this.props.node;

        if (node == null) {
            return (
                <div></div>
            )
        }

        // Build the schema
        const schema = {
            title: node.text,
            type: "object",
            required: ["name"],
            properties: {
                id: { type: "string" },
                name: { type: "string" },
                itemType: { type: "string" },
                type: { type: "string" },
                class: { type: "string" },
                host: { type: "string" },
                path: { type: "string" },
                configName: { type: "string" },
            }
        };

        const formData = {
            name: node.name,
            id: node.id,
            itemType: node.itemType,
            type: node.type,
            class: node.data.config.clazz,
            host: node.data.config.host,
            path: node.data.config.path,
            configName: node.data.config.name,
        };

        return (
            <div>
                <Form schema={schema}
                    formData={formData}
                    onChange={log("changed")}
                    onSubmit={log("submitted")}
                    onError={log("errors")} />
            </div>
        )
    }

}

export default PropertyPage