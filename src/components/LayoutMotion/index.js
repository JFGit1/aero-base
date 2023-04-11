import { motion } from 'framer-motion';

const LayoutMotion = ({ children }) => (
	<>
		<motion.div
			initial={{ y: -300 }}
			animate={{ y: 0 }}
			exit={{ y: 400 }}
			transition={{ ease: 'easeInOut', duration: 1 }}>
			{children}
		</motion.div>
	</>
);
export default LayoutMotion;
