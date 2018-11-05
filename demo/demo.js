import { React, Inferno, Component } from '../src/infact'

import Map from 'pigeon-maps/infact'
import Draggable from 'pigeon-draggable'

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
            onDragEnd={(anchor) => this.setState({ dragAnchor: anchor })}
            style={{ clipPath: 'polygon(100% 0, 83% 0, 79% 15%, 0 68%, 0 78%, 39% 84%, 43% 96%, 61% 100%, 79% 90%, 69% 84%, 88% 71%, 100% 15%)' }}>
            <img
              src={pigeonSvg}
              width={100}
              height={95} />
          </Draggable>
        </Map>
        <div>
          The pigeon is sitting at {Math.round(this.state.dragAnchor[0] * 10000) / 10000}, {Math.round(this.state.dragAnchor[1] * 10000) / 10000}
        </div>
      </div>
    )
  }
}
