import { motion } from 'framer-motion';

const LayoutMotion = ({ children }) => (
	<>
		<motion.div
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 300, opacity: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.8 }}>
			{children}
		</motion.div>
	</>
);
export default LayoutMotion;
