import React from 'react'

export default class ReponsiveImage extends React.Component {
  render () {
    const = {
      image_mobile,
      image
    } = this.props

    return (
      <picture>
          <source srcset={image_mobile} media="(max-width: 768px)" />
          <source srcset={image} />
          <img srcset={image} />
      </picture>
    )
  }
}
