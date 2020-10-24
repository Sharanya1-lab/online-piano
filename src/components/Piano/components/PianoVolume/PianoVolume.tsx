import React, { FunctionComponent } from 'react'

interface PianoVolumeProps {
  id: string
  handlePianoVolume: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void
  children?: React.ReactNode | React.ReactText
}

const PianoVolume: FunctionComponent<PianoVolumeProps> = (props) => {
  const { handlePianoVolume, children, id } = props

  return (
    <div className="piano-volumes-container">
      <button
        className="piano-volumes-button"
        id={id}
        onClick={handlePianoVolume}
      >
        {children}{' '}
      </button>
    </div>
  )
}

export default PianoVolume
