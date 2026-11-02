import { ArrowLeft, ArrowUpRight, Check, LockKeyhole, Send, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const telegramUrl = "https://t.me/+SMTclxHBnv5jYWNk";

export default function Success() {
  return (
    <main className="success-page">
      <div className="success-noise" />
      <div className="success-wrap">
        <Link href="/" className="success-back"><ArrowLeft size={15} /> Back to the masterclass</Link>
        <div className="success-brand"><span className="brand-mark"><span className="brand-mark-cursor">&gt;_</span><span className="brand-mark-dot" /></span><span><strong>MOBILE VIBE</strong><small>CODE ACADEMY</small></span></div>
        <section className="success-card" aria-labelledby="success-title">
          <div className="success-check"><Check size={27} /></div>
          <p className="eyebrow eyebrow-light">VERIFIED PAYMENT HANDOFF</p>
          <h1 id="success-title">Welcome to your Mobile Vibe Coding journey!</h1>
          <p className="success-lede">Your payment has been successfully verified. You're one step closer to turning your ideas into real digital products.</p>
          <a className="button button-light success-telegram" href={telegramUrl} target="_blank" rel="noreferrer">Join the private Telegram community <Send size={16} /></a>
          <p className="success-fallback">If Telegram does not open automatically, copy the invitation link and open it in your Telegram app:<br /><a href={telegramUrl} target="_blank" rel="noreferrer">{telegramUrl}</a></p>
          <div className="success-verification-note"><ShieldCheck size={17} /><div><strong>Production verification note</strong><p>Only route verified Paystack webhook responses to this handoff in production. The public landing page never grants access from a button click.</p></div></div>
          <div className="success-meta"><span><LockKeyhole size={13} /> NGN payment flow</span><span>Secure handoff</span><span>Community access</span></div>
        </section>
        <p className="success-footnote">Need help? Return to the <Link href="/">course overview</Link> and review the offer details.</p>
      </div>
    </main>
  );
}
