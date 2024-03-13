const Node = {
  "id": "36f49e6bcb4988c7",
  "type": "change",
  "z": "bd0288d62c2263f6",
  "name": "Metric (Time)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": $millis(),\t    \"labels\": {\t        \"sensor\": data.id\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1410,
  "y": 1360,
  "wires": [
    [
      "b5efb5cbaedf2270"
    ]
  ]
}

module.exports = Node;