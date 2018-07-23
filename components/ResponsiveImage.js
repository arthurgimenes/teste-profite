import React from 'react'

export default class ReponsiveImage extends React.Component {
  render () {
    const {
      image_mobile,
      image,
      dataIndex
    } = this.props

    return (
      <div className={`responsive-image slide-${dataIndex}`} data-index={dataIndex}>
        <picture>
            <source srcSet={image_mobile} media="(max-width: 768px)" />
            <source srcSet={image} />
            <img srcSet={image} />
        </picture>
      </div>
    )
  }
}
