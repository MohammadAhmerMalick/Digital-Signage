import { FC, useState } from 'react'

import { useAppSelector } from 'store'
import TemplateSVG1 from 'components/templates/TemplateSVG1'

import S from './index.module.scss'

const TemplateEditor: FC = () => {
  const { selected } = useAppSelector((state) => state.templateReducer)
  const [contact, setContact] = useState('')
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [offer, setOffer] = useState('')
  const [action, setAction] = useState('')
  const [link, setLink] = useState('')
  return (
    <div className={S.templateEditor}>
      <aside className={S.sidePanel}>
        <label htmlFor="contact">
          contact
          <input
            name="contact"
            type="text"
            value={contact}
            onChange={({ target }) => setContact(target.value)}
          />
        </label>
        <label htmlFor="title">
          title
          <input
            name="title"
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </label>
        <label htmlFor="subTitle">
          subTitle
          <input
            name="subTitle"
            type="text"
            value={subTitle}
            onChange={({ target }) => setSubTitle(target.value)}
          />
        </label>
        <label htmlFor="offer">
          offer
          <input
            name="offer"
            type="text"
            value={offer}
            onChange={({ target }) => setOffer(target.value)}
          />
        </label>
        <label htmlFor="action">
          action
          <input
            name="action"
            type="text"
            value={action}
            onChange={({ target }) => setAction(target.value)}
          />
        </label>
        <label htmlFor="link">
          link
          <input
            name="link"
            type="text"
            value={link}
            onChange={({ target }) => setLink(target.value)}
          />
        </label>
      </aside>
      <div className={S.imageContainer}>
        <img className={S.productImag} src="/assets/images/products/1.png" />

        <TemplateSVG1
          contact={contact || '12345678910'}
          title={title || 'DELICIOUS'}
          subTitle={subTitle || 'FOOD THIS WEEKEND ONLY'}
          offer={offer || '50%'}
          action={action || 'Order Now'}
          link={link || 'www.website.com'}
        />
      </div>
    </div>
  )
}

export default TemplateEditor
