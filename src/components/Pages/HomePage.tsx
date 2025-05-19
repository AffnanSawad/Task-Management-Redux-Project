import { motion } from "framer-motion";


const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col justify-center items-center px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6"
      >
        Manage Your Tasks Easily
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8"
      >
        Organize your to-dos, prioritize work, and stay on top of your goals with our sleek task management solution.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col md:flex-row gap-4"
      >
       
       
      </motion.div>
    </main>
  );
};

export default HomePage;
