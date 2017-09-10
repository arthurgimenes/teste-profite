import React from 'react';
import PropTypes from 'prop-types';

const SlideShowImages = ({ banner }) => {
  const desktop = 'dist/src/images/banner/desktop/'
  const mobile = 'dist/src/images/banner/mobile/'

  const pathBannerDesktop = `${desktop}${banner}`
  const pathBannerMobile = `${mobile}${banner}`

  return (
    <picture className="slideShow__slide">
      <source
        media="(min-width: 1001px)"
        srcSet={pathBannerDesktop}
      />
      <source
        media="(min-width: 601px)"
        srcSet={pathBannerMobile}
      />
      <img src={pathBannerDesktop} />
    </picture>
  )
}

SlideShowImages.propTypes = {
  banner: PropTypes.string
};

export default SlideShowImages;
