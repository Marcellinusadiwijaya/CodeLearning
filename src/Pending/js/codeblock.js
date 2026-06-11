export const codeblock = [
  {
    id: 1,
    label: "When Run Clicked",
    type: "event",
    action: "start",
  },
  {
    id: 2,
    label: "Move 10 Steps",
    type: "action",
    action: "move",
    value: 10,
  },
  {
    id: 3,
    label: "Turn Right",
    type: "action",
    action: "turn",
    value: 15,
  },
  {
    id: 4,
    label: "If Condition",
    type: "logic",
    action: "if",
    condition: true, // sementara boolean
  },
];
