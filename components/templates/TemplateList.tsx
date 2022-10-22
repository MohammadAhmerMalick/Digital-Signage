import { FC } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch } from 'store'
import { uuid } from 'utils/utilsFunctions'
import { updatetemplate } from 'store/slices/templateSlice'
import CustomImage from 'components/customImage/CustomImage'

import S from './TemplateList.module.scss'

const TemplateList: FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleSelectTemplate = (index: number) => {
    dispatch(updatetemplate(`/assets/images/${index + 1}.png`))
    router.push('/templateEditor')
  }

  return (
    <div className={S.templateList}>
      <div className={S.list}>
        {Array(8)
          .fill(0)
          .map((any, index) => (
            <div className={S.imageContainer} key={uuid()}>
              <CustomImage
                className={S.image}
                loader
                src={`/assets/images/${index + 1}.png`}
                onClick={() => handleSelectTemplate(index)}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default TemplateList
