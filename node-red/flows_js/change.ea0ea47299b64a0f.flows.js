const Node = {
  "id": "ea0ea47299b64a0f",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Opsætning af datasæt",
  "rules": [
    {
      "t": "set",
      "p": "maaler",
      "pt": "msg",
      "to": "{\t   \"navn\": \"emu-sensor_0f65\",\t   \"installationsnummer\": \"\",\t   \"nummer\": \"emu-sensor_0f65\",\t   \"energiartskode\": 1\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "maalepunkter",
      "pt": "msg",
      "to": "[\t    {\t        \"title\": \"Energi\",\t        \"key\": \"Active_Energy_Import_T1\",\t        \"type\": \"Wh\",\t        \"artskode\": 1,\t        \"typekode\": 2\t    }\t]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 360,
  "y": 900,
  "wires": [
    [
      "0b7a49d35222c64e"
    ]
  ]
}

module.exports = Node;