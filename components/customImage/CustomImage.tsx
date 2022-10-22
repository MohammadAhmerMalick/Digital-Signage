import Image from 'next/image'
import React, { FC, useState } from 'react'
import {
  CustomImageInterface,
  ImageNaturalDimensionInterface,
} from 'ts/interface'

const IMAGE_PLACEHOLDER = '/assets/imagePlaceholder.svg'

const CustomImage: FC<CustomImageInterface> = ({
  src,
  height,
  width,
  alt,
  placeholder,
  className,
  onClick,
}) => {
  const [imageSrc, setImageSrc] = useState(src || IMAGE_PLACEHOLDER)
  const [dimension, setDimension] = useState<ImageNaturalDimensionInterface>({
    naturalHeight: 0,
    naturalWidth: 0,
  })

  const handleSetDimension = (
    naturalDimension: ImageNaturalDimensionInterface
  ) => {
    setDimension({
      naturalHeight: naturalDimension.naturalHeight,
      naturalWidth: naturalDimension.naturalWidth,
    })
  }
  const loaderProp = () => {
    return `${imageSrc}?w=${width || dimension.naturalWidth}`
  }

  return (
    <Image
      src={imageSrc}
      height={height || dimension.naturalHeight}
      width={width || dimension.naturalWidth}
      alt={alt || 'Image'}
      className={className}
      onError={() => setImageSrc(placeholder || IMAGE_PLACEHOLDER)}
      onLoadingComplete={handleSetDimension}
      onClick={onClick}
      loader={loaderProp}
    />
  )
}

export default CustomImage
