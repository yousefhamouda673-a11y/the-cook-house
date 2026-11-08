import React, { useState, useRef } from 'react';
import { Waves, Sparkles, Compass, Volume2, VolumeX, Trees, Heart } from 'lucide-react';
import { PARK_HIGHLIGHTS, RESTAURANT_INFO } from '../data/restaurantData';

export const AtmosphereStory: React.FC = () => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Synthesize realistic gentle water creek babble using Web Audio API
  const toggleStreamSound = () => {
    if (isPlayingSound) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlayingSound(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // White noise generator
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Lowpass filter to simulate water whoosh & stream tone
        const lowpass = ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.setValueAtTime(450, ctx.currentTime);

        // Bandpass filter for gentle bubbling trickles
        const bandpass = ctx.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.setValueAtTime(800, ctx.currentTime);
        bandpass.Q.setValueAtTime(3.0, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime); // gentle ambient volume
        gainNodeRef.current = gainNode;

        whiteNoise.connect(lowpass);
        lowpass.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();
        setIsPlayingSound(true);
      } catch (err) {
        console.error("Audio stream error:", err);
      }
    }
  };

  return (
    <section id="atmosphere" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
            <Trees className="w-4 h-4 text-emerald-800" />
            <span>Holly River State Park · Hacker Valley, WV</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Where Nature Meets Appalachian Hospitality
          </h2>
          
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            More than just a meal—The Cookhouse is an essential mountain waypoint. 
            Tucked deep within West Virginia's mountain park forest, right beside a clear, bubbling stream.
          </p>

          {/* Interactive Stream Ambient Audio Toggle */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={toggleStreamSound}
              className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isPlayingSound
                  ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-600/30'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 shadow-xs'
              }`}
            >
              {isPlayingSound ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-300 animate-pulse" />
                  <span>Playing Mountain Stream Sounds · Click to Mute</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-stone-400" />
                  <span>Simulate Creekside Stream Audio</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Story Grid with The Cook & The Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
          
          {/* Card 1: The Mountain Stream & Benches */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-900">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-900">
                The Bubbling Mountain Creek & Benches
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                As local guide Copernicus Kali noted in his review: <em>"Atmosphere is incredible, 
                a bubbling stream runs along the outside of the restaurant with benches where you can 
                enjoy a map and nature."</em>
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Before or after ordering, step out onto the bank of the creek. Listen to the soothing 
                mountain water over smooth river stones, plan your hike up to Shupe's Chute, 
                or just breathe in the crisp hemlock-scented mountain air.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-4 text-xs text-stone-500">
              <span>Outdoor wooden benches</span>
              <span aria-hidden="true">·</span>
              <span>Trailhead adjacent</span>
              <span aria-hidden="true">·</span>
              <span>Dog friendly patio</span>
            </div>
          </div>

          {/* Card 2: The Cook is a National Treasure */}
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-8 border border-stone-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                "The Cook is a Machine. She is a National Treasure!"
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Regulars and travelers all talk about our legendary head cook. Working with relentless energy 
                and honest mountain pride, she fires every ribeye, flips every hand-pressed patty melt, 
                and rolls every breakfast biscuit with time-honored precision.
              </p>
              <p className="text-stone-300 text-sm leading-relaxed">
                There are no shortcuts here. Our green beans are slow-simmered with country bacon, our fries 
                are hand-sliced from real potatoes all day long, and burger buns are freshly baked.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center gap-4 text-xs text-amber-400 font-medium">
              <span>Scratch kitchen</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Fresh local ingredients</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Appalachian diner tradition</span>
            </div>
          </div>

        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARK_HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xs p-6 rounded-xl border border-stone-200/80 space-y-2.5"
            >
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                0{index + 1}. Highlight
              </div>
              <h4 className="font-display text-lg font-bold text-stone-900">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
