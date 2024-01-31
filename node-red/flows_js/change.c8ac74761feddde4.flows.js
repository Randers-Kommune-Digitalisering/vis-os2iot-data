const Node = {
  "id": "c8ac74761feddde4",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Hent params",
  "rules": [
    {
      "t": "set",
      "p": "sensorId",
      "pt": "msg",
      "to": "req.params.sensor",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "sensorId",
      "pt": "msg",
      "to": "sensorId ~> $replace(\"-\", \"_\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "format",
      "pt": "msg",
      "to": "req.params.format",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 340,
  "wires": [
    [
      "98b198f1405b691e"
    ]
  ]
}

module.exports = Node;