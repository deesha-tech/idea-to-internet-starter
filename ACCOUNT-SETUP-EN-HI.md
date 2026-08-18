# Account और Laptop Readiness Guide — English + हिन्दी

यह guide **Deesha Idea to Internet SkillLab** के लिए है। Coding experience की
जरूरत नहीं है। 30–45 minutes रखें और steps क्रम से पूरे करें।

> अपना email और phone इस्तेमाल करें। Password, OTP, recovery code या payment
> information trainer, GPT, Claude या Codex के साथ कभी share न करें।

## शुरू करने से पहले / What you need

- Windows 10/11 या macOS 12+ वाला laptop
- Chrome या कोई modern browser
- ऐसा email inbox जो अभी खोल सकें
- Verification के लिए mobile phone
- Stable internet

## 1 — ChatGPT account बनाएँ या check करें

1. Official [ChatGPT sign-in page](https://chatgpt.com/auth/login) खोलें।
2. **Continue with Google**, **Apple**, **phone** या email चुनें।
3. Screen पर आया email/phone verification पूरा करें।
4. Sign in करके new chat में `Hello` भेजें।

✅ **Ready when / तैयार कब:** ChatGPT आपके message का reply देता है।

Deesha team के कहे बिना नया subscription न खरीदें।

## 2 — GitHub account बनाएँ और verify करें

GitHub आपकी website files का सुरक्षित online घर है।

1. [Free GitHub account बनाएँ](https://github.com/signup) link खोलें।
2. आसान तरीका: **Continue with Google**। आप email भी इस्तेमाल कर सकते हैं।
3. याद रहने वाला professional username चुनें।
4. Screen पर दिया verification पूरा करें।
5. GitHub का email खोलकर अपना email address verify करें।
6. वापस [GitHub](https://github.com/) पर sign in करें।
7. Profile picture चुनें और अपना username दिखाई देने की पुष्टि करें।

✅ **Ready when / तैयार कब:** GitHub में sign in है और email verified है।
Repository बनाने जैसे basic कामों के लिए verified email जरूरी है।

Workshop के बाद GitHub security settings में two-factor authentication चालू
करना अच्छा रहेगा।

## 3 — GitHub से Vercel account बनाएँ

Vercel आपकी website files को live preview link में बदलेगा।

1. [Vercel sign-up](https://vercel.com/signup) खोलें।
2. **Continue with GitHub** चुनें।
3. GitHub permission माँगे तो screen पढ़ें और Vercel को authorise करें।
4. Welcome questions पूरे करें। Trainer अलग न कहे तो free personal option चुनें।
5. [Vercel dashboard](https://vercel.com/dashboard) खोलें।

✅ **Ready when / तैयार कब:** Vercel dashboard खुलता है और GitHub identity
दिखाई देती है।

## 4 — Visual Studio Code install करें

VS Code वह workspace है जहाँ website files और AI builder साथ में होंगे।

1. Official [VS Code download page](https://code.visualstudio.com/download) खोलें।
2. **Windows:** अपने computer के लिए **User Installer** चुनें। अधिकतर laptops
   x64 होते हैं। Installer खोलें और default options रखें।
3. **Mac:** chip का पता न हो तो **Universal .dmg** चुनें। File खोलें और Visual
   Studio Code को Applications में drag करें।
4. VS Code खोलें।

✅ **Ready when / तैयार कब:** VS Code की Welcome screen दिखाई देती है।

## 5 — Node.js LTS install करें

Node.js वह engine है जो website को laptop पर चलाता है।

1. Official [Node.js download page](https://nodejs.org/en/download) खोलें।
2. **LTS** वाली version चुनें; **Current** न चुनें।
3. Windows या macOS के लिए normal installer चुनें।
4. Installer खोलकर default options स्वीकार करें।
5. Installation के बाद VS Code बंद करके फिर खोलें।
6. VS Code में **Terminal → New Terminal** चुनें।
7. ये commands एक-एक करके चलाएँ:

```text
node -v
npm -v
```

✅ **Ready when / तैयार कब:** दोनों commands version number दिखाते हैं। Exact
version जरूरी नहीं है। “not found” या “not recognised” नहीं दिखना चाहिए।

## 6 — एक AI builder चुनकर install करें

Trainer द्वारा confirm किया हुआ **एक** option install करें। दोनों जरूरी नहीं।

### Option A — Codex

1. [Codex — OpenAI’s coding agent](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt) खोलें।
2. **Install** चुनें और VS Code खुलने दें।
3. VS Code में Codex panel खोलें और ChatGPT account से sign in करें।
4. Empty folder खोलकर भेजें: `Please reply: Codex is ready.`

✅ **Ready when:** Codex VS Code में reply देता है।

### Option B — Claude Code

1. [Claude Code for VS Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) खोलें।
2. **Install** चुनें और VS Code खुलने दें।
3. Claude Code panel खोलें और sign-in steps पूरे करें।
4. Empty folder खोलकर भेजें: `Please reply: Claude is ready.`

✅ **Ready when:** Claude VS Code में reply देता है।

Provider को eligible account या subscription की जरूरत हो सकती है। Workshop
team के कहे बिना subscription न खरीदें।

## 7 — VS Code में GitHub sign-in test करें

1. VS Code के bottom-left में **Accounts** icon चुनें।
2. दिखाई दे तो **Sign in with GitHub** चुनें।
3. Browser खुलने पर sign-in approve करें।
4. वापस VS Code में आएँ।

✅ **Ready when / तैयार कब:** Accounts icon के नीचे GitHub account दिखता है।

## 8 — Final readiness checklist / अंतिम जाँच

- [ ] ChatGPT खुलता है और reply देता है
- [ ] GitHub खुलता है और email verified है
- [ ] GitHub से Vercel dashboard खुलता है
- [ ] VS Code खुलता है
- [ ] `node -v` version दिखाता है
- [ ] `npm -v` version दिखाता है
- [ ] Codex **या** Claude VS Code में reply देता है
- [ ] VS Code में GitHub sign-in है
- [ ] Trainer की दी हुई Deesha GPT link खुलती है

सभी boxes tick होने पर आप workshop-ready हैं। VS Code Welcome screen और AI
builder panel का एक screenshot approved workshop help channel पर भेजें। उसमें
password या private code दिखाई नहीं देना चाहिए।

## कुछ काम न करे तो / If something fails

सब कुछ दोबारा install न करें। Exact error का photo/screenshot लें और बताएँ कि
कौन-सा numbered step fail हुआ। केवल यही जानकारी workshop support team को भेजें।
