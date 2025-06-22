// import { useEffect, useRef } from 'react';

// export const useAdSense = (adSlot) => {
//   const adRef = useRef(null);
//   const retryCount = useRef(0);
//   const maxRetries = 5;
//   const cleanupRef = useRef(null);

//   useEffect(() => {
//     // Clear any existing timeouts on unmount
//     return () => {
//       if (cleanupRef.current) {
//         clearTimeout(cleanupRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const loadAd = () => {
//       if (!adRef.current || retryCount.current >= maxRetries) return;

//       try {
//         if (window.adsbygoogle && adRef.current && !adRef.current.dataset.adsbygoogleStatus) {
//           (window.adsbygoogle = window.adsbygoogle || []).push({});
//           adRef.current.dataset.adsbygoogleStatus = 'done';
//           console.log(`AdSense loaded for slot: ${adSlot}`);
//         } else if (retryCount.current < maxRetries) {
//           throw new Error('AdSense not ready, retrying...');
//         }
//       } catch (err) {
//         console.warn(err.message || 'AdSense error');
//         retryCount.current += 1;
//         cleanupRef.current = setTimeout(loadAd, 1000 * retryCount.current);
//       }
//     };

//     // Initial load with slight delay
//     cleanupRef.current = setTimeout(loadAd, 300);
    
//     return () => {
//       if (cleanupRef.current) {
//         clearTimeout(cleanupRef.current);
//       }
//     };
//   }, [adSlot]);

//   return adRef;
// };