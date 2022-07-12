import { useRouter } from 'next/router'

import { dehydrate, QueryClient } from 'react-query'
import { useProfile } from '../../hooks/useProfile'
import { getProfileData } from '../../services'

import { UserProfile } from '../../components/userProfile'
import { ProfileSkeleton, Skeleton } from '../../components/ui/skeleton'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'

function Profile() {
  const {
    query: { id: username },
  } = useRouter()
  const { data, isLoading, error }: useProfileProps = useProfile(username)

  if (isLoading) {
    return (
      <>
        <ProfileSkeleton />
        <div className="flex flex-col sm:flex-row space-x-3 justify-between">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </>
    )
  }

  if (error) {
    toast.error(`${error.message}`, {
      duration: 7000,
      position: 'bottom-center',
    })
  }

  return (
    <div className="py-8">
      <Toaster />
      {error ? (
        <div className="w-full h-[500px] flex flex-col items-center justify-center">
          {' '}
          <h1 className="mb-6 text-xl">{error.message}</h1>
          <Link href="/">
            <button className="px-4 py-2 text-sm bg-black text-slate-50 rounded-lg">
              back to home
            </button>
          </Link>
        </div>
      ) : (
        <UserProfile user={data} />
      )}
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
