export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className='relative flex w-full overflow-x-hidden border-b-4 border-t-4 border-black bg-main font-base'>
      <div className='animate-marquee whitespace-nowrap py-12'>
        {items.map((item) => {
          return (
            <span key={item} className='mx-4 text-4xl'>
              {item}
            </span>
          )
        })}
      </div>

      <div className='absolute top-0 animate-marquee2 whitespace-nowrap py-12'>
        {items.map((item) => {
          return (
            <span key={item} className='mx-4 text-4xl'>
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}
