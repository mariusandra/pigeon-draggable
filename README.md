# pigeon-draggable - Draggable Overlay component for pigeon-maps

This component creates overlays in pigeon-maps, which can then be dragged with touch or mouse events.

[![npm version](https://img.shields.io/npm/v/pigeon-draggable.svg)](https://www.npmjs.com/package/pigeon-draggable)

React demo: https://mariusandra.github.io/pigeon-draggable/

Inferno demo: https://mariusandra.github.io/pigeon-draggable/inferno/

Example: https://github.com/mariusandra/pigeon-draggable/blob/master/demo/demo.js

API: https://github.com/mariusandra/pigeon-draggable/blob/master/src/index.js

To use in your component:

```js
// default for React
import Draggable from 'pigeon-draggable'

// explicitly ask for the React version
import Draggable from 'pigeon-draggable/react'

// explicitly ask for the Inferno version
import Draggable from 'pigeon-draggable/inferno'

// choose the Inferno or React version based on BABEL_ENV
import Draggable from 'pigeon-draggable/infact'

// image in the overlay
import pigeon from './pigeon.jpg'

import pigeonSvg from './pigeon.svg'

export default class Demo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      center: [50.1102, 3.1506],
      zoom: 6,
      dragAnchor: [48.8565, 2.3475]
    }
  }

  render () {
    return (
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: 600 }}>
        <div style={{ marginBottom: 20 }}>
          There is a giant pigeon sitting on top of Paris!
          Quickly! Drag it away!
        </div>
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          onBoundsChanged={({ center, zoom }) => this.setState({ center, zoom })}
          defaultWidth={600}
          height={400}>
          <Draggable
            anchor={this.state.dragAnchor}
            offset={[60, 87]}
            onDragStart={() => console.log('dragging started')}
            onDragMove={(anchor) => console.log('dragging moving', anchor)}
            onDragEnd={(anchor) => this.setState({ dragAnchor: anchor })}
            style={{ clipPath: 'polygon(100% 0, 83% 0, 79% 15%, 0 68%, 0 78%, 39% 84%, 43% 96%, 61% 100%, 79% 90%, 69% 84%, 88% 71%, 100% 15%)' }}>
            <img
              src={pigeonSvg}
              width={100}
              height={95} />
          </Draggable>
        </Map>
        <div>
          The pigeon is sitting at {this.state.center[0]}, {this.state.center[1]}
        </div>
      </div>
    )
  }
}
```

Please note that this project is still rather young and currently binds 6 events per component. It works fine if you have just a few draggable components, but if you have hundresds, you might see big performance penalties.

If you wish to support such use cases, please help with a PR.
