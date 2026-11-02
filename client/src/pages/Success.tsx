import { ArrowLeft, ArrowUpRight, Check, LockKeyhole, Send, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const telegramUrl = "https://t.me/+SMTclxHBnv5jYWNk";
const logoImage = "/manus-storage/WhatsAppImage2026-11-02at8.46.55AM_c41070e0.jpeg";
const supportNumbers = ["09110443054", "08129595134"];

export default function Success() {
  return (
    <main className="success-page">
      <div className="success-noise" />
      <div className="success-wrap">
        <Link href="/" className="success-back"><ArrowLeft size={15} /> Back to the masterclass</Link>
        <div className="success-brand"><img className="success-logo-image" src={logoImage} alt="ProductProHub — Digital Innovation. Real-World Skills." /></div>
        <section className="success-card" aria-labelledby="success-title">
          <div className="success-check"><Check size={27} /></div>
          <p className="eyebrow eyebrow-light">VERIFIED PAYMENT HANDOFF</p>
          <h1 id="success-title">Welcome to your Mobile Vibe Coding journey!</h1>
          <p className="success-lede">Your payment has been successfully verified. You're one step closer to turning your ideas into real digital products.</p>
          <p className="success-action-note"><strong>After payment, tap the button below to join the private Telegram community.</strong> If you close this page before joining, or Telegram does not open, message MUSA UWAYS and send your Paystack payment proof.</p>
          <a className="button button-light success-telegram" href={telegramUrl} target="_blank" rel="noreferrer">Join the private Telegram community <Send size={16} /></a>
          <p className="success-fallback">If Telegram does not open automatically, copy the invitation link and open it in your Telegram app:<br /><a href={telegramUrl} target="_blank" rel="noreferrer">{telegramUrl}</a></p>
          <div className="support-contact"><div><strong>Need help after paying?</strong><span>Message or call with your payment proof.</span></div><div className="support-numbers">{supportNumbers.map((number) => <a key={number} href={`tel:${number}`}>{number}</a>)}</div></div>
          <div className="success-verification-note"><ShieldCheck size={17} /><div><strong>Production verification note</strong><p>Only route verified Paystack webhook responses to this handoff in production. The public landing page never grants access from a button click.</p></div></div>
          <div className="success-meta"><span><LockKeyhole size={13} /> NGN payment flow</span><span>Secure handoff</span><span>Community access</span></div>
        </section>
        <p className="success-footnote">Need help? Return to the <Link href="/">course overview</Link> and review the offer details.</p>
      </div>
    </main>
  );
}
