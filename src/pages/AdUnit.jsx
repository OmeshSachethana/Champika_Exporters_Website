// import React, { useEffect, useRef, useState } from 'react';

// const AdUnit = () => {
//   const adRef = useRef(null);
//   const [adLoaded, setAdLoaded] = useState(false);

//   useEffect(() => {
//     if (!adLoaded && window.adsbygoogle && adRef.current) {
//       try {
//         // Prevent re-initializing
//         if (!adRef.current.dataset.adStatus) {
//           (window.adsbygoogle = window.adsbygoogle || []).push({});
//           adRef.current.dataset.adStatus = 'done';
//           setAdLoaded(true);
//           console.log('AdSense: Ad pushed successfully');
//         }
//       } catch (e) {
//         console.warn('AdSense load error:', e.message);
//       }
//     }
//   }, [adLoaded]);

//   return (
//     <div className="relative my-8 w-full" style={{ minHeight: '250px' }}>
//       <ins
//         ref={adRef}
//         className="adsbygoogle block"
//         style={{
//           display: 'block',
//           width: '100%',
//           height: adLoaded ? 'auto' : '250px',
//           backgroundColor: '#f5f5f5',
//           border: '1px dashed #ccc',
//         }}
//         data-ad-client="ca-pub-7716352626622549"
//         data-ad-slot="5333113888"
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       />
//       {!adLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
//           <p className="text-gray-600">Loading ad...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdUnit;
