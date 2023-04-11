import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
	return (
		<>
			<motion.div
				className='fixed top-0 z-50 h-screen w-screen origin-top bg-orange'
				initial={{ scaleY: '0%' }}
				animate={{ scaleY: '0%' }}
				exit={{ scaleY: ['0%', '100%'] }}
				transition={{ duration: 0.8, ease: [0.805, 0.06, 0.845, 0.395] }}
			/>
			<motion.div
				className='fixed bottom-0 z-50 h-screen w-screen origin-bottom bg-orange'
				initial={{ scaleY: '100%' }}
				animate={{ scaleY: '0%' }}
				transition={{ duration: 0.5, ease: [0.365, 0.215, 0.215, 0.955] }}
			/>
			<motion.div
				className='fixed bottom-0 z-40 h-screen w-screen origin-bottom bg-white'
				initial={{ scaleY: '100%' }}
				animate={{ scaleY: '0%' }}
				transition={{
					delay: 0.2,
					duration: 0.5,
					ease: [0.365, 0.215, 0.215, 0.955],
				}}
			/>
			<motion.div
				className='fixed bottom-0 z-30 h-screen w-screen origin-bottom bg-gray'
				initial={{ scaleY: '100%' }}
				animate={{ scaleY: '0%' }}
				transition={{
					delay: 0.3,
					duration: 0.5,
					ease: [0.365, 0.215, 0.215, 0.955],
				}}
			/>
			{/* <motion.div
				className='fixed top-0 bottom-0 right-full z-30 h-screen w-screen bg-sky-300'
				initial={{ x: '100%', width: '100%' }}
				animate={{ x: '0%', width: '0%' }}
				transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
			/> */}
		</>
	);
};

export default TransitionEffect;
