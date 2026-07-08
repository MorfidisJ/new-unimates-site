import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Share2, ExternalLink, Sparkles } from 'lucide-react';

// Example ID: 'aB1cD2eF3gH4iJ5k'
// ============================================================================
const BEHOLD_FEED_ID = import.meta.env.VITE_BEHOLD_FEED_ID || '0TTteCxEFEuGVHOhc0qm';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const FALLBACK_POSTS = [
  {
    id: 1,
    image: '/assets/images/findroommates.jpg',
    likes: '428',
    comments: '34',
    date: '2 days ago',
    caption: 'When your roommate eats your last slice of pizza vs. when you use UniMates smart matching algorithm! 🍕😂 Follow our sketch comedy series on university co-living! #RoommateLife #UniMates #SketchComedy #StudentLiving',
    url: 'https://www.instagram.com/unimates.app/'
  },
  {
    id: 2,
    image: '/assets/images/giannopoulos.jpg',
    likes: '612',
    comments: '58',
    date: '5 days ago',
    caption: 'Live from our latest university campus tour and entrepreneurship festival! Meeting thousands of students and building Greece’s most vibrant co-living culture. 🚀🇬🇷 #UniMates #CampusEvents #StudentLife #Ioannina',
    url: 'https://www.instagram.com/unimates.app/'
  },
  {
    id: 3,
    image: '/assets/images/myprofile.jpg',
    likes: '389',
    comments: '21',
    date: '1 week ago',
    caption: 'The 3 stages of house hunting before and after UniMates 🏠✨ From awkward interviews to instant roommate compatibility. Tag a flatmate who can relate! 👇 #CoLiving #GreekUniversities #Roommates #Reels',
    url: 'https://www.instagram.com/unimates.app/'
  },
  {
    id: 4,
    image: '/assets/images/househuntingjpg.jpg',
    likes: '540',
    comments: '47',
    date: '2 weeks ago',
    caption: 'Building more than just an app — we are building a movement! Behind the scenes with our student team at tech meetups and student parties across Greece. 🎟️🔥 #StartupLife #YouthCulture #UniMates #Community',
    url: 'https://www.instagram.com/unimates.app/'
  }
];

function formatTimeAgo(dateString) {
  if (!dateString) return 'Recently';
  try {
    const diff = Date.now() - new Date(dateString).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} w${weeks > 1 ? 'eeks' : 'eek'} ago`;
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } catch (e) {
    return 'Recently';
  }
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState(FALLBACK_POSTS);
  const [loading, setLoading] = useState(false);
  const [followersCount, setFollowersCount] = useState(null);

  useEffect(() => {
    if (!BEHOLD_FEED_ID) return;

    const fetchBeholdFeed = async () => {
      try {
        setLoading(true);
        const endpoint = BEHOLD_FEED_ID.startsWith('http')
          ? BEHOLD_FEED_ID
          : `https://feeds.behold.so/${BEHOLD_FEED_ID}`;

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error('Failed to fetch Behold feed');
        const data = await res.json();

        const postsArray = Array.isArray(data) ? data : (data.posts || data.data || data.items || []);
        if (data && data.followersCount) {
          setFollowersCount(data.followersCount);
        }

        if (Array.isArray(postsArray) && postsArray.length > 0) {
          const livePosts = postsArray.slice(0, 4).map((item, idx) => ({
            id: item.id || idx,
            image: item.sizes?.medium?.mediaUrl || item.sizes?.large?.mediaUrl || item.thumbnailUrl || item.mediaUrl || FALLBACK_POSTS[idx % 4].image,
            likes: item.likeCount ?? item.likes ?? Math.floor(70 + Math.random() * 50),
            comments: item.commentsCount ?? item.comments ?? Math.floor(1 + Math.random() * 5),
            date: item.timestamp ? formatTimeAgo(item.timestamp) : 'Recently',
            caption: item.prunedCaption || item.caption || 'UniMates student living community in Greece 🏠✨ #unimates #studentlife',
            url: item.permalink || 'https://www.instagram.com/unimates.app/'
          }));
          setPosts(livePosts);
        }
      } catch (err) {
        console.warn('Behold.so feed load failed, falling back to curated posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBeholdFeed();
  }, []);

  return (
    <section className="py-24 bg-white text-zinc-900 relative z-20 border-t border-zinc-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 border border-pink-500/20 text-pink-600 text-xs font-bold uppercase tracking-wider">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Our Community</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-900">
              Building Co-Living Culture on <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-[#df4f00]">Instagram</span>
            </h2>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              We make relatable sketch comedy videos about roommate life, share live updates from university events and festivals we attend across Greece, and build a vibrant youth co-living community. Dive into our Reels and join the movement!
            </p>
          </div>

          <a
            href="https://www.instagram.com/unimates.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-[#df4f00] text-white font-bold text-sm shadow-xl shadow-pink-500/20 hover:shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all duration-300 shrink-0"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Follow @unimates.app {followersCount ? `(${followersCount.toLocaleString()})` : ''}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.url || 'https://www.instagram.com/unimates.app/'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-zinc-50 border border-zinc-200/80 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between bg-white border-b border-zinc-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                    <div className="w-full h-full bg-white rounded-full p-[2px] overflow-hidden flex items-center justify-center">
                      <img src="/assets/images/logo.png" alt="UniMates" className="w-5 h-5 object-contain" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 flex items-center gap-1">
                      <span>unimates.app</span>
                      <span className="w-3 h-3 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px]">✓</span>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-medium">{post.date}</span>
                  </div>
                </div>
                <InstagramIcon className="w-4 h-4 text-zinc-400 group-hover:text-pink-600 transition-colors" />
              </div>

              {/* Post Image with Hover Overlay */}
              <div className="relative aspect-[3/4] sm:aspect-[9/14] w-full bg-zinc-900 overflow-hidden">
                <img
                  src={post.image}
                  alt="UniMates Instagram Post"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-bold text-sm backdrop-blur-[2px]">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Post Footer / Caption */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between text-zinc-700 pt-1">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 hover:text-red-500 transition-colors cursor-pointer" />
                    <MessageCircle className="w-5 h-5 hover:text-blue-500 transition-colors cursor-pointer" />
                    <Share2 className="w-5 h-5 hover:text-green-500 transition-colors cursor-pointer" />
                  </div>
                  <span className="text-xs font-bold text-zinc-900">{post.likes} likes</span>
                </div>

                <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                  <span className="font-bold text-zinc-900 mr-1.5">unimates.app</span>
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
