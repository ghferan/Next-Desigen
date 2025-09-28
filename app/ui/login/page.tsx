"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: "url('/bg71.jpg')" }} // حطي صورة بالخلفية
    >
      <div className="bg-white/60 p-14 rounded-2xl shadow-lg  w-[350px] text-black">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ x: 100,y: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
             <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
            <input
              type="email"
              placeholder="email"
              className="w-full p-2 mb-3 rounded border-1 border-pink-400 bg-pink-500/20"
            />

              <input
                type="password"
                placeholder="password"
              className="w-full p-2 mb-3 rounded border-1 border-pink-400 bg-pink-500/20"
              />
              <button className="w-full bg-orange-800  py-2 rounded"> Login</button>
              <p className="mt-4 text-sm text-center">
              You don't have an account ?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-green-900 font-bold"
                >
               ..   SingUp ..
                </button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ x: 100, y:50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center"> Sign Up</h2>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 mb-3 rounded bg-white/80"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full p-2 mb-3 rounded bg-white/80"
              />
              <input
                type="password"
                placeholder="password"
                className="w-full p-2 mb-3 rounded bg-white/80"
              />
              <button className="w-full bg-green-600 py-2 rounded">Singup</button>
              <p className="mt-4 text-sm text-center">
               You have already an account ?{"  "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-green-700 font-bold"
                >
               .. Log In ..
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
