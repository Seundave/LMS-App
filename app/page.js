// import Image from 'next/image'
// import { UserButton } from '@clerk/nextjs'

// export default function Home() {
//   return (
//    <div className="">
//     Home
//     <UserButton afterSignOutUrl="/"/>
//    </div>
//   )
// }


"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/browse');
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
   <div className="">
    <UserButton afterSignOutUrl="/"/>
   </div>
  );
}
