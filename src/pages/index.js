import Seo from '@/components/Seo';
import { Footer } from '@/components/Footer';
import LayoutMotion from '@/components/LayoutMotion';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Header } from '@/components/Header';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
	//console.log('load home');

	let [isOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<Seo title='Aero Design' desc='Content of the homepage.' />
			<TransitionEffect />
			<LayoutMotion>
				<main className='container mx-auto pt-24'>
					<h1 className='mb-4 flex items-center text-3xl'>
						<ShieldCheckIcon className='mr-2 h-8 w-8 text-orange' />
						Welcome
					</h1>
					<button
						type='button'
						onClick={openModal}
						className='rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
						Open Modal
					</button>
				</main>
				<Footer />

				<Transition appear show={isOpen} as={Fragment}>
					<Dialog as='div' className='relative z-10' onClose={closeModal}>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<div className='fixed inset-0 bg-black bg-opacity-20' />
						</Transition.Child>

						<div className='fixed inset-0 overflow-y-auto'>
							<div className='flex min-h-full items-center justify-center p-4 text-center'>
								<Transition.Child
									as={Fragment}
									enter='ease-out duration-300'
									enterFrom='opacity-0 scale-95'
									enterTo='opacity-100 scale-100'
									leave='ease-in duration-200'
									leaveFrom='opacity-100 scale-100'
									leaveTo='opacity-0 scale-95'>
									<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
										<Dialog.Title
											as='h3'
											className=' text-lg font-medium leading-6 text-black'>
											Payment successful
										</Dialog.Title>
										<div className='mt-2'>
											<p className='text-gray-500 text-sm text-black'>
												Your payment has been successfully
												submitted. We’ve sent you an email with all
												of the details of your order.
											</p>
										</div>

										<div className='mt-4'>
											<button
												type='button'
												className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
												onClick={closeModal}>
												Got it, thanks!
											</button>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Dialog>
				</Transition>
			</LayoutMotion>
		</>
	);
}
