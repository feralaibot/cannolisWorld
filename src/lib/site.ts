import {
  Coins,
  MessageCircle,
  ScrollText,
  Sparkles,
  Star,
  Vault,
} from 'lucide-react';

export const SITE_LINKS = {
  magicEden: 'https://magiceden.us/marketplace/cannoli',
  comicIssue: 'https://example.com/holy-cannoli-comic-issue-1',
  tradingCards: 'https://example.com/holy-cannoli-trading-cards',
  x: 'https://x.com/CannoliWizard',
  discord: 'https://discord.gg/KFhryqhmMq',
};

export const ROUTES = {
  home: '/',
  comic: '/comic',
  tradingCards: '/trading-cards',
  community: '/community',
  draw: '/draw-your-own-cannoli',
} as const;

export const LORE_TEXT = `In the flickering glow of a kitchen that never sleeps, the line between culinary craft and ancient magic has finally blurred. Cannoli, a baker by blood and a mobster by legacy, has spent his life mastering the secret recipes of the “Flavor Bosses”—where every ingredient holds power and every contract is etched in dough. But when he steps into the high-tech NFT Laboratory to fuse traditional heat with digital code, he stirs up more than just a masterpiece. From the ovens rise the Holy Cannoli Posse, a crew of sweet, drip-heavy guardians born of honor and light. Yet, perfection is a dangerous ingredient; one slip of the spice rack turns the heat too high, birthing the scorched and bitter Burnt Crust Crew. Now, caught between his creations and his consequences, Cannoli must navigate a world where flavor has come to life—and some of it is looking for revenge.`;

export const navItems = [
  ['/', 'Home'],
  ['/comic', 'Comic'],
  ['/trading-cards', 'Trading Cards'],
  ['/community', 'The Family'],
] as const;

export const gatewayCards = [
  {
    title: 'Sacred Artifact',
    text: 'Issue #1 waits in the archive, framed like a relic.',
    cta: 'Claim Issue #1',
    href: ROUTES.comic,
    icon: ScrollText,
    glow: 'from-yellow-200/30 via-amber-400/20 to-orange-500/20',
  },
  {
    title: 'Backroom Vault',
    text: 'Hidden shelves and the future stash behind the vault door.',
    cta: 'Still Baking…',
    href: ROUTES.tradingCards,
    icon: Vault,
    glow: 'from-red-500/30 via-orange-500/15 to-stone-700/25',
  },
] as const;

export const familyCards = [
  {
    icon: MessageCircle,
    title: 'Family poll',
    text: 'Vote on flavors, factions, and who gets clipped next.',
  },
  {
    icon: Star,
    title: 'Featured meme drop',
    text: 'Fresh meme heat, teaser panels, or alley rumors.',
  },
  {
    icon: Coins,
    title: 'Marketplace funnel',
    text: 'Send collectors to the lab without breaking the spell.',
  },
  {
    icon: Sparkles,
    title: 'Lore snippets',
    text: 'Tiny story drops keep the universe breathing.',
  },
] as const;

export const tradingCardSlots = [
  ['The Chef', 'The cook that started it all'],
  ['The Posse', 'Still baking in the back'],
  ['Trash Cannolis', 'Climbing out of dumpsters near you'],
] as const;

export const footerLinks = [
  [ROUTES.home, 'Home'],
  [ROUTES.comic, 'Comic'],
  [ROUTES.tradingCards, 'Trading Cards'],
  [ROUTES.community, 'The Family'],
  [SITE_LINKS.x, 'X'],
] as const;

export const ASSET_SLOTS = {
  hero: {
    title: 'Hero art slot',
    hint: 'Drop the real French bulldog chef / alley key art here.',
  },
  comic: {
    title: 'Comic cover slot',
    hint: 'Replace with Issue #1 cover art when ready.',
  },
  tradingCards: [
    { title: 'Trading card art', hint: 'Collector card render / rarity frame.' },
    { title: 'Trading card art', hint: 'Alt variant / holographic reveal.' },
    { title: 'Trading card art', hint: 'Faction or character showcase.' },
  ],
} as const;
