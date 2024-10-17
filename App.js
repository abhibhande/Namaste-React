import React from "react"
import ReactDOM from "react-dom/client"


const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"This is chaild 1 h1 tag from react"),
            React.createElement("h2",{},"This child 1 is h2 tag from react")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"This is child 2 h1 tag from react"),
            React.createElement("h2",{},"This is child 2 h2 tag from react")
        ]
    )]
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
