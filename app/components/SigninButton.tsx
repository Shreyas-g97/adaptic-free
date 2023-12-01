'use client';

import {useSession} from 'next-auth/react'
import {signOut} from 'next-auth/react'
import {signIn} from 'next-auth/react'

const SigninButton = () => {
    const {data: session} = useSession()

    if (session && session.user) {
        console.log(session)
        return (
            <div className='flex gap-4 ml-auto'>
                <div className='flex items-center gap-2'>
                    <img
                        src={session.user.image ?? ''}
                        alt={session.user.name + "'s avatar" ?? ''}
                        className='w-8 h-8 rounded-full'
                    />
                    <span className='text-sm font-semibold'>{session.user.name}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className='px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700'
                >
                    Sign out
                </button>
            </div>
        )
    }
    return (
        <button
            onClick={() => signIn()}
            className='px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700'
        >
            Sign in
        </button>
    )
}

export default SigninButton