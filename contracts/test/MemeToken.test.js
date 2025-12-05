const { expect } = require("chai");
const hre = require("hardhat");

const { ethers } = hre;

describe("MemeToken", function () {
  let memeToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const MemeToken = await ethers.getContractFactory("MemeToken");
    memeToken = await MemeToken.deploy();
  });

  describe("Deployment", function () {
    it("Should have correct name and symbol", async function () {
      expect(await memeToken.name()).to.equal("AI Meme Agent");
      expect(await memeToken.symbol()).to.equal("MEME");
    });

    it("Should mint initial supply to deployer", async function () {
      const initialSupply = ethers.parseEther("1000000000");
      expect(await memeToken.balanceOf(owner.address)).to.equal(initialSupply);
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      const amount = ethers.parseEther("100");
      await memeToken.transfer(addr1.address, amount);
      expect(await memeToken.balanceOf(addr1.address)).to.equal(amount);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const amount = ethers.parseEther("1000000001");
      await expect(
        memeToken.transfer(addr1.address, amount)
      ).to.be.revertedWithCustomError(memeToken, "ERC20InsufficientBalance");
    });
  });

  describe("Minting", function () {
    it("Should allow owner to mint tokens", async function () {
      const amount = ethers.parseEther("1000");
      await memeToken.mint(addr1.address, amount);
      expect(await memeToken.balanceOf(addr1.address)).to.equal(amount);
    });

    it("Should not allow non-owner to mint", async function () {
      const amount = ethers.parseEther("1000");
      await expect(
        memeToken.connect(addr1).mint(addr2.address, amount)
      ).to.be.revertedWithCustomError(memeToken, "OwnableUnauthorizedAccount");
    });
  });

  describe("Burning", function () {
    it("Should allow users to burn tokens", async function () {
      const amount = ethers.parseEther("100");
      await memeToken.transfer(addr1.address, amount);
      await memeToken.connect(addr1).burn(amount);
      expect(await memeToken.balanceOf(addr1.address)).to.equal(0);
    });
  });
});
