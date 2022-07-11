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

type userProps = {
  user?: {
    bio?: string
    downloads?: number
    first_name?: string
    for_hire?: boolean
    id?: string
    instagram_username?: string
    last_name?: string
    links?: {
      self?: string
      html?: string
      photos?: string
      likes?: 'https://api.unsplash.com/users/ajeetmestry/likes'
      portfolio?: string
    }
    location?: string
    name?: string
    numeric_id?: number
    photos?: {}[]
    portfolio_url?: null | string
    profile_image?: { small?: string; medium?: string; large?: string }
    social?: {
      instagram_username?: string
      portfolio_url?: null | stirng
      twitter_username?: null | string
      paypal_email?: undefined | string
    }
    tags?: { custom?: Array; aggregated?: Array }
    total_collections?: number
    total_likes?: number
    total_photos?: number
    twitter_username?: null | string
    username?: string
  }
}

type tagProps = {
  ancestry: { type: object; category: object; subcategory: object }
  cover_photo: {
    id: string
    created_at: string
    updated_at: string
    promoted_at: string
    width: number
  }
  description: string
  meta_description: string
  meta_title: string
  subtitle: string
  title: string
  type: string
}

type photosProps = {
  blur_hash?: string
  created_at?: string
  id?: string
  updated_at?: string
  urls?: {
    full?: string
    raw?: string
    regular?: string
    small?: string
    small_s3?: string
    thumb?: string
  }
}
