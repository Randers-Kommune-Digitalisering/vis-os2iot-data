const Node = {
  "id": "66d62867209e2d82",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select alle devices",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 250,
  "y": 480,
  "wires": [
    [
      "0997bd3fd2b806e2"
    ]
  ]
}

Node.template = `
SELECT * FROM {{global.metadataTablename.maaler}} WHERE isTemplate = false
`

module.exports = Node;