import CreateRoot from 'components/CreateRoot'
import FAQ from 'components/FAQ'
import PageTitle from 'components/PageTitle'

export default function CreatePage() {
  return (
    <div className="flex flex-col">
      <PageTitle>
        Create an allowlist in seconds that works across web3
      </PageTitle>

      <CreateRoot />

      <div className="flex gap-3 sm:gap-4 text-base mt-24 items-center">
        <img
          src="/collablogos.png"
          alt="partner logos"
          className="w-[64px] sm:w-[72px]"
        />
        <div>
          An open source project from{' '}
          <PartnerLink href="https://mint.fun">mint.fun</PartnerLink>,{' '}
          <PartnerLink href="https://zora.co">Zora</PartnerLink>, and{' '}
          <PartnerLink href="https://context.app">Context</PartnerLink>
        </div>
      </div>

      <div className="h-px bg-neutral-200 mt-4 sm:mt-8 mb-10 sm:mb-16 w-full" />

      <FAQ />
    </div>
  )
}

const PartnerLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    className="font-bold hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
