import React from 'react'
import Image from "next/image"
import IconText from './IconText'
import CurlentBigLogo from "../../../public/logo/CurlentBig.png"
import CryptoGlobal  from "../../../public/icon/present/cryptoGlobal.png"
import HandsLove  from "../../../public/icon/present/handsLove.png"
import Chart  from "../../../public/icon/present/chart.png"
import DigitalInfrastructure  from "../../../public/icon/present/digitalInfrastructure.png"

const LandingBanner = () => {
  return (
    <div className='flex w-8/12 place-self-center mb-14'>
      
      {/* Why Curlent ? */}
      <div className='grid grid-cols-1'>
        {/* Header */}
        <h1 className='text-4xl font-bold flex  items-center space-x-2 w-full place-self-start'>
            <span className='mr-2'>
              Why 
            </span>
            <Image
                className='cursor-pointer'
                src={CurlentBigLogo}
                layout="intrinsic" objectFit="contain"
                width={150} height={150}
                onClick={() => router.push("/")}
            />
        </h1>

        {/* Body */}
        <div className='flex w-full justify-start items-start'>
          {reasons.map((reason,index) => (
            
            <IconText
              type={reason.type}
              icon={reason.icon}  
              title={reason.title}
              description={reason.description}
            />
            
          ))}
            
        </div>
      </div>


    </div>
  )
}

export default LandingBanner

let reasons = [
  {
    type:"image",
    icon:CryptoGlobal,
    title:"Receive Global payment",
    description:"Cryptocurrency is borderless technology so you can receive crypto payment from any customers around the world through the internet for your online busienss."
  },
  {
    type:"image",
    icon:Chart,
    title:"Reduce Financial Tasks",
    description:"We serve you financial tasks such as Acounting,Invoices and Data Analytics relate to your crypto transactions. We need to help you focus on your other business activities and reduces your crypto finance tasks."
  },
  {
    type:"image",
    icon:HandsLove,
    title:"Easy to use",
    description:"We build easy to use products for you to intergate to your online business on a few steps instead work for a month to complete crypto development tasks."
  },
  {
    type:"image",
    icon:DigitalInfrastructure,
    title:"Backcone of your crypto finance",
    description:"We need to be financial infastructure of your online business related to crypto financial tasks."
  }
]