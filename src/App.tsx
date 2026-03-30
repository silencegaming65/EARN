/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  Trophy, 
  DollarSign, 
  AlertCircle,
  Smartphone,
  CheckCircle2,
  PlayCircle,
  UserPlus,
  Wallet,
  Gamepad2,
  Menu,
  X,
  BookOpen,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  Mail,
  Plus,
  Minus
} from "lucide-react";
import { useState, useEffect } from "react";

interface AppCardProps {
  key?: number | string;
  rank: number;
  name: string;
  description: string;
  bonus: string;
  referralLink: string;
  isHot?: boolean;
  pros: string[];
  cons: string[];
  image?: string;
}

const AppCard = ({ rank, name, description, bonus, referralLink, isHot, pros, cons, image }: AppCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: rank * 0.1 }}
    className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 overflow-hidden"
  >
    {isHot && (
      <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1 z-10">
        <Zap size={10} fill="currentColor" /> Hot
      </div>
    )}
    
    <div className="flex flex-col md:flex-row items-start gap-6">
      {image && (
        <div className="w-full md:w-48 h-32 md:h-48 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-gray-900 text-white text-xs font-black rounded-full flex items-center justify-center shadow-sm">
            #{rank}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{name}</h3>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2 flex items-center gap-1">
              <ThumbsUp size={12} /> Pros
            </h4>
            <ul className="space-y-1">
              {pros.map((pro, i) => (
                <li key={i} className="text-xs text-gray-500 flex items-start gap-1">
                  <span className="text-green-500">•</span> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2 flex items-center gap-1">
              <ThumbsDown size={12} /> Cons
            </h4>
            <ul className="space-y-1">
              {cons.map((con, i) => (
                <li key={i} className="text-xs text-gray-500 flex items-start gap-1">
                  <span className="text-red-500">•</span> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
            <Trophy size={12} className="mr-1" /> {bonus}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
            <CheckCircle2 size={12} className="mr-1" /> Verified
          </span>
        </div>

        <a 
          href={referralLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 active:scale-95 transition-all shadow-lg shadow-green-200 group-hover:shadow-green-300"
        >
          PLAY NOW <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </motion.div>
);

const apps = [
  {
    name: "91 Club",
    description: "Highly popular among students. Offers the highest referral commissions and daily rewards. Great for building a network.",
    bonus: "₹200 Instant Bonus",
    referralLink: "https://www.rajkot91.com/#/register?invitationCode=517864600730",
    isHot: true,
    pros: ["Best referral program", "Daily login rewards", "Simple UI"],
    cons: ["Withdrawal limits", "Occasional server lag"],
    image: "https://todaysaga.com/wp-content/uploads/2025/04/images.png"
  },
  {
    name: "BDG Win",
    description: "New and rising platform with high winning rates and low minimum withdrawal limits. Great for small-scale traders.",
    bonus: "₹100 Welcome Bonus",
    referralLink: "https://bdgwinfun.cc//#/register?invitationCode=543415847079",
    isHot: true,
    pros: ["Low withdrawal limit", "High winning rate", "Easy signup"],
    cons: ["Limited history", "Small user base"],
    image: "https://todaysaga.com/wp-content/uploads/2025/04/BDG-Win.jpg"
  },
  {
    name: "82 Lottery",
    description: "A top-rated lottery and color trading app with a massive user base. Offers diverse gaming options and consistent winning opportunities.",
    bonus: "₹300 Signup Bonus",
    referralLink: "https://www.tkfvhz82.com/#/register?invitationCode=146483613614",
    isHot: true,
    pros: ["Large user community", "Diverse game selection", "Consistent payouts"],
    cons: ["Newer platform", "Support response times vary"],
    image: "https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2025/02/82-Lottery.jpg"
  },
  {
    name: "Tiranga Games",
    description: "Indian-themed platform with a wide variety of games including Wingo and Small/Big. Very reliable for long-term play.",
    bonus: "100% First Deposit",
    referralLink: "https://tgdream15.com/#/register?invitationCode=3553710719241",
    pros: ["Multiple game modes", "Secure payment gateway", "Local support"],
    cons: ["Verification takes time", "Limited bonus events"],
    image: "https://th.bing.com/th/id/OIP.NewH_aaTJdqznBZqDHrIiAHaHa?w=312&h=200&c=12&rs=1&o=6&pid=23.1"
  },
  {
    name: "Big Daddy Games",
    description: "Premium gaming experience with high-stakes tables and exclusive VIP clubs. Perfect for serious traders.",
    bonus: "VIP Rewards",
    referralLink: "https://bdglink.cc//#/register?invitationCode=155225204808",
    pros: ["VIP exclusive perks", "High stakes available", "Premium interface"],
    cons: ["Not for beginners", "High withdrawal fees"],
    image: "https://sc.filehippo.net/images/t_app-icon-l/p/0ccc49af-6b41-4167-b384-ce977c70bf1e/241038175/big-daddy-colour-game-logo"
  },
  {
    name: "OK Win",
    description: "New and fast-growing color trading platform with high winning accuracy and instant withdrawals. Very user-friendly.",
    bonus: "₹100 Signup Bonus",
    referralLink: "https://okwinslots2.com/#/register?invitationCode=348713236120",
    pros: ["Modern interface", "Low entry barrier", "Fast processing"],
    cons: ["New platform risk", "Fewer game options"],
    image: "https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2025/02/OK-Win-Color.jpg"
  },
  {
    name: "TC Lottery",
    description: "Specialized in lottery and color trading. Known for its simple interface and fast payouts. Very consistent performance.",
    bonus: "Daily Check-in Bonus",
    referralLink: "https://www.in999ff.com/#/register?invitationCode=246422416975",
    pros: ["Consistent payouts", "Simple navigation", "Low data usage"],
    cons: ["Dated design", "Limited support hours"],
    image: "https://tse1.mm.bing.net/th/id/OIP.WsC7BIdz-e2ApjEBZg1r5QHaEc?pid=ImgDet&w=192&h=115&c=7&o=7&rm=3"
  },
  {
    name: "55club",
    description: "A premium and highly secure color trading platform with a massive user base and consistent winning patterns. Known for its reliability.",
    bonus: "₹150 Signup Bonus",
    referralLink: "https://www.ldqodg55.com/#/register?invitationCode=376624600269",
    pros: ["High security", "Large community", "Consistent patterns"],
    cons: ["Strict verification", "Higher minimum withdrawal"],
    image: "https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2025/02/55-Club.jpg"
  },
  {
    name: "Raja Games",
    description: "A popular and trusted color trading platform with a royal experience. Known for its high winning rates and instant withdrawal features.",
    bonus: "₹200 Signup Bonus",
    referralLink: "https://www.rajaparty.com/#/register?invitationCode=86271664783",
    pros: ["Royal user experience", "Instant withdrawals", "High winning rates"],
    cons: ["Higher minimum deposit", "Limited game variety"],
    image: "https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2025/02/Raja-Game-App.jpg"
  },
  {
    name: "Bharat Club",
    description: "Community-focused earning app with great social features and group winning strategy. Excellent for team play.",
    bonus: "Referral Rewards",
    referralLink: "https://bhtclub3.com/#/register?invitationCode=365871781234",
    pros: ["Group play features", "Social integration", "Good commissions"],
    cons: ["Requires active team", "Withdrawal delays"],
    image: "https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2025/02/Bharat-Club.jpg"
  }
];

const blogPosts = [
  {
    title: "Top 5 Strategies for Color Trading Apps 2026",
    excerpt: "Master the art of color prediction with these proven strategies that can help you maximize your winnings and minimize risks.",
    date: "March 20, 2026"
  },
  {
    title: "Beginner's Guide to OK Win: How to Start",
    excerpt: "New to OK Win? This comprehensive guide covers everything from registration to your first successful withdrawal.",
    date: "March 15, 2026"
  },
  {
    title: "Understanding the Small/Big Pattern in Tiranga Games",
    excerpt: "Learn how to analyze historical data to predict the next Small or Big result with higher accuracy in Tiranga Games.",
    date: "March 10, 2026"
  }
];

const faqs = [
  {
    question: "What is color trading?",
    answer: "Color trading is a simple prediction game where users bet on colors (usually Red, Green, or Violet) or numbers. If your prediction is correct, you win a multiple of your bet amount. It's popular for its simplicity and fast results."
  },
  {
    question: "Are these apps safe to use?",
    answer: "We only list apps that have a proven track record of payouts. However, all trading and gaming apps involve financial risk. We recommend starting with small amounts and never investing more than you can afford to lose."
  },
  {
    question: "How do I withdraw my winnings?",
    answer: "Most apps support instant withdrawals to your bank account via UPI or IMPS. Simply go to the 'Withdraw' section in the app, enter your bank details, and the amount you wish to withdraw."
  },
  {
    question: "What is the minimum deposit amount?",
    answer: "The minimum deposit varies by app but typically ranges from ₹100 to ₹500. Some platforms offer special bonuses for your first deposit."
  },
  {
    question: "How can I earn from referrals?",
    answer: "Each app provides a unique referral link. When someone joins using your link and starts playing, you earn a commission on their trades. Some apps like 91 Club offer multi-level referral commissions."
  },
  {
    question: "Is color trading legal in India?",
    answer: "The legal status of such apps can be complex and varies by state. Most of these platforms operate as 'games of skill' in many jurisdictions, but we advise checking your local laws before participating."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">Earn2026</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#apps-list" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">Rankings</a>
            <a href="#how-to-play" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">How to Play</a>
            <a href="#blog" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">Blog</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://t.me/groupforstudentneed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#229ED9] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#1e8dbf] transition-colors"
            >
              <MessageCircle size={18} /> Join Telegram
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4"
          >
            <a href="#apps-list" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-gray-600">Rankings</a>
            <a href="#how-to-play" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-gray-600">How to Play</a>
            <a href="#blog" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-gray-600">Blog</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-gray-600">FAQ</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-gray-600">Contact</a>
            <a href="https://t.me/groupforstudentneed" className="flex items-center gap-2 bg-[#229ED9] text-white px-4 py-2 rounded-full text-sm font-bold justify-center">
              <MessageCircle size={18} /> Join Telegram
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-green-50 via-transparent to-transparent opacity-70" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Star size={14} fill="currentColor" /> Updated for 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Top 10 Color Trading <br className="hidden sm:block" />
            <span className="text-green-600">& Earning Apps 2026</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed"
          >
            Color trading apps are online platforms where users predict color outcomes to earn rewards. This site provides <strong>information and analysis only, not guaranteed earnings</strong>. Start your earning journey today with our hand-picked selection of the most reliable platforms.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#apps-list" 
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
            >
              View Rankings <Smartphone size={20} />
            </a>
            <a 
              href="https://t.me/groupforstudentneed" 
              className="w-full sm:w-auto px-8 py-4 bg-[#229ED9] text-white rounded-2xl font-bold hover:bg-[#1e8dbf] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
            >
              Get Winning Strategy <MessageCircle size={20} />
            </a>
          </motion.div>
        </div>
      </header>

      {/* Stats/Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
          <div className="text-center p-4">
            <div className="text-2xl font-black text-gray-900">1M+</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Active Users</div>
          </div>
          <div className="text-center p-4 border-l border-gray-100">
            <div className="text-2xl font-black text-gray-900">₹50Cr+</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Total Earned</div>
          </div>
          <div className="text-center p-4 border-l border-gray-100">
            <div className="text-2xl font-black text-gray-900">100%</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Verified Apps</div>
          </div>
          <div className="text-center p-4 border-l border-gray-100">
            <div className="text-2xl font-black text-gray-900">24/7</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Support</div>
          </div>
        </div>
      </section>

      {/* Main List */}
      <main id="apps-list" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Trophy className="text-yellow-500" /> Official Rankings
          </h2>
          <div className="text-sm text-gray-500 font-medium italic">
            Last updated: March 2026
          </div>
        </div>

        <div className="space-y-6">
          {apps.map((app, index) => (
            <AppCard 
              key={index}
              rank={index + 1}
              name={app.name}
              description={app.description}
              bonus={app.bonus}
              referralLink={app.referralLink}
              isHot={app.isHot}
              pros={app.pros}
              cons={app.cons}
              image={(app as any).image}
            />
          ))}
        </div>

        {/* How to Play Section */}
        <section id="how-to-play" className="mt-32 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4 flex items-center justify-center gap-2">
              <PlayCircle className="text-green-600" /> How to Play & Earn
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Follow these simple steps to start your earning journey and master color trading with the best earning strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <UserPlus size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Register & Verify</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Choose a color trading app from our top 10 list and sign up using your mobile number. Make sure to use our links to claim your exclusive signup bonus.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Wallet size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Add Funds</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deposit a small amount to start. Most apps support UPI, GPay, and PhonePe for instant deposits. Always start with what you can afford.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Gamepad2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Predict & Win</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Choose a color (Red, Green, or Violet) or a number. If your prediction is correct, you win! Use our Telegram analysis to improve your accuracy.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">4. Instant Withdrawal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once you win, you can withdraw your earnings directly to your bank account via UPI or Bank Transfer. Most withdrawals are processed within minutes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mt-32 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4 flex items-center justify-center gap-2">
              <BookOpen className="text-blue-600" /> Latest Tips & Strategies
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Stay ahead of the game with our expert analysis and latest news from the world of color trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="text-xs text-blue-600 font-bold mb-2">{post.date}</div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <a href="#" className="text-sm font-bold text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-32 scroll-mt-24">
          <div className="bg-white rounded-[40px] p-8 sm:p-12 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about a specific app or need help with your strategy? Our team is here to help you 24/7.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase">Email Us</div>
                      <a href="mailto:support@earn2026.com" className="text-sm font-bold hover:text-green-600 transition-colors">support@earn2026.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl relative">
                {isSent ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Email Client</h3>
                    <p className="text-gray-500 text-sm mb-6">
                      We've prepared your message. Please send the email in the window that just opened.
                    </p>
                    <button 
                      onClick={() => setIsSent(false)}
                      className="text-green-600 font-bold text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form 
                    className="space-y-4" 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const name = formData.get('name') as string;
                      const email = formData.get('email') as string;
                      const message = formData.get('message') as string;
                      
                      const subject = encodeURIComponent(`Earn2026: Message from ${name}`);
                      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                      
                      const mailtoLink = `mailto:support@earn2026.com?subject=${subject}&body=${body}`;
                      window.location.href = mailtoLink;
                      setIsSent(true);
                    }}
                  >
                    <input name="name" type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all bg-white" />
                    <input name="email" type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all bg-white" />
                    <textarea name="message" placeholder="Your Message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none bg-white"></textarea>
                    <button type="submit" className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200">
                      Send Message via Email
                    </button>
                    <p className="text-[10px] text-gray-400 text-center">
                      This will open your default email application to send the message.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mt-32 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Our Commitment to You</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We prioritize security, transparency, and support to ensure your earning journey is safe and successful.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Secure Payouts",
                desc: "Every withdrawal is processed through encrypted channels for your safety.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 7V12C3 17.41 6.84 22.38 12 24C17.16 22.38 21 17.41 21 12V7L12 2Z" fill="#0F172A"/>
                    <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "24/7 Support",
                desc: "Our dedicated team is available around the clock to help you with any queries.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#0F172A" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "100% Verified",
                desc: "We rigorously test every app before listing it on our platform.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="10" fill="#0F172A"/>
                    <path d="M7 12L10 15L17 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Top Rankings",
                desc: "Only the highest-performing and most reliable apps make it to our top list.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9H4V11C4 13.21 5.79 15 8 15H9" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 9H20V11C20 13.21 18.21 15 16 15H15" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 15H9V17C9 18.66 10.34 20 12 20C13.66 20 15 18.66 15 17V15Z" fill="#0F172A"/>
                    <path d="M12 5V15" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 21H16" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-green-500/5 transition-all group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Telegram CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MessageCircle size={200} />
          </div>
          <h2 className="text-3xl font-black mb-4 relative z-10">Want Winning Analysis?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto relative z-10">
            Join our exclusive Telegram channel where we share daily winning predictions and strategic analysis for all top earning apps.
          </p>
          <a 
            href="https://t.me/groupforstudentneed" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl relative z-10"
          >
            JOIN TELEGRAM NOW <ArrowRight size={20} />
          </a>
        </motion.div>
      </main>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Everything you need to know about color trading apps and how to get started safely.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaqIndex === index ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-50 text-gray-400'}`}>
                    {openFaqIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openFaqIndex === index ? 'auto' : 0, opacity: openFaqIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-bold text-xl tracking-tight">Earn2026</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your trusted guide to the best earning opportunities in 2026. We verify every platform to ensure safety and reliability for our users.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-600" /> Safety First
              </h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Verified Payouts</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Secure Platforms</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> 24/7 Support</li>
                <li className="flex items-center gap-2 pt-2 border-t border-gray-50">
                  <a href="#faq" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                    View FAQ <ArrowRight size={12} />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertCircle size={18} className="text-orange-500" /> Disclaimer
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Trading and gaming involve financial risk. This website provides information and analysis only. We are not the owners or operators of the listed apps and are not responsible for any financial loss. Please play responsibly and only invest what you can afford to lose. 18+ only.
              </p>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-50 text-center text-xs text-gray-400">
            &copy; 2026 Earn2026. All rights reserved. Made for the community.
          </div>
        </div>
      </footer>

      {/* Mobile Telegram Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {showBackToTop && (
          <button 
            onClick={scrollToTop}
            className="w-14 h-14 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-2xl border border-gray-100 hover:bg-gray-50 transition-all"
          >
            <ChevronUp size={28} />
          </button>
        )}
        <a 
          href="https://t.me/groupforstudentneed" 
          className="w-14 h-14 bg-[#229ED9] text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce sm:animate-none sm:hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
}
