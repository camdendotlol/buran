import React from 'react'
import { Stage, Layer, Star } from 'react-konva'

interface ChartCanvasProps {
  height: number,
  width: number
}

const ChartCanvas: React.FC<ChartCanvasProps> = (props) => {
  return (
    <Stage
      height={props.height}
      width={props.width}
    >
        <Layer>
          <Star
            numPoints={3}
            innerRadius={100}
            outerRadius={100}
            x={100}
            y={100}
            draggable
            fill='#777777'
          />
        </Layer>
    </Stage>
  )
}

export default ChartCanvas
