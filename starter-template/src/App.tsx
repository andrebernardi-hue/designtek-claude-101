import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 max-w-md w-full text-center shadow-2xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-xs font-semibold tracking-widest text-zinc-500 uppercase"
        >
          DesignTek · 101
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-4 text-4xl font-bold text-white leading-tight"
        >
          Start building.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-3 text-zinc-400 text-base leading-relaxed"
        >
          This is your blank canvas. Edit{' '}
          <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-sm">
            src/App.tsx
          </code>{' '}
          and watch the app update instantly.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 w-full bg-white text-zinc-950 font-semibold py-3 rounded-xl hover:bg-zinc-100 transition-colors"
        >
          Let's go
        </motion.button>
      </motion.div>
    </div>
  )
}
