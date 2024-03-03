'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// export async function generateMetadata(props: { params: { locale: string } }) {
//   const t = await getTranslations({
//     locale: props.params.locale,
//     namespace: 'Index',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

export default function Index() {
  const [data] = useState(null);
  const [isLoading] = useState(true);

  useEffect(() => {
    async function insertDatabase() {
      const supabaseUrl = 'https://knilbuzfwlilnknerqgi.supabase.co';
      const supabase = createClient(
        supabaseUrl,
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuaWxidXpmd2xpbG5rbmVycWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNDU3MzEsImV4cCI6MjAyNDkyMTczMX0.THvuCMQDMrttDZZiP8nxlEqxzdxwWZ4mt8RguAEmvaQ',
      );

      await supabase.from('PreRegister').insert({
        type: 'COFFEE',
        uid: 'AABBCC',
        avatar: 'https://www.google.com',
      });
    }

    insertDatabase();

    // fetch('https://65e28993a8583365b3183d09.mockapi.io/users')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //   });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-4xl space-y-5 sm:space-y-10">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-200">
              Rung Aroon Coffee
            </p>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-5xl lg:text-6xl lg:leading-tight">
              Thanks, You are Coffeian ☕<br />
              <span className="text-xl text-blue-500">See you 9 March</span>
            </h1>
          </div>

          <div className="text-center sm:flex sm:items-center sm:justify-center sm:text-start">
            <div className="shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
              <div className="flex justify-center -space-x-3">
                <Image
                  className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <Image
                  className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <Image
                  className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <Image
                  className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-gray-800 ring-2 ring-white dark:bg-gray-900 dark:ring-gray-800">
                  <span className="text-xs font-medium uppercase leading-none text-white">
                    7k+
                  </span>
                </span>
              </div>
            </div>

            <div className="mx-auto h-px w-32 border-t border-gray-200 sm:mx-0 sm:h-full sm:w-auto sm:border-s sm:border-t-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
