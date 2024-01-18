import { BaseEntity, BeforeInsert, Entity, Prop, PropType } from '@casejs/case'

import slugify from 'slugify'

@Entity()
export class Applet extends BaseEntity {
  @Prop()
  name: string

  @Prop({
    options: {
      isHiddenInAdminCreateEdit: true
    }
  })
  slug: string

  @Prop({
    type: PropType.Textarea
  })
  description: string

  @Prop({
    type: PropType.Image
  })
  screenshot: { large: string; thumbnail: string }

  @Prop({
    type: PropType.Link
  })
  githubLink: string

  @BeforeInsert()
  setSlug() {
    this.slug = slugify(this.name, {
      lower: true,
      strict: true
    })
  }
}
