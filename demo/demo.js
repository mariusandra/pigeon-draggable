import { React, Inferno, Component } from '../src/infact'

import Map from 'pigeon-maps/infact'
import Draggable from 'pigeon-draggable'

import pigeonSvg from './pigeon.svg'

const locations = {
  "Iceland": {"center":[59.87637580063806,16.25089921561684],"zoom":3.004015716849884,"dragAnchor":[65.10368655246947,-18.612459647449725]},
  "Paris": {"center":[50.1102,3.1506],"zoom":6,"dragAnchor":[48.8565,2.3475]}
}

export default class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = Object.assign({}, locations['Paris'], {
      location: 'Paris'
    })
  }

  render () {
    return (
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: 600 }}>
        <div style={{ marginBottom: 20, marginTop: 20 }}>
          {this.state.location
            ? `There is a giant pigeon sitting on top of ${this.state.location}! Quickly! Drag it away!`
            : 'Great work you wonderful person, you!'}
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
            onDragEnd={(anchor) => {
              this.setState({ dragAnchor: anchor, location: null })
            }}
            style={{ clipPath: 'polygon(100% 0, 83% 0, 79% 15%, 0 68%, 0 78%, 39% 84%, 43% 96%, 61% 100%, 79% 90%, 69% 84%, 88% 71%, 100% 15%)' }}>
            <img
              src={pigeonSvg}
              width={100}
              height={95} />
          </Draggable>
        </Map>
        <div style={{ marginBottom: 20 }}>
          {'Visit next: '}
          {Object.keys(locations).map(location => (
            <button onClick={() => {
              this.setState({
                ...locations[location],
                location
              })
            }}>
              {location}
            </button>
          ))}
        </div>
        <code style={{ display: 'block', marginTop: 50, color: '#888' }}>
          {JSON.stringify({
            center: this.state.center,
            zoom: this.state.zoom,
            dragAnchor: this.state.dragAnchor
          })}
        </code>
      </div>
    )
  }
}
