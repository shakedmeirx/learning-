# Shopify Setup Guide — Israel Home Nail Tools
## Following /shopify skill | June 2026

---

## OVERVIEW

Complete Shopify setup guide for a Hebrew-first dropshipping store selling nail tools to Israeli women. Covers store structure, must-have apps, payment setup, tracking integration, conversion optimization, and launch checklist.

---

## STORE CONFIGURATION — FOUNDATIONS

### Shopify Plan
**Recommended:** Shopify Basic ($29/month)
- Supports unlimited products, 2 staff accounts
- All required integrations available
- Move to Shopify plan ($79/month) when monthly sales exceed ₪10,000 — gets lower transaction fee (0.6% vs 2%)

### Store Settings (Critical for Israel)

| Setting | Value | Why |
|---------|-------|-----|
| Store currency | ILS (₪) | Display in NIS — Israeli consumers don't buy in USD |
| Store timezone | Asia/Jerusalem (UTC+2/+3) | Accurate order timestamps, ad scheduling |
| Store language | Hebrew (he) | Theme RTL |
| Weight unit | Kilograms | Israeli shipping |
| Legal business address | Must be valid Israel address | Tax compliance |

### Theme Selection
**Recommended themes for Hebrew RTL:**
1. **Dawn** (free, Shopify default) — clean, fast, RTL-compatible
2. **Sense** (free) — good for beauty products, clean layout
3. **Refresh** ($380 one-time) — best performance optimization, worth it at scale

**Critical:** Enable RTL (right-to-left) in theme settings. Most Shopify themes support this via language settings. Test all pages in Hebrew before launching.

---

## DOMAIN AND BRANDING

### Domain Options
1. **haStudio.co.il** — strongly preferred (Israeli domain, .co.il builds trust)
   - Register via IsraelDomain.net or CityDomain.co.il (~₪80–120/year)
2. **hasudio.com** — if .co.il unavailable
3. **Shopify myshopify.com** subdomain — use only for testing, never for live store

### Store Name Setup
- Store name: **הסטודיו הביתי**
- Tagline: **תוצאת סטודיו. נוחות ביתית.**

---

## ESSENTIAL APP STACK

### Tier 1 — Must Have at Launch

| App | Purpose | Cost | Priority |
|-----|---------|------|----------|
| **DSers** | AliExpress dropshipping automation | Free | P1 |
| **Judge.me** | Product reviews | Free (or $15/mo for full features) | P1 |
| **Meta Pixel (built-in)** | Facebook/Instagram ad tracking | Free | P1 |
| **Klaviyo** | Email marketing + automation | Free up to 500 contacts | P1 |
| **WhatsApp Chat button** | Pre-purchase support (WhatsApp Business) | Free (WhatsApp Business) | P1 |
| **Privy** | Exit-intent popup + email capture | Free plan available | P1 |
| **Google & YouTube channel** | Google Analytics 4 + free Shopping | Free | P1 |

### Tier 2 — Add Month 2–3

| App | Purpose | Cost |
|-----|---------|------|
| **TikTok Pixel** (Shopify app) | TikTok ad tracking | Free |
| **Smile.io** | Loyalty + referral program | Free up to 200 orders/month |
| **ReConvert** | Post-purchase upsell | $7.99/month |
| **Loox** | Photo reviews (more visual than Judge.me) | $9.99/month |
| **Shipment Tracking (17track)** | Track + notify customers | Free plan available |

### Tier 3 — Add Month 4–6

| App | Purpose | Cost |
|-----|---------|------|
| **Polar Analytics** | Attribution + cohort analysis | $300/month (scale only) |
| **Gorgias** | Customer support ticketing | $10/month |
| **Recharge** | Consumables subscription | $99/month (add when consumables run) |

---

## PAYMENT PROCESSORS (CRITICAL — SHOPIFY PAYMENTS NOT AVAILABLE IN ISRAEL)

Shopify Payments does not operate in Israel. You must use a third-party payment processor.

### Recommended Stack

| Processor | Type | Fees | Trust Level |
|-----------|------|------|------------|
| **PayPlus** | Israeli gateway | 1.9% + ₪0.50/transaction | ⭐⭐⭐ Israeli standard |
| **Meshulam** | Israeli gateway | 1.7% + fees | ⭐⭐⭐ Widely known |
| **Stripe** | International | 1.4–2.9% | ⭐⭐ Less familiar to Israelis |

**Strongly recommended:** Add **Bit** (Israeli mobile payment — like Venmo, used by 6M+ Israelis).
- Bit integration via PayPlus or direct API
- Adds instant trust: "מקבלים ביט ✅" is a major conversion signal

### Installment Payments
Israeli consumers love installments (תשלומים). Enable:
- **PayPlus Splitit** or **KupiPay** — 3–12 interest-free installments
- Show on product page: "או 3 תשלומים של ₪130 ללא ריבית"
- Expected CVR lift: 15–25% on Kit 2 and Kit 3

---

## STORE STRUCTURE — PAGES AND NAVIGATION

### Required Pages

| Page | Hebrew Name | Priority |
|------|------------|---------|
| Home | עמוד הבית | P1 |
| Products → Kit 1 | ערכת המתחילה | P1 |
| Products → Kit 2 | ערכת הסטודיו הביתי | P1 — Hero |
| Products → Kit 3 | ערכת האמנית הביתית | P1 |
| Collections → All Kits | כל הערכות | P1 |
| Collections → Refills | חידוש מלאי ואביזרים | P2 |
| About | אודות הסטודיו הביתי | P2 |
| FAQ | שאלות נפוצות | P1 — High-converting trust page |
| Shipping & Returns | משלוח והחזרות | P1 — Legal + trust |
| Privacy Policy | מדיניות פרטיות | Required |
| Terms of Service | תנאי שימוש | Required |

### Navigation Structure
```
Header:
[Logo: הסטודיו הביתי] | [כל הערכות] [ערכת המתחילה] [ערכת הסטודיו] [ערכת האמנית] [FAQ] [וואצאפ]

Footer:
[אודות] [משלוח והחזרות] [מדיניות פרטיות] [תנאי שימוש] [צרי קשר]
[WhatsApp button] [Instagram] [TikTok] [Facebook]
```

---

## PRODUCT PAGE OPTIMIZATION (CRO)

### Kit 2 Product Page — Anatomy

**Above the fold (visible without scrolling on mobile):**
1. Product title: "ערכת הסטודיו הביתי"
2. Price: ₪389 | ⭐⭐⭐⭐⭐ 47 ביקורות
3. Hero image (kit flatlay, clean off-white)
4. "הוסיפי לסל" button (primary, high contrast — navy #1C2B4A on blush #E8C4B8)
5. Trust line: "✅ CE מאושר | ✅ תקע אירופי | ✅ 14 יום החזרה"

**Below the fold (scroll-required):**
6. Product description (Hebrew, FAB framework)
7. What's included list with checkmarks
8. CE certificate image + EU plug photo
9. Customer photos (Judge.me/Loox UGC gallery)
10. FAQ accordion (5 most common questions)
11. Second CTA: "הזמיני עכשיו — ₪389"

### LIFT Model Audit — Kit 2 Product Page

| Factor | Score Target | Implementation |
|--------|-------------|----------------|
| Value Proposition | 9/10 | "ציפורניים שנשארות 3 שבועות. מהבית שלך." in H1 |
| Relevance | 9/10 | All copy in Hebrew, addresses Israeli buyer fears |
| Clarity | 8/10 | Single CTA above fold, no competing buttons |
| Urgency | 6/10 | "נשארו X ערכות במלאי" counter (when true) |
| Anxiety reduction | 8/10 | CE doc photo, EU plug, WhatsApp button, return policy |
| Distraction | 8/10 | Remove navigation header on product page (focused layout) |

### Product Page A/B Tests (Prioritized)

| Test | Variant A | Variant B | Hypothesis |
|------|-----------|-----------|------------|
| CTA color | Navy button | Gold button | Gold = more premium feel |
| Hero image | Flatlay | Hands-with-nails | Lifestyle outperforms flatlay? |
| Price display | ₪389 | ₪389 + "או 3×₪130" | Installments lift CVR |
| Above-fold trust | "CE מאושר" text | CE certificate image | Visual proof > text |
| Urgency | No counter | "נשארו 7 ערכות" | Urgency lift on CVR |

---

## CHECKOUT OPTIMIZATION

### Checkout Page Must-Haves

1. **Trust badges above Pay button:**
   ```
   🔒 תשלום מאובטח SSL  |  📦 משלוח עד 25 ימים  |  ↩️ 14 יום להחזרה
   ```

2. **WhatsApp support link near checkout:**
   "יש שאלה לפני ההזמנה? → כתבי לנו בוואצאפ"

3. **Delivery estimate visible:**
   "זמן אספקה משוער: [date range from today + 15–25 days]"

4. **Gift message option:**
   Checkbox: "זוהי מתנה — הוסיפי כרטיס ברכה" (converts gift buyer, ICP 3)

5. **Payment logos visible:**
   Show: Bit / PayPlus / Visa / Mastercard logos
   Position: Below order total

### Exit Intent Popup
**Trigger:** User moves mouse to close tab or uses back button
**Offer:** "רגע לפני שעוזבת — הנה 10% הנחה על ההזמנה הראשונה שלך"
**Code:** Auto-applied or shown as: RISHON10
**Design:** Blush background, navy text, gold CTA button

---

## TRACKING SETUP

### Meta Pixel + CAPI (Highest Priority)

```
Setup path:
1. Shopify Admin → Settings → Customer events → Add custom pixel
2. OR: Install Meta Shopify App (recommended — auto-configures CAPI)
3. Enable Conversions API toggle in Meta Shopify App
4. Verify with Meta Pixel Helper Chrome extension
```

**Events to verify (in order of priority):**
- `Purchase` — MUST fire on every order, with correct value in NIS
- `InitiateCheckout` — fires when checkout begins
- `AddToCart` — fires when product added
- `ViewContent` — fires on product page view

**Target EMQ Score:** 7.0+ by Month 2
EMQ (Event Match Quality) improves when you pass: email, phone, first name, last name, city, country. Shopify + CAPI does this automatically when customer logs in or fills checkout.

### TikTok Pixel

```
Setup path:
1. Install TikTok Shopify App from App Store
2. Connect TikTok Ads Manager account (Israel)
3. Enable all standard events: ViewContent, AddToCart, InitiateCheckout, Purchase
4. Verify with TikTok Pixel Helper
```

### Google Analytics 4

```
Setup path:
1. Install Google & YouTube channel in Shopify
2. Connect GA4 property
3. Enable enhanced ecommerce events
4. Create conversion events in GA4: purchase, add_to_cart
```

---

## DSers DROPSHIPPING SETUP

### AliExpress Connection

1. Install DSers from Shopify App Store (free)
2. Connect AliExpress account
3. Import products for each kit component
4. Create Kit "bundles" via DSers bundle feature (combine multiple AliExpress products into one Shopify SKU)
5. Set pricing rule: 3x cost minimum for Kit 2 components
6. Enable auto-fulfillment: DSers automatically places AliExpress orders when Shopify order comes in

### Shipping Configuration

| Origin | Carrier Method | Est. Days | Carrier |
|--------|---------------|-----------|---------|
| China → Israel | ePacket | 15–25 | ePacket |
| China → Israel | AliExpress Standard | 20–35 | Cainiao |
| China → Israel | DHL Express | 5–8 (expensive) | DHL |

**Shopify Shipping Zone:**
- Israel: Free shipping (or free over ₪300, charge ₪29 below)
- Display: "משלוח חינם לכל הארץ" (applies above ₪300)

---

## KLAVIYO EMAIL SETUP

### Flows to Build at Launch

| Flow | Trigger | Emails | Priority |
|------|---------|--------|---------|
| Welcome series | New subscriber | 5 emails | P1 |
| Post-purchase | Order complete | 5 emails | P1 |
| Abandoned cart | Cart left > 1 hour | 3 emails | P1 |
| Win-back | 90 days no purchase | 3 emails | P2 |
| Consumables reminder | 60 days post-purchase | 2 emails | P2 |

### Abandoned Cart Email Sequence

**Email 1 — 1 hour after abandon:**
> Subject: "שכחת משהו? 🤔"
> Body: "ערכת הסטודיו הביתי מחכה בסל שלך. ₪389 — CE מאושר, עובד בישראל."
> CTA: "חזרי לסל ←"

**Email 2 — 24 hours after abandon:**
> Subject: "עדיין כאן לך ← ונוספנו משהו"
> Body: Social proof: "42 נשים הזמינו את הערכה הזו החודש."
> CTA: "הזמיני עכשיו"

**Email 3 — 48 hours after abandon:**
> Subject: "₪20 הנחה — רק לך, רק עכשיו"
> Body: Incentive offer. Auto-apply discount.
> CTA: "מימשי את ההנחה ← קוד: CHAZER20"

---

## CONVERSION BENCHMARKS AND TARGETS

| Metric | Month 1 Target | Month 3 Target |
|--------|---------------|----------------|
| Store conversion rate | 1.5–2.5% | 2.5–3.5% |
| Add-to-cart rate | 6–8% | 10–12% |
| Cart abandonment rate | 70–75% | 65–70% |
| Checkout completion | 45–55% | 55–65% |
| Abandoned cart recovery | 5–8% | 10–15% |
| Mobile conversion rate | 1.0–1.5% | 1.5–2.5% |
| AOV (average order value) | ₪320 | ₪370 |

---

## LAUNCH CHECKLIST

### Week 1–2: Technical Foundation
- [ ] Shopify store created, plan selected
- [ ] Hebrew theme installed and RTL tested on mobile + desktop
- [ ] Domain connected (hasudio.co.il)
- [ ] All store settings: ILS, Hebrew, Jerusalem timezone
- [ ] PayPlus/Meshulam connected and test payment made
- [ ] Bit payment option added
- [ ] DSers installed and AliExpress connected
- [ ] Kit 1, Kit 2, Kit 3 product pages created in Hebrew
- [ ] FAQ page created (at least 8 questions)
- [ ] Shipping & Returns page published
- [ ] Privacy Policy + Terms of Service published
- [ ] Meta Pixel installed and Purchase event verified
- [ ] Klaviyo connected, welcome + post-purchase flows live
- [ ] WhatsApp Business account set up, button added to site

### Week 3–4: Pre-Launch
- [ ] Judge.me installed (will auto-request reviews)
- [ ] Privy exit-intent popup live (10% off first order)
- [ ] Free shipping threshold set (free over ₪300)
- [ ] Abandoned cart email sequence live (3 emails)
- [ ] Test order placed (real money, verify full flow)
- [ ] Mobile checkout tested on iPhone and Samsung
- [ ] Page speed check: LCP under 3 seconds (test on GTmetrix)
- [ ] TikTok Pixel installed
- [ ] Google Analytics 4 connected

### Launch Day
- [ ] Meta Advantage+ Campaign launched (₪420/month budget)
- [ ] Meta Retargeting Campaign launched (₪90/month)
- [ ] TikTok Smart+ Campaign launched (₪60/month)
- [ ] First 3 organic Instagram posts published
- [ ] First TikTok video posted
- [ ] WhatsApp Business status set to "available"
- [ ] Monitor Pixel Helper: confirm Purchase fires on test order

---

## PRODUCT FEED FOR META CATALOG

Meta requires a product feed (XML or CSV) to run Dynamic Product Ads and Advantage+ Shopping:

1. **Install Meta Shopify App** — auto-generates product feed
2. **Optimize product titles for feed:**
   - BAD: "ערכת מקדחה"
   - GOOD: "ערכת ציפורניים ביתית עם מקדחה CE — ₪389 — הסטודיו הביתי"
3. **Product type:** "Home Nail Tools > Nail Kits"
4. **Google product category:** 2918 (Personal Care Appliances)
5. **Custom label:** Kit tier (Kit1, Kit2, Kit3) — use for bid segmentation

---

## SEO BASICS FOR SHOPIFY (Hebrew)

### Priority Keywords to Target

| Keyword (Hebrew) | Volume Est. | Difficulty | Page to Target |
|-----------------|-------------|------------|----------------|
| ערכת מניקור ביתית | High | Medium | Homepage |
| מקדחת ציפורניים ביתית | High | Medium | Kit 2 product page |
| ציפורניים ביתיות | High | Low | Blog / FAQ |
| ערכת נייל למתחילות | Medium | Low | Kit 1 product page |
| מנורת UV לציפורניים | Medium | Medium | Kit 2 / Accessories |
| קאט אי ציפורניים בבית | Medium | Low | Blog / Tutorial |

### Basic On-Page SEO Rules for Shopify

1. **Title tag format:** "[Keyword] — הסטודיו הביתי"
   Example: "ערכת ציפורניים ביתית עם מקדחה CE — הסטודיו הביתי"

2. **Meta description:** 150–160 chars, Hebrew, includes main keyword + trust signal
   Example: "ערכת ציפורניים ביתית מלאה עם מקדחה ומנורת UV — CE מאושר, עובד בישראל, משלוח לכל הארץ. ₪389."

3. **Image alt text:** All images need Hebrew alt text describing the image
   Example: alt="ערכת הסטודיו הביתי — מקדחת ציפורניים CE ומנורת UV 48W"

4. **Shopify blog:** Create 2–3 Hebrew blog posts at launch targeting long-tail keywords
   - "איך מתחילים לעשות ציפורניים ג'ל בבית" → targets ICP 1
   - "מה ההבדל בין מנורה 36W ל-48W" → educational, high intent

---

*Shopify setup guide developed using /shopify skill | June 2026 | Israel home nail tools dropshipping store*
