import { Navbar } from "./pages/navbar";
import { Corousal } from "./pages/Corousal";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="overflow-visible">
        <main className="m-auto">
    
    <div className="w-full w-[100%] mx-auto">
      <div className="w-[90%] mx-auto">
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
          <div className="mt-[5.25rem] flex flex-col items-center overflow-hidden">
            <h2 className="  text-3xl font-[500]">Trusted By teams</h2>
            <section className=" py-11 w-full">
           
                <Corousal/>
            </section>

          </div>

    </div>
    <div className="grid items-center mx-auto w-[90%]">
    <div className="sticky grid items-center grid-cols-6">
      <div className=""></div>
      <div className="">
        <div className="flex items-center justify-center py-4 px-6 flex-col">
          <h5 className="font-[500] text-lg">Free</h5>
          <span className="mb-4 text-sm">₹0</span>
          <button className="w-[100%] rounded-2xl border border-[#6474FF] hover:text-[#6474FF] font-sans w-36 h-10">Go Free</button>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center py-4 px-6 flex-col">
          <h5 className="font-[500] text-lg">Basic</h5>
          <span className="mb-4 text-sm">₹290.67 /mo, per user</span>
          <button className="w-[100%] rounded-2xl border border-[#6474FF] hover:text-[#6474FF] font-sans w-36 h-10">Go Free</button>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center py-4 px-6 flex-col">
          <h5 className="font-[500] text-lg">Pro</h5>
          <span className="mb-4 text-sm">₹599 /mo, per user</span>
          <button className="w-36 rounded-2xl text-white bg-gradient-to-r font-sans font-[500] from-[#6474ff] from-15.34% via-[#8078fd] via-21.77% to-[#cfc0fe] to-83.94% ease-in duration-[2s] trasition hover:from-[#6474ff] from-50.34% hover:to-[#cfc0fe] to-80.94%  h-10">Go Pro</button>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center py-4 px-6 flex-col">
          <h5 className="font-[500] text-lg">Bussiness</h5>
          <span className="mb-4 text-sm">₹1500 /mo, per user</span>
          <button className="w-[100%] rounded-2xl border border-[#6474FF] hover:text-[#6474FF] font-sans w-36 h-10">Go Free</button>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center py-4 px-6 flex-col">
          <h5 className="font-[500] text-lg">Enterprises</h5>
          <span className="mb-4 text-xs">Custom pricing</span>
          <button className="w-[100%] rounded-2xl border border-[#6474FF] hover:text-[#6474FF] font-sans w-36 h-10">Go Free</button>
        </div>
      </div>
    </div>
    <div className="grid box-border">
      <h2>Video Creation</h2>
    </div>
    </div>
        </main>
      </div>
    </>
  );
}
