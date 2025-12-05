# Deployment Guide - AI Meme Agent on Base

## 🚀 Complete Deployment Walkthrough

This guide will take you from Day 0 setup to a live, deployed application on Base.

---

## Phase 1: Testnet Deployment (Base Sepolia)

### Step 1: Get Testnet ETH

1. Visit: https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet
2. Connect your wallet
3. Request 0.05 ETH (enough for deployment + testing)
4. Wait for confirmation (usually instant)

### Step 2: Configure Environment

```bash
cd /Users/horlahdefi/CascadeProjects/base-ai-meme-agent

# Copy environment template
cp .env.example .env.local

# Edit .env.local and add:
# PRIVATE_KEY=0x... (your wallet private key)
# BASE_SEPOLIA_RPC_URL=https://sepolia.base.org (optional, already set)
```

**⚠️ SECURITY WARNING**: Never commit `.env.local` to git. It's already in `.gitignore`.

### Step 3: Deploy Contracts

```bash
# Compile contracts (if not already done)
pnpm contracts:compile

# Deploy to Base Sepolia
pnpm contracts:deploy:sepolia
```

**Expected Output:**
```
🚀 Deploying AI Meme Agent contracts...

📝 Deploying contracts with account: 0x...
Account balance: 50000000000000000

1️⃣  Deploying MemeToken...
✅ MemeToken deployed to: 0x...

2️⃣  Deploying MemeAgentNFT...
✅ MemeAgentNFT deployed to: 0x...

📋 Deployment Summary:
{
  "network": "baseSepolia",
  "timestamp": "2024-12-05T...",
  "deployer": "0x...",
  "contracts": {
    "MemeToken": "0x...",
    "MemeAgentNFT": "0x..."
  }
}

💾 Deployment info saved to: contracts/deployments/baseSepolia.json
```

### Step 4: Verify Contracts on BaseScan

1. Visit: https://sepolia.basescan.org
2. Search for your contract address
3. Click "Verify and Publish"
4. Select Solidity compiler version: 0.8.24
5. Copy contract source code
6. Paste and verify

### Step 5: Update Frontend Configuration

```bash
# Edit .env.local and add contract addresses:
NEXT_PUBLIC_MEME_TOKEN_SEPOLIA=0x...
NEXT_PUBLIC_MEME_AGENT_NFT_SEPOLIA=0x...
```

### Step 6: Test Frontend

```bash
# Start frontend dev server
pnpm frontend:dev

# Visit http://localhost:3000
# Connect wallet
# Should see your contract addresses in console
```

---

## Phase 2: Testnet Testing

### Test Token Transfer

```bash
# In frontend, test:
1. Connect wallet
2. Check token balance
3. Transfer tokens to another address
4. Verify on BaseScan
```

### Test NFT Creation

```bash
# In frontend, test:
1. Create an agent
2. Verify NFT was minted
3. Check on BaseScan
4. View agent details
```

### Test AI Generation

```bash
# In frontend, test:
1. Add OpenAI API key to .env.local
2. Generate meme caption
3. Generate roast
4. Generate tweet
```

---

## Phase 3: Mainnet Deployment

### ⚠️ Pre-Deployment Checklist

- [ ] All tests passing on testnet
- [ ] Contracts verified on BaseScan
- [ ] Frontend working correctly
- [ ] No console errors
- [ ] Security audit complete (optional but recommended)
- [ ] Sufficient ETH for gas (0.1+ ETH recommended)

### Step 1: Get Mainnet ETH

1. Transfer ETH to your wallet on Base mainnet
2. Or use a bridge: https://bridge.base.org

### Step 2: Deploy to Mainnet

```bash
# Deploy to Base mainnet
pnpm contracts:deploy:base
```

**Expected Output:** Same as testnet, but with mainnet addresses

### Step 3: Verify on BaseScan

1. Visit: https://basescan.org
2. Search for your contract address
3. Verify same as testnet

### Step 4: Update Frontend for Mainnet

```bash
# Edit .env.local:
NEXT_PUBLIC_MEME_TOKEN_MAINNET=0x...
NEXT_PUBLIC_MEME_AGENT_NFT_MAINNET=0x...
```

---

## Phase 4: Frontend Deployment (Vercel)

### Step 1: Prepare for Production

```bash
# Build frontend
pnpm frontend:build

# Test production build locally
pnpm frontend:start
```

### Step 2: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Step 3: Configure Environment on Vercel

1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - `NEXT_PUBLIC_OPENAI_API_KEY`
   - `NEXT_PUBLIC_MEME_TOKEN_MAINNET`
   - `NEXT_PUBLIC_MEME_AGENT_NFT_MAINNET`
   - `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`

### Step 4: Redeploy

```bash
vercel --prod
```

---

## Deployment Checklist

### Smart Contracts
- [ ] Compiled successfully
- [ ] Tests passing (7/7)
- [ ] Deployed to Sepolia
- [ ] Verified on BaseScan Sepolia
- [ ] Deployed to Mainnet
- [ ] Verified on BaseScan Mainnet
- [ ] Addresses saved in .env.local

### Frontend
- [ ] Builds without errors
- [ ] No console errors
- [ ] Wallet connection works
- [ ] Contract addresses configured
- [ ] API keys configured
- [ ] Deployed to Vercel
- [ ] Live URL working

### Testing
- [ ] Token transfers work
- [ ] NFT creation works
- [ ] AI generation works
- [ ] Farcaster posting works (if implemented)
- [ ] Mobile responsive
- [ ] No broken links

---

## Troubleshooting

### Deployment Fails

**Error: "Insufficient funds"**
```bash
# Get more testnet ETH or mainnet ETH
# Check balance: ethers.provider.getBalance(address)
```

**Error: "Invalid private key"**
```bash
# Verify PRIVATE_KEY format in .env.local
# Should be: 0x... (with 0x prefix)
# Should be 66 characters total
```

**Error: "Contract already deployed"**
```bash
# This is fine - you can redeploy to same address
# Or use a different account
```

### Frontend Issues

**Wallet not connecting**
```bash
# Clear browser cache
# Check WalletConnect Project ID
# Try different wallet
```

**Contract addresses not loading**
```bash
# Verify .env.local has correct addresses
# Check network is correct (Sepolia vs Mainnet)
# Restart dev server
```

**AI generation not working**
```bash
# Verify NEXT_PUBLIC_OPENAI_API_KEY is set
# Check API key is valid
# Check rate limits
```

---

## Gas Optimization Tips

### Reduce Deployment Costs

1. **Use Sepolia first** - Much cheaper for testing
2. **Batch transactions** - Combine multiple calls
3. **Monitor gas prices** - Deploy during low-traffic times
4. **Optimize contracts** - Remove unused code

### Estimated Gas Costs (Mainnet)

| Operation | Gas | Cost (at 2 gwei) |
|-----------|-----|------------------|
| Deploy MemeToken | 1.2M | ~$0.05 |
| Deploy MemeAgentNFT | 1.5M | ~$0.06 |
| Transfer Token | 65K | ~$0.003 |
| Mint NFT | 100K | ~$0.004 |

---

## Post-Deployment

### Monitor Contracts

1. **BaseScan**: https://basescan.org
2. **Set up alerts** for contract interactions
3. **Track gas usage** and optimize
4. **Monitor user activity**

### Update Documentation

- [ ] Update README with live URLs
- [ ] Add contract addresses to docs
- [ ] Document any changes made
- [ ] Create user guide

### Marketing

- [ ] Share on Twitter
- [ ] Post on Farcaster
- [ ] Share in Discord communities
- [ ] Create demo video

---

## Rollback Plan

If something goes wrong:

1. **Testnet Issues**: Redeploy to new address
2. **Mainnet Issues**: 
   - Deploy new version to new address
   - Update frontend to point to new address
   - Announce migration to users

---

## Support & Resources

- **Base Docs**: https://docs.base.org
- **BaseScan**: https://basescan.org
- **Hardhat Docs**: https://hardhat.org
- **Vercel Docs**: https://vercel.com/docs

---

## Next Steps After Deployment

1. ✅ Deploy contracts
2. ✅ Deploy frontend
3. ⬜ Integrate Farcaster API
4. ⬜ Add image generation
5. ⬜ Implement autonomous posting
6. ⬜ Launch marketing campaign
7. ⬜ Gather user feedback
8. ⬜ Plan Phase 2 features

---

**Deployment Status**: Ready to deploy! 🚀
