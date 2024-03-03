import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-9 lg:items-center lg:gap-x-8 xl:grid-cols-9 xl:gap-x-12">
        <div className="mt-10 lg:col-span-6 lg:mt-0">
          <Image
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
            alt="Image Description"
          />
        </div>
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl md:text-5xl lg:text-5xl">
            Who in the game
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            The game is end in xxxxx
          </p>

          {/* <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 lg:mt-8">
            <div className="w-full sm:w-auto">
              <label className="sr-only">Search</label>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 xl:min-w-72"
                placeholder="Enter work email"
              />
            </div>
            <a
              className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:w-auto"
              href="#"
            >
              Request demo
            </a>
          </div> */}

          <div className="mt-6 lg:mt-12">
            <span className="text-xl font-medium uppercase text-gray-800 dark:text-gray-200">
              Coffee
            </span>

            <div className="mt-4 flex gap-x-8">k</div>
          </div>

          <div className="mt-6 lg:mt-12">
            <span className="text-xl font-medium uppercase text-gray-800 dark:text-gray-200">
              Non - Coffee
            </span>

            <div className="mt-4 flex gap-x-8">k</div>
          </div>
        </div>
      </div>
    </div>
  );
}
