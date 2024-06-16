
export default function Home() {
  return (
    <>
    <header className="main-header pointer-events-none sticky top-0 z-40 h-[120px] w-full px-4 py-6">
      <div className="h-full w-full flex relative pointer-events-auto backdrop-blur-lg">
        <div className="to-enterprise-gray/10 from-enterprise-gray/10 absolute inset-0 z-[1] rounded-full border border-white/60 bg-gradient-to-br backdrop-blur-1">
          <nav className="z-[1] flex-1 flex flex-row items-center justify-between gap-2 p-3 pl-8">
            {/* <div className="relative flex h-full items-center justify-center"></div> */}
            <a href="/" className="appearance-none  transition group -m-2 p-2 pl-0 md:pl2" ><svg viewBox="0 0 115 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-enterprise-black h-4 md:h-6 flex-none"><path d="m32.626.367-8.802 21.589a3.284 3.284 0 0 1-3.041 2.043h-8.895a3.283 3.283 0 0 1-3.04-2.04L.02.367A.266.266 0 0 1 .266 0h8.91c.222 0 .421.138.5.346l6.672 17.795L22.967.348a.533.533 0 0 1 .5-.348h8.912c.189 0 .318.192.247.367Zm.813-.1v23.466c0 .147.12.267.267.267h24.463c.146 0 .266-.12.266-.267v-5.851a.267.267 0 0 0-.266-.267h-15.92a.267.267 0 0 1-.266-.267v-1.927c0-.146.12-.266.267-.266h15.557c.147 0 .267-.12.267-.267V9.082a.267.267 0 0 0-.267-.267H42.25a.267.267 0 0 1-.267-.267V6.652c0-.147.12-.267.267-.267h15.919c.146 0 .266-.12.266-.267V.267A.267.267 0 0 0 58.17 0H33.706a.267.267 0 0 0-.267.267Zm26.12 0v23.466c0 .147.12.267.268.267H84.29c.146 0 .266-.12.266-.267v-5.851a.268.268 0 0 0-.266-.267H68.37a.267.267 0 0 1-.266-.267v-1.927c0-.146.12-.266.267-.266h15.557c.147 0 .267-.12.267-.267V9.082a.267.267 0 0 0-.267-.267H68.37a.267.267 0 0 1-.267-.267V6.652c0-.147.12-.267.267-.267H84.29c.146 0 .266-.12.266-.267V.267A.268.268 0 0 0 84.29 0H59.826a.267.267 0 0 0-.266.267Zm26.123 23.466c0 .147.12.267.266.267h16.76c3.668 0 6.627-.951 8.891-2.868 2.264-1.902 3.396-4.95 3.396-9.147s-1.132-7.245-3.396-9.148C109.335.95 106.377 0 102.708 0h-16.76a.267.267 0 0 0-.266.267v23.466Zm8.81-6.163a.267.267 0 0 1-.267-.267V6.697c0-.147.12-.267.266-.267h6.255c1.932 0 3.366.423 4.302 1.268.936.845 1.403 2.279 1.403 4.287s-.467 3.472-1.403 4.317c-.936.846-2.37 1.268-4.302 1.268h-6.255Z" fill="currentColor"></path></svg></a>

            <ul className="hidden h-full flex-row items-center justify-center gap-2 lg:flex xl:gap-3">
              <li className="flex h-full items-center justify-center text-base lg:text-sm xl:text-base">
                <a class="appearance-none transition group hover:text-blue-500 flex items-center justify-center whitespace-nowrap p-2 xl:p-3 gap-1.5" href="/tools">Products<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-2.5 w-2.5 transition-transform duration-300 group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></a>
              </li>
              <li className="flex h-full items-center justify-center text-base lg:text-sm xl:text-base">
                <a class="appearance-none transition group hover:text-blue-500 flex items-center justify-center whitespace-nowrap p-2 xl:p-3 gap-1.5" href="/tools">Use Cases<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-2.5 w-2.5 transition-transform duration-300 group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></a>
              </li>
              <li className="flex h-full items-center justify-center text-base lg:text-sm xl:text-base">
                <a class="appearance-none transition group hover:text-blue-500 flex items-center justify-center whitespace-nowrap p-2 xl:p-3 gap-1.5" href="/tools">Resources<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-2.5 w-2.5 transition-transform duration-300 group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></a>
              </li>
              <li className="flex h-full items-center justify-center text-base lg:text-sm xl:text-base">
                <a class="appearance-none transition group hover:text-blue-500 flex items-center justify-center whitespace-nowrap p-2 xl:p-3 gap-1.5" href="/tools">For Businnes<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-2.5 w-2.5 transition-transform duration-300 group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></a>
              </li>
              <li className="flex h-full items-center justify-center text-base lg:text-sm xl:text-base">
                <a class="appearance-none transition group hover:text-blue-500 flex items-center justify-center whitespace-nowrap p-2 xl:p-3 gap-1.5" href="/tools">Pricing<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-2.5 w-2.5 transition-transform duration-300 group-hover:-rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></a>
              </li>
            </ul>
            <ul class="flex h-full flex-row items-center justify-center gap-2 xl:gap-3"><li class="h-full items-center justify-center text-base lg:text-sm xl:text-base hidden lg:flex"><a class="appearance-none transition group hover:text-enterprise-blue flex items-center justify-center whitespace-nowrap p-2 xl:p-3" href="/contact-sales?ref=Landing+Pages+Top+Navbar%2C+URL+Path%3A+%2F">Book a Demo</a></li><li class="h-full items-center justify-center text-base lg:text-sm xl:text-base hidden md:flex"><a class="appearance-none transition group flex items-center justify-center whitespace-nowrap p-2 xl:p-3 text-enterprise-black hover:text-enterprise-black hover:bg-enterprise-lightGray h-full rounded-full bg-white px-5 text-sm font-medium sm:text-base xl:px-5" href="/login?locale=en&amp;source=%2F">Login</a></li><li class="flex h-full items-center justify-center text-base lg:text-sm xl:text-base"><a class="appearance-none transition group flex items-center justify-center whitespace-nowrap p-2 xl:p-3 bg-black hover:text-enterprise-black hover:bg-enterprise-lightGray h-full rounded-full px-5 text-sm font-medium text-white sm:text-base xl:px-5" href="/signup?locale=en&amp;source=%2F">Sign Up</a></li><li class="h-full items-center justify-center text-base lg:text-sm xl:text-base flex lg:hidden"><button type="button" class="cursor-pointer appearance-none transition group flex items-center justify-center" aria-label="hamburger"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3 h-12 w-12 p-2 sm:mr-5"><path d="M2 16h20M2 12h20M2 8h20" stroke="#323232" stroke-width="1.2" stroke-linecap="round"></path></svg></button></li></ul>
          </nav>
        </div>
      </div>
      </header>
      <div className="overflow-visible">
        <main className="m-auto max-w-[1440px]">
    
    <div className="w-full mx-auto">
      <div className="w-[100%] mx-auto">
        <div className="w-[100%] flex flex-col align-center justify-center overflow-hidden ">
          <h1 className="line-[4.875rem] font-[600] text-[4rem] uppercase font-sans text-center" >GREAT VIDEOS START WITH A PLAN</h1>
          <p className="mx-auto text-[1.5rem] line-[1.25rem] mb-5"> Try Weed
          Try VEED with our 
          <a href="/" className="underline text-blue-500 ml-[5px]">Free Plan</a>
          </p>
        </div>
          <div className="flex gap-4 ">
            <div className="flex  shadow-3xl flex-col w-[25%] border rounded-3xl py-[2rem] px-[1.5rem]  bg-white  ">
              
              <div className="flex  flex-col align-startgrow box-border">
                <h4 className="font-[500] text-2xl">Basic</h4>
                <div className="font-[300]">Ideal starter plan</div>
              </div>
              <div className="mt-[1rem] flex items-center  gap-2">
                <div className="">
                  <span className="font-[500] line-[2rem] text-2xl">₹</span>
                  <span className="font-[500] text-3xl">290.67</span>
                </div>
                <div className="bg-green-300 text-xs font-[500] rounded-xl py-1 px-2">Save 36%</div>
              </div>
              <div className=" text-xs leading-[2rem] tracking-tight">Per user / month, billed yearly</div>
              <div className="flex items-center justify-center mt-[1.25rem]">
                <button className=" w-[100%] rounded-3xl border-2 border-[#6474FF]  hover:text-[#6474FF] font-sans font-[500] p-3">Go Basic</button>
              </div>
              <hr className="mt-[2.15rem] mb-[1.25rem]" />
              <div className=" flex gap-2 flex-col">
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Remove watermark</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Subtitles 12 hr/yr</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">No Upload Size Limit</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Full HD 1080p Exports</div>
                </div>

              </div>
            </div>
            <div className="flex flex-[0 1 350px] relative flex-col shadow-3xl w-[25%] border-[3px]  border-[#6474FF] rounded-3xl py-[2rem] px-[1.5rem]  bg-white ">
              <div className="absolute -top-[0.187rem] right-[1.5rem] bg-gradient-to-r from-[#6474ff] from-16.02% p-2 rounded-b-xl  to-[#a0a9ff] to-123.24%">
                <span data-testid="@plan-card/pro/highlighted-text" className="uppercase flex gap-1 text-xs text-white font-[500]">
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF" class="sc-bgqQPU gHVkBW"><path d="M10.5 5.25C10.5 5.44891 10.421 5.63968 10.2803 5.78033C10.1397 5.92098 9.94891 6 9.75 6C8.75544 6 7.80161 6.39509 7.09835 7.09835C6.39509 7.80161 6 8.75544 6 9.75C6 9.94891 5.92098 10.1397 5.78033 10.2803C5.63968 10.421 5.44891 10.5 5.25 10.5C5.05109 10.5 4.86032 10.421 4.71967 10.2803C4.57902 10.1397 4.5 9.94891 4.5 9.75C4.5 8.75544 4.10491 7.80161 3.40165 7.09835C2.69839 6.39509 1.74456 6 0.75 6C0.551088 6 0.360322 5.92098 0.21967 5.78033C0.0790178 5.63968 0 5.44891 0 5.25C0 5.05109 0.0790178 4.86032 0.21967 4.71967C0.360322 4.57902 0.551088 4.5 0.75 4.5C1.74456 4.5 2.69839 4.10491 3.40165 3.40165C4.10491 2.69839 4.5 1.74456 4.5 0.75C4.5 0.551088 4.57902 0.360322 4.71967 0.21967C4.86032 0.0790178 5.05109 0 5.25 0C5.44891 0 5.63968 0.0790178 5.78033 0.21967C5.92098 0.360322 6 0.551088 6 0.75C6 1.74456 6.39509 2.69839 7.09835 3.40165C7.80161 4.10491 8.75544 4.5 9.75 4.5C9.94891 4.5 10.1397 4.57902 10.2803 4.71967C10.421 4.86032 10.5 5.05109 10.5 5.25Z" fill="currentColor"></path><path d="M11.25 15C11.25 15.1989 11.171 15.3897 11.0303 15.5303C10.8897 15.671 10.6989 15.75 10.5 15.75C10.1022 15.75 9.72064 15.908 9.43934 16.1893C9.15804 16.4706 9 16.8522 9 17.25C9 17.4489 8.92098 17.6397 8.78033 17.7803C8.63968 17.921 8.44891 18 8.25 18C8.05109 18 7.86032 17.921 7.71967 17.7803C7.57902 17.6397 7.5 17.4489 7.5 17.25C7.5 16.8522 7.34196 16.4706 7.06066 16.1893C6.77936 15.908 6.39782 15.75 6 15.75C5.80109 15.75 5.61032 15.671 5.46967 15.5303C5.32902 15.3897 5.25 15.1989 5.25 15C5.25 14.8011 5.32902 14.6103 5.46967 14.4697C5.61032 14.329 5.80109 14.25 6 14.25C6.39782 14.25 6.77936 14.092 7.06066 13.8107C7.34196 13.5294 7.5 13.1478 7.5 12.75C7.5 12.5511 7.57902 12.3603 7.71967 12.2197C7.86032 12.079 8.05109 12 8.25 12C8.44891 12 8.63968 12.079 8.78033 12.2197C8.92098 12.3603 9 12.5511 9 12.75C9 13.1478 9.15804 13.5294 9.43934 13.8107C9.72064 14.092 10.1022 14.25 10.5 14.25C10.6989 14.25 10.8897 14.329 11.0303 14.4697C11.171 14.6103 11.25 14.8011 11.25 15Z" fill="currentColor"></path><path d="M18 9.75C18 9.94891 17.921 10.1397 17.7803 10.2803C17.6397 10.421 17.4489 10.5 17.25 10.5C16.4544 10.5 15.6913 10.8161 15.1287 11.3787C14.5661 11.9413 14.25 12.7044 14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25C13.3011 14.25 13.1103 14.171 12.9697 14.0303C12.829 13.8897 12.75 13.6989 12.75 13.5C12.75 12.7044 12.4339 11.9413 11.8713 11.3787C11.3087 10.8161 10.5456 10.5 9.75 10.5C9.55109 10.5 9.36032 10.421 9.21967 10.2803C9.07902 10.1397 9 9.94891 9 9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C10.5456 9 11.3087 8.68393 11.8713 8.12132C12.4339 7.55871 12.75 6.79565 12.75 6C12.75 5.80109 12.829 5.61032 12.9697 5.46967C13.1103 5.32902 13.3011 5.25 13.5 5.25C13.6989 5.25 13.8897 5.32902 14.0303 5.46967C14.171 5.61032 14.25 5.80109 14.25 6C14.25 6.79565 14.5661 7.55871 15.1287 8.12132C15.6913 8.68393 16.4544 9 17.25 9C17.4489 9 17.6397 9.07902 17.7803 9.21967C17.921 9.36032 18 9.55109 18 9.75Z" fill="currentColor"></path></svg>Recommended</span></div>
              <div className="flex  flex-col align-startgrow box-border">
                <h4 className="font-[500] text-2xl">Pro</h4>
                <div className="font-[300]">For pro video creation</div>
              </div>
              <div className="mt-[1rem] flex items-center  gap-2">
                <div className="">
                  <span className="font-[500] line-[2rem] text-2xl">₹</span>
                  <span className="font-[500] text-3xl">599</span>
                </div>
                <div className="bg-green-300 text-xs font-[500] rounded-xl py-1 px-2">Save 21%</div>
              </div>
              <div className=" text-xs leading-[2rem] tracking-tight">Per user / month, billed yearly</div>
              <div className="flex items-center justify-center mt-[1.25rem]">
                <button className=" w-[100%] rounded-3xl text-white bg-gradient-to-r font-sans font-[500] from-[#6474ff] from-15.34% via-[#8078fd] via-21.77% to-[#cfc0fe] to-83.94% ease-in duration-[2s] trasition hover:from-[#6474ff] from-50.34% hover:to-[#cfc0fe] to-80.94% p-3">Go Pro</button>
              </div>
              <hr className="mt-[2.15rem] mb-[1.25rem]" />
              <div className=" flex gap-2 flex-col">
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Subtitles 24 hr/yr</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Clean Audio</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Eye Contact Correction</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Stock Audio & Video Library</div>
                </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Download Subtitles</div>
                </div>

              </div>
            </div>
            <div className="flex flex-[0 1 350px] flex-col shadow-3xl w-[25%] border rounded-3xl py-[2rem] px-[1.5rem]  bg-white  ">
              <div className="flex  flex-col align-startgrow box-border">
                <h4 className="font-[500] text-2xl">Business</h4>
                <div className="font-[300]">For up to 5 people</div>
              </div>
              <div className="mt-[1rem] flex items-center  gap-2">
                <div className="">
                  <span className="font-[500] line-[2rem] text-2xl">₹</span>
                  <span className="font-[500] text-3xl">1500</span>
                </div>
                <div className="bg-green-300 text-xs font-[500] rounded-xl py-1 px-2">Save 14%</div>
              </div>
              <div className=" text-xs leading-[2rem] tracking-tight">Per user / month, billed yearly</div>
              <div className="flex items-center justify-center mt-[1.25rem]">
                <button className=" w-[100%] rounded-3xl border-2 border-[#6474FF] hover:text-[#6474FF] font-sans font-[500] p-3">Go Business</button>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-sm leading-[2rem] tracking-tight">or 
                  <a href="/" className="underline ml-[5px]">Request a Trial</a>
                </span>
              </div>
              <hr className=" mb-[1.25rem]" />
              <div className=" flex gap-2 flex-col">
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">AI Avatars 4 hr/yr</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Subtitles 134 hr/yr</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Translate to 50+ Languages</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Text to Speech 60 hr/yr</div>
                </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Customizable Video Templates</div>
                </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">4k Export Quality</div>
                </div>

              </div>
            </div>
            <div className="flex flex-[0 1 350px] flex-col shadow-3xl w-[25%] border rounded-3xl py-[2rem] px-[1.5rem] bg-white ">
              <div className="flex  flex-col align-startgrow box-border">
                <h4 className="font-[500] text-2xl">Enterprise</h4>
                <div className="font-[300]">Scale video across your team</div>
              </div>
              <div className="mt-[1rem] flex items-center  gap-2">
                <div className="">
                  {/* <span className="font-[500] line-[2rem] text-2xl">₹</span> */}
                  <span className="font-[500] text-3xl">Let's Talk</span>
                </div>
                {/* <div className="bg-green-300 text-xs font-[500] rounded-xl py-1 px-2">Save 36%</div> */}
              </div>
              <div className=" text-xs leading-[2rem] tracking-tight">Custom Pricing</div>
              <div className="flex items-center justify-center mt-[1.25rem]">
                <button className=" w-[100%] rounded-3xl border-2 border-[#6474FF] hover:text-[#6474FF] font-sans font-[500] p-3">Book a Demo</button>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-sm leading-[2rem] tracking-tight">or 
                  <a href="/" className="underline ml-[5px]">Request a Trial</a>
                </span>
              </div>
              <hr className=" mb-[1.25rem]" />
              <div className=" flex gap-2 flex-col">
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Personalized AI avatars</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Brand assets & templates</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Multiple workspaces</div>

              </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Custom usage limits</div>
                </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Creator training</div>
                </div>
                <div className="flex items-center gap-2">
                <div className=" flex items-center "><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#18191B" className="stroke-2" ><path d="M21.1111 6L9.50003 17L3.38892 10.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div className="tracking-tight text-sm leading-5">Account manager</div>
                </div>

              </div>
            </div>
          </div>
      </div>
    </div>
        </main>
      </div>
    </>
  );
}
