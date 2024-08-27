import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'

const Register = async({params:{userId}}:SearchParamProps) => {
    const user=await getUser(userId)
  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container">
      <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
        <div className="flex">
        <Image
        src="/assets/icons/logo-icon.svg"
        height={1000}
        width={1000}
        alt='patient'
        className='mb-12 h-10 w-fit'
        />
        <h1 className="mt-1 ml-1 text-xl font-bold">MedEvolv</h1>
        </div>
        <RegisterForm user={user} />
          <p className="copyright py-12">
            © 2024 MedEvolv
          </p>
      </div>
    </section>
    <Image
    src='/assets/images/register-img.png'
    height={1000}
    width={1000}
    alt='patient'
    className='side-img max-w-[390px]'
    />
  </div>
  )
}

export default Register