// Shared variables
let points = 0;
let rewardsHistory = [];
let referralCode = "";
let totalReferrals = 0;
let referralPoints = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', async function() {
  // Load data from Firebase
  const loadedPoints = await loadDataFromFirebase('points') || 0;
  const loadedRewards = await loadDataFromFirebase('rewards') || [];
  const loadedReferral = await loadDataFromFirebase('referral') || {
    code: generateReferralCode(),
    totalReferrals: 0,
    referralPoints: 0
  };

  // Update local variables
  points = loadedPoints;
  rewardsHistory = loadedRewards;
  referralCode = loadedReferral.code;
  totalReferrals = loadedReferral.totalReferrals || 0;
  referralPoints = loadedReferral.referralPoints || 0;

  // Initialize page-specific components
  if (typeof initPage === 'function') {
    initPage();
  }
});

// Generate referral code
function generateReferralCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'RUPEESH-';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Common UI functions
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleFaq(question) {
  const answer = question.nextElementSibling;
  const isOpen = answer.classList.contains('show');
  
  document.querySelectorAll('.faq-answer').forEach(item => {
    item.classList.remove('show');
    item.style.maxHeight = '0';
  });
  
  if (!isOpen) {
    answer.classList.add('show');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// Navigation
function navigateTo(page) {
  window.location.href = page + '.html';
}
