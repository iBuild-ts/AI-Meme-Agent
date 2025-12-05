# AI Meme Agent - Quick Reference

## 🚀 Start Development

```bash
# Terminal 1: Frontend
cd /Users/horlahdefi/CascadeProjects/base-ai-meme-agent
pnpm frontend:dev
# Open http://localhost:3000

# Terminal 2: Smart Contracts
cd /Users/horlahdefi/CascadeProjects/base-ai-meme-agent
pnpm contracts:compile
```

## 📁 Key Files to Edit

| File | Purpose | Edit When |
|------|---------|-----------|
| `frontend/src/app/page.tsx` | Landing page | Changing homepage UI |
| `frontend/src/app/dashboard/page.tsx` | Dashboard page | Changing dashboard layout |
| `frontend/src/components/AgentDashboard.tsx` | Agent controls | Adding new features |
| `frontend/src/services/aiService.ts` | AI generation | Tweaking prompts |
| `contracts/contracts/MemeToken.sol` | Token contract | Changing tokenomics |
| `contracts/contracts/MemeAgentNFT.sol` | NFT contract | Changing agent logic |

## 🔧 Common Commands

```bash
# Frontend
pnpm frontend:dev          # Start dev server
pnpm frontend:build        # Build for production
pnpm frontend:lint         # Check code quality

# Smart Contracts
pnpm contracts:compile     # Compile Solidity
pnpm contracts:test        # Run tests
pnpm contracts:deploy      # Deploy to local
pnpm contracts:deploy:sepolia  # Deploy to Base Sepolia
pnpm contracts:deploy:base     # Deploy to Base mainnet

# Workspace
pnpm install              # Install all dependencies
pnpm -r dev              # Run all dev servers
pnpm -r build            # Build all packages
```

## 🌐 Important URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:3000 | Development site |
| OpenAI | https://platform.openai.com | Get API key |
| Replicate | https://replicate.com | Image generation |
| WalletConnect | https://cloud.walletconnect.com | Wallet connection |
| Base Sepolia | https://sepolia.basescan.org | Testnet explorer |
| Base Mainnet | https://basescan.org | Mainnet explorer |
| Farcaster | https://warpcast.com | Social network |

## 📦 Project Dependencies

### Frontend
- **Next.js 16** - React framework
- **Tailwind CSS** - Styling
- **Wagmi** - Web3 hooks
- **RainbowKit** - Wallet UI
- **OpenAI** - AI generation
- **Axios** - HTTP requests

### Smart Contracts
- **Hardhat** - Development environment
- **Solidity 0.8.24** - Smart contract language
- **OpenZeppelin** - Contract libraries

## 🎨 Component Structure

```
App
├── Layout (Web3 providers)
├── Page (Landing)
│   ├── WalletConnect
│   └── Hero Section
└── Dashboard
    ├── WalletConnect
    └── AgentDashboard
        ├── Agent Selection
        └── Content Generation
```

## 🔐 Environment Variables

```env
# Required for AI
NEXT_PUBLIC_OPENAI_API_KEY=sk-...

# Required for wallet
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=...

# Optional for deployment
PRIVATE_KEY=0x...
BASE_RPC_URL=https://mainnet.base.org
```

## 🧪 Testing

```bash
# Test contracts
pnpm contracts:test

# Test specific file
pnpm contracts:test test/MemeToken.test.js

# Watch mode
pnpm contracts:test --watch
```

## 📊 Contract Addresses (After Deployment)

Will be saved in `contracts/deployments/baseSepolia.json` after deployment:

```json
{
  "MemeToken": "0x...",
  "MemeAgentNFT": "0x..."
}
```

## 🚨 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `lsof -ti:3000 \| xargs kill -9` |
| pnpm not found | `npm install -g pnpm` |
| Wallet not connecting | Clear cache, refresh page |
| Contract won't compile | Check Solidity version in hardhat.config.js |
| Out of gas | Increase gas limit in hardhat.config.js |

## 📈 Development Stages

1. **Setup** (Day 0) ✅ COMPLETE
2. **Contracts** (Day 1-2) - Deploy & test
3. **Frontend** (Day 2-3) - Build UI
4. **AI** (Day 3-5) - Integrate OpenAI
5. **Images** (Day 5-7) - Add Replicate
6. **Farcaster** (Day 7-10) - Enable posting
7. **Polish** (Day 10-14) - Deploy & launch

## 💡 Pro Tips

1. **Use testnet first** - Deploy to Base Sepolia before mainnet
2. **Monitor gas costs** - Check gas prices before deploying
3. **Test thoroughly** - Run tests before each deployment
4. **Save deployment info** - Keep track of contract addresses
5. **Use environment variables** - Never hardcode secrets
6. **Check explorer** - Verify contracts on BaseScan
7. **Read error messages** - They usually tell you what's wrong

## 🎯 Next Immediate Steps

1. Set up `.env.local` with API keys
2. Test frontend: `pnpm frontend:dev`
3. Compile contracts: `pnpm contracts:compile`
4. Deploy to Sepolia: `pnpm contracts:deploy:sepolia`
5. Update contract addresses in frontend
6. Test wallet connection
7. Test AI generation

## 📞 Resources

- **Hardhat Docs**: https://hardhat.org/docs
- **Base Docs**: https://docs.base.org
- **Wagmi Docs**: https://wagmi.sh
- **OpenAI API**: https://platform.openai.com/docs
- **Solidity**: https://docs.soliditylang.org
