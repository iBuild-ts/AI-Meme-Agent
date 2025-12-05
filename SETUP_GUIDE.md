# AI Meme Agent - Setup Guide

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
cd /Users/horlahdefi/CascadeProjects/base-ai-meme-agent
pnpm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
```env
# OpenAI (for AI text generation)
NEXT_PUBLIC_OPENAI_API_KEY=sk-...

# Replicate (for image generation)
REPLICATE_API_TOKEN=r8_...

# WalletConnect (for wallet connection)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

# Optional: Private key for contract deployment
PRIVATE_KEY=0x...
```

### 3. Get API Keys

#### OpenAI API
1. Go to https://platform.openai.com/account/api-keys
2. Create a new API key
3. Copy it to `.env.local`

#### Replicate API (for image generation)
1. Go to https://replicate.com/signin
2. Create account and go to API tokens
3. Copy token to `.env.local`

#### WalletConnect Project ID
1. Go to https://cloud.walletconnect.com
2. Create a new project
3. Copy Project ID to `.env.local`

### 4. Start Development

#### Frontend
```bash
pnpm frontend:dev
```
Open http://localhost:3000

#### Smart Contracts (in another terminal)
```bash
pnpm contracts:compile
```

## 📋 Project Structure

```
base-ai-meme-agent/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx          # Landing page
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx      # Agent dashboard
│   │   │   └── layout.tsx        # Root layout with Web3 providers
│   │   ├── components/
│   │   │   ├── WalletConnect.tsx # Wallet connection button
│   │   │   └── AgentDashboard.tsx # Agent management UI
│   │   ├── services/
│   │   │   └── aiService.ts      # OpenAI integration
│   │   └── config/
│   │       └── web3.ts           # Wagmi + RainbowKit config
│   └── package.json
│
├── contracts/
│   ├── contracts/
│   │   ├── MemeToken.sol         # ERC-20 token
│   │   └── MemeAgentNFT.sol      # NFT for agents
│   ├── scripts/
│   │   └── deploy.js             # Deployment script
│   ├── hardhat.config.js
│   └── package.json
│
├── .env.example                  # Environment template
├── .gitignore
├── package.json                  # Root workspace config
└── README.md
```

## 🔧 Development Workflow

### 1. Make Changes to Frontend
```bash
pnpm frontend:dev
# Changes auto-reload at http://localhost:3000
```

### 2. Update Smart Contracts
```bash
# Edit contracts/contracts/*.sol
pnpm contracts:compile
```

### 3. Deploy to Base Sepolia (Testnet)
```bash
# Get testnet ETH from: https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet
pnpm contracts:deploy --network baseSepolia
```

### 4. Deploy to Base Mainnet
```bash
pnpm contracts:deploy --network base
```

## 🧪 Testing

### Test Smart Contracts
```bash
pnpm -C contracts test
```

### Test Frontend
```bash
pnpm -C frontend test
```

## 🌐 Deployment

### Frontend to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Smart Contracts to Base
1. Get Base ETH for gas fees
2. Update `.env.local` with `PRIVATE_KEY`
3. Run deployment script:
   ```bash
   pnpm contracts:deploy --network base
   ```

## 📚 Key Technologies

| Technology | Purpose | Docs |
|-----------|---------|------|
| Next.js 16 | Frontend framework | https://nextjs.org |
| Tailwind CSS | Styling | https://tailwindcss.com |
| Wagmi | Web3 hooks | https://wagmi.sh |
| RainbowKit | Wallet UI | https://www.rainbowkit.com |
| Hardhat | Smart contract dev | https://hardhat.org |
| Solidity | Smart contracts | https://docs.soliditylang.org |
| OpenAI | AI text generation | https://platform.openai.com |
| Replicate | Image generation | https://replicate.com |

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Node version issues
```bash
# Check Node version
node -v  # Should be v20+

# Update if needed
nvm install 20
nvm use 20
```

### pnpm not found
```bash
npm install -g pnpm
```

### Contract compilation errors
```bash
# Clean and rebuild
pnpm -C contracts clean
pnpm contracts:compile
```

### Wallet not connecting
1. Refresh page
2. Clear browser cache
3. Check WalletConnect Project ID in `.env.local`
4. Try different wallet (MetaMask, Coinbase, etc.)

## 📞 Support

- **Base Docs**: https://docs.base.org
- **Hardhat Docs**: https://hardhat.org/docs
- **Wagmi Docs**: https://wagmi.sh
- **OpenAI Docs**: https://platform.openai.com/docs

## 🎯 Next Steps

1. ✅ Environment setup
2. ⬜ Deploy contracts to Base Sepolia
3. ⬜ Create NFT minting UI
4. ⬜ Integrate Farcaster API
5. ⬜ Build autonomous posting system
6. ⬜ Add image generation
7. ⬜ Deploy to mainnet
