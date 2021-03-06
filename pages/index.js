import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { LoginCredential } from 'container/LoginCredential'
import {
  getCsrfToken,
  getProviders,
  getSession,
  useSession
} from 'next-auth/react'
import { URL_CALLBACK, SIGN_OUT } from 'const/config'
import { Logo } from 'components/Logo'

export default function Home ({ providers = {}, csrfToken = null }) {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    session?.status === 'authenticated' && router.push(`${URL_CALLBACK}`)
  }, [session?.status])

  useEffect(() => {
    session?.status === 'unauthenticated' && router.push(`${SIGN_OUT}`)
  }, [session?.status])

  return (
    <main>
      <Logo login a='#000' innerB='#fff' />
      {providers |
         (session?.status === 'unauthenticated') |
         (session === null) &&
         Object.values(providers).map(provider => {
           return (
             <LoginCredential
               csrfToken={csrfToken}
               provider={provider}
               key={provider.name}
             />
           )
         })}
      <style jsx>
        {`
           main {
             display: flex;
             height: 100%;
             min-height: 95vh;
             margin: 0 auto;
             flex-direction: column;
             justify-content: center;
             align-items: center;
           }

           img {
             width: 270px;
             margin-bottom: 3rem;
           }
         `}
      </style>
    </main>
  )
}

Home.auth = false

export async function getServerSideProps (ctx) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(ctx)
  const session = await getSession(ctx)
  return {
    props: {
      providers,
      csrfToken,
      session
    }
  }
}
