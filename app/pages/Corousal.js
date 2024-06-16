'use client'
import React, { useEffect, useRef } from 'react'
export const Corousal = () => {
  const ref=useRef(null);
  const ref2=useRef(null);
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  
  
  return (
    <div className="relative overflow-hidden">
       <div className=" absolute mx-auto insert-y-0 left-0 w-16 h-full  backdrop-blur-sm z-[2] "></div>
       <div className=" absolute mx-auto insert-y-0 right-0 w-16 h-full backdrop-blur-sm z-[2] "></div>

       <div className="w-full overflow-hidden">

    <div ref={ref} className='items-center w-fit flex mx-auto animate-[slide_40s_linear_infinite]'>
      
          <ul ref={ref2} className='flex  scroller__inner'>

         <li className='mx-2 list-none'><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png" /></li>
         <li  className="mx-2 list-none"> 
         <img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/nbcuniversal_020f502b6a/nbcuniversal_020f502b6a.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/nbcuniversal_020f502b6a/nbcuniversal_020f502b6a.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/nbcuniversal_020f502b6a/nbcuniversal_020f502b6a.png" /></li> 
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/target_652c903f65/target_652c903f65.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/target_652c903f65/target_652c903f65.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/target_652c903f65/target_652c903f65.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/merck_a56f190e3e/merck_a56f190e3e.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/merck_a56f190e3e/merck_a56f190e3e.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/merck_a56f190e3e/merck_a56f190e3e.png" /></li>
         <li  className="mx-2"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/nbcuniversal_020f502b6a/nbcuniversal_020f502b6a.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/nbcuniversal_020f502b6a/nbcuniversal_020f502b6a.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/nbcuniversal_020f502b6a/nbcuniversal_020f502b6a.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/target_652c903f65/target_652c903f65.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/target_652c903f65/target_652c903f65.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/target_652c903f65/target_652c903f65.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png" /></li>
         <li  className="mx-2"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png" />
         </li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/merck_a56f190e3e/merck_a56f190e3e.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/merck_a56f190e3e/merck_a56f190e3e.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/merck_a56f190e3e/merck_a56f190e3e.png" /></li>
         <li  className="mx-2 list-none"><img alt="" loading="lazy" width="320" height="128" decoding="async" data-nimg="1" className="mx-2 min-w-[6.5rem] lg:min-w-[9rem]" srcSet="https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png 1x, https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png 2x" src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png" /></li>
         
          </ul>
         </div>
       </div>
    </div>
  )
}
