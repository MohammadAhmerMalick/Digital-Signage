import { FC } from 'react'
import { uuid } from 'utils/utilsFunctions'

import CustomImage from '../customImage/CustomImage'

import S from './TemplateList.module.scss'

const TemplateList: FC = () => {
  return (
    <div className={S.templateList}>
      <div className={S.list}>
        {Array(8)
          .fill(0)
          .map((any, index) => (
            <div className={S.imageContainer} key={uuid()}>
              <CustomImage
                className={S.image}
                src={`/assets/images/${index + 1}.png`}
                width={500}
                height={500}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default TemplateList
