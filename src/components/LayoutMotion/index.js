import { motion } from 'framer-motion';

const LayoutMotion = ({ children }) => (
	<>
		<motion.div initial={{ delay: 3, y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} transition={{ ease: 'easeInOut', duration: 0.4 }}>
			{children}
		</motion.div>
	</>
);
export default LayoutMotion;
