import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
  <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
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
        <PatientForm/>
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 MedEvolv
          </p>
          <Link href='/?admin=true' className="text-green-500">
            Admin
          </Link>
        </div>
      </div>
    </section>
    <Image
    src='/assets/images/onboarding-img.png'
    height={1000}
    width={1000}
    alt='patient'
    className='side-img max-w-[50%]'
    />
  </div>
  )
}
