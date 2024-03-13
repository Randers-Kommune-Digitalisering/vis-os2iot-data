const Node = {
  "id": "6b9a4e582b1e4da4",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "name": "Table names (new)",
  "rules": [
    {
      "t": "set",
      "p": "metadataTablename",
      "pt": "global",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "metadataTablename.maaler",
      "pt": "global",
      "to": "iot_device_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadataTablename.maalepunkt",
      "pt": "global",
      "to": "iot_metric_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadataTablename.lokation",
      "pt": "global",
      "to": "iot_location_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadataTablename.serviceprofile",
      "pt": "global",
      "to": "iot_serviceprofile_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadataTablename.decoder",
      "pt": "global",
      "to": "iot_decoder_metadata",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 80,
  "wires": [
    [
      "b90841aad1d610a5"
    ]
  ]
}

module.exports = Node;