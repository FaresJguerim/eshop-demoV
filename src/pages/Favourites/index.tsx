import React from 'react'

  const favourite: React.FC = () => {

  return (
    <>
    
    <div className="text-neutral-950 text-xl font-bold leading-7 capitalize self-center whitespace-nowrap mt-20 max-md:mt-10  pl-[55rem]">
  My Wish List
</div>

  <div className="text-neutral-950 text-base leading-7 capitalize self-center whitespace-nowrap mt-7 pl-[55rem]">
    1 item
  </div>
  <div className="flex-col overflow-hidden relative flex aspect-[0.8949771689497716] w-[392px] max-w-full ml-28 mt-16 pl-16 pr-6 pt-6 pb-12 self-start items-end max-md:ml-2.5 max-md:mt-10 max-md:px-5">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d93ea1f728ba217dfefe88aad0e2bd0ae952dad2fa4abf6c4fcb08d678020fc?apiKey=908fc3cf9dcc480ebd66547e3c633170&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93ea1f728ba217dfefe88aad0e2bd0ae952dad2fa4abf6c4fcb08d678020fc?apiKey=908fc3cf9dcc480ebd66547e3c633170&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93ea1f728ba217dfefe88aad0e2bd0ae952dad2fa4abf6c4fcb08d678020fc?apiKey=908fc3cf9dcc480ebd66547e3c633170&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93ea1f728ba217dfefe88aad0e2bd0ae952dad2fa4abf6c4fcb08d678020fc?apiKey=908fc3cf9dcc480ebd66547e3c633170&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93ea1f728ba217dfefe88aad0e2bd0ae952dad2fa4abf6c4fcb08d678020fc?apiKey=908fc3cf9dcc480ebd66547e3c633170&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93ea1f728ba217dfefe88aad0e2bd0ae952dad2fa4abf6c4fcb08d678020fc?apiKey=908fc3cf9dcc480ebd66547e3c633170&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93ea1f728ba217dfefe88aad0e2bd0ae952dad2fa4abf6c4fcb08d678020fc?apiKey=908fc3cf9dcc480ebd66547e3c633170&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93ea1f728ba217dfefe88aad0e2bd0ae952dad2fa4abf6c4fcb08d678020fc?apiKey=908fc3cf9dcc480ebd66547e3c633170&"
      className="absolute h-full w-full object-cover object-center inset-0"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b88c7206fc0b1e10657f8f3dafa289854bb9154435b10fb913e26dea49ee6ebb?apiKey=908fc3cf9dcc480ebd66547e3c633170&"
      className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden max-w-full mb-64 max-md:mb-10"
    />
  </div>
  <div className="justify-between items-stretch flex w-[392px] max-w-full gap-5 ml-28 px-2.5 py-1.5 self-start max-md:ml-2.5">
    <div className="items-stretch flex grow basis-[0%] flex-col">
      <div className="text-neutral-950 text-base font-bold leading-6 capitalize">
        Casual Wild leg
      </div>
      <div className="text-neutral-950 text-base leading-7 capitalize mt-2">
        turn it up pants
      </div>
      <div className="items-stretch flex justify-between gap-2 mt-2 pr-20 max-md:pr-5">
        <div className="bg-neutral-950 flex w-6 shrink-0 h-6 flex-col rounded-3xl" />
        <div className="bg-neutral-500 flex w-6 shrink-0 h-6 flex-col rounded-3xl" />
      </div>
    </div>
    <div className="text-neutral-950 text-base font-bold leading-6 capitalize self-center grow whitespace-nowrap my-auto">
      $130
    </div>
  </div>
  </>
  )
}

 export default favourite