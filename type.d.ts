type dataProps = {
  data?: {
    alt_description?: null | string
    blur_hash?: string
    categories?: []
    color?: string
    created_at?: string
    current_user_collections?: []
    description?: string
    height?: number
    id?: string
    liked_by_user?: boolean
    likes?: number
    links?: {
      self?: string
      html?: string
      download?: string
      download_location?: string
    }
    promoted_at?: string
    sponsorship?: null | {}
    topic_submissions?: {}
    updated_at?: string
    urls?: { raw?: string }
    user?: {
      id?: string
      updated_at?: string
      username?: string
      name?: string
      first_name?: string
    }
    width?: number
  }[]
}

type itemProps = {
  alt_description?: null | string
  blur_hash?: string
  categories?: []
  color?: string
  created_at?: string
  current_user_collections?: []
  description?: string
  height?: number
  id?: string
  liked_by_user?: boolean
  likes?: number
  links?: {
    self?: string
    html?: string
    download?: string
    download_location?: string
  }
  promoted_at?: string
  sponsorship?: null | {}
  topic_submissions?: {}
  updated_at?: string
  urls?: { raw?: string; medium?: string }
  user?: {
    id?: string
    updated_at?: string
    username?: string
    name?: string
    first_name?: string
  }
  width?: number
}
