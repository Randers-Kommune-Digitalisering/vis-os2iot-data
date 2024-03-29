const Node = {
  "id": "5575a81b81c9757e",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Konvertering \\n til CSV",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t    $separator := \";\";\t    $linebreak := \"\\r\\n\";\t    \t    [\t        header @ $col . [ $col.value & $separator ]\t        ~> $join() ,\t\t        body @ $row . [[ $row @ $col . [ $col.value & $separator ] ] ~> $join() ]\t    ]\t    ~> $join($linebreak)\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 1380,
  "wires": [
    [
      "53b5ab5c51d68858",
      "608fa82e404a9071"
    ]
  ]
}

module.exports = Node;