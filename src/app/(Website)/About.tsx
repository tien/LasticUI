'use client'

import AboutCard from '@/components/card/AboutCard'

export default function About() {
  const features = [
    {
      title: 'One Marketplace, Multiple Solutions',
      description:
        'A shopping mall for L2s and Appchains, and a speculation market for the same resources. Unleash the potential of modular solutions with Lastic.',
    },
    {
      title: 'Protocol-Agnostic Flexibility',
      description:
        'Lastic leverages the best features of major networks to provide unparalleled service to builders and traders, optimizing costs, speeds, and efficiency.',
    },
    {
      title: 'Efficiency for Developers',
      description:
        'Lastic finds the most cost-efficient and fastest services, such as Data Availability and Co-Processing, tailored to builders’ specific needs.',
    },
    {
      title: 'A New Game for Traders',
      description:
        'With Lastic, traders get access to efficient pricing models and can engage in futures and options trading on necessary resources.',
    },
    {
      title: 'Best in-Class User Experience',
      description:
        'Lastic offers an interface that turns complexity into simplicity, providing minimal pairs for easy and confident decision-making.',
    },
    {
      title: 'Beyond Blockchains',
      description:
        'Lastic sees blockspace as a diverse class of commodities, each varying in quality, availability, and flexibility, aiming to service all aspects of the modular web3.',
    },
  ]

  return (
    <div className="overflow-hidden border-y border-gray-16">
      <div className="">
        <div className="mx-auto max-w-9xl py-14 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-center items-center gap-5 p-20">
            <div className="max-w-2xl">
              <h6 className="uppercase text-md text-pink-4 font-bold font-inter">For Traders</h6>
              <h1 className="text-5xl font-bold leading-tight font-syne">
                Speculate on Resources Needed by Builders
              </h1>
            </div>
            <p className="text-lg font-dm_sans text-gray-4">
              Looking for new opportunities and risks Seek platforms for predicting future demand
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-8">
            {features.map((feature, index) => (
              <AboutCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
