"use client";

import Image from "next/image";

export default function GalleryGrid({ campingsite }){
    return(
        <div>
        {/* Small screens */}
        <section className="grid grid-cols-1 grid-rows-1 h-[300px] mb-12 overflow-hidden md:hidden">
          <div className="col-span-2 row-span-2 relative">
            <Image
              width={600}
              height={400}
              loading="eager"
              alt="Main Camp View"
              data-alt="Main camp image"
              src={`/images/locations/${campingsite.id}/${campingsite.images[0]}`}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </section>
        {/* md/lg screens */}
        <section className="grid-cols-4 grid-rows-2 gap-3 h-125 mb-12 hidden md:grid">
          <div className="col-span-2 row-span-2 relative overflow-hidden">
            <Image
              width={800}
              height={600}
              loading="eager"
              alt="Main Camp View"
              data-alt="Main camp image"
              src={`/images/locations/${campingsite.id}/${campingsite.images[0]}`}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {campingsite.images.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
            >
              <Image
                width={800}
                height={600}
                loading="eager"
                alt={`${image} picture`}
                data-alt={`${image} picture`}
                src={`/images/locations/${campingsite.id}/${image}`}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}

          {/* <div className="relative group cursor-pointer overflow-hidden">
            <img
                alt="Lake View"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="scenic mountain lake reflecting snow-capped peaks at sunrise with mist rising from the water surface and soft pastel sky"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9SaQzIRKlVXZ6Zb7M1ihWly3UppL-VDpVRG6YpqChTD7WEX9KOkJbf3g5DoQFx8MCydBF_DOsiCnWZc7rKV3YThWqBQWhGkA9YiaXT2rMROJUoz7ovXBe1bR0UpuGIBcrmBwQtusOLjrCdUgbfeMh5JF7pisoZLD8w2VrsM4HF1eCZd852wOLr2m2J6XEnP0tVrKn_uMyouszgSuKx7zwmgWqN42ruOHLrrV3JLXem3AI_TBFpiZkcI8ijB6hTKpiwrWiXQ_EnIbo"
            />
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-tr-2xl">
            <img
                alt="Campsite Setup"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="neatly arranged modern camping gear including a camp chair and fire pit on a gravel clearing surrounded by tall pines"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC59qdQSYGD6lHLR21XuTz_9IdAmhfgXHPn2si-xsOTkTPwblLGPC7lSRwVrdNxEEpyQ69okR3XQwadLhOVjh49GQ16vW4IKFjxEfQePt0s0RvwPXwb5vlwDxECv-vaYFbqSRCguw4MPGHBsm49fZMSC68WY8ZxeU7mY_zX4YGhlfNW-6YOGH57K-XHKQA_4L-4Qsqw3hp4TjsAVaLJa6Ye9kNwePfbmp74i2m55EVf9etcJx3Aph0Vu1d4oCjQBR77ozMZL2xrbyJN"
            />
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
            <img
                alt="Hiking Trail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="winding dirt trail through a lush fern-covered forest floor under a canopy of ancient cedar trees with sunbeams filtering through"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkFV7wZsQEfszmGAoIaR5Y6Wdyd2TDl1xTFwauAPPZXvCq5vFHtjsS-TyC0KtUoohS0uXYqROcZPvHqGS_-nCo_vIkGeZ4SZgHD8oHHJ9qrRJVZtTylG3ALSdyQ5e3r_0vShgRExqc1eFOMEYM14jT97nDn8_5UFldDlejn_davY2mz-7fQIpDbk9-DKyQCgx5AbZt6SdI0zl_s-acgjGhVz63JrNPl-xH0LY2DNWwL5fUeU9QiyY1VOyCvTSlmN1rNc3bxMmrRETs"
            />
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-br-2xl">
            <img
                alt="Night Sky"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="breathtaking milky way galaxy visible over silhouetted forest trees with clear dark sky and infinite stars"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9rNxpO05gfoWWhb-7Dsyg-w2Lcln8lfIOpBLYK1-MnXs5H-TBc-gqIiSSPbnlrGeFZOMqOec5OCHnYjJ72cDB262R1CRpo_RrdwerDYO-dgSI2kDuVtLoa7vbpzXNeEWJBwi7BUQVfuKU3x5ApAqVG9m767cEhnhbd064_QCtiC7sQjixSx6IvkB6T88oOGTNrhK4GfdcIKFGs6peLGMS-pMazJ90rwuhSyRO7zLGKZOIFQ7dkN_mdW2o63XA5lMwElt_dsALwgNe"
            />
            </div> */}
        </section>
      </div>
    )
}