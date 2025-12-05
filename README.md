# AI Meme Agent on Base 🤖🚀

An autonomous AI agent platform where every memecoin holder's NFT has its own AI agent that tweets, generates memes, roasts people, and lives forever on Farcaster/Warpcast.

## Project Structure

```
base-ai-meme-agent/
├── frontend/           # Next.js + Tailwind UI
├── contracts/          # Solidity smart contracts (Hardhat)
├── package.json        # Root workspace config
├── .env.example        # Environment variables template
└── README.md
```

## Tech Stack

- **Blockchain**: Base chain (ERC-20 + NFT)
- **Smart Contracts**: Solidity + Hardhat
- **Frontend**: Next.js 16 + TypeScript + Tailwind CSS
- **Web3**: Wagmi + Viem + RainbowKit
- **AI**: OpenAI API (Claude/GPT-4)
- **Image Generation**: Replicate (Flux)
- **Social**: Farcaster/Warpcast API

## Quick Start

### Prerequisites
- Node.js v20+
- pnpm (installed globally)

### Setup

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys and private key
   ```

3. **Compile smart contracts**
   ```bash
   pnpm contracts:compile
   ```

4. **Start frontend dev server**
   ```bash
   pnpm frontend:dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Development Roadmap

### Day 0-1: Setup ✅
- [x] Project structure
- [x] Next.js + Tailwind setup
- [x] Hardhat + Solidity setup
- [x] Dependencies installed

### Day 1-2: Smart Contracts
- [ ] ERC-20 MemeToken contract
- [ ] NFT contract for agent holders
- [ ] Basic bonding curve (optional)
- [ ] Deploy to Base Sepolia testnet

### Day 2-3: Frontend Foundation
- [ ] Wallet connection (RainbowKit)
- [ ] Token display & balance
- [ ] Mint/buy UI
- [ ] Agent dashboard

### Day 3-5: AI Integration
- [ ] OpenAI API integration
- [ ] Meme generation prompts
- [ ] Roast generation logic
- [ ] Tweet composition

### Day 5-7: Image Generation
- [ ] Replicate API setup
- [ ] Flux model integration
- [ ] Meme template system
- [ ] Image caching

### Day 7-10: Farcaster Integration
- [ ] Warpcast API setup
- [ ] Autonomous posting
- [ ] Agent personality system
- [ ] Tweet scheduling

### Day 10-14: Polish & Deploy
- [ ] UI/UX refinement
- [ ] Testing & debugging
- [ ] Base mainnet deployment
- [ ] Demo & marketing

## API Keys Required

1. **OpenAI** - For AI text generation
   - Sign up: https://platform.openai.com
   - Get API key from dashboard

2. **Replicate** - For image generation
   - Sign up: https://replicate.com
   - Get API token from settings

3. **Farcaster/Warpcast** - For autonomous posting
   - Create account on Warpcast
   - Generate API credentials

4. **Base RPC** - Already configured (public endpoint)

## Deployment

### Smart Contracts to Base Sepolia
```bash
pnpm contracts:deploy --network baseSepolia
```

### Frontend to Vercel
```bash
pnpm build
# Deploy via Vercel dashboard or CLI
```

## Key Files

- `contracts/contracts/MemeToken.sol` - ERC-20 token contract
- `frontend/src/app/page.tsx` - Main landing page
- `frontend/src/components/WalletConnect.tsx` - Wallet integration
- `.env.example` - Environment template

## Next Steps

1. Set up your `.env.local` file with API keys
2. Deploy MemeToken to Base Sepolia
3. Build the frontend UI
4. Integrate AI APIs
5. Test autonomous posting

## Resources

- [Base Docs](https://docs.base.org)
- [Hardhat Docs](https://hardhat.org)
- [Next.js Docs](https://nextjs.org)
- [Wagmi Docs](https://wagmi.sh)
- [OpenAI API](https://platform.openai.com/docs)
- [Replicate API](https://replicate.com/docs)

## License

MIT
