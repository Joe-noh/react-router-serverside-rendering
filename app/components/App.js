import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="css/app.css" />
        </head>
        <body>
          <header>
            <h1>App</h1>
          </header>
          <div>{this.props.children}</div>
        </body>
      </html>
    );
  }
}
