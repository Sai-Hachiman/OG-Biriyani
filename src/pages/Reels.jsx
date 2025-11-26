// src/pages/Reels.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Share2, Volume2, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const reelsData = [
  {
    id: 1,
    video: "https://cdn.pixabay.com/video/2022/12/21/17/07/food-7675014_960_720.mp4",
    poster: "/images/chicken-biryani.jpg",
    user: "ogbiryani",
    caption: "Perfect OG Chicken Biryani — aroma to die for 🔥",
    likes: 124,
    comments: [
      { id: 1, user: "Rahul", text: "Looks tasty!" },
      { id: 2, user: "Sneha", text: "Ordering soon 😋" },
    ],
  },
  {
    id: 2,
    video: "https://cdn.pixabay.com/video/2021/08/04/20/49/food-6527130_960_720.mp4",
    poster: "/images/mutton-biryani.jpg",
    user: "chef.og",
    caption: "Slow-cooked 🔥 Mutton Dum Biryani",
    likes: 98,
    comments: [{ id: 1, user: "Aman", text: "Family favorite" }],
  },
  {
    id: 3,
    video: "",
    poster: "/images/grilled-chicken.jpg",
    user: "grill_master",
    caption: "Charred to perfection — Grilled Chicken",
    likes: 78,
    comments: [],
  },
];

export default function Reels() {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef({});
  const [muted, setMuted] = useState(true);
  const [likedMap, setLikedMap] = useState({});
  const [showLikeAnim, setShowLikeAnim] = useState(false);
  const [burstHearts, setBurstHearts] = useState([]); // particles
  const lastTapRef = useRef(0);
  const likeTimeoutRef = useRef(null);

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentList, setCommentList] = useState(() => {
    const map = {};
    reelsData.forEach((r) => (map[r.id] = r.comments || []));
    return map;
  });
  const [newComment, setNewComment] = useState("");

  const reel = reelsData[index];

  // autoplay & pause other videos
  useEffect(() => {
    reelsData.forEach((r, i) => {
      const el = videoRefs.current[r.id];
      if (el && typeof el.play === "function") {
        if (i === index && r.video) {
          el.play().catch(() => {});
        } else {
          try {
            el.pause();
            el.currentTime = 0;
          } catch (e) {}
        }
      }
    });

    return () => {
      if (likeTimeoutRef.current) clearTimeout(likeTimeoutRef.current);
    };
  }, [index]);

  // keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown") setIndex((i) => (i + 1) % reelsData.length);
      if (e.key === "ArrowUp") setIndex((i) => (i - 1 + reelsData.length) % reelsData.length);
      if (e.key === "m") setMuted((m) => !m);
      if (e.key === "c") setCommentsOpen((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goNext = () => setIndex((i) => (i + 1) % reelsData.length);
  const goPrev = () => setIndex((i) => (i - 1 + reelsData.length) % reelsData.length);

  const onDragEnd = (e, info) => {
    if (info.offset.y < -50) goNext();
    if (info.offset.y > 50) goPrev();
  };

  // detect double-tap / double-click
  const handleTap = (reelId) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
      doLike(reelId);
    }
    lastTapRef.current = now;
  };

  const doLike = (id) => {
    setLikedMap((p) => ({ ...p, [id]: true }));
    setShowLikeAnim(true);
    if (likeTimeoutRef.current) clearTimeout(likeTimeoutRef.current);
    likeTimeoutRef.current = setTimeout(() => setShowLikeAnim(false), 700);

    // spawn burst particles
    const particles = [...Array(6)].map((_, i) => ({
      id: `${Date.now()}_${i}`,
      left: 50 + (Math.random() * 60 - 30), // percent from center
      rotate: Math.random() * 40 - 20,
      delay: Math.random() * 0.15,
    }));
    setBurstHearts(particles);

    // clear particles after animation
    setTimeout(() => setBurstHearts([]), 900);
  };

  const addComment = (reelId) => {
    if (!newComment.trim()) return;
    setCommentList((prev) => ({
      ...prev,
      [reelId]: [...(prev[reelId] || []), { id: Date.now(), user: "You", text: newComment.trim() }],
    }));
    setNewComment("");
  };

  // toggle play/pause on single click
  const togglePlayPause = (r) => {
    const v = videoRefs.current[r.id];
    if (v && typeof v.paused === "boolean") {
      if (v.paused) v.play().catch(() => {});
      else v.pause();
    }
  };

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* blurred poster background */}
      <div
        className="absolute inset-0 bg-center bg-cover transform scale-110 filter blur-xl opacity-60"
        style={{ backgroundImage: `url(${reel.poster || ""})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Back button */}
      <Link
        to="/gallery"
        className="absolute top-5 left-5 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-full text-white text-sm hover:bg-white/20"
      >
        <ArrowLeft size={16} /> Back to Gallery
      </Link>

      {/* reel card centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative w-[360px] md:w-[420px] aspect-[9/12] bg-black rounded-3xl overflow-hidden shadow-2xl pointer-events-auto"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={onDragEnd}
        >
          {/* video or image */}
          {reel.video ? (
            <video
              ref={(el) => (videoRefs.current[reel.id] = el)}
              src={reel.video}
              poster={reel.poster}
              className="w-full h-full object-cover"
              playsInline
              loop
              muted={muted}
            />
          ) : (
            <img src={reel.poster} alt={reel.caption} className="w-full h-full object-cover" />
          )}

          {/* user info */}
          <div className="absolute top-4 left-4 flex items-center gap-3 text-white pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-white/20 border border-white/10" />
            <div>
              <div className="font-semibold">@{reel.user}</div>
              <div className="text-xs opacity-80">OG Biryani</div>
            </div>
          </div>

          {/* caption + back link (inside card for convenience) */}
          <div className="absolute left-4 bottom-20 text-white max-w-[70%]">
            <div className="font-semibold">{reel.user}</div>
            <div className="text-sm opacity-90">{reel.caption}</div>
          </div>

          {/* action column */}
          <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 text-white">
            {/* Like */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => doLike(reel.id)}
                aria-label="like"
                className="focus:outline-none"
              >
                <Heart size={30} className={likedMap[reel.id] ? "text-red-500" : "text-white/90"} />
              </button>
              <div className="text-xs mt-1">{reel.likes + (likedMap[reel.id] ? 1 : 0)}</div>
            </div>

            {/* Comments */}
            <div className="flex flex-col items-center">
              <button onClick={() => setCommentsOpen(true)} aria-label="open comments">
                <MessageCircle size={28} className="text-white/90" />
              </button>
              <div className="text-xs mt-1">{(commentList[reel.id] || []).length}</div>
            </div>

            {/* Share */}
            <div>
              <button
                onClick={() =>
                  navigator.share
                    ? navigator.share({ title: reel.caption, url: window.location.href })
                    : alert("Share not supported in this browser")
                }
              >
                <Share2 size={26} className="text-white/90" />
              </button>
            </div>

            {/* Volume */}
            <div>
              <button onClick={() => setMuted((m) => !m)}>
                <Volume2 size={24} className="text-white/90" />
              </button>
            </div>
          </div>

          {/* clickable overlay: single click toggles play, double triggers like */}
          <div
            className="absolute inset-0"
            onDoubleClick={() => handleTap(reel.id)}
            onClick={() => togglePlayPause(reel)}
          />

          {/* big center heart on double-tap */}
          <AnimatePresence>
            {showLikeAnim && (
              <motion.div
                key="big-heart"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.3, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <Heart size={120} className="text-red-500 drop-shadow-2xl" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* floating heart particles */}
          {burstHearts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10, scale: 0.6 }}
              animate={{ opacity: 1, y: -120 - i * 10, scale: 1, rotate: p.rotate }}
              exit={{ opacity: 0 }}
              transition={{ delay: p.delay, duration: 0.9, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: `${p.left}%`,
                bottom: "40%",
                pointerEvents: "none",
              }}
            >
              <Heart size={30} className="text-red-400 drop-shadow" />
            </motion.div>
          ))}

          {/* nav arrows (small) */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
              onClick={goPrev}
              className="bg-black/30 text-white rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="prev"
            >
              ↑
            </button>
            <button
              onClick={goNext}
              className="bg-black/30 text-white rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="next"
            >
              ↓
            </button>
          </div>
        </motion.div>
      </div>

      {/* comments drawer */}
      <AnimatePresence>
        {commentsOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl overflow-auto"
          >
            <div className="p-4 border-b flex items-center justify-between">
              <div>
                <div className="font-bold">Comments</div>
                <div className="text-sm text-gray-600">on @{reel.user}'s reel</div>
              </div>
              <button onClick={() => setCommentsOpen(false)}>
                <X />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {(commentList[reel.id] || []).length === 0 && (
                <div className="text-sm text-gray-500">No comments yet. Be the first!</div>
              )}

              {(commentList[reel.id] || []).map((c) => (
                <div key={c.id} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="text-sm font-semibold">{c.user}</div>
                    <div className="text-sm text-gray-700">{c.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t sticky bottom-0 bg-white">
              <div className="flex gap-2">
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 border rounded-lg px-3 py-2"
                />
                <button onClick={() => addComment(reel.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Send
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
