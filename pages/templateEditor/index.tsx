import { FC } from 'react'

import { useAppSelector } from 'store'
import CustomImage from 'components/customImage/CustomImage'

import S from './index.module.scss'

const TemplateEditor: FC = () => {
  const { selected } = useAppSelector((state) => state.templateReducer)

  return (
    <div className={S.templateEditor}>
      <aside className={S.sidePanel}>
        <label htmlFor="title">
          Title Text
          <input name="title" type="text" />
        </label>
      </aside>
      <div className={S.imageContainer}>
        <CustomImage
          className={S.image}
          src={selected}
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}

export default TemplateEditor
