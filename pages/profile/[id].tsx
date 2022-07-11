import { useRouter } from 'next/router'

import { dehydrate, QueryClient } from 'react-query'
import { useProfile } from '../../hooks/useProfile'
import { getProfileData } from '../../services'

import { UserProfile } from '../../components/userProfile'
import { ProfileSkeleton, Skeleton } from '../../components/ui/skeleton'

function Profile() {
  const {
    query: { id: username },
  } = useRouter()
  const { data, isLoading } = useProfile(username)

  if (isLoading) {
    return (
      <>
        <ProfileSkeleton />
        <div className="flex justify-between">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </>
    )
  }

  return (
    <div className="py-8">
      <UserProfile user={data} />
    </div>
  )
}

export const getServerSideProps = async ({ params }: any) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('profile', () => getProfileData(params?.id))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      params,
    },
  }
}

export default Profile
