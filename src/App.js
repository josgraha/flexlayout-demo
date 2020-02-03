import React from "react";
import FlexLayout from "flexlayout-react";

import "flexlayout-react/style/light.css";

const json = {
  global: {
    tabSetEnableTabStrip: false,
    tabEnableClose: false
  },
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 50,
        selected: 0,
        children: [
          {
            type: "tab",
            name: "One",
            component: "text"
          }
        ]
      },
      {
        type: "tabset",
        weight: 50,
        selected: 0,
        children: [
          {
            type: "tab",
            name: "Two",
            component: "text"
          }
        ]
      }
    ]
  }
};

function factory(node) {
  const component = node.getComponent();
  if (component === "text") {
    return <div className="panel">Panel {node.getName()}</div>;
  }
  return null;
}

export default function App() {
  const model = FlexLayout.Model.fromJson(json);
  model.setOnAllowDrop(false);

  return <FlexLayout.Layout model={model} factory={factory} />;
}
