import React, { Component } from "react";
import Form from "react-jsonschema-form";
import { Button} from 'react-bootstrap';
import './propertyPage.css'

const log = (type) => console.log.bind(console, type);

const onSubmit = ({ formData }) => {
    // Reformat to the spec
    var rawFilePayload = {
        RawFile: formData
    }

    console.log(rawFilePayload)
    // Temporarily put the request here
    fetch('http://localhost:4000/api/rawfile',
        {
            method: 'post',
            body: JSON.stringify(rawFilePayload)
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                alert(error)
            }
        )
}

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
            required: ["Id", "Name", "Location", "FileFormat", "Delimiter", "Status", "SourceID"],
            properties: {
                Id: { type: "string" },
                Name: { type: "string" },
                Description: { type: "string" },
                Location: { type: "string" },
                FileFormat: { type: "string" },
                Delimiter: { type: "string" },
                Status: { type: "string" },
                SourceID: { type: "string" },
            }
        };

        const formData = {
            Id: node.id,
            Name: node.name,
            Description: node.description,
            Location: node.data.config.path,
            FileFormat: node.itemType,
            Delimiter: ":",
            Status: "Active",
            SourceID: node.sourceID
        };

        return (
            <div>
                <Form schema={schema}
                    formData={formData}
                    onChange={log("changed")}
                    onSubmit={onSubmit}
                    onError={log("errors")} >
                    <Button bsStyle="primary" className={node.className} type="submit">Submit</Button>
                </Form>
            </div>
        )
    }

}

export default PropertyPage