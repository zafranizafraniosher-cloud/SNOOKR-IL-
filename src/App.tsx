/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DiscordIcon } from './components/DiscordIcon';
import { RobloxIcon } from './components/RobloxIcon';
import { TikTokIcon } from './components/TikTokIcon';
import { ExternalLink } from 'lucide-react';

const ROBLOX_GAME_URL = 'https://www.roblox.com/games/92328574529079/ChillZone';
const DISCORD_INVITE_URL = 'https://discord.gg/Z9dyMgkVJ';
const TIKTOK_PROFILE_URL = 'https://www.tiktok.com/@snooker_il';
const TIKTOK_CREATOR_URL = 'https://www.tiktok.com/@chillzone482?_r=1&_t=ZS-9AxppE1lYcp';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b0e] text-[#dbdee1] flex flex-col items-center justify-center p-6 antialiased selection:bg-[#5865F2] selection:text-white relative overflow-hidden">
      {/* Dynamic ambient background glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#5865F2]/20 via-[#059669]/15 to-[#fe2c55]/15 blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-md text-center">
        
        {/* Title with textured metallic / emerald-chrome typography */}
        <div className="mb-12 sm:mb-14 -mt-8 sm:-mt-12 flex flex-col items-center">
          
          {/* Snooker ball accent icon */}
          <div className="mb-3 w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 via-black to-zinc-900 border border-zinc-700/60 shadow-xl flex items-center justify-center relative shadow-black/80">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-inner">
              <span className="text-[11px] font-black text-black leading-none font-mono">8</span>
            </div>
            <div className="absolute top-1 right-2 w-3 h-1.5 bg-white/30 rounded-full blur-[0.5px] transform -rotate-45" />
          </div>

          {/* Textured headline */}
          <h1 className="text-5xl sm:text-6xl font-black tracking-widest uppercase select-none relative">
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b] drop-shadow-[0_4px_16px_rgba(255,255,255,0.15)] filter"
              style={{
                textShadow: '0 0 30px rgba(88,101,242,0.3)',
                letterSpacing: '0.15em',
              }}
            >
              SNOOKR IL
            </span>
          </h1>

          {/* Subtitle hairline divider with textured emerald glow */}
          <div className="flex items-center gap-3 mt-3">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-emerald-400/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">
              קהילת הסנוקר והמשחקים
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-emerald-400/60" />
          </div>
        </div>

        {/* Buttons Stack */}
        <div className="flex flex-col items-center gap-3.5 w-full">
          
          {/* 1. TikTok Profile Button - My TikTok (@snooker_il) */}
          <a
            href={TIKTOK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex items-center justify-between px-7 py-4 text-base sm:text-lg font-bold text-white bg-[#141418] hover:bg-[#1d1d24] border border-white/10 hover:border-[#fe2c55]/40 active:scale-95 rounded-2xl shadow-xl transition-all duration-200 select-none cursor-pointer hover:shadow-[#fe2c55]/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#fe2c55]/20 to-[#25f4ee]/20 border border-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200">
                <TikTokIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <span className="block leading-tight">עמוד הטיקטוק הרשמי</span>
                <span className="block text-xs text-zinc-400 font-normal dir-ltr text-right">@snooker_il</span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* 2. Discord Server Entrance Button */}
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex items-center justify-between px-7 py-4 text-base sm:text-lg font-bold text-white bg-[#5865F2] hover:bg-[#4752C4] active:scale-95 rounded-2xl shadow-xl shadow-[#5865F2]/25 hover:shadow-[#5865F2]/45 transition-all duration-200 select-none cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200">
                <DiscordIcon className="w-6 h-6" />
              </div>
              <div className="text-right">
                <span className="block leading-tight">כניסה לשרת הדיסקורד</span>
                <span className="block text-xs text-white/70 font-normal">קהילת דיסקורד רשמית</span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* 3. Roblox Game Entrance Button */}
          <a
            href={ROBLOX_GAME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex items-center justify-between px-7 py-4 text-base sm:text-lg font-bold text-white bg-[#16181c] hover:bg-[#202329] border border-white/10 hover:border-emerald-500/40 active:scale-95 rounded-2xl shadow-xl transition-all duration-200 select-none cursor-pointer hover:shadow-emerald-950/20"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200">
                <RobloxIcon className="w-6 h-6" />
              </div>
              <div className="text-right">
                <span className="block leading-tight">כניסה למשחק ברובלוקס</span>
                <span className="block text-xs text-zinc-400 font-normal">ChillZone</span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* 4. TikTok Profile Button - Game Creator (@chillzone482) */}
          <a
            href={TIKTOK_CREATOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex items-center justify-between px-7 py-4 text-base sm:text-lg font-bold text-white bg-[#141418] hover:bg-[#1d1d24] border border-white/10 hover:border-[#25f4ee]/40 active:scale-95 rounded-2xl shadow-xl transition-all duration-200 select-none cursor-pointer hover:shadow-[#25f4ee]/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#25f4ee]/20 to-[#fe2c55]/20 border border-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200">
                <TikTokIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <span className="block leading-tight">יוצר המשחק</span>
                <span className="block text-xs text-zinc-400 font-normal dir-ltr text-right">@chillzone482</span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </a>

        </div>

      </div>
    </div>
  );
}
