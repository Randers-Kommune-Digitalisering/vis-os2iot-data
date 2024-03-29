const Node = {
  "id": "b20c1ca4f27ed7fb",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Opsætning af datasæt (Puls)",
  "rules": [
    {
      "t": "set",
      "p": "maaler",
      "pt": "msg",
      "to": "{\t   \"navn\": \"CF19 Puls\",\t   \"installationsnummer\": \"\",\t   \"nummer\": \"cf19_Adeunis\",\t   \"energiartskode\": 6\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "maalepunkter",
      "pt": "msg",
      "to": "[\t    {\t        \"title\": \"Gas\",\t        \"key\": \"Channel A\",\t        \"type\": \"m3\",\t        \"artskode\": 2,\t        \"typekode\": 1\t    }\t]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 140,
  "wires": [
    [
      "61eeecae2bf70623"
    ]
  ]
}

module.exports = Node;