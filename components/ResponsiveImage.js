import React from 'react'

export default class ReponsiveImage extends React.Component {
  render () {
    const {
      image_mobile,
      image,
      dataIndex
    } = this.props

    return (
      <picture data-index={dataIndex}>
          <source srcSet={image_mobile} media="(max-width: 768px)" />
          <source srcSet={image} />
          <img srcSet={image} />
      </picture>
    )
  }
}
