const Node = {
  "id": "eb8510ce27f08ff5",
  "type": "switch",
  "z": "6f89a22d2f227f45",
  "name": "Kontroller last_obs",
  "property": "payload[0].last_observation",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nnull"
    },
    {
      "t": "null"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 210,
  "y": 1180,
  "wires": [
    [
      "995915c0ce51b1bf"
    ],
    [
      "88bbb7b21b2b99af"
    ]
  ]
}

module.exports = Node;